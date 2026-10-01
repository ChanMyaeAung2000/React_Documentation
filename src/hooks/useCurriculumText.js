import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * Translators for the two data-driven parts of the app.
 *
 * Curriculum metadata and lesson prose are stored in `src/data/` and registered
 * as translation keys by `src/i18n/config.js`, so components should not build
 * those key strings by hand. These helpers keep the key shape in one place.
 */
export function useCurriculumText() {
  const { t } = useTranslation()

  const sectionTitle = useCallback((sectionId) => t(`sections.${sectionId}.title`), [t])
  const sectionSubtitle = useCallback((sectionId) => t(`sections.${sectionId}.subtitle`), [t])
  const topicTitle = useCallback(
    (sectionId, topicId) => t(`topics.${sectionId}.${topicId}.title`),
    [t],
  )
  const topicDescription = useCallback(
    (sectionId, topicId) => t(`topics.${sectionId}.${topicId}.description`),
    [t],
  )

  return { sectionTitle, sectionSubtitle, topicTitle, topicDescription }
}

export function useLessonText() {
  const { t } = useTranslation()

  // `returnObjects` is required: explanations are strings but `flow` and
  // `keyPoints` are arrays, and i18next refuses to return those from t() by default.
  const explanation = useCallback(
    (sectionId, topicId) => t(`lessons.${sectionId}/${topicId}.explanation`),
    [t],
  )
  const flow = useCallback(
    (sectionId, topicId) =>
      t(`lessons.${sectionId}/${topicId}.flow`, { returnObjects: true }) ?? [],
    [t],
  )
  const keyPoints = useCallback(
    (sectionId, topicId) =>
      t(`lessons.${sectionId}/${topicId}.keyPoints`, { returnObjects: true }) ?? [],
    [t],
  )

  /**
   * Sub-features come back as a plain array of plain objects — only `title`,
   * `body` and `note` are translated, while `id`, `filename` and `code` are
   * passed through untouched. Resolving them as objects rather than as strings
   * is what lets a feature carry a snippet next to its prose.
   */
  const features = useCallback(
    (sectionId, topicId) => {
      const value = t(`lessons.${sectionId}/${topicId}.features`, { returnObjects: true })
      // A topic with no features resolves to the key string, not an array, so
      // the shape is checked rather than assumed.
      return Array.isArray(value) ? value : []
    },
    [t],
  )

  return { explanation, flow, keyPoints, features }
}