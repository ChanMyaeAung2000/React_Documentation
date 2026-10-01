import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/ui/Button.jsx'
import Card from '../../components/ui/Card.jsx'
import Input from '../../components/ui/Input.jsx'

/*
 * ---------------------------------------------------------------------------
 * 1.5 Events
 *
 * React handles events through props named onXxx. The function you pass is
 * called with a SyntheticEvent — React's normalised wrapper around the browser
 * event, which is why the same code works in every browser.
 * ---------------------------------------------------------------------------
 */

/**
 * Copies the fields worth showing out of a SyntheticEvent.
 *
 * React does not pool events in v17+, but copying is still the habit worth
 * teaching: grab what you need inside the handler rather than storing the
 * event object itself.
 */
function describeEvent(event) {
  if (!event) return null

  return {
    type: event.type,
    target: `${event.target.tagName.toLowerCase()}${
      event.target.id ? `#${event.target.id}` : ''
    }`,
    currentTarget: event.currentTarget.tagName.toLowerCase(),
    hasNativeEvent: 'nativeEvent' in event,
  }
}

/** Shows the interesting fields of whatever event was passed to a handler. */
function EventInspector({ event, label }) {
  const { t } = useTranslation()

  if (!event) {
    return (
      <p className="rounded-lg bg-slate-50 p-3 text-xs text-slate-500 dark:bg-slate-950/60 dark:text-slate-400">
        {label}: {t('demos.EventsDemo.inspector.none')}
      </p>
    )
  }

  const rows = [
    ['type', event.type],
    ['target', event.target],
    ['currentTarget', event.currentTarget],
    [
      'nativeEvent',
      t(
        event.hasNativeEvent
          ? 'demos.EventsDemo.inspector.present'
          : 'demos.EventsDemo.inspector.missing',
      ),
    ],
  ]

  return (
    <div className="rounded-lg bg-slate-950 p-3 font-mono text-xs">
      <p className="mb-2 text-slate-400">{label}</p>
      {rows.map(([key, value]) => (
        <p key={key} className="flex gap-2">
          <span className="w-28 shrink-0 text-cyan-400">{key}</span>
          <span className="text-slate-200">{value}</span>
        </p>
      ))}
    </div>
  )
}

export default function EventsDemo() {
  const { t } = useTranslation()
  const [clicks, setClicks] = useState(0)
  const [clickEvent, setClickEvent] = useState(null)
  const [text, setText] = useState('')
  const [changeEvent, setChangeEvent] = useState(null)
  const [submitted, setSubmitted] = useState([])
  const [greeted, setGreeted] = useState(null)
  const [bubbles, setBubbles] = useState([])

  function handleSubmit(event) {
    // Without this the browser reloads the page and the state is lost.
    event.preventDefault()
    if (!text.trim()) return
    setSubmitted((prev) => [...prev, text.trim()])
    setText('')
  }

  function resetBubbleLog() {
    setBubbles([])
  }

  return (
    <div className="space-y-4">
      <Card
        title="onClick"
        subtitle={t('demos.EventsDemo.click.subtitle')}
      >
        <div className="flex flex-wrap items-center gap-3">
          <Button
            onClick={(event) => {
              setClicks((prev) => prev + 1)
              setClickEvent(describeEvent(event))
            }}
          >
            {t('demos.EventsDemo.click.button')}
          </Button>
          <span className="text-sm text-slate-700 dark:text-slate-200">
            {t('demos.EventsDemo.click.countedBefore')}{' '}
            <strong>{clicks}</strong> {t('demos.EventsDemo.click.countedAfter')}
          </span>
          <Button variant="ghost" size="sm" onClick={() => setClicks(0)}>
            {t('demos.EventsDemo.click.reset')}
          </Button>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <div>
            <p className="mb-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              {t('demos.EventsDemo.click.handler')}
            </p>
            <pre className="overflow-x-auto rounded-lg bg-slate-950 p-3 font-mono text-xs text-slate-200">
{`onClick={(event) =>
  setClicks((prev) => prev + 1)
}`}
            </pre>
          </div>
          <EventInspector
            event={clickEvent}
            label={t('demos.EventsDemo.click.inspector')}
          />
        </div>

        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          {t('demos.EventsDemo.click.note')} <code className="font-mono">target</code>{' '}
          {t('demos.EventsDemo.click.noteIs')} <code className="font-mono">button</code>
          {t('demos.EventsDemo.click.noteNot')} <code className="font-mono">span</code>{' '}
          {t('demos.EventsDemo.click.noteEnd')}
        </p>
      </Card>

      <Card
        title="onChange"
        subtitle={t('demos.EventsDemo.change.subtitle')}
      >
        <Input
          id="events-text"
          label={t('demos.EventsDemo.change.label')}
          value={text}
          onChange={(event) => {
            setChangeEvent(describeEvent(event))
            setText(event.target.value)
          }}
          placeholder="Hello"
        />
        <p className="mt-2 font-mono text-xs text-slate-600 dark:text-slate-300">
          event.target.value = &quot;{text}&quot;
        </p>
        <div className="mt-3">
          <EventInspector
            event={changeEvent}
            label={t('demos.EventsDemo.change.inspector')}
          />
        </div>
      </Card>

      <Card
        title="onSubmit"
        subtitle={t('demos.EventsDemo.submit.subtitle')}
        footer={t('demos.EventsDemo.submit.footer')}
      >
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
          <div className="min-w-48 flex-1">
            <Input
              id="events-submit"
              label={t('demos.EventsDemo.submit.label')}
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Apple"
            />
          </div>
          <Button type="submit" className="self-end">
            {t('demos.EventsDemo.submit.button')}
          </Button>
        </form>

        <div className="mt-3">
          {submitted.length === 0 ? (
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {t('demos.EventsDemo.submit.empty')}
            </p>
          ) : (
            <ol className="space-y-1">
              {submitted.map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="rounded-md bg-slate-100 px-3 py-1.5 text-sm dark:bg-slate-800"
                >
                  {index + 1}. {item}
                </li>
              ))}
            </ol>
          )}
        </div>
      </Card>

      <Card
        title={t('demos.EventsDemo.args.title')}
        subtitle={t('demos.EventsDemo.args.subtitle')}
      >
        <div className="flex flex-wrap items-center gap-2">
          <Button size="sm" onClick={() => setGreeted('Ada')}>
            {t('demos.EventsDemo.args.withArrow')}
          </Button>
          <Button size="sm" variant="secondary" onClick={setGreeted}>
            {t('demos.EventsDemo.args.direct')}
          </Button>
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-500/30 dark:bg-emerald-500/10">
            <p className="text-xs font-medium text-emerald-800 dark:text-emerald-300">
              onClick=&#123;() =&gt; greet(&apos;Ada&apos;)&#125;
            </p>
            <p className="mt-1 text-sm text-slate-700 dark:text-slate-200">
              {greeted === 'Ada'
                ? t('demos.EventsDemo.args.hello')
                : t('demos.EventsDemo.args.prompt')}
            </p>
          </div>
          <div className="rounded-lg border border-rose-200 bg-rose-50 p-3 dark:border-rose-500/30 dark:bg-rose-500/10">
            <p className="text-xs font-medium text-rose-800 dark:text-rose-300">
              onClick=&#123;greet&#125;
            </p>
            <p className="mt-1 font-mono text-sm break-words text-slate-700 dark:text-slate-200">
              {String(greeted)}
            </p>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
              {t('demos.EventsDemo.args.noArrow')}
            </p>
          </div>
        </div>
      </Card>

      <Card
        title="stopPropagation"
        subtitle={t('demos.EventsDemo.bubble.subtitle')}
        footer={t('demos.EventsDemo.bubble.footer')}
      >
        <div className="mb-3">
          <Button size="sm" variant="ghost" onClick={resetBubbleLog}>
            {t('demos.EventsDemo.bubble.clear')}
          </Button>
        </div>

        {/* The outer <div> is only a container — the two buttons inside it are
            real, focusable controls. Pressing either one fires this handler too,
            because React handlers fire for the whole ancestor chain. */}
        <div
          onClick={() =>
            setBubbles((prev) => [...prev, 'demos.EventsDemo.bubble.outer'])
          }
          className="rounded-lg border-2 border-slate-300 p-3 dark:border-slate-700"
        >
          <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
            outer onClick
          </p>

          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={(event) => {
                // This handler runs first. Stopping propagation here means the
                // click never reaches the outer onClick above.
                event.stopPropagation()
                setBubbles((prev) => [...prev, 'demos.EventsDemo.bubble.innerStopped'])
              }}
              className="flex-1 rounded-lg border-2 border-cyan-400 bg-cyan-50 p-3 text-sm transition hover:bg-cyan-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:bg-cyan-500/10 dark:hover:bg-cyan-500/20"
            >
              {t('demos.EventsDemo.bubble.childStops')}
            </button>

            <button
              type="button"
              onClick={() =>
                setBubbles((prev) => [...prev, 'demos.EventsDemo.bubble.innerNotStopped'])
              }
              className="flex-1 rounded-lg border-2 border-slate-400 p-3 text-sm transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 dark:hover:bg-slate-700"
            >
              {t('demos.EventsDemo.bubble.childKeeps')}
            </button>
          </div>
        </div>

        <div className="mt-3 space-y-1">
          <p className="font-mono text-xs text-slate-600 dark:text-slate-300">
            {t('demos.EventsDemo.bubble.log')}{' '}
            {bubbles.length === 0 ? '—' : bubbles.map((key) => t(key)).join(' → ')}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {bubbles.length === 0
              ? t('demos.EventsDemo.bubble.prompt')
              : t('demos.EventsDemo.bubble.explanation')}
          </p>
        </div>
      </Card>
    </div>
  )
}
