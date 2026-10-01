/**
 * Verifies that every lesson page actually renders — run with: npm run check:pages
 *
 * Imports each registered demo through Vite (so JSX and CSS imports work) and
 * renders it, so a demo with a broken import, a bad hook call or a render-time
 * throw fails here instead of in the browser. Also compares the registry against
 * the curriculum in both directions. Translation coverage is a separate
 * concern, checked by `check:i18n`.
 */
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

const CONCEPTS = path.resolve('src/concepts')
const LANGUAGES = ['en', 'my']

/** Sections built so far — keeps `check` honest as the curriculum fills in. */
const BUILT_SECTIONS = [
  [
    'fundamentals',
    [
      'ComponentsDemo',
      'JsxDemo',
      'PropsDemo',
      'ChildrenDemo',
      'EventsDemo',
      'ConditionalRenderingDemo',
    ],
  ],
  [
    'state',
    [
      'UseStateDemo',
      'MultipleStateDemo',
      'ObjectStateDemo',
      'ArrayStateDemo',
      'FunctionalUpdateDemo',
    ],
  ],
]

const problems = []

const server = await createServer({
  logLevel: 'error',
  server: { middlewareMode: true },
  appType: 'custom',
})

try {
  // Loading the i18n config through Vite gives react-i18next the same instance
  // the demos will see, instead of the "NO_I18NEXT_INSTANCE" warning.
  const { default: i18n } = await server.ssrLoadModule('src/i18n/config.js')
  const { default: registry } = await server.ssrLoadModule('src/concepts/registry.js')
  const { allTopics } = await server.ssrLoadModule('src/data/curriculum.js')

  const registered = Object.keys(registry)
  const topicComponents = new Set(allTopics.map((topic) => topic.component))

  // Which demo files exist on disk.
  const walk = async (dir) => {
    const entries = await readdir(dir, { withFileTypes: true })
    const nested = await Promise.all(
      entries.map(async (entry) => {
        const full = path.join(dir, entry.name)
        if (entry.isDirectory()) return walk(full)
        return entry.name.endsWith('.jsx') ? [entry.name] : []
      }),
    )
    return nested.flat()
  }
  const onDisk = new Set(await walk(CONCEPTS))

  for (const name of registered) {
    if (!topicComponents.has(name)) {
      problems.push(`registry has "${name}" but no curriculum topic uses it`)
    }
  }

  for (const topic of allTopics) {
    const { component, id } = topic
    const isRegistered = registered.includes(component)

    if (isRegistered) continue
    if (onDisk.has(`${component}.jsx`)) {
      problems.push(`${component}.jsx (${id}) exists but is not registered`)
    }
  }

  for (const [sectionId, expected] of BUILT_SECTIONS) {
    const missing = expected.filter((name) => !registered.includes(name))
    if (missing.length > 0) {
      problems.push(`section "${sectionId}" is incomplete, not registered: ${missing.join(', ')}`)
    }
  }

  // Render every registered demo once, in both languages, so a demo that throws
  // only on the Burmese path still fails here.
  for (const name of registered) {
    try {
      const module = await registry[name]()
      const Component = module.default

      if (typeof Component !== 'function') {
        problems.push(`${name} has no default-exported component`)
        continue
      }

      const sizes = []
      for (const language of LANGUAGES) {
        await i18n.changeLanguage(language)
        const html = renderToStaticMarkup(createElement(Component))
        if (html.length < 50) {
          problems.push(`${name} rendered almost nothing in ${language} (${html.length} chars)`)
        }
        sizes.push(`${language} ${String(html.length).padStart(6)}`)
      }

      console.log(`  \u2713 ${name.padEnd(28)} ${sizes.join(' \u00b7 ')}`)
    } catch (error) {
      problems.push(`${name} failed to render: ${error.message}`)
    }
  }

  await i18n.changeLanguage('en')

  console.log('')
  if (problems.length > 0) {
    console.error(`✗ ${problems.length} problem(s):\n`)
    for (const problem of problems) console.error(`  - ${problem}`)
    process.exitCode = 1
  } else {
    console.log(`✓ ${registered.length} demos registered and rendering`)
    console.log(
      `  ${allTopics.length - registered.length} of ${allTopics.length} topics still show the placeholder`,
    )
  }
} finally {
  await server.close()
}