import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Badge from '../../components/ui/Badge.jsx'
import Card from '../../components/ui/Card.jsx'
import CodeBlock from '../../components/ui/CodeBlock.jsx'
import Input from '../../components/ui/Input.jsx'

/*
 * ---------------------------------------------------------------------------
 * 2.4 Array State
 *
 * Arrays are where "replace, never mutate" bites hardest. push and splice
 * change the array you already have, and React compares references — so nothing
 * on the screen moves. Spread, filter and map all return a new array.
 * ---------------------------------------------------------------------------
 */

/** Editable text for one entry. */
function Row({ item, onRename, onRemove }) {
  const { t } = useTranslation()

  return (
    <li className="flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1.5 dark:bg-slate-800">
      <span className="w-7 shrink-0 font-mono text-xs text-slate-400">{item.id}</span>
      <input
        value={item.text}
        onChange={(event) => onRename(event.target.value)}
        aria-label={t('demos.ArrayStateDemo.row.ariaLabel', { id: item.id })}
        className="min-w-0 flex-1 rounded border border-slate-300 bg-white px-2 py-1 text-sm dark:border-slate-600 dark:bg-slate-900"
      />
      <button
        type="button"
        onClick={onRemove}
        className="rounded px-2 py-1 text-xs text-rose-600 transition hover:bg-rose-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 dark:text-rose-400 dark:hover:bg-rose-500/10"
      >
        {t('demos.ArrayStateDemo.row.remove')}
      </button>
    </li>
  )
}

/** push against spread, on the same starting data. */
function MutationDemo() {
  const { t } = useTranslation()
  const [broken, setBroken] = useState([1, 2, 3])
  const [safe, setSafe] = useState([1, 2, 3])

  function pushInPlace() {
    // oxlint-disable-next-line react/immutability -- mutating on purpose: this
    // is the mistake the card exists to demonstrate.
    broken.push(broken.length + 1)
    setBroken(broken)
  }

  return (
    <div className="grid gap-3 lg:grid-cols-2">
      <div className="rounded-lg border border-rose-300 bg-rose-50 p-3 dark:border-rose-500/40 dark:bg-rose-500/10">
        <p className="font-mono text-xs font-medium text-rose-800 dark:text-rose-300">
          items.push(4); setItems(items)
        </p>
        <p className="mt-2 font-mono text-sm text-slate-900 dark:text-slate-100">
          [{broken.join(', ')}]
        </p>
        <div className="mt-3 flex gap-2">
          <button
            type="button"
            onClick={pushInPlace}
            className="flex-1 rounded-md bg-rose-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-rose-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
          >
            {t('demos.ArrayStateDemo.mutation.pushThenSet')}
          </button>
          <button
            type="button"
            onClick={() => setBroken([...broken])}
            className="flex-1 rounded-md border border-rose-300 px-3 py-1.5 text-sm transition hover:bg-rose-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 dark:border-rose-500/40 dark:hover:bg-rose-500/10"
          >
            {t('demos.ArrayStateDemo.mutation.setACopy')}
          </button>
        </div>
        <p className="mt-2 text-xs text-rose-800 dark:text-rose-300">
          {t('demos.ArrayStateDemo.mutation.noteBefore')}{' '}
          <code className="font-mono">push</code>{' '}
          {t('demos.ArrayStateDemo.mutation.noteMiddle')}{' '}
          <code className="font-mono">set a copy</code>{' '}
          {t('demos.ArrayStateDemo.mutation.noteAfter')}
        </p>
      </div>

      <div className="rounded-lg border border-emerald-300 bg-emerald-50 p-3 dark:border-emerald-500/40 dark:bg-emerald-500/10">
        <p className="font-mono text-xs font-medium text-emerald-800 dark:text-emerald-300">
          setItems(prev =&gt; [...prev, prev.length + 1])
        </p>
        <p className="mt-2 font-mono text-sm text-slate-900 dark:text-slate-100">
          [{safe.join(', ')}]
        </p>
        <button
          type="button"
          onClick={() => setSafe((prev) => [...prev, prev.length + 1])}
          className="mt-3 w-full rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-emerald-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
        >
          {t('demos.ArrayStateDemo.mutation.append')}
        </button>
        <p className="mt-2 text-xs text-emerald-800 dark:text-emerald-300">
          {t('demos.ArrayStateDemo.mutation.noteOk')}
        </p>
      </div>
    </div>
  )
}

/**
 * Two lists holding the same data, keyed differently. With index keys, React
 * reuses the DOM node that belonged to a different item, so the input you
 * started typing into stops being the row you think it is.
 */
function KeyDemo() {
  const { t } = useTranslation()

  // Deliberately not translated. A useState initialiser runs once on mount, so
  // translated seed text would be frozen in whichever language was active when
  // the page loaded — worse than staying English when the reader switches.
  const seed = () => [
    { id: 10, text: 'first' },
    { id: 11, text: 'second' },
    { id: 12, text: 'third' },
  ]

  const [byId, setById] = useState(seed)
  const [byIndex, setByIndex] = useState(seed)

  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-500 dark:text-slate-400">
        {t('demos.ArrayStateDemo.keys.instruction')}
      </p>

      <div className="grid gap-3 lg:grid-cols-2">
        <div>
          <p className="mb-1.5 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-400">
            key=&#123;item.id&#125;
          </p>
          <ul className="space-y-1.5">
            {byId.map((item) => (
              <Row
                key={item.id}
                item={item}
                onRename={(text) =>
                  setById((prev) =>
                    prev.map((entry) =>
                      entry.id === item.id ? { ...entry, text } : entry,
                    ),
                  )
                }
                onRemove={() =>
                  setById((prev) => prev.filter((entry) => entry.id !== item.id))
                }
              />
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-1.5 font-mono text-xs font-medium text-rose-700 dark:text-rose-400">
            key=&#123;index&#125;
          </p>
          <ul className="space-y-1.5">
            {byIndex.map((item, index) => (
              <Row
                key={index}
                item={item}
                onRename={(text) =>
                  setByIndex((prev) =>
                    prev.map((entry, i) => (i === index ? { ...entry, text } : entry)),
                  )
                }
                onRemove={() => setByIndex((prev) => prev.filter((_, i) => i !== index))}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function ArrayStateDemo() {
  const { t } = useTranslation()
  const [items, setItems] = useState([
    { id: 1, text: 'Apple' },
    { id: 2, text: 'Orange' },
    { id: 3, text: 'Banana' },
  ])
  const [draft, setDraft] = useState('')

  // A ref is the right tool for "a running counter that is not part of the UI".
  const lastId = useRef(3)
  const freshId = () => {
    lastId.current += 1
    return lastId.current
  }

  const add = () => {
    const text = draft.trim()
    if (!text) return
    setItems((prev) => [...prev, { id: freshId(), text }])
    setDraft('')
  }

  const remove = (id) => setItems((prev) => prev.filter((item) => item.id !== id))

  return (
    <div className="space-y-4">
      <Card
        title={t('demos.ArrayStateDemo.list.title')}
        subtitle={t('demos.ArrayStateDemo.list.subtitle')}
        footer={t('demos.ArrayStateDemo.list.footer')}
      >
        <div className="flex flex-wrap gap-2">
          <div className="min-w-40 flex-1">
            <Input
              id="array-draft"
              label={t('demos.ArrayStateDemo.list.newItem')}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault()
                  add()
                }
              }}
              placeholder="Apple"
            />
          </div>
          <button
            type="button"
            onClick={add}
            className="self-end rounded-lg bg-cyan-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-cyan-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
          >
            {t('demos.ArrayStateDemo.list.add')}
          </button>
          <button
            type="button"
            onClick={() => setItems((prev) => prev.filter((_, i) => i !== 1))}
            className="self-end rounded-lg border border-slate-300 px-3 py-2 text-sm transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:border-slate-700 dark:hover:bg-slate-700"
          >
            {t('demos.ArrayStateDemo.list.dropSecond')}
          </button>
          <button
            type="button"
            onClick={() => setItems([])}
            className="self-end rounded-lg px-3 py-2 text-sm text-slate-500 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
          >
            {t('demos.ArrayStateDemo.list.clear')}
          </button>
        </div>

        {items.length === 0 ? (
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            {t('demos.ArrayStateDemo.list.empty')}
          </p>
        ) : (
          <ol className="mt-4 space-y-1.5">
            {items.map((item, index) => (
              <li
                key={item.id}
                className="flex items-center gap-3 rounded-md bg-slate-100 px-3 py-2 dark:bg-slate-800"
              >
                <span className="w-6 shrink-0 font-mono text-xs text-slate-400">
                  {index + 1}.
                </span>
                <span className="flex-1 text-sm text-slate-800 dark:text-slate-100">
                  {item.text}
                </span>
                <span className="font-mono text-[11px] text-slate-400">id {item.id}</span>
                <button
                  type="button"
                  onClick={() => remove(item.id)}
                  className="rounded px-2 py-1 text-xs text-rose-600 transition hover:bg-rose-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 dark:text-rose-400 dark:hover:bg-rose-500/10"
                >
                  {t('demos.ArrayStateDemo.row.remove')}
                </button>
              </li>
            ))}
          </ol>
        )}
      </Card>

      <Card
        title={t('demos.ArrayStateDemo.mutation.title')}
        subtitle={t('demos.ArrayStateDemo.mutation.subtitle')}
        footer={t('demos.ArrayStateDemo.mutation.footer')}
      >
        <MutationDemo />
      </Card>

      <Card
        title={t('demos.ArrayStateDemo.operations.title')}
        subtitle={t('demos.ArrayStateDemo.operations.subtitle')}
      >
        <CodeBlock
          filename="ArrayStateDemo.jsx"
          code={`// Add — keeps every existing item and appends one more
setItems((prev) => [...prev, { id: freshId(), text }]);

// Remove — filter builds a new array without the entry you do not want
setItems((prev) => prev.filter((item) => item.id !== id));

// Update — map replaces one entry and copies the rest
setItems((prev) =>
  prev.map((item) => (item.id === id ? { ...item, text } : item)),
);

// Reordering is the same idea: a new array in the new order
setItems((prev) => [...prev].reverse());
setItems((prev) => [...prev].sort((a, b) => a.text.localeCompare(b.text)));

// All of these change the array you were given, so React never notices:
//   items.push(x)      items.splice(i, 1)      items.sort()
//   items.reverse()    items.pop()             items[0] = x`}
        />
      </Card>

      <Card
        title={t('demos.ArrayStateDemo.keys.title')}
        subtitle={t('demos.ArrayStateDemo.keys.subtitle')}
        footer={t('demos.ArrayStateDemo.keys.footer')}
      >
        <KeyDemo />
      </Card>

      <Card
        title={t('demos.ArrayStateDemo.quiz.title')}
        subtitle={t('demos.ArrayStateDemo.quiz.subtitle')}
      >
        <div className="space-y-2 text-sm">
          {[
            ['setItems([...items, item])', true],
            ['setItems(items.push(item))', false],
            ['setItems(items.filter(f))', true],
            ['items.sort()', false],
            ['setItems([...items].sort(cmp))', true],
            ['setItems(() => 0)', true],
          ].map(([code, safe]) => (
            <div
              key={code}
              className="flex flex-wrap items-center justify-between gap-2 rounded-md bg-slate-100 px-3 py-2 font-mono text-xs dark:bg-slate-800"
            >
              <span className="text-slate-800 dark:text-slate-100">{code}</span>
              <Badge level={safe ? 'Beginner' : 'Advanced'}>
                {t(
                  safe
                    ? 'demos.ArrayStateDemo.quiz.safe'
                    : 'demos.ArrayStateDemo.quiz.unsafe',
                )}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
