import { NavLink } from 'react-router-dom'
import { topicPath } from '../../data/curriculum.js'
import { useCurriculumText } from '../../hooks/useCurriculumText.js'

/** SidebarItem — a single lesson link, highlighted when it is the active route. */
export default function SidebarItem({ sectionId, topic, onNavigate }) {
  const { topicTitle } = useCurriculumText()

  return (
    <li>
      <NavLink
        to={topicPath(sectionId, topic.id)}
        onClick={onNavigate}
        className={({ isActive }) =>
          `flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition ${
            isActive
              ? 'bg-cyan-50 font-medium text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300'
              : 'text-slate-600 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:bg-slate-800/70'
          }`
        }
      >
        <span className="w-8 shrink-0 font-mono text-xs opacity-60">{topic.number}</span>
        <span className="truncate">{topicTitle(sectionId, topic.id)}</span>
      </NavLink>
    </li>
  )
}
