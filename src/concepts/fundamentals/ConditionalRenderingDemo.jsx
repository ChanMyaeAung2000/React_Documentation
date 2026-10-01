import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import Input from '../../components/ui/Input.jsx'

/*
 * ---------------------------------------------------------------------------
 * 1.6 Conditional Rendering
 *
 * React has no special markup for if/else. You use plain JavaScript: a ternary
 * when you choose one of two, && when you render something or nothing, and an
 * early return when there is nothing to show.
 * ---------------------------------------------------------------------------
 */

function Login({ onLogin }) {
  const { t } = useTranslation()
  const [name, setName] = useState('')

  return (
    <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
      <p className="font-mono text-[11px] text-slate-400">Login</p>
      <div className="mt-2 flex flex-wrap items-end gap-2">
        <div className="min-w-40 flex-1">
          <Input
            id="cond-login-name"
            label={t('demos.ConditionalRenderingDemo.login.name')}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="John"
          />
        </div>
        <Button disabled={!name.trim()} onClick={() => onLogin(name.trim())}>
          {t('demos.ConditionalRenderingDemo.login.submit')}
        </Button>
      </div>
    </div>
  )
}

function Dashboard({ name, onLogout }) {
  const { t } = useTranslation()

  return (
    <div className="rounded-lg border border-cyan-300 bg-cyan-50 p-4 dark:border-cyan-500/40 dark:bg-cyan-500/10">
      <p className="font-mono text-[11px] text-cyan-600 dark:text-cyan-400">Dashboard</p>
      <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
        {t('demos.ConditionalRenderingDemo.dashboard.welcome', { name })}
      </p>
      <Button size="sm" variant="secondary" className="mt-3" onClick={onLogout}>
        {t('demos.ConditionalRenderingDemo.dashboard.logout')}
      </Button>
    </div>
  )
}

/** Demonstrates the early `return null` pattern in its own tiny component. */
function NothingToShow({ show }) {
  const { t } = useTranslation()
  if (!show) return null

  return (
    <span className="rounded-md bg-slate-800 px-2 py-1 font-mono text-xs text-slate-100">
      {t('demos.ConditionalRenderingDemo.iExist')}
    </span>
  )
}

/**
 * `name` and `code` are syntax, so they read the same in every language.
 * Only `note` is prose.
 */
const TECHNIQUES = [
  {
    id: 'ternary',
    name: 'Ternary  cond ? A : B',
    noteKey: 'demos.ConditionalRenderingDemo.techniques.ternary.note',
    code: `{isOpen ? <Panel /> : <Placeholder />}`,
  },
  {
    id: 'and',
    name: '&&  cond && A',
    noteKey: 'demos.ConditionalRenderingDemo.techniques.and.note',
    code: `{isOpen && <Panel />}`,
  },
  {
    id: 'null',
    name: 'return null',
    noteKey: 'demos.ConditionalRenderingDemo.techniques.null.note',
    code: `function Panel({ show }) {
  if (!show) return null;
  return <div />;
}`,
  },
]

