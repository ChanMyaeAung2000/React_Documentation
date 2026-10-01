import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { curriculum } from '../data/curriculum.js'
import { lessons } from '../data/lessons.js'
import chromeEn from './locales/en.js'
import chromeMy from './locales/my.js'
import { demosEn, demosMy } from './locales/demos/index.js'
import curriculumMy from './translations/curriculum.my.js'
import lessonsMy from './translations/lessons.my.js'

export const STORAGE_KEY = 'rll-language'

/**
 * `name` is an endonym: each language writes its own name in its own script,
 * whichever language the reader is currently in. That makes it data rather than
 * a translatable string, so it lives here instead of in the locale files.
 */
export const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'my', name: 'မြန်မာ' },
]

export const FALLBACK_LANGUAGE = 'en'

/**
 * Sub-features are the depth of a lesson: one block of prose plus one example
 * file, repeated per idea.
 *
 * `lesson.features` is an array because its order is the order the page renders.
 * The Burmese overlay is an object keyed by the feature `id` instead, so
 * reordering or rewriting a feature cannot quietly attach translated prose to
 * the wrong file.
 *
 * `code` and `filename` are shared verbatim — a snippet does not become Burmese
 * when you switch language.
 *
 * `mine` is the overlay for one locale, so English is built by calling this with
 * no overlay at all. A missing translation falls back field by field rather than
 * dropping the feature, which keeps the page renderable while `npm run check:i18n`
 * is what makes the omission loud.
 */
function buildFeatures(features, mine = {}) {
  return features.map((feature) => ({
    id: feature.id,
    filename: feature.filename,
    code: feature.code,
    title: mine[feature.id]?.title ?? feature.title,
    body: mine[feature.id]?.body ?? feature.body,
    // `note` is optional, so it is only added when English has one. An absent
    // note must stay absent rather than becoming an empty string.
    ...(feature.note ? { note: mine[feature.id]?.note ?? feature.note } : {}),
  }))
}

/**
 * Curricular display strings live in `src/data/`, not in a locale file — that
 * data is the English source of truth and the sidebar, search and lesson page
 * all read from it.
 *
 * Rather than duplicate that English text into `locales/en.js`, this walks the
 * data once at startup and registers it under translation keys. Burmese lives
 * in `translations/*.my.js` as an overlay of the same shape.
 *
 * The result is one mechanism — `t('sections.state.title')` — whether the
 * string came from the shell or from the curriculum.
 */
export function buildResources() {
  const en = { ...chromeEn, demos: demosEn, sections: {}, topics: {}, lessons: {} }
  const my = { ...chromeMy, demos: demosMy, sections: {}, topics: {}, lessons: {} }

  for (const section of curriculum) {
    en.sections[section.id] = {
      title: section.title,
      subtitle: section.subtitle,
    }
    my.sections[section.id] = curriculumMy.sections?.[section.id] ?? {}

    for (const topic of section.topics) {
      en.topics[section.id] ??= {}
      en.topics[section.id][topic.id] = {
        title: topic.title,
        description: topic.description,
      }

      const myTopic = curriculumMy.topics?.[section.id]?.[topic.id]
      if (myTopic) {
        my.topics[section.id] ??= {}
        my.topics[section.id][topic.id] = myTopic
      }

      const lesson = lessons[`${section.id}/${topic.id}`]
      if (!lesson) continue

      const key = `${section.id}/${topic.id}`
      const myLesson = lessonsMy[key] ?? {}

      en.lessons[key] = {
        explanation: lesson.explanation,
        flow: lesson.flow,
        keyPoints: lesson.keyPoints,
      }
      my.lessons[key] = { ...myLesson }

      if (lesson.features) {
        en.lessons[key].features = buildFeatures(lesson.features)
        my.lessons[key].features = buildFeatures(lesson.features, myLesson.features ?? {})
      }
    }
  }

  return {
    en: { translation: en },
    my: { translation: my },
  }
}

export function readInitialLanguage() {
  if (typeof window === 'undefined') return FALLBACK_LANGUAGE

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (LANGUAGES.some((language) => language.code === stored)) return stored

  return FALLBACK_LANGUAGE
}

/**
 * Writing the choice back out.
 *
 * This lives beside `readInitialLanguage` rather than in a React provider on
 * purpose. i18next already holds the active language, so a context that mirrored
 * it would be a second source of truth that could drift — and it would still
 * need to remember to write `<html lang>` and localStorage itself.
 *
 * `html lang` is not cosmetic: it is what a screen reader announces, and what
 * the Burmese font stack in index.css keys off.
 */
function persistLanguage(language) {
  if (typeof document === 'undefined') return
  document.documentElement.lang = language

  if (typeof window !== 'undefined') window.localStorage.setItem(STORAGE_KEY, language)
}

i18n.use(initReactI18next).init({
  resources: buildResources(),
  lng: readInitialLanguage(),
  fallbackLng: FALLBACK_LANGUAGE,
  // Content strings carry literal React identifiers (`setItems(prev => [...prev])`)
  // and typographic quotes, so interpolation escaping is left off.
  interpolation: { escapeValue: false },
  returnNull: false,
})

// `languageChanged` does not fire for the initial language, so the first write
// happens explicitly and every later switch flows through the listener.
i18n.on('languageChanged', persistLanguage)
persistLanguage(i18n.resolvedLanguage ?? i18n.language)

export default i18n