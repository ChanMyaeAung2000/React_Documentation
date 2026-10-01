import { useState } from 'react'
import SidebarItem from './SidebarItem.jsx'
import { useCurriculumText } from '../../hooks/useCurriculumText.js'

/**
 * SidebarSection — one curriculum chapter, collapsible.
 *
 * `choice` stays undefined until the reader toggles the chapter. While it is
 * undefined the section follows the route: the chapter holding the current
 * topic is open, every other one is closed.
 */
export default function SidebarSection({ section, isActive }) {
  const [choice, setChoice] = useState(undefined)
  const { sectionTitle } = useCurriculumText()
  const isOpen = choice ?? isActive
  const listId = `section-${section.id}`

  return (
    <li>
      <button
        type="button"
        onClick={() => setChoice(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={listId}
        className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left transition hover:bg-slate-200/60 focus-visible:outline-2 focus-visible:outline-cyan-500 dark:hover:bg-slate-800/70"
      >
        <span className="w-5 shrink-0 font-mono text-xs text-slate-400 dark:text-slate-500">
          {section.number.padStart(2, '0')}
        </span>
        <span className="flex-1 text-sm font-semibold text-slate-800 dark:text-slate-100">
          {sectionTitle(section.id)}
        </span>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`size-4 shrink-0 text-slate-400 transition-transform ${isOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
        </svg>
      </button>

      {isOpen && (
        <ul
          id={listId}
          className="mt-0.5 mb-2 ml-3 space-y-0.5 border-l border-slate-200 pl-2 dark:border-slate-800"
        >
          {section.topics.map((topic) => (
            <SidebarItem key={topic.id} sectionId={section.id} topic={topic} />
          ))}
        </ul>
      )}
    </li>
  )
}
