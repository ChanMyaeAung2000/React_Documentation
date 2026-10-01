/**
 * Translation integrity check — run with: npm run check:i18n
 *
 * Five ways an i18n layer rots, all caught here:
 *   1. a component calls t('some.key') that no locale defines  → broken build
 *   2. Burmese is missing a key English has                      → silent English fallback
 *   3. a key exists in no component                             → dead weight
 *   4. a demo hardcodes its copy instead of reading its namespace
 *   5. a curriculum overlay has drifted from the data it mirrors
 *
 * Keys are discovered by scanning source rather than by hand-maintaining a list,
 * so adding a demo cannot skip this check.
 *
 * The resource objects are built by importing `buildResources` from the app
 * rather than re-walking the data here: a second copy of that walk is exactly
 * the kind of thing that drifts and then reports on itself.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { allTopics, curriculum } from '../src/data/curriculum.js'
import { lessons } from '../src/data/lessons.js'
import { buildResources } from '../src/i18n/config.js'
import curriculumMy from '../src/i18n/translations/curriculum.my.js'
import lessonsMy from '../src/i18n/translations/lessons.my.js'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const SRC = join(ROOT, 'src')

function isDynamic(key) {
  return (
    dynamicNamespaces.some((prefix) => key.startsWith(prefix)) ||
    dynamic.some((prefix) => key.startsWith(prefix))
  )
}

/** Keys built at runtime from data, so they cannot be found by scanning. */
function dynamicKeyPrefixes() {
  const prefixes = []
  for (const section of curriculum) {
    prefixes.push(`sections.${section.id}.`)
    for (const topic of section.topics) {
      prefixes.push(`topics.${section.id}.${topic.id}.`)
      if (lessons[`${section.id}/${topic.id}`]) prefixes.push(`lessons.${section.id}/${topic.id}.`)
    }
  }
  return prefixes
}

/** Every leaf key of a resource object, flattened with dots. Arrays become `a.0`, `a.1`, … */
function flatten(object, prefix = '', out = new Map()) {
  if (typeof object === 'string' || typeof object === 'number') {
    out.set(prefix, object)
    return out
  }
  if (Array.isArray(object)) {
    object.forEach((item, index) => flatten(item, `${prefix}.${index}`, out))
    return out
  }
  for (const [key, value] of Object.entries(object)) {
    flatten(value, prefix ? `${prefix}.${key}` : key, out)
  }
  return out
}

function walk(directory) {
  const files = []
  for (const entry of readdirSync(directory)) {
    const full = join(directory, entry)
    if (statSync(full).isDirectory()) files.push(...walk(full))
    else if (/\.jsx?$/.test(entry)) files.push(full)
  }
  return files
}

/**
 * Top-level translation namespaces. A quoted string in a component that starts
 * with one of these is a translation key.
 *
 * Scanning by namespace rather than by `t(` call catches keys chosen at runtime —
 * `t(dark ? 'a.b' : 'a.c')` reads identically to `t('a.b')` but is invisible to a
 * call-shaped regex, and missing one of those is exactly the bug this script
 * exists to catch.
 */
const NAMESPACES = [
  'app',
  'lang',
  'header',
  'sidebar',
  'home',
  'concept',
  'demo',
  'common',
  'demos',
  'sections',
  'topics',
  'lessons',
  'levels',
]

/** Namespaces whose keys are built from data or a variable, so no literal exists. */
const dynamicNamespaces = ['levels.'] // <Badge level="Beginner" /> → t(`levels.${level}`)

const KEY = new RegExp(
  `'((?:${NAMESPACES.join('|')})\\.[^'\\n$]*)'`,
  'g',
)

const problems = []
const usedKeys = new Set()

// `buildResources` returns i18next bundles ({ lng: { translation } }); the checks
// below work on the translation objects themselves.
const resources = buildResources()
const en = resources.en.translation
const my = resources.my.translation

const enKeys = flatten(en)
const myKeys = flatten(my)
const dynamic = dynamicKeyPrefixes()

// --- 1. every key in source resolves in both locales ----------------------------
for (const file of walk(SRC)) {
  const source = readFileSync(file, 'utf8')
  const rel = relative(ROOT, file)

  for (const [, key] of source.matchAll(KEY)) {
    usedKeys.add(key)
    if (isDynamic(key)) continue

    if (!enKeys.has(key)) problems.push(`${rel}: '${key}' is not defined in en`)
    if (!myKeys.has(key)) problems.push(`${rel}: '${key}' is not defined in my`)
  }
}

// --- 2. every Burmese overlay entry exists in English ---------------------------
for (const [key, value] of myKeys) {
  if (!enKeys.has(key)) {
    problems.push(`my has "${key}" but en does not`)
    continue
  }
  if (typeof value !== 'string' || value.trim() === '') {
    problems.push(`my["${key}"] is empty`)
  }
  // Flow steps and key-point arrays must stay the same length as English, or the
  // "How It Works" chain and the takeaway list will change shape.
  if (key.endsWith(`.flow')`)) continue
}

// --- 3. no orphaned demo keys ---------------------------------------------------
for (const key of enKeys.keys()) {
  if (isDynamic(key)) continue
  if (!usedKeys.has(key)) problems.push(`en key "${key}" is never used by a component`)
}
for (const key of myKeys.keys()) {
  if (!enKeys.has(key)) continue
  if (isDynamic(key)) continue
  if (!usedKeys.has(key)) problems.push(`my key "${key}" is never used by a component`)
}

// --- 5. every demo component is actually wired to i18n -------------------------
// Each demo owns a namespace named after its component. If a demo file never
// references its own namespace, its copy is hardcoded — which renders fine in
// English and silently stays English in Burmese.
//
// The list comes from the curriculum, not the filesystem: a demo is one that a
// topic names, which also skips the shell files sitting in concepts/.
const seen = new Set()

for (const topic of allTopics) {
  const name = topic.component
  if (seen.has(name)) continue
  seen.add(name)

  const file = join(SRC, 'concepts', topic.section.id, `${name}.jsx`)
  if (!existsSync(file)) continue // not built yet, DemoPlaceholder covers it

  const source = readFileSync(file, 'utf8')
  const rel = relative(ROOT, file)
  const namespace = `demos.${name}.`

  if (!source.includes('useTranslation')) {
    problems.push(`${rel} never calls useTranslation()`)
    continue
  }
  if (!source.includes(namespace)) {
    problems.push(
      `${rel} references no '${namespace}' key — its copy is probably hardcoded`,
    )
  }
}

// --- 4. the Burmese overlays cover all of the curriculum ------------------------
for (const section of curriculum) {
  const mySection = curriculumMy.sections?.[section.id]
  if (!mySection) {
    problems.push(`curriculum.my.js is missing section "${section.id}"`)
  } else {
    for (const field of ['title', 'subtitle']) {
      if (!mySection[field]) problems.push(`curriculum.my.js: ${section.id}.${field} is missing`)
    }
  }

  for (const topic of section.topics) {
    const myTopic = curriculumMy.topics?.[section.id]?.[topic.id]
    if (!myTopic) {
      problems.push(`curriculum.my.js is missing topic "${section.id}/${topic.id}"`)
      continue
    }
    for (const field of ['title', 'description']) {
      if (!myTopic[field]) {
        problems.push(`curriculum.my.js: ${section.id}/${topic.id}.${field} is missing`)
      }
    }

    const lesson = lessons[`${section.id}/${topic.id}`]
    if (!lesson) continue

    const myLesson = lessonsMy[`${section.id}/${topic.id}`]
    if (!myLesson) {
      problems.push(`lessons.my.js is missing "${section.id}/${topic.id}"`)
      continue
    }
    if (!myLesson.explanation) {
      problems.push(`lessons.my.js: ${section.id}/${topic.id}.explanation is missing`)
    }
    // Flow steps and key points must match in length, or the "How It Works"
    // chain and the takeaway list change shape when the language flips.
    if (myLesson.flow?.length !== lesson.flow.length) {
      problems.push(
        `lessons.my.js: ${section.id}/${topic.id}.flow has ${myLesson.flow?.length ?? 0} steps, English has ${lesson.flow.length}`,
      )
    }
    if (myLesson.keyPoints?.length !== lesson.keyPoints.length) {
      problems.push(
        `lessons.my.js: ${section.id}/${topic.id}.keyPoints has ${myLesson.keyPoints?.length ?? 0} points, English has ${lesson.keyPoints.length}`,
      )
    }

    // A feature is keyed by id on purpose, so this has to compare against the
    // ids the English array declares rather than against its length — a wrong
    // id would otherwise pass a count check and put Burmese prose on the wrong
    // example file.
    if (lesson.features) {
      const myFeatures = myLesson.features ?? {}

      for (const feature of lesson.features) {
        const mine = myFeatures[feature.id]

        if (!mine) {
          problems.push(`lessons.my.js: ${section.id}/${topic.id} is missing feature "${feature.id}"`)
          continue
        }
        for (const field of ['title', 'body']) {
          if (!mine[field]?.trim()) {
            problems.push(
              `lessons.my.js: ${section.id}/${topic.id} feature "${feature.id}".${field} is empty`,
            )
          }
        }
        if (feature.note && !mine.note?.trim()) {
          problems.push(
            `lessons.my.js: ${section.id}/${topic.id} feature "${feature.id}".note is empty`,
          )
        }
      }

      for (const id of Object.keys(myFeatures)) {
        if (!lesson.features.some((feature) => feature.id === id)) {
          problems.push(
            `lessons.my.js: ${section.id}/${topic.id} has feature "${id}", which no longer exists in English`,
          )
        }
      }
    }
  }
}

// --- report ---------------------------------------------------------------------
const demoKeys = [...enKeys.keys()].filter((key) => key.startsWith('demos.'))

const featureCount = Object.values(lessons).reduce(
  (total, lesson) => total + (lesson.features?.length ?? 0),
  0,
)

if (problems.length > 0) {
  console.error(`i18n check failed — ${problems.length} problem(s):\n`)
  for (const problem of problems) console.error(`  ✗ ${problem}`)
  console.error('')
  process.exit(1)
}

console.log(
  `i18n check passed — ${enKeys.size} keys × 2 languages, ${demoKeys.length} demo keys, ${featureCount} features, ${usedKeys.size} keys referenced`,
)