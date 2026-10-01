import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Card from '../../components/ui/Card.jsx'
import CodeBlock from '../../components/ui/CodeBlock.jsx'

/*
 * ---------------------------------------------------------------------------
 * 2.5 Functional Updates
 *
 * When the next value depends on the previous one, hand React a function
 * instead of a value. React keeps a queue of updates and applies them in order,
 * so several changes in the same event all land.
 * ---------------------------------------------------------------------------
 */

/** The headline comparison: a captured value against a function. */
function StaleVsFunctionalDemo() {
  const { t } = useTranslation()
  const [stale, setStale] = useState(0)
  const [fresh, setFresh] = useState(0)

  return (
    <div className="grid gap-3 lg:grid-cols-2">
      <div className="rounded-lg border border-rose-300 bg-rose-50 p-3 dark:border-rose-500/40 dark:bg-rose-500/10">
        <p className="font-mono text-xs font-medium text-rose-800 dark:text-rose-300">
          setStale(stale + 1)  ×2
        </p>
        <p className="mt-2 font-mono text-sm text-slate-600 dark:text-slate-300">
          stale = {stale}
        </p>
        <button
          type="button"
          onClick={() => {
            setStale(stale + 1)
            setStale(stale + 1)
          }}
          className="mt-3 w-full rounded-md bg-rose-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
        >
          {t('demos.FunctionalUpdateDemo.stale.increment')}
        </button>
        <p className="mt-2 text-xs text-rose-800 dark:text-rose-300">
          {t('demos.FunctionalUpdateDemo.stale.explainBefore')}{' '}
          <strong>+1</strong>. {t('demos.FunctionalUpdateDemo.stale.explainAfter')}{' '}
          <code className="font-mono">stale + 1</code>{' '}
          {t('demos.FunctionalUpdateDemo.stale.explainEnd')}
        </p>
      </div>

      <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-3 dark:border-emerald-500/40 dark:bg-emerald-500/10">
        <p className="font-mono text-xs font-medium text-emerald-800 dark:text-emerald-300">
          setFresh(prev =&gt; prev + 1)  ×2
        </p>
        <p className="mt-2 font-mono text-sm text-slate-600 dark:text-slate-300">
          fresh = {fresh}
        </p>
        <button
          type="button"
          onClick={() => {
            setFresh((prev) => prev + 1)
            setFresh((prev) => prev + 1)
          }}
          className="mt-3 w-full rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          {t('demos.FunctionalUpdateDemo.fresh.increment')}
        </button>
        <p className="mt-2 text-xs text-emerald-800 dark:text-emerald-300">
          {t('demos.FunctionalUpdateDemo.fresh.explainBefore')}{' '}
          <strong>+2</strong>. {t('demos.FunctionalUpdateDemo.fresh.explainAfter')}
        </p>
      </div>
    </div>
  )
}

/**
 * Shows the queue itself. Every press appends its updater functions to a list
 * and the result is computed by running them in order against 0.
 */
function QueueDemo() {
  const { t } = useTranslation()
  const [updates, setUpdates] = useState([])

  const result = updates.reduce((total, step) => total + step, 0)

  function addDouble() {
    setUpdates((prev) => [...prev, 2])
    setUpdates((prev) => [...prev, 2])
  }

  function addOne() {
    setUpdates((prev) => [...prev, 1])
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={addDouble}
          className="rounded-lg bg-cyan-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
        >
          {t('demos.FunctionalUpdateDemo.queue.twoUpdaters')}
        </button>
        <button
          type="button"
          onClick={addOne}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-slate-700 dark:hover:bg-slate-700"
        >
          {t('demos.FunctionalUpdateDemo.queue.oneUpdater')}
        </button>
        <button
          type="button"
          onClick={() => setUpdates([])}
          className="rounded-lg px-3 py-1.5 text-sm text-slate-500 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
        >
          {t('demos.FunctionalUpdateDemo.queue.clear')}
        </button>
      </div>

      <div className="rounded-lg bg-slate-950 p-3 font-mono text-xs">
        <p className="text-slate-500">{t('demos.FunctionalUpdateDemo.queue.queued')}</p>
        <p className="mt-1 text-slate-200">
          {updates.length === 0
            ? t('demos.FunctionalUpdateDemo.queue.empty')
            : updates.join(' + ')}
        </p>
        <p className="mt-3 text-slate-500">
          {t('demos.FunctionalUpdateDemo.queue.applied')}
        </p>
        <p className="mt-1 text-lg text-cyan-400">{result}</p>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400">
        {t('demos.FunctionalUpdateDemo.queue.note')}
      </p>
    </div>
  )
}

/**
 * The case that catches people: inside a timer the captured value is already
 * stale by the time the callback runs.
 */
