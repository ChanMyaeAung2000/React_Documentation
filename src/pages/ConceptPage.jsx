import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Badge from '../components/ui/Badge.jsx'
import Card from '../components/ui/Card.jsx'
import CodeBlock from '../components/ui/CodeBlock.jsx'
import { findTopic, getAdjacentTopics } from '../data/curriculum.js'
import { getLesson } from '../data/lessons.js'
import DemoOutlet from '../concepts/DemoOutlet.jsx'
import { useCurriculumText, useLessonText } from '../hooks/useCurriculumText.js'

/** The "How It Works" chain: step one -> step two -> step three. */
function Flow({ steps }) {
  return (
    <ol className="flex flex-wrap items-center gap-2">
      {steps.map((step, index) => (
        <li key={`${index}-${step}`} className="flex items-center gap-2">
          {index > 0 && (
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">
              →
            </span>
          )}
          <span className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200">
            {step}
          </span>
        </li>
      ))}
    </ol>
  )
}

/**
 * One sub-feature: the prose stays visible, the example file collapses.
 *
 * A topic can carry seven of these. Inlining every snippet would bury the
 * sentences that actually teach the idea under a wall of code, so the body is
 * the part you read and the snippet is the part you open when you want it.
 *
 * The disclosure is a plain <details> — keyboard accessible, and it needs no
 * state of its own.
 */
function Feature({ feature, showCode }) {
  return (
    <Card title={feature.title}>
      <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
        {feature.body}
      </p>

      {feature.note && (
        <p className="mt-3 rounded-lg border border-amber-300/60 bg-amber-50 px-3 py-2 text-sm text-amber-900 dark:border-amber-700/50 dark:bg-amber-950/40 dark:text-amber-200">
          {feature.note}
        </p>
      )}

      <details className="mt-3">
        {/* The filename goes through the label rather than being appended to it,
            because Burmese puts the object before the verb. */}
        <summary className="cursor-pointer font-mono text-sm font-medium text-cyan-700 hover:underline dark:text-cyan-400">
          {showCode}
        </summary>
        <CodeBlock
          filename={feature.filename}
          code={feature.code}
          className="mt-3"
        />
      </details>
    </Card>
  )
}

/**
 * ConceptPage — the lesson page described in spec section 19.
 * The route is /:sectionId/:topicId and every block below is data driven.
 */
export default function ConceptPage() {
  const { sectionId, topicId } = useParams()
  const { t } = useTranslation()
  const { sectionTitle, topicTitle, topicDescription } = useCurriculumText()
  const { explanation, flow, keyPoints, features } = useLessonText()
  const match = findTopic(sectionId, topicId)

  const lesson = getLesson(sectionId, topicId)

  if (!match) {
    return (
      <div className="mx-auto max-w-3xl p-6">
        <Card title={t('concept.notFoundTitle')}>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t('concept.notFoundBody', { section: sectionId, topic: topicId })}
          </p>
          <Link
            to="/"
            className="mt-3 inline-block text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-400"
          >
            {t('concept.backHome')}
          </Link>
        </Card>
      </div>
    )
  }

  const { section, topic } = match
  const { previous, next } = getAdjacentTopics(sectionId, topicId)

  return (
    <article className="mx-auto max-w-3xl space-y-6 p-4 sm:p-6">
      <nav aria-label={t('concept.breadcrumbLabel')} className="text-sm text-slate-500 dark:text-slate-400">
        <Link to="/" className="hover:text-cyan-600 dark:hover:text-cyan-400">
          {t('concept.home')}
        </Link>
        <span className="mx-1.5 opacity-50">/</span>
        <span>{sectionTitle(section.id)}</span>
      </nav>

      <header>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="font-mono text-cyan-600 dark:text-cyan-400">{topic.number}</span>{' '}
            {topicTitle(section.id, topic.id)}
          </h1>
          <Badge level={topic.level} />
        </div>
        <p className="mt-2 text-slate-600 dark:text-slate-300">{topicDescription(section.id, topic.id)}</p>
      </header>

      {lesson?.explanation && (
        <section>
          <h2 className="mb-2 text-sm font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            {t('concept.explanation')}
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
            {explanation(sectionId, topicId)}
          </p>
        </section>
      )}

      <section>
        <h2 className="mb-2 text-sm font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
          {t('concept.demo')}
        </h2>
        <DemoOutlet componentName={topic.component} />
      </section>

      {lesson?.features && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            {t('concept.features')}
          </h2>
          {features(sectionId, topicId).map((feature) => (
            <Feature
              key={feature.id}
              feature={feature}
              showCode={t('concept.showCode', { file: feature.filename })}
            />
          ))}
        </section>
      )}

      {lesson?.flow && (
        <section>
          <h2 className="mb-2 text-sm font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            {t('concept.howItWorks')}
          </h2>
          <Flow steps={flow(sectionId, topicId)} />
        </section>
      )}

      {lesson?.sourceCode && (
        <section>
          <h2 className="mb-2 text-sm font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            {t('concept.sourceCode')}
          </h2>
          <CodeBlock filename={`${topic.component}.jsx`} code={lesson.sourceCode} />
        </section>
      )}

      {lesson?.keyPoints && (
        <section>
          <h2 className="mb-2 text-sm font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            {t('concept.keyPoints')}
          </h2>
          <ul className="space-y-2">
            {keyPoints(sectionId, topicId).map((point) => (
              <li
                key={point}
                className="flex gap-2 text-[15px] text-slate-700 dark:text-slate-300"
              >
                <span aria-hidden="true" className="mt-0.5 text-emerald-500">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
        </section>
      )}

      <nav aria-label={t('concept.navLabel')} className="flex flex-wrap gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
        {previous ? (
          <Link
            to={previous.path}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm transition hover:border-cyan-500 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900"
          >
            <span className="block text-xs text-slate-500">{t('concept.previous')}</span>
            {previous.number} {topicTitle(previous.sectionId, previous.id)}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            to={next.path}
            className="ml-auto rounded-lg border border-slate-200 px-3 py-2 text-right text-sm transition hover:border-cyan-500 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900"
          >
            <span className="block text-xs text-slate-500">{t('concept.next')}</span>
            {next.number} {topicTitle(next.sectionId, next.id)}
          </Link>
        )}
      </nav>
    </article>
  )
}
