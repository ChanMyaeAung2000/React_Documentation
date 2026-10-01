import { useState } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * CodeBlock — the "Source Code" panel, with a filename label and copy button.
 *
 * <CodeBlock filename="UseStateDemo.jsx" code={`const [a, setA] = useState(0)`} />
 */
export default function CodeBlock({ filename, code, className = '' }) {
  const [copied, setCopied] = useState(false)
  const { t } = useTranslation()

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div
      className={`overflow-hidden rounded-xl border border-slate-800 bg-slate-950 ${className}`}
    >
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/60 px-4 py-2">
        <span className="font-mono text-xs text-slate-400">
          {filename ?? 'source.jsx'}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-md px-2 py-1 text-xs font-medium text-slate-400 transition hover:bg-slate-800 hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-cyan-500"
        >
          {copied ? t('common.copied') : t('common.copy')}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed">
        <code className="font-mono text-slate-200">{code}</code>
      </pre>
    </div>
  )
}