function AsyncDemo() {
  const { t } = useTranslation()
  const [stale, setStale] = useState(0)
  const [fresh, setFresh] = useState(0)
  const [pending, setPending] = useState(false)

  function run() {
    setPending(true)

    // setTimeout reads the value from the render that created this handler.
    setTimeout(() => setStale((current) => current), 0)
    setStale(stale + 1)

    setTimeout(() => {
      // Both of these run after the render above has already replaced `stale`,
      // so both see the same stale value and the counter only moves once.
      setStale(stale + 1)
      setStale(stale + 1)
      setFresh((prev) => prev + 1)
      setFresh((prev) => prev + 1)
      setPending(false)
    }, 600)
  }

  return (
    <div className="space-y-3">
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="rounded-lg bg-rose-50 p-3 dark:bg-rose-500/10">
          <p className="text-xs text-rose-800 dark:text-rose-300">
            setStale(stale + 1) inside setTimeout
          </p>
          <p className="mt-1 font-mono text-xl text-slate-900 dark:text-slate-100">
            {stale}
          </p>
        </div>
        <div className="rounded-lg bg-emerald-50 p-3 dark:bg-emerald-500/10">
          <p className="text-xs text-emerald-800 dark:text-emerald-300">
            setFresh(prev =&gt; prev + 1) inside setTimeout
          </p>
          <p className="mt-1 font-mono text-xl text-slate-900 dark:text-slate-100">
            {fresh}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={run}
        disabled={pending}
        className="rounded-lg bg-cyan-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
      >
        {pending
          ? t('demos.FunctionalUpdateDemo.async.running')
          : t('demos.FunctionalUpdateDemo.async.run')}
      </button>

      <p className="text-xs text-slate-500 dark:text-slate-400">
        {t('demos.FunctionalUpdateDemo.async.noteBefore')}{' '}
        <code className="font-mono">setStale</code>{' '}
        {t('demos.FunctionalUpdateDemo.async.noteMiddle')}{' '}
        <code className="font-mono">setFresh</code>{' '}
        {t('demos.FunctionalUpdateDemo.async.noteAfter')}
      </p>
    </div>
  )
}

export default function FunctionalUpdateDemo() {
  const { t } = useTranslation()
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  return (
    <div className="space-y-4">
      <Card
        title={t('demos.FunctionalUpdateDemo.compare.title')}
        subtitle={t('demos.FunctionalUpdateDemo.compare.subtitle')}
        footer={t('demos.FunctionalUpdateDemo.compare.footer')}
      >
        <StaleVsFunctionalDemo />
      </Card>

      <Card
        title={t('demos.FunctionalUpdateDemo.stores.title')}
        subtitle={t('demos.FunctionalUpdateDemo.stores.subtitle')}
      >
        <QueueDemo />
      </Card>

      <Card
        title={t('demos.FunctionalUpdateDemo.both.title')}
        subtitle={t('demos.FunctionalUpdateDemo.both.subtitle')}
        footer={t('demos.FunctionalUpdateDemo.both.footer')}
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setStep((prev) => prev + 1)}
              className="rounded-lg bg-cyan-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
            >
              +1
            </button>
            <button
              type="button"
              onClick={() => setStep((prev) => prev + 3)}
              className="rounded-lg bg-cyan-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
            >
              +3
            </button>
            <button
              type="button"
              onClick={() => setStep(0)}
              className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-slate-700 dark:hover:bg-slate-700"
            >
              {t('demos.FunctionalUpdateDemo.both.reset')}
            </button>
            <span className="font-mono text-sm text-slate-600 dark:text-slate-300">
              step = {step}
            </span>
          </div>

          <button
            type="button"
            onClick={() => setCount((prev) => prev + step)}
            className="w-full rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
          >
            count = count + step
          </button>

          <p className="font-mono text-sm text-slate-600 dark:text-slate-300">
            count = {count}
          </p>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            {t('demos.FunctionalUpdateDemo.both.noteBefore')}{' '}
            <code className="font-mono">step</code> {t('demos.FunctionalUpdateDemo.both.noteAfter')}
          </p>
        </div>
      </Card>

      <Card
        title={t('demos.FunctionalUpdateDemo.async.title')}
        subtitle={t('demos.FunctionalUpdateDemo.async.subtitle')}
      >
        <AsyncDemo />
      </Card>

      <Card
        title={t('demos.FunctionalUpdateDemo.rule.title')}
        subtitle={t('demos.FunctionalUpdateDemo.rule.subtitle')}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-500/30 dark:bg-emerald-500/10">
            <p className="text-xs font-medium text-emerald-800 dark:text-emerald-300">
              {t('demos.FunctionalUpdateDemo.rule.useValue')}
            </p>
            <CodeBlock
              filename={t('demos.FunctionalUpdateDemo.rule.filenameFine')}
              code={`setIsOpen(true);        // always true
setName("Ada");         // always "Ada"
setItems([]);           // always empty

// These never need the previous value.`}
            />
          </div>
          <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-3 dark:border-cyan-500/30 dark:bg-cyan-500/10">
            <p className="text-xs font-medium text-cyan-800 dark:text-cyan-300">
              {t('demos.FunctionalUpdateDemo.rule.useFunction')}
            </p>
            <CodeBlock
              filename={t('demos.FunctionalUpdateDemo.rule.filenameAlsoFine')}
              code={`setCount((c) => c + 1);        // toggle
setItems((list) => [...list, x]);   // append
setUser((u) => ({ ...u, n: u.n+1 })); // bump

// And inside timers, effects or any async callback
// there is no other correct option.`}
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
