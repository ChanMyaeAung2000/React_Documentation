import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Card from '../../components/ui/Card.jsx'
import CodeBlock from '../../components/ui/CodeBlock.jsx'
import Input from '../../components/ui/Input.jsx'

/*
 * ---------------------------------------------------------------------------
 * 2.1 useState
 *
 * useState gives a component its own memory. It returns two things: the value
 * you have right now, and a setter that asks React to re-render with a new one.
 * The value is a snapshot taken at render time, not a live variable.
 * ---------------------------------------------------------------------------
 */

/**
 * A plain counter used to prove that state belongs to the component instance,
 * not to the component function. Two <Counter /> on the page hold two
 * completely separate pieces of state.
 */
function Counter({ label }) {
  const [count, setCount] = useState(0)

  return (
    <div className="flex-1 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
      <p className="font-mono text-[11px] text-slate-400">{label}</p>
      <p className="mt-1 text-2xl font-semibold tabular-nums text-slate-900 dark:text-slate-100">
        {count}
      </p>
      <button
        type="button"
        onClick={() => setCount((prev) => prev + 1)}
        className="mt-2 w-full rounded-md border border-slate-300 px-2 py-1 text-xs transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-slate-700 dark:hover:bg-slate-700"
      >
        +1
      </button>
    </div>
  )
}

/**
 * A local variable looks like it should work. It does not — the function body
 * runs again from the top on every render, so the variable is reset before the
 * button can ever read it.
 */
function LocalVariableDemo() {
  const { t } = useTranslation()
  const [useStateValue, setUseStateValue] = useState(0)

  // Re-initialised on every single render. Nothing survives.
  let localValue = 0

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-500/30 dark:bg-emerald-500/10">
        <p className="font-mono text-xs font-medium text-emerald-800 dark:text-emerald-300">
          let localValue = 0
        </p>
        <p className="mt-2 font-mono text-2xl text-slate-900 dark:text-slate-100">
          {localValue}
        </p>
        <button
          type="button"
          onClick={() => {
            // oxlint-disable-next-line react/immutability -- deliberate: showing that a local variable cannot hold state
            localValue = localValue + 1
          }}
          className="mt-3 w-full rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          {t('demos.UseStateDemo.local.increment')}
        </button>
        <p className="mt-2 text-xs text-emerald-800 dark:text-emerald-300">
          {t('demos.UseStateDemo.local.explainBefore')}{' '}
          <code className="font-mono">let localValue = 0</code>{' '}
          {t('demos.UseStateDemo.local.explainAfter')}
        </p>
      </div>

      <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-3 dark:border-cyan-500/30 dark:bg-cyan-500/10">
        <p className="font-mono text-xs font-medium text-cyan-800 dark:text-cyan-300">
          const [value, setValue] = useState(0)
        </p>
        <p className="mt-2 font-mono text-2xl text-slate-900 dark:text-slate-100">
          {useStateValue}
        </p>
        <button
          type="button"
          onClick={() => setUseStateValue((prev) => prev + 1)}
          className="mt-3 w-full rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
        >
          {t('demos.UseStateDemo.local.increment')}
        </button>
        <p className="mt-2 text-xs text-cyan-800 dark:text-cyan-300">
          {t('demos.UseStateDemo.local.remembers')}
        </p>
      </div>
    </div>
  )
}

/**
 * Each step is a mix: "User input" and "State update" are prose, the rest are
 * the names you actually see in the code. Storing them as keys rather than
 * plain strings keeps that distinction visible.
 */
const STEPS = [
  'demos.UseStateDemo.flow.input',
  'demos.UseStateDemo.flow.onChange',
  'demos.UseStateDemo.flow.setter',
  'demos.UseStateDemo.flow.update',
  'demos.UseStateDemo.flow.rerender',
]

export default function UseStateDemo() {
  const { t } = useTranslation()
  const [name, setName] = useState('')

  return (
    <div className="space-y-4">
      <Card
        title={t('demos.UseStateDemo.demo.title')}
        subtitle={t('demos.UseStateDemo.demo.subtitle')}
        footer={t('demos.UseStateDemo.demo.footer')}
      >
        <Input
          id="state-name"
          label={t('demos.UseStateDemo.demo.nameLabel')}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="John"
        />

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-slate-50 p-3 text-center dark:bg-slate-950/60">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t('demos.UseStateDemo.demo.initial')}
            </p>
            <p className="mt-1 font-mono text-sm text-slate-900 dark:text-slate-100">""</p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center dark:bg-slate-950/60">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t('demos.UseStateDemo.demo.current')}
            </p>
            <p className="mt-1 font-mono text-sm break-all text-slate-900 dark:text-slate-100">
              {JSON.stringify(name)}
            </p>
          </div>
          <div className="rounded-lg bg-slate-50 p-3 text-center dark:bg-slate-950/60">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {t('demos.UseStateDemo.demo.output')}
            </p>
            <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
              {t('demos.UseStateDemo.demo.greeting', {
                name: name || t('demos.UseStateDemo.demo.react'),
              })}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-lg border-2 border-cyan-300 bg-cyan-50 p-6 text-center dark:border-cyan-500/40 dark:bg-cyan-500/10">
          <p className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {t('demos.UseStateDemo.demo.greeting', {
              name: name || t('demos.UseStateDemo.demo.react'),
            })}
          </p>
        </div>
      </Card>

      <Card
        title={t('demos.UseStateDemo.flowCard.title')}
        subtitle={t('demos.UseStateDemo.flowCard.subtitle')}
      >
        <ol className="grid gap-2 sm:grid-cols-5">
          {STEPS.map((step, index) => (
            <li
              key={step}
              className="relative rounded-lg bg-slate-100 p-3 text-center font-mono text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <span className="absolute top-1 left-2 text-[10px] text-slate-400">
                {index + 1}
              </span>
              {t(step)}
              {index < STEPS.length - 1 && (
                <span
                  className="absolute top-1/2 -right-2.5 hidden -translate-y-1/2 text-slate-400 sm:block"
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Card>

      <Card
        title={t('demos.UseStateDemo.hook.title')}
        subtitle={t('demos.UseStateDemo.hook.subtitle')}
        footer={t('demos.UseStateDemo.hook.footer')}
      >
        <LocalVariableDemo />
      </Card>

      <Card
        title={t('demos.UseStateDemo.perInstance.title')}
        subtitle={t('demos.UseStateDemo.perInstance.subtitle')}
        footer={t('demos.UseStateDemo.perInstance.footer')}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Counter label={t('demos.UseStateDemo.perInstance.first')} />
          <Counter label={t('demos.UseStateDemo.perInstance.second')} />
        </div>
      </Card>

      <Card
        title={t('demos.UseStateDemo.whole.title')}
        subtitle={t('demos.UseStateDemo.whole.subtitle')}
      >
        <CodeBlock
          filename="UseStateDemo.jsx"
          code={`import { useState } from "react";

export default function UseStateDemo() {
  const [name, setName] = useState("");

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello {name || "React"}</p>
    </>
  );
}`}
        />
      </Card>
    </div>
  )
}
