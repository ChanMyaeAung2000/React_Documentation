/**
 * Card — the bordered panel used for every block on a page.
 *
 * <Card title="Result" subtitle="Live output">content</Card>
 */
export default function Card({
  title,
  subtitle,
  footer,
  className = '',
  children,
  ...props
}) {
  return (
    <section
      className={`overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 ${className}`}
      {...props}
    >
      {(title || subtitle) && (
        <header className="border-b border-slate-200 bg-slate-50/80 px-4 py-3 dark:border-slate-800 dark:bg-slate-900/60">
          {title && (
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </header>
      )}
      <div className="p-4">{children}</div>
      {footer && (
        <footer className="border-t border-slate-200 bg-slate-50/80 px-4 py-2.5 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400">
          {footer}
        </footer>
      )}
    </section>
  )
}
