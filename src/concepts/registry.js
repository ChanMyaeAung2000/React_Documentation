import { lazy } from 'react'
import DemoPlaceholder from './DemoPlaceholder.jsx'

/**
 * Maps a topic's `component` field (see data/curriculum.js) to a demo component.
 *
 * Register a demo by adding one line here — the lazy import is only fetched when
 * the lesson is opened:
 *
 *   const registry = {
 *     UseStateDemo: () => import('./state/UseStateDemo.jsx'),
 *   }
 *
 * Names that are not registered render <DemoPlaceholder /> instead.
 */
const registry = {
  ComponentsDemo: () => import('./fundamentals/ComponentsDemo.jsx'),
  JsxDemo: () => import('./fundamentals/JsxDemo.jsx'),
  PropsDemo: () => import('./fundamentals/PropsDemo.jsx'),
  ChildrenDemo: () => import('./fundamentals/ChildrenDemo.jsx'),
  EventsDemo: () => import('./fundamentals/EventsDemo.jsx'),
  ConditionalRenderingDemo: () =>
    import('./fundamentals/ConditionalRenderingDemo.jsx'),
  UseStateDemo: () => import('./state/UseStateDemo.jsx'),
  MultipleStateDemo: () => import('./state/MultipleStateDemo.jsx'),
  ObjectStateDemo: () => import('./state/ObjectStateDemo.jsx'),
  ArrayStateDemo: () => import('./state/ArrayStateDemo.jsx'),
  FunctionalUpdateDemo: () => import('./state/FunctionalUpdateDemo.jsx'),
}

const cache = new Map()

/** Returns the component for a demo name, or null when it is not built yet. */
export function getDemoComponent(name) {
  const loader = registry[name]
  if (!loader) return null

  if (!cache.has(name)) cache.set(name, lazy(loader))
  return cache.get(name)
}

export { DemoPlaceholder }
export default registry
