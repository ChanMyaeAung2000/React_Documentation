/**
 * Input — a labelled text field used by the interactive demos.
 *
 * <Input label="Name" value={name} onChange={setName} placeholder="John" />
 */
export default function Input({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = 'text',
  className = '',
  ...props
}) {
  return (
    <label className={`block ${className}`} htmlFor={id}>
      {label && (
        <span className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-400">
          {label}
        </span>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
        {...props}
      />
    </label>
  )
}
