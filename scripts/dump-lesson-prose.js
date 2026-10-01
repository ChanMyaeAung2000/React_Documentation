/**
 * Dev helper — print the translatable lesson prose as JSON.
 * Run: node scripts/dump-lesson-prose.js
 * Not part of `npm run check`; it exists so the Burmese overlay can be written
 * against the real English text rather than from memory.
 */
import { curriculum } from '../src/data/curriculum.js'
import { getLesson } from '../src/data/lessons.js'

const out = {}
for (const section of curriculum) {
  for (const topic of section.topics) {
    const lesson = getLesson(section.id, topic.id)
    if (!lesson) continue
    out[`${section.id}/${topic.id}`] = {
      explanation: lesson.explanation,
      flow: lesson.flow,
      keyPoints: lesson.keyPoints,
    }
  }
}

process.stdout.write(`${JSON.stringify(out, null, 2)}\n`)
