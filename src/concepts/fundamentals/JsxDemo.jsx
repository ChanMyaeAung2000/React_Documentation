import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Badge from '../../components/ui/Badge.jsx'
import Card from '../../components/ui/Card.jsx'
import CodeBlock from '../../components/ui/CodeBlock.jsx'
import Input from '../../components/ui/Input.jsx'

// Topic names in section 1. They are proper nouns, so they stay untranslated.
const TOPICS = ['Components', 'JSX', 'Props', 'Children', 'Events']

/*
 * ---------------------------------------------------------------------------
 * 1.2 JSX
 *
 * JSX looks like HTML but it is really JavaScript. The rule to remember:
 * anything inside { } is evaluated as a JavaScript expression and whatever it
 * returns is placed into the markup.
 * ---------------------------------------------------------------------------
 */

export default function JsxDemo() {
  const { t } = useTranslation()
  const [name, setName] = useState('John')
  const [isDark, setIsDark] = useState(false)

  return (
    <div className="space-y-4">
      <Card
        title={t('demos.JsxDemo.expression.title')}
        subtitle={t('demos.JsxDemo.expression.subtitle')}
      >
        <Input
          id="jsx-name"
          label={t('demos.JsxDemo.nameLabel')}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="John"
        />

        <div className="mt-4 space-y-2 rounded-lg bg-slate-50 p-4 dark:bg-slate-950/60">
          {/* Two expressions: a variable and a method call. */}
          <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            {t('demos.JsxDemo.greeting', { name: name || t('demos.JsxDemo.react') })}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {t('demos.JsxDemo.expression.count', { count: TOPICS.length })}
          </p>

          {/* An expression can also return a whole list. */}
          <ul className="flex flex-wrap gap-1.5 pt-1">
            {TOPICS.map((topic) => (
              <li key={topic}>
                <Badge level="Beginner">{topic}</Badge>
              </li>
            ))}
          </ul>
        </div>
      </Card>

      <Card
        title={t('demos.JsxDemo.attributes.title')}
        subtitle={t('demos.JsxDemo.attributes.subtitle')}
      >
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setIsDark((prev) => !prev)}
            // className (not class), a style object, a boolean shorthand
            className={
              isDark
                ? 'rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-cyan-300'
                : 'rounded-lg bg-cyan-600 px-3 py-2 text-sm font-medium text-white'
            }
            style={{ letterSpacing: '0.02em' }}
            aria-pressed={isDark}
          >
            {t(isDark ? 'demos.JsxDemo.attributes.dark' : 'demos.JsxDemo.attributes.light')}{' '}
            {t('demos.JsxDemo.attributes.demo')}
          </button>

          <span className="text-xs text-slate-500 dark:text-slate-400">
            {t('demos.JsxDemo.attributes.hint')}
          </span>
        </div>

        {/* Attribute syntax is code, so it stays verbatim in every language. */}
        <div className="mt-3 rounded-lg bg-slate-50 p-3 font-mono text-xs text-slate-600 dark:bg-slate-950/60 dark:text-slate-300">
          <p>className=&quot;...&quot; — camelCase, not class</p>
          <p className="mt-1">style=&#123;&#123; letterSpacing: &apos;0.02em&apos; &#125;&#125; — a JS object</p>
          <p className="mt-1">aria-pressed=&#123;isDark&#125; — any HTML attribute works</p>
        </div>
      </Card>

      <Card
        title={t('demos.JsxDemo.oneLine.title')}
        subtitle={t('demos.JsxDemo.oneLine.subtitle')}
      >
        <button
          onClick={() => setIsDark((prev) => !prev)}
          className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          {t('demos.JsxDemo.oneLine.toggle')}
        </button>
        <div className="mt-3 min-h-8 text-sm">
          {/* When the condition is false, && short-circuits and renders nothing. */}
          {isDark && (
            <Badge level="Intermediate">{t('demos.JsxDemo.oneLine.onlyWhenTrue')}</Badge>
          )}
        </div>
      </Card>

      <Card
        title={t('demos.JsxDemo.really.title')}
        subtitle={t('demos.JsxDemo.really.subtitle')}
        footer={t('demos.JsxDemo.really.footer')}
      >
        <div className="grid gap-3 lg:grid-cols-2">
          <div>
            <p className="mb-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              {t('demos.JsxDemo.really.youWrite')}
            </p>
            <CodeBlock
              filename="JSX"
              code={`const el = (
  <div className="box">
    <h1>Hello ${name}</h1>
  </div>
);`}
            />
          </div>
          <div>
            <p className="mb-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              {t('demos.JsxDemo.really.itBecomes')}
            </p>
            <CodeBlock
              filename="JavaScript"
              code={`const el = React.createElement(
  "div",
  { className: "box" },
  React.createElement("h1", null, "Hello ", ${name}),
);`}
            />
          </div>
        </div>
      </Card>
    </div>
  )
}