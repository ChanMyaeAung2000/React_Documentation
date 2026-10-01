import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Badge from '../../components/ui/Badge.jsx'
// The lesson's own component below is also called Card, so the shared panel is
// imported under a different name to keep the example faithful to the docs.
import Layout from '../../components/ui/Card.jsx'
import CodeBlock from '../../components/ui/CodeBlock.jsx'
import Input from '../../components/ui/Input.jsx'

/*
 * ---------------------------------------------------------------------------
 * 1.4 Children
 *
 * JSX placed between a component's tags arrives as props.children. The
 * component does not need to know what is inside — it just decides where it
 * goes. That is what makes a layout component reusable.
 * ---------------------------------------------------------------------------
 */

function Card({ title, children }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
      {title && (
        <p className="mb-2 font-mono text-[11px] text-slate-400">{title}</p>
      )}
      {children}
    </div>
  )
}

/**
 * Each case pairs the JSX you would write with the node it produces.
 *
 * `label` is a translation key and `node` is a function of `t` rather than a
 * value, because the rendered copy changes with the language while the code
 * sample beside it never does.
 */
const EXAMPLES = [
  {
    id: 'element',
    label: 'demos.ChildrenDemo.examples.element.label',
    code: `<Card title="Greeting">
  <p>Hello React</p>
</Card>`,
    node: (t) => (
      <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
        {t('demos.ChildrenDemo.examples.element.node')}
      </p>
    ),
  },
  {
    id: 'many',
    label: 'demos.ChildrenDemo.examples.many.label',
    code: `<Card title="List">
  <p>Hello React</p>
  <button>Click me</button>
</Card>`,
    node: (t) => (
      <div className="space-y-2">
        <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
          {t('demos.ChildrenDemo.examples.element.node')}
        </p>
        <button className="rounded-lg bg-cyan-600 px-3 py-1.5 text-sm font-medium text-white">
          {t('demos.ChildrenDemo.examples.many.button')}
        </button>
      </div>
    ),
  },
  {
    id: 'text',
    label: 'demos.ChildrenDemo.examples.text.label',
    code: `<Card title="Text">
  Just a string
</Card>`,
    node: (t) => (
      <span className="text-slate-700 dark:text-slate-200">
        {t('demos.ChildrenDemo.examples.text.node')}
      </span>
    ),
  },
  {
    id: 'expression',
    label: 'demos.ChildrenDemo.examples.expression.label',
    code: `<Card title="Expression">
  {2 + 3} is {2 + 3}
</Card>`,
    node: (t) => (
      <span className="text-slate-700 dark:text-slate-200">
        {'{2 + 3}'} {t('demos.ChildrenDemo.examples.expression.is')}{' '}
        <Badge level="Intermediate">5</Badge>
      </span>
    ),
  },
  {
    id: 'nothing',
    label: 'demos.ChildrenDemo.examples.nothing.label',
    code: `<Card title="Empty" />`,
    node: (t) => (
      <span className="text-slate-400">
        {t('demos.ChildrenDemo.examples.nothing.node')}
      </span>
    ),
  },
]

export default function ChildrenDemo() {
  const { t } = useTranslation()
  const [example, setExample] = useState('element')
  const [text, setText] = useState('Hello from the parent')
  const active = EXAMPLES.find((item) => item.id === example) ?? EXAMPLES[0]

  return (
    <div className="space-y-4">
      <Layout
        title={t('demos.ChildrenDemo.kinds.title')}
        subtitle={t('demos.ChildrenDemo.kinds.subtitle')}
      >
        <div className="flex flex-wrap gap-2">
          {EXAMPLES.map((item) => (
            <button
              key={item.id}
              onClick={() => setExample(item.id)}
              aria-pressed={example === item.id}
              className={`rounded-lg px-3 py-1.5 text-sm transition ${
                example === item.id
                  ? 'bg-cyan-600 text-white'
                  : 'border border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800'
              }`}
            >
              {t(item.label)}
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          <div>
            <p className="mb-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              {t('demos.ChildrenDemo.kinds.result')}
            </p>
            <Card title="Greeting">{active.node(t)}</Card>
          </div>
          <div>
            <p className="mb-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              {t('demos.ChildrenDemo.kinds.youWrote')}
            </p>
            <CodeBlock filename="children" code={active.code} />
          </div>
        </div>
      </Layout>

      <Layout
        title={t('demos.ChildrenDemo.own.title')}
        subtitle={t('demos.ChildrenDemo.own.subtitle')}
        footer={t('demos.ChildrenDemo.own.footer')}
      >
        <Input
          id="children-text"
          label={t('demos.ChildrenDemo.own.label')}
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder={t('demos.ChildrenDemo.own.placeholder')}
        />
        <div className="mt-3">
          <Card title="Greeting">
            <p className="text-slate-700 dark:text-slate-200">{text}</p>
          </Card>
        </div>
      </Layout>

      <Layout
        title={t('demos.ChildrenDemo.why.title')}
        subtitle={t('demos.ChildrenDemo.why.subtitle')}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <p className="mb-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              {t('demos.ChildrenDemo.why.without')}
            </p>
            <CodeBlock
              filename="Alert.jsx"
              code={`function Alert({ message }) {
  return <div>{message}</div>;
}

// A new prop for every new kind of content.
<Alert message="Saved" />
<Alert message="Deleted" />
<Alert message={<Error />} />`}
            />
          </div>
          <div>
            <p className="mb-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
              {t('demos.ChildrenDemo.why.with')}
            </p>
            <CodeBlock
              filename="Alert.jsx"
              code={`function Alert({ children }) {
  return <div>{children}</div>;
}

// One component, any content.
<Alert>Saved</Alert>
<Alert><Error /></Alert>
<Alert><b>3</b> errors</Alert>`}
            />
          </div>
        </div>
      </Layout>
    </div>
  )
}
