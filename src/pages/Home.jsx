import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Badge from '../components/ui/Badge.jsx'
import { allTopics, curriculum, topicCount, topicPath } from '../data/curriculum.js'
import { useCurriculumText } from '../hooks/useCurriculumText.js'

/** Home — what the app is, and the chapter list. */
export default function Home() {
  const { t } = useTranslation()
  const { sectionTitle, sectionSubtitle, topicTitle } = useCurriculumText()
  const firstTopic = allTopics[0]

  return (
    <div className="mx-auto max-w-5xl space-y-8 p-4 sm:p-8">
      <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-cyan-50 to-white p-6 sm:p-8 dark:border-slate-800 dark:from-cyan-500/10 dark:to-slate-900">
        <p className="text-xs font-semibold tracking-widest text-cyan-700 uppercase dark:text-cyan-400">
          {t('home.eyebrow')}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {t('app.name')}
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
          {t('home.tagline')}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {firstTopic && (
            <Link
              to={topicPath(firstTopic.section.id, firstTopic.id)}
              className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-500"
            >
              {t('home.startWith', {
                number: firstTopic.number,
                title: topicTitle(firstTopic.section.id, firstTopic.id),
              })}
            </Link>
          )}
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {t('sidebar.counts', { sections: curriculum.length, topics: topicCount })}
          </span>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
          {t('home.curriculumHeading')}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {curriculum.map((section) => (
            <div
              key={section.id}
              className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-cyan-400 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-500"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs text-slate-400">
                  {section.number.padStart(2, '0')}
                </span>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {sectionTitle(section.id)}
                </h3>
              </div>
              <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                {sectionSubtitle(section.id)}
              </p>
              <ul className="mt-3 space-y-1">
                {section.topics.slice(0, 4).map((topic) => (
                  <li key={topic.id}>
                    <Link
                      to={topicPath(section.id, topic.id)}
                      className="flex items-center gap-2 rounded-md px-1.5 py-1 text-sm text-slate-600 transition hover:bg-slate-100 hover:text-cyan-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-cyan-300"
                    >
                      <span className="w-8 shrink-0 font-mono text-xs opacity-60">
                        {topic.number}
                      </span>
                      <span className="truncate">{topicTitle(section.id, topic.id)}</span>
                    </Link>
                  </li>
                ))}
                {section.topics.length > 4 && (
                  <li className="px-1.5 pt-0.5 text-xs text-slate-400">
                    {t('home.moreInSidebar', { count: section.topics.length - 4 })}
                  </li>
                )}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {[...new Set(section.topics.map((topic) => topic.level))].map((level) => (
                  <Badge key={level} level={level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
