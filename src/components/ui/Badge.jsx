import { useTranslation } from 'react-i18next'

const levels = {
  Beginner: 'bg-emerald-100 text-emerald-700 ring-emerald-600/20 dark:bg-emerald-500/15 dark:text-emerald-300',
  Intermediate:
    'bg-amber-100 text-amber-700 ring-amber-600/20 dark:bg-amber-500/15 dark:text-amber-300',
  Advanced:
    'bg-rose-100 text-rose-700 ring-rose-600/20 dark:bg-rose-500/15 dark:text-rose-300',
}

/**
 * Badge — small status label, used for the difficulty level of a topic.
 *
 * `level` stays an English identifier ('Beginner') so it keeps working as the
 * colour key; only the visible text is translated.
 */
export default function Badge({ level, className = '', children }) {
  const { t } = useTranslation()
  const color = levels[level] ?? levels.Beginner

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ${color} ${className}`}
    >
      {children ?? t(`levels.${level}`)}
    </span>
  )
}