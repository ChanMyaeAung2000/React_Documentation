import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import SidebarSection from '../navigation/SidebarSection.jsx'
import { curriculum, topicCount } from '../../data/curriculum.js'

/**
 * Sidebar — the curriculum tree.
 * On desktop it is a fixed column; on mobile MainLayout turns it into a drawer.
 */
export default function Sidebar({ isOpen, onClose }) {
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const activeSectionId = pathname.split('/')[1]

  return (
    <>
      {/* Tap-to-close backdrop, mobile only. */}
      {isOpen && (
        <button
          type="button"
          aria-label={t('sidebar.closeNav')}
          onClick={onClose}
          className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-70 shrink-0 flex-col border-r border-slate-200 bg-slate-50 transition-transform duration-200 lg:static lg:z-auto lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } dark:border-slate-800 dark:bg-slate-900`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-800">
          <h2 className="text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            {t('sidebar.heading')}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('sidebar.closeNav')}
            className="-mr-1 rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-200/70 lg:hidden dark:hover:bg-slate-800"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <nav aria-label={t('sidebar.navLabel')} className="flex-1 overflow-y-auto p-2.5">
          <ul className="space-y-1">
            {curriculum.map((section) => (
              <SidebarSection
                key={section.id}
                section={section}
                isActive={section.id === activeSectionId}
              />
            ))}
          </ul>
        </nav>

        <div className="border-t border-slate-200 px-4 py-3 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
          {t('sidebar.counts', { sections: curriculum.length, topics: topicCount })}
        </div>
      </aside>
    </>
  )
}
