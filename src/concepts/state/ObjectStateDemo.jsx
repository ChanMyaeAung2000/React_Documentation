import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Badge from '../../components/ui/Badge.jsx'
import Card from '../../components/ui/Card.jsx'
import CodeBlock from '../../components/ui/CodeBlock.jsx'
import Input from '../../components/ui/Input.jsx'

/*
 * ---------------------------------------------------------------------------
 * 2.3 Object State
 *
 * Several fields that belong together are usually clearer as one object. The
 * rule that catches everyone: state is replaced, never merged. Every update
 * has to spread the previous object and override only what changed.
 * ---------------------------------------------------------------------------
 */

const EMPTY = { name: '', age: 0, city: '', subscribed: false }

/** One row of the object inspector. `label` is a property name, not prose. */
function Field({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-3 py-2 last:border-0 dark:border-slate-700">
      <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{label}</span>
      <span className="font-mono text-xs break-all text-slate-900 dark:text-slate-100">
        {JSON.stringify(value)}
      </span>
    </div>
  )
}

/**
 * Shows both ways of updating, side by side, so the difference is visible
 * rather than described.
 */
function MergeDemo() {
  const { t } = useTranslation()
  const [safe, setSafe] = useState({ ...EMPTY, name: 'Ada', age: 36, city: 'London' })
  const [broken, setBroken] = useState({ ...EMPTY, name: 'Ada', age: 36, city: 'London' })

  return (
    <div className="grid gap-3 lg:grid-cols-2">
      <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-3 dark:border-emerald-500/40 dark:bg-emerald-500/10">
        <p className="font-mono text-xs font-medium text-emerald-800 dark:text-emerald-300">
          setUser(prev =&gt; (&#123; ...prev, age: prev.age + 1 &#125;))
        </p>

        <div className="mt-2 overflow-hidden rounded-md border border-emerald-200 bg-white dark:border-emerald-500/30 dark:bg-slate-900">
          <Field label="name" value={safe.name} />
          <Field label="age" value={safe.age} />
          <Field label="city" value={safe.city} />
        </div>

        <button
          type="button"
          onClick={() => setSafe((prev) => ({ ...prev, age: prev.age + 1 }))}
          className="mt-3 w-full rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          {t('demos.ObjectStateDemo.merge.increase')}
        </button>
        <p className="mt-2 text-xs text-emerald-800 dark:text-emerald-300">
          {t('demos.ObjectStateDemo.merge.safeNote')}
        </p>
      </div>

      <div className="rounded-lg border border-rose-300 bg-rose-50 p-3 dark:border-rose-500/40 dark:bg-rose-500/10">
        <p className="font-mono text-xs font-medium text-rose-800 dark:text-rose-300">
          setUser(&#123; age: user.age + 1 &#125;)
        </p>

        <div className="mt-2 overflow-hidden rounded-md border border-rose-200 bg-white dark:border-rose-500/30 dark:bg-slate-900">
          <Field label="name" value={broken.name} />
          <Field label="age" value={broken.age} />
          <Field label="city" value={broken.city} />
        </div>

        <button
          type="button"
          onClick={() => setBroken({ age: broken.age + 1 })}
          className="mt-3 w-full rounded-md bg-rose-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
        >
          {t('demos.ObjectStateDemo.merge.increase')}
        </button>
        <p className="mt-2 text-xs text-rose-800 dark:text-rose-300">
          {t('demos.ObjectStateDemo.merge.brokenNote')}
        </p>
      </div>
    </div>
  )
}

/**
 * Mutating the object you were handed does not update anything, because React
 * compares the old reference with the new one and sees no difference.
 */
function MutationDemo() {
  const { t } = useTranslation()
  const [items, setItems] = useState({ count: 0, hits: 0 })

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-lg border border-rose-300 bg-rose-50 p-3 dark:border-rose-500/40 dark:bg-rose-500/10">
        <p className="font-mono text-xs font-medium text-rose-800 dark:text-rose-300">
          obj.count = obj.count + 1
        </p>
        <p className="mt-2 font-mono text-xs text-slate-600 dark:text-slate-300">
          obj.count = {items.count}
        </p>
        <p className="mt-1 font-mono text-xs text-slate-600 dark:text-slate-300">
          state.count = {items.count}
        </p>
        <button
          type="button"
          onClick={() => {
            // oxlint-disable-next-line react/immutability -- deliberate: mutating state is the mistake being demonstrated
            items.count = items.count + 1
            setItems(items)
          }}
          className="mt-3 w-full rounded-md bg-rose-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
        >
          {t('demos.ObjectStateDemo.mutate.button')}
        </button>
        <p className="mt-2 text-xs text-rose-800 dark:text-rose-300">
          {t('demos.ObjectStateDemo.mutate.note')}
        </p>
      </div>

      <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-3 dark:border-emerald-500/40 dark:bg-emerald-500/10">
        <p className="font-mono text-xs font-medium text-emerald-800 dark:text-emerald-300">
          setItems(prev =&gt; (&#123; ...prev, count: prev.count + 1 &#125;))
        </p>
        <p className="mt-2 font-mono text-xs text-slate-600 dark:text-slate-300">
          new object count = {items.hits}
        </p>
        <button
          type="button"
          onClick={() => setItems((prev) => ({ ...prev, hits: prev.hits + 1 }))}
          className="mt-3 w-full rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          {t('demos.ObjectStateDemo.mutate.replace')}
        </button>
        <p className="mt-2 text-xs text-emerald-800 dark:text-emerald-300">
          {t('demos.ObjectStateDemo.mutate.noteOk')}
        </p>
      </div>
    </div>
  )
}

export default function ObjectStateDemo() {
  const { t } = useTranslation()
  const [user, setUser] = useState({ name: 'Ada', age: 36, city: 'London', subscribed: true })

  // One helper for every field, so no update can forget the spread.
  const update = (key, value) => setUser((prev) => ({ ...prev, [key]: value }))

  return (
    <div className="space-y-4">
      <Card
        title={t('demos.ObjectStateDemo.object.title')}
        subtitle={t('demos.ObjectStateDemo.object.subtitle')}
        footer={t('demos.ObjectStateDemo.object.footer')}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <Input
            id="obj-name"
            label="user.name"
            value={user.name}
            onChange={(event) => update('name', event.target.value)}
          />
          <Input
            id="obj-age"
            label="user.age"
            value={String(user.age)}
            onChange={(event) => update('age', Number(event.target.value) || 0)}
          />
          <Input
            id="obj-city"
            label="user.city"
            value={user.city}
            onChange={(event) => update('city', event.target.value)}
          />
          <div className="flex items-end">
            <label className="flex w-full cursor-pointer items-center gap-2 rounded-lg border border-slate-300 px-3 py-2 text-sm dark:border-slate-700">
              <input
                type="checkbox"
                checked={user.subscribed}
                onChange={(event) => update('subscribed', event.target.checked)}
                className="size-4 accent-cyan-600"
              />
              user.subscribed
            </label>
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between bg-slate-100 px-3 py-2 dark:bg-slate-800">
            <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
              {t('demos.ObjectStateDemo.object.stateObject')}
            </span>
            <button
              type="button"
              onClick={() => setUser({ ...EMPTY })}
              className="text-xs text-cyan-700 underline-offset-2 hover:underline dark:text-cyan-400"
            >
              {t('demos.ObjectStateDemo.object.reset')}
            </button>
          </div>
          <Field label="name" value={user.name} />
          <Field label="age" value={user.age} />
          <Field label="city" value={user.city} />
          <Field label="subscribed" value={user.subscribed} />
        </div>
      </Card>

      <Card
        title={t('demos.ObjectStateDemo.replaced.title')}
        subtitle={t('demos.ObjectStateDemo.replaced.subtitle')}
        footer={t('demos.ObjectStateDemo.replaced.footer')}
      >
        <MergeDemo />
      </Card>

      <Card
        title={t('demos.ObjectStateDemo.mutate.title')}
        subtitle={t('demos.ObjectStateDemo.mutate.subtitle')}
        footer={t('demos.ObjectStateDemo.mutate.footer')}
      >
        <MutationDemo />
      </Card>

      <Card
        title={t('demos.ObjectStateDemo.helper.title')}
        subtitle={t('demos.ObjectStateDemo.helper.subtitle')}
      >
        <CodeBlock
          filename="ObjectStateDemo.jsx"
          code={`const [user, setUser] = useState({ name: "Ada", age: 36 });

// A single helper means no caller can forget the spread.
const update = (key, value) =>
  setUser((prev) => ({ ...prev, [key]: value }));

// Fixed keys read better when there are only a few:
setUser((prev) => ({ ...prev, age: prev.age + 1 }));

// Always produce new values. This is what the immutability rule means:
//   bad   user.age = 40
//   worse user.age++;      // "no-unused-expressions"
//   good  setUser(p => ({ ...p, age: p.age + 1 }))`}
        />
      </Card>

      <Card
        title={t('demos.ObjectStateDemo.when.title')}
        subtitle={t('demos.ObjectStateDemo.when.subtitle')}
      >
        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <p>
            <Badge level="Beginner">{t('demos.ObjectStateDemo.when.oneObject')}</Badge>{' '}
            {t('demos.ObjectStateDemo.when.oneObjectBody')}
          </p>
          <p>
            <Badge level="Beginner">{t('demos.ObjectStateDemo.when.separate')}</Badge>{' '}
            {t('demos.ObjectStateDemo.when.separateBody')}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {t('demos.ObjectStateDemo.when.neither')}
          </p>
        </div>
      </Card>
    </div>
  )
}
