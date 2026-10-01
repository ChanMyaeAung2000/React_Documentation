import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import Input from '../../components/ui/Input.jsx'

/*
 * ---------------------------------------------------------------------------
 * 1. The child components
 *
 * Each one is an ordinary function that returns JSX. The capital first letter
 * is what tells React "this is a component, render it" — <Header /> means
 * "call Header() and show the result", <header /> would mean a plain HTML tag.
 * ---------------------------------------------------------------------------
 */

function Header({ title }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800">
      <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </p>
      <p className="mt-0.5 font-mono text-[11px] text-slate-400">Header</p>
    </div>
  )
}

function UserCard({ name, role }) {
  const initial = name.trim().charAt(0).toUpperCase()

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-800">
      <div className="flex items-center gap-2.5">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300">
          {initial || '?'}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-slate-900 dark:text-slate-100">
            {name || '—'}
          </p>
          <p className="truncate text-xs text-slate-500 dark:text-slate-400">{role}</p>
        </div>
      </div>
      <p className="mt-2 font-mono text-[11px] text-slate-400">UserCard</p>
    </div>
  )
}

function Footer({ children }) {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 p-3 dark:border-slate-700">
      <p className="text-xs text-slate-600 dark:text-slate-300">{children}</p>
      <p className="mt-1 font-mono text-[11px] text-slate-400">Footer</p>
    </div>
  )
}

/* ---------------------------------------------------------------------------
 * 2. The composition list
 *
 * The parent decides which children to render and in what order. Turning a
 * row off here removes that component from the output below — that is what
 * composition means: the parent builds the layout, the children stay simple.
 * ---------------------------------------------------------------------------
 */

// `label` is the JSX tag itself, so it is the same in every language.
const PARTS = [
  { id: 'header', label: '<Header />' },
  { id: 'user', label: '<UserCard />' },
  { id: 'footer', label: '<Footer />' },
]

/*
 * ---------------------------------------------------------------------------
 * 3. The parent component — the only piece with state in it.
 *
 * Everything above is reusable on its own. This component owns the data, hands
 * the parts it needs down as props, and arranges them. The children know
 * nothing about each other or about this file.
 * ---------------------------------------------------------------------------
 */

export default function ComponentsDemo() {
  const { t } = useTranslation()
  const [name, setName] = useState('John')
  const [role, setRole] = useState('Frontend Developer')
  const [hidden, setHidden] = useState([])

  function togglePart(id) {
    setHidden((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    )
  }

  const isVisible = (id) => !hidden.includes(id)

  return (
    <div className="space-y-4">
      <Card
        title={t('demos.ComponentsDemo.tree.title')}
        subtitle={t('demos.ComponentsDemo.tree.subtitle')}
      >
        <div className="rounded-lg bg-slate-50 p-3 font-mono text-xs dark:bg-slate-950/60">
          <p className="font-semibold text-slate-700 dark:text-slate-200">
            ComponentsDemo
            <span className="ml-2 font-sans text-[11px] font-normal text-slate-400">
              {t('demos.ComponentsDemo.tree.parent')}
            </span>
          </p>
          <ul className="mt-1.5 ml-2 space-y-1 border-l border-slate-300 pl-4 dark:border-slate-700">
            {PARTS.map((part) => (
              <li
                key={part.id}
                className={isVisible(part.id) ? 'text-cyan-700 dark:text-cyan-400' : 'text-slate-400 line-through dark:text-slate-600'}
              >
                {part.label}
                <span className="ml-2 font-sans text-[11px]">
                  {isVisible(part.id)
                    ? t('demos.ComponentsDemo.tree.rendered')
                    : t('demos.ComponentsDemo.tree.notRendered')}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Card>

      <Card
        title={t('demos.ComponentsDemo.output.title')}
        subtitle={t('demos.ComponentsDemo.output.subtitle')}
      >
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {PARTS.map((part) => (
              <Button
                key={part.id}
                size="sm"
                variant={isVisible(part.id) ? 'primary' : 'secondary'}
                onClick={() => togglePart(part.id)}
                aria-pressed={isVisible(part.id)}
              >
                {t(
                  isVisible(part.id)
                    ? 'demos.ComponentsDemo.output.hide'
                    : 'demos.ComponentsDemo.output.show',
                )}{' '}
                {part.label}
              </Button>
            ))}
          </div>

          <div className="space-y-2">
            {isVisible('header') && <Header title={t('app.name')} />}

            {isVisible('user') && <UserCard name={name} role={role} />}

            {isVisible('footer') && (
              <Footer>
                {t('demos.ComponentsDemo.output.composedBy')}{' '}
                <span className="font-mono">ComponentsDemo</span>
              </Footer>
            )}

            {hidden.length === PARTS.length && (
              <p className="rounded-lg border border-dashed border-slate-300 p-3 text-center text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
                {t('demos.ComponentsDemo.output.empty')}
              </p>
            )}
          </div>
        </div>
      </Card>

      <Card
        title={t('demos.ComponentsDemo.props.title')}
        subtitle={t('demos.ComponentsDemo.props.subtitle')}
        footer={t('demos.ComponentsDemo.props.footer')}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Input
            id="demo-name"
            label={t('demos.ComponentsDemo.props.name')}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="John"
          />
          <Input
            id="demo-role"
            label={t('demos.ComponentsDemo.props.role')}
            value={role}
            onChange={(event) => setRole(event.target.value)}
            placeholder="Frontend Developer"
          />
        </div>
        <p className="mt-3 font-mono text-xs text-slate-500 dark:text-slate-400">
          &lt;UserCard name="{name}" role="{role}" /&gt;
        </p>
      </Card>
    </div>
  )
}
