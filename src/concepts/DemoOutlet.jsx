import { Suspense, createElement } from 'react'
import { useTranslation } from 'react-i18next'
import Card from '../components/ui/Card.jsx'
import { DemoPlaceholder, getDemoComponent } from './registry.js'

/**
 * Renders the demo for a topic, looked up by name from the registry.
 * A lesson with no demo yet shows the placeholder instead.
 */
export default function DemoOutlet({ componentName }) {
  const { t } = useTranslation()
  const Demo = getDemoComponent(componentName)

  if (!Demo) return <DemoPlaceholder componentName={componentName} />

  return (
    <Suspense
      fallback={
        <Card title={t('concept.demo')}>
          <p className="text-sm text-slate-500 dark:text-slate-400">{t('demo.loading')}</p>
        </Card>
      }
    >
      {createElement(Demo)}
    </Suspense>
  )
}