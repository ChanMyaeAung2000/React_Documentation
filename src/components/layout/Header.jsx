import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { allTopics, topicPath } from '../../data/curriculum.js'
import { LANGUAGES } from '../../i18n/config.js'
import { useTheme } from '../../hooks/useTheme.js'
import { useCurriculumText } from '../../hooks/useCurriculumText.js'

const MAX_RESULTS = 8

/**
 * Header — logo, search, language toggle, theme toggle and the mobile menu button.
 * The sidebar drawer is owned by MainLayout, which passes `onOpenMenu` down.
 */
export default function Header({ onOpenMenu }) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const inputRef = useRef(null)
  const { theme, toggleTheme } = useTheme()
  const { t, i18n } = useTranslation()
  const { sectionTitle, topicTitle, topicDescription } = useCurriculumText()

  // Search runs against the active language, so a Burmese query matches Burmese
  // titles. `topic.number` and the section number are language independent.
  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase()
    if (trimmed.length < 2) return []

    return allTopics
      .filter((topic) => {
        const haystack = [
          topic.number,
          topicTitle(topic.section.id, topic.id),
          topicDescription(topic.section.id, topic.id),
          sectionTitle(topic.section.id),
        ]
          .join(' ')
          .toLowerCase()
        return haystack.includes(trimmed)
      })
      .slice(0, MAX_RESULTS)
    // `topicTitle` and friends are rebuilt whenever `t` changes, so the
    // language is already covered — listing it here would be redundant.
  }, [query, topicTitle, topicDescription, sectionTitle])

  // Close the results when clicking anywhere outside the search box.
  useEffect(() => {
    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) setIsOpen(false)
    }
    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  // "/" focuses search, the way most documentation sites behave.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key !== '/' || event.target.closest('input, textarea')) return
      event.preventDefault()
      inputRef.current?.focus()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  function goTo(topic) {
    setQuery('')
    setIsOpen(false)
    navigate(topicPath(topic.section.id, topic.id))
  }

  const showResults = isOpen && query.trim().length >= 2

  // The toggle always offers the language you would switch *to*, so the button
  // names the destination rather than the language you are already reading in.
  const nextLanguage =
    LANGUAGES.find((entry) => entry.code !== i18n.resolvedLanguage) ?? LANGUAGES[0]

  return (
    <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-3 border-b border-slate-200 bg-white/85 px-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
      <button
        type="button"
        onClick={onOpenMenu}
        aria-label={t('header.openNav')}
        className="-ml-1 rounded-lg p-2 text-slate-600 transition hover:bg-slate-200/70 lg:hidden dark:text-slate-300 dark:hover:bg-slate-800"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => navigate('/')}
        className="flex shrink-0 items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-cyan-500"
      >
        <span aria-hidden="true" className="text-xl leading-none">
          ⚛️
        </span>
        <span className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base dark:text-slate-50">
          {t('app.name')}
        </span>
      </button>

      <div ref={containerRef} className="relative ml-auto w-full max-w-xs sm:max-w-sm">
        <label htmlFor="topic-search" className="sr-only">
          {t('header.searchLabel')}
        </label>
        <input
          ref={inputRef}
          id="topic-search"
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value)
            setIsOpen(true)
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setIsOpen(false)
            if (event.key === 'Enter' && results[0]) goTo(results[0])
          }}
          placeholder={t('header.searchPlaceholder')}
          className="w-full rounded-lg border border-slate-300 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:bg-slate-900"
        />
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="pointer-events-none absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="m20 20-3.5-3.5" />
        </svg>

        {showResults && (
          <ul className="absolute inset-x-0 top-full z-40 mt-2 max-h-80 overflow-y-auto rounded-xl border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-800 dark:bg-slate-900">
            {results.length === 0 && (
              <li className="px-3 py-2 text-sm text-slate-500 dark:text-slate-400">
                {t('header.noResults', { query: query.trim() })}
              </li>
            )}
            {results.map((topic) => (
              <li key={`${topic.section.id}-${topic.id}`}>
                <button
                  type="button"
                  onClick={() => goTo(topic)}
                  className="flex w-full items-baseline gap-2 px-3 py-2 text-left transition hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <span className="font-mono text-xs text-slate-400">{topic.number}</span>
                  <span className="truncate text-sm text-slate-800 dark:text-slate-100">
                    {topicTitle(topic.section.id, topic.id)}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="button"
        onClick={() => i18n.changeLanguage(nextLanguage.code)}
        title={t('lang.toggle')}
        aria-label={t('lang.switchTo', { language: nextLanguage.name })}
        className="flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-300 px-2 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-cyan-500 hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-cyan-500 sm:text-sm dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:bg-cyan-500/10"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="size-4 shrink-0 text-slate-500 dark:text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path strokeLinecap="round" d="M3 12h18M12 3a15 15 0 0 1 0 18a15 15 0 0 1 0-18" />
        </svg>
        {nextLanguage.name}
      </button>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={t(theme === 'dark' ? 'header.themeToLight' : 'header.themeToDark')}
        className="shrink-0 rounded-lg p-2 text-slate-600 transition hover:bg-slate-200/70 focus-visible:outline-2 focus-visible:outline-cyan-500 dark:text-slate-300 dark:hover:bg-slate-800"
      >
        {theme === 'dark' ? (
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="4" />
            <path strokeLinecap="round" d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
          </svg>
        )}
      </button>
    </header>
  )
}