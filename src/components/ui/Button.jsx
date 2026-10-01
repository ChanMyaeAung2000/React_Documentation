const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition ' +
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 ' +
  'disabled:cursor-not-allowed disabled:opacity-50'

const variants = {
  primary: 'bg-cyan-600 text-white hover:bg-cyan-500 active:bg-cyan-700',
  secondary:
    'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 ' +
    'dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800',
  ghost:
    'text-slate-600 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:bg-slate-800',
  danger: 'bg-rose-600 text-white hover:bg-rose-500',
}

const sizes = {
  sm: 'px-2.5 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
}

/**
 * Button — one component for every action in the demos.
 *
 * <Button variant="primary" size="sm" onClick={...}>Click me</Button>
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  children,
  ...props
}) {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
