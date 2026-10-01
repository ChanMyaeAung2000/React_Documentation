/**
 * Curriculum integrity check — run with: npm run check:data
 *
 * Fails loudly when the curriculum and the lesson content drift apart, so a new
 * topic can never end up with a missing explanation, source block or demo name.
 */
import { allTopics, curriculum, findTopic, getAdjacentTopics } from '../src/data/curriculum.js'
import { getLesson, lessons } from '../src/data/lessons.js'

const problems = []
const LEVELS = ['Beginner', 'Intermediate', 'Advanced']

const sectionIds = new Set()
const topicKeys = new Set()
const componentNames = new Set()

for (const section of curriculum) {
  if (sectionIds.has(section.id)) problems.push(`duplicate section id: ${section.id}`)
  sectionIds.add(section.id)

  if (!section.subtitle) problems.push(`section ${section.id} has no subtitle`)
  if (!section.topics?.length) problems.push(`section ${section.id} has no topics`)

  for (const topic of section.topics) {
    const key = `${section.id}/${topic.id}`

    if (topicKeys.has(key)) problems.push(`duplicate topic: ${key}`)
    topicKeys.add(key)

    if (componentNames.has(topic.component)) {
      problems.push(`duplicate demo component: ${topic.component} (${key})`)
    }
    componentNames.add(topic.component)

    for (const field of ['number', 'title', 'description', 'component', 'level']) {
      if (!topic[field]) problems.push(`${key} is missing "${field}"`)
    }
    if (!LEVELS.includes(topic.level)) problems.push(`${key} has an unknown level: ${topic.level}`)

    const lesson = getLesson(section.id, topic.id)
    if (!lesson) {
      problems.push(`${key} has no entry in lessons.js`)
      continue
    }
    for (const field of ['explanation', 'flow', 'sourceCode', 'keyPoints']) {
      if (!lesson[field]?.length) problems.push(`${key} lesson is missing "${field}"`)
    }

    // Sub-features are rendered by id, so a duplicate or blank id is not
    // cosmetic: it merges two cards into one React element and drops content.
    if (lesson.features) {
      const seen = new Set()

      for (const feature of lesson.features) {
        if (!feature.id) {
          problems.push(`${key} has a feature with no id`)
          continue
        }
        if (seen.has(feature.id)) problems.push(`${key} has a duplicate feature id: ${feature.id}`)
        seen.add(feature.id)

        for (const field of ['title', 'body', 'filename', 'code']) {
          if (!feature[field]?.length) {
            problems.push(`${key} feature "${feature.id}" is missing "${field}"`)
          }
        }
        if (feature.note !== undefined && !feature.note.length) {
          problems.push(`${key} feature "${feature.id}" has an empty note — omit it instead`)
        }
      }
    }
  }
}

// Lessons that no longer match a topic are dead weight.
for (const key of Object.keys(lessons)) {
  if (!topicKeys.has(key)) problems.push(`lessons.js has an orphan entry: ${key}`)
}

// Route helpers must round-trip for every topic.
// allTopics entries are the topic fields spread out, plus a `section` reference.
for (const entry of allTopics) {
  const { section, id } = entry
  const key = `${section.id}/${id}`

  const found = findTopic(section.id, id)
  if (!found) problems.push(`findTopic missed ${key}`)
  else if (found.section.id !== section.id || found.topic.id !== id) {
    problems.push(`findTopic returned the wrong topic for ${key}`)
  }

  const { previous, next } = getAdjacentTopics(section.id, id)
  if (!previous && !next) problems.push(`${key} has no neighbours`)
}

const levels = LEVELS.map((level) => `${level}: ${allTopics.filter((t) => t.level === level).length}`)

if (problems.length > 0) {
  console.error(`✗ ${problems.length} problem(s) found:\n`)
  for (const problem of problems) console.error(`  - ${problem}`)
  process.exit(1)
}

console.log(`✓ ${curriculum.length} sections, ${allTopics.length} topics, all with lesson content`)
console.log(`  ${componentNames.size} unique demo component names`)
console.log(`  levels — ${levels.join(' · ')}`)