export default function ConditionalRenderingDemo() {
  const { t } = useTranslation()
  const [user, setUser] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const [count, setCount] = useState(0)
  const [technique, setTechnique] = useState('ternary')

  const isLoggedIn = user !== null
  const active = TECHNIQUES.find((item) => item.id === technique)

  return (
    <div className="space-y-4">
      <Card
        title={t('demos.ConditionalRenderingDemo.classic.title')}
        subtitle={t('demos.ConditionalRenderingDemo.classic.subtitle')}
        footer={t('demos.ConditionalRenderingDemo.classic.footer')}
      >
        {isLoggedIn ? (
          <Dashboard name={user} onLogout={() => setUser(null)} />
        ) : (
          <Login onLogin={setUser} />
        )}

        {isLoggedIn && (
          <p className="mt-3 text-sm text-cyan-700 dark:text-cyan-400">
            {t('demos.ConditionalRenderingDemo.classic.andNote')}
          </p>
        )}
      </Card>

      <Card
        title={t('demos.ConditionalRenderingDemo.three.title')}
        subtitle={t('demos.ConditionalRenderingDemo.three.subtitle')}
        footer={t('demos.ConditionalRenderingDemo.three.footer')}
      >
        <div className="flex flex-wrap gap-2">
          {TECHNIQUES.map((item) => (
            <button
              key={item.id}
              onClick={() => setTechnique(item.id)}
              aria-pressed={technique === item.id}
              className={`rounded-lg px-3 py-1.5 font-mono text-xs transition ${
                technique === item.id
                  ? 'bg-cyan-600 text-white'
                  : 'border border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button size="sm" onClick={() => setIsOpen((prev) => !prev)}>
            {t(
              isOpen
                ? 'demos.ConditionalRenderingDemo.three.closePanel'
                : 'demos.ConditionalRenderingDemo.three.openPanel',
            )}
          </Button>
          <span className="font-mono text-xs text-slate-500 dark:text-slate-400">
            isOpen = {String(isOpen)}
          </span>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          <div>
            <p className="mb-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              {t('demos.ConditionalRenderingDemo.three.result')}
            </p>
            <div className="rounded-lg border border-slate-200 p-4 dark:border-slate-700">
              {technique === 'ternary' &&
                (isOpen ? (
                  <span className="font-mono text-sm text-emerald-600 dark:text-emerald-400">
                    &lt;Panel /&gt;
                  </span>
                ) : (
                  <span className="font-mono text-sm text-slate-400">
                    &lt;Placeholder /&gt;
                  </span>
                ))}

              {technique === 'and' &&
                (isOpen && (
                  <span className="font-mono text-sm text-emerald-600 dark:text-emerald-400">
                    &lt;Panel /&gt;
                  </span>
                ))}

              {technique === 'null' && <NothingToShow show={isOpen} />}
            </div>
          </div>
          <div>
            <p className="mb-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              {t('demos.ConditionalRenderingDemo.three.source')}
            </p>
            <pre className="overflow-x-auto rounded-lg bg-slate-950 p-3 font-mono text-xs text-slate-200">
              {active.code}
            </pre>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              {t(active.noteKey)}
            </p>
          </div>
        </div>
      </Card>

      <Card
        title={t('demos.ConditionalRenderingDemo.gotcha.title')}
        subtitle={t('demos.ConditionalRenderingDemo.gotcha.subtitle')}
        footer={t('demos.ConditionalRenderingDemo.gotcha.footer')}
      >
        <div className="flex flex-wrap items-center gap-2">
          {[0, 1, 2].map((value) => (
            <Button
              key={value}
              size="sm"
              variant={count === value ? 'primary' : 'secondary'}
              onClick={() => setCount(value)}
            >
              count = {value}
            </Button>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 dark:border-rose-500/30 dark:bg-rose-500/10">
            <p className="font-mono text-xs text-rose-800 dark:text-rose-300">
              &#123;count &amp;&amp; &lt;Badge /&gt;&#125;
            </p>
            <div className="mt-2 min-h-6 text-sm">
              {count !== 0 && (
                <span className="rounded-md bg-slate-800 px-2 py-1 font-mono text-xs text-slate-100">
                  {t('demos.ConditionalRenderingDemo.gotcha.items', { count })}
                </span>
              )}
            </div>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
              {t('demos.ConditionalRenderingDemo.gotcha.zeroRenders')}{' '}
              <code className="font-mono">0</code>
              {t('demos.ConditionalRenderingDemo.gotcha.insteadOfNothing')}
            </p>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-500/30 dark:bg-emerald-500/10">
            <p className="font-mono text-xs text-emerald-800 dark:text-emerald-300">
              &#123;count &gt; 0 &amp;&amp; &lt;Badge /&gt;&#125;
            </p>
            <div className="mt-2 min-h-6 text-sm">
              {count > 0 && (
                <span className="rounded-md bg-slate-800 px-2 py-1 font-mono text-xs text-slate-100">
                  {t('demos.ConditionalRenderingDemo.gotcha.items', { count })}
                </span>
              )}
            </div>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">
              {t('demos.ConditionalRenderingDemo.gotcha.extraComparison')}
            </p>
          </div>
        </div>
      </Card>

      <Card
        title={t('demos.ConditionalRenderingDemo.readable.title')}
        subtitle={t('demos.ConditionalRenderingDemo.readable.subtitle')}
      >
        <div className="space-y-3">
          <div>
            <p className="mb-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
              {t('demos.ConditionalRenderingDemo.readable.hard')}
            </p>
            <pre className="overflow-x-auto rounded-lg bg-slate-950 p-3 font-mono text-xs text-slate-200">
{`{isAdmin
  ? user ? <AdminPanel /> : <GuestNotice />
  : <Login />}`}
            </pre>
          </div>
          <div>
            <p className="mb-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {t('demos.ConditionalRenderingDemo.readable.easier')}
            </p>
            <pre className="overflow-x-auto rounded-lg bg-slate-950 p-3 font-mono text-xs text-slate-200">
{`{isAdmin && (user ? <AdminPanel /> : <GuestNotice />)}
{!isAdmin && <Login />}`}
            </pre>
          </div>
        </div>
      </Card>
    </div>
  )
}
