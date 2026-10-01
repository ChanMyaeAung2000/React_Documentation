import { useTranslation } from 'react-i18next'
import Card from '../components/ui/Card.jsx'

/**
 * Shown until a lesson's demo component exists.
 * It keeps the lesson page complete and makes the next step obvious.
 */
export default function DemoPlaceholder({ componentName }) {
  const { t } = useTranslation()

  return (
    <Card
      title={t('concept.demo')}
      subtitle={`${componentName}.jsx`}
      className="border-dashed"
    >
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <span
          aria-hidden="true"
          className="grid size-11 place-items-center rounded-full bg-slate-100 text-lg dark:bg-slate-800"
        >
          🛠️
        </span>
        <div>
          <p className="font-mono text-sm text-slate-700 dark:text-slate-200">
            {componentName}
          </p>
          <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
            {t('demo.placeholderBody', { name: componentName })}
          </p>
        </div>
      </div>
    </Card>
  )
}