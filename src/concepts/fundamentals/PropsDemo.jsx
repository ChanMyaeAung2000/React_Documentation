import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import Input from '../../components/ui/Input.jsx'

/*
 * ---------------------------------------------------------------------------
 * 1.3 Props
 *
 * Props are how a parent hands data to a child. The child receives them as an
 * object, can destructure them, and must never write to them. Data goes down
 * through props and comes back up through a callback the parent passed down.
 * ---------------------------------------------------------------------------
 */

/**
 * Attempting to write to props is a mistake. In development React freezes the
 * props object, so the assignment throws instead of silently doing nothing.
 * Kept outside the component so it is plain, inspectable behaviour.
 *
 * It has to be handed the real props object — that frozen-ness is the whole
 * demonstration — so `Child` passes `props` straight through.
 *
 * The two returned strings are verbatim JavaScript errors, so they stay in
 * English whatever the interface language is.
 */
function tryToWriteProp(props) {
  try {
    props['name'] = 'Hacked'
    return 'The write succeeded — this build is not running in development mode.'
  } catch {
    return "TypeError: attempted to assign to read only property 'name'"
  }
}

function Child(props) {
  // Destructuring is only shorthand — props.name means exactly the same thing.
  const { name, role, onSuggestName } = props
  const { t } = useTranslation()
  const [message, setMessage] = useState(null)

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      <p className="font-mono text-[11px] text-slate-400">{t('demos.PropsDemo.child.badge')}</p>
      <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
        {t('demos.PropsDemo.child.greeting', { name: name || t('demos.PropsDemo.stranger') })}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => setMessage(tryToWriteProp(props))}
        >
          {t('demos.PropsDemo.child.tryWrite')}
        </Button>
        {message && (
          <span className="font-mono text-xs text-rose-600 dark:text-rose-400">
            {message}
          </span>
        )}
      </div>

      <Button size="sm" className="mt-3" onClick={() => onSuggestName('Ada')}>
        {t('demos.PropsDemo.child.askParent')}
      </Button>
    </div>
  )
}

export default function PropsDemo() {
  const { t } = useTranslation()
  const [name, setName] = useState('John')
  const [role] = useState('Student')

  return (
    <div className="space-y-4">
      <Card
        title={t('demos.PropsDemo.parent.title')}
        subtitle={t('demos.PropsDemo.parent.subtitle')}
        footer={t('demos.PropsDemo.parent.footer')}
      >
        <Input
          id="props-name"
          label={t('demos.PropsDemo.nameLabel')}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="John"
        />
      </Card>

      <div className="flex justify-center text-slate-300 dark:text-slate-600" aria-hidden="true">
        <span className="text-2xl">↓</span>
      </div>

      <div className="rounded-lg bg-slate-100 p-3 font-mono text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300">
        &lt;Child name=&quot;{name}&quot; role=&quot;{role}&quot;
        onSuggestName=&#123;setName&#125; /&gt;
      </div>

      <Card
        title={t('demos.PropsDemo.childCard.title')}
        subtitle={t('demos.PropsDemo.childCard.subtitle')}
        footer={t('demos.PropsDemo.childCard.footer')}
      >
        <Child name={name} role={role} onSuggestName={setName} />
      </Card>

      <Card
        title={t('demos.PropsDemo.flow.title')}
        subtitle={t('demos.PropsDemo.flow.subtitle')}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-cyan-200 bg-cyan-50 p-3 dark:border-cyan-500/30 dark:bg-cyan-500/10">
            <p className="text-sm font-medium text-cyan-800 dark:text-cyan-300">
              {t('demos.PropsDemo.flow.down')}
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              <code className="font-mono text-xs">name=&quot;{name}&quot;</code> —{' '}
              {t('demos.PropsDemo.flow.downBody')}
            </p>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-500/30 dark:bg-amber-500/10">
            <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
              {t('demos.PropsDemo.flow.up')}
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
              <code className="font-mono text-xs">onSuggestName(&apos;Ada&apos;)</code> —{' '}
              {t('demos.PropsDemo.flow.upBody')}
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}