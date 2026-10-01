import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Badge from '../../components/ui/Badge.jsx'
import Card from '../../components/ui/Card.jsx'
import CodeBlock from '../../components/ui/CodeBlock.jsx'
import Input from '../../components/ui/Input.jsx'

/*
 * ---------------------------------------------------------------------------
 * 2.2 Multiple State
 *
 * A component can call useState as many times as it likes. Each call is its own
 * slot with its own value and setter, and React applies them all in one go, so
 * one click never costs three renders.
 * ---------------------------------------------------------------------------
 */

/** One labelled state slot with its own setter. */
function Slot({ name, value, onChange, children }) {
  const { t } = useTranslation()

  return (
    <div className="flex-1 rounded-lg border border-slate-200 p-3 dark:border-slate-700">
      <p className="font-mono text-[11px] text-slate-400">{name}</p>
      {children}
      <p className="mt-2 font-mono text-xs break-all text-slate-600 dark:text-slate-300">
        value: {JSON.stringify(value)}
      </p>
      <button
        type="button"
        onClick={onChange}
        className="mt-2 w-full rounded-md border border-slate-300 px-2 py-1 text-xs transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-slate-700 dark:hover:bg-slate-700"
      >
        {t('demos.MultipleStateDemo.slot.update')}
      </button>
    </div>
  )
}

/**
 * Four setters fired from a single handler. All four values land in the same
 * paint — React collects every update from one event and applies them before
 * touching the DOM once.
 */
function BatchingDemo() {
  const { t } = useTranslation()
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [tags, setTags] = useState([])
  const [history, setHistory] = useState([])

  function updateEverything() {
    setCount((prev) => prev + 1)
    setName('updated')
    setTags((prev) => [...prev, `tag-${prev.length + 1}`])
    setCount((prev) => prev + 1)
    setHistory((prev) => [...prev, new Date().toTimeString().slice(3, 8)])
  }

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={updateEverything}
        className="rounded-lg bg-cyan-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
      >
        {t('demos.MultipleStateDemo.batching.trigger')}
      </button>

      <div className="grid gap-2 sm:grid-cols-4">
        <div className="rounded-lg bg-slate-100 p-3 font-mono text-xs dark:bg-slate-800">
          count = <strong className="text-base">{count}</strong>
        </div>
        <div className="rounded-lg bg-slate-100 p-3 font-mono text-xs dark:bg-slate-800">
          name = <strong>{name || '""'}</strong>
        </div>
        <div className="rounded-lg bg-slate-100 p-3 font-mono text-xs dark:bg-slate-800">
          tags = <strong>{tags.length}</strong>
        </div>
        <div className="rounded-lg bg-slate-100 p-3 font-mono text-xs dark:bg-slate-800">
          presses = <strong>{history.length}</strong>
        </div>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400">
        {t('demos.MultipleStateDemo.batching.explainBefore')}{' '}
        <strong>{t('demos.MultipleStateDemo.batching.two')}</strong>{' '}
        {t('demos.MultipleStateDemo.batching.explainAfter')}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <Badge level="Intermediate">
          {t('demos.MultipleStateDemo.batching.presses')}: {history.join(', ')}
        </Badge>
      </div>
    </div>
  )
}

export default function MultipleStateDemo() {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [isStudent, setIsStudent] = useState(false)

  return (
    <div className="space-y-4">
      <Card
        title={t('demos.MultipleStateDemo.slots.title')}
        subtitle={t('demos.MultipleStateDemo.slots.subtitle')}
        footer={t('demos.MultipleStateDemo.slots.footer')}
      >
        <Input
          id="multi-name"
          label={t('demos.MultipleStateDemo.slots.nameLabel')}
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="John"
        />

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Slot
            name="[name, setName]"
            value={name}
            onChange={() => setName(name === '' ? 'set' : '')}
          >
            <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
              {name || t('demos.MultipleStateDemo.slots.empty')}
            </p>
          </Slot>

          <Slot
            name="[age, setAge]"
            value={age}
            onChange={() => setAge((prev) => prev + 1)}
          >
            <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
              {age}
            </p>
          </Slot>

          <Slot
            name="[isStudent, setIsStudent]"
            value={isStudent}
            onChange={() => setIsStudent((prev) => !prev)}
          >
            <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
              {String(isStudent)}
            </p>
          </Slot>
        </div>
      </Card>

      <Card
        title={t('demos.MultipleStateDemo.batching.title')}
        subtitle={t('demos.MultipleStateDemo.batching.subtitle')}
        footer={t('demos.MultipleStateDemo.batching.footer')}
      >
        <BatchingDemo />
      </Card>

      <Card
        title={t('demos.MultipleStateDemo.order.title')}
        subtitle={t('demos.MultipleStateDemo.order.subtitle')}
        footer={t('demos.MultipleStateDemo.order.footer')}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <CodeBlock
            filename={t('demos.MultipleStateDemo.order.filenameThisWay')}
            code={`const [name, setName] = useState("John");
const [age, setAge] = useState(30);

// name === "John", age === 30`}
          />
          <CodeBlock
            filename={t('demos.MultipleStateDemo.order.filenameSwapped')}
            code={`const [age, setAge] = useState(30);
const [name, setName] = useState("John");

// name === 30, age === "John"
// the destructuring names are just labels`}
          />
        </div>
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          {t('demos.MultipleStateDemo.order.whyBefore')}{' '}
          <code className="font-mono">if</code> {t('demos.MultipleStateDemo.order.whyAfter')}
        </p>
      </Card>

      <Card
        title={t('demos.MultipleStateDemo.enough.title')}
        subtitle={t('demos.MultipleStateDemo.enough.subtitle')}
        footer={t('demos.MultipleStateDemo.enough.footer')}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 dark:border-rose-500/30 dark:bg-rose-500/10">
            <p className="text-xs font-medium text-rose-800 dark:text-rose-300">
              {t('demos.MultipleStateDemo.enough.threeSlots')}
            </p>
            <CodeBlock
              filename={t('demos.MultipleStateDemo.enough.scattered')}
              code={`const [first, setFirst] = useState("");
const [last, setLast] = useState("");
const [city, setCity] = useState("");

// A user with no last name and no city is
// a half-written form. Nothing stops that.`}
            />
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-500/30 dark:bg-emerald-500/10">
            <p className="text-xs font-medium text-emerald-800 dark:text-emerald-300">
              {t('demos.MultipleStateDemo.enough.oneSlot')}
            </p>
            <CodeBlock
              filename={t('demos.MultipleStateDemo.enough.together')}
              code={`const [user, setUser] = useState({
  first: "",
  last: "",
  city: "",
});

// One value, one render, one thing to save.`}
            />
          </div>
        </div>
      </Card>
    </div>
  )
}
