/**
 * Single source of truth for the whole app.
 *
 * The sidebar, the search index, the home page and the topic pages all read
 * from this array, so adding a lesson means adding one object here plus one
 * demo component (see `src/concepts/registry.js`).
 *
 * Topic fields:
 *   id          unique slug, used in the URL
 *   number      display number, e.g. "2.1"
 *   title       display title
 *   description one-line summary shown on the topic page
 *   component   name of the demo component that teaches this topic
 *   level       Beginner | Intermediate | Advanced (drives the Badge colour)
 */
export const curriculum = [
  {
    id: 'fundamentals',
    number: '1',
    title: 'React Fundamentals',
    subtitle: 'Learn the basic building blocks of React applications.',
    topics: [
      {
        id: 'components',
        number: '1.1',
        title: 'Components',
        description: 'Understand what a component is and how components compose.',
        component: 'ComponentsDemo',
        level: 'Beginner',
      },
      {
        id: 'jsx',
        number: '1.2',
        title: 'JSX',
        description: 'Write markup with JavaScript expressions using JSX.',
        component: 'JsxDemo',
        level: 'Beginner',
      },
      {
        id: 'props',
        number: '1.3',
        title: 'Props',
        description: 'Pass data from a parent component down to its children.',
        component: 'PropsDemo',
        level: 'Beginner',
      },
      {
        id: 'children',
        number: '1.4',
        title: 'Children',
        description: 'Pass JSX to a component through the children prop.',
        component: 'ChildrenDemo',
        level: 'Beginner',
      },
      {
        id: 'events',
        number: '1.5',
        title: 'Events',
        description: 'Respond to user interactions with event handlers.',
        component: 'EventsDemo',
        level: 'Beginner',
      },
      {
        id: 'conditional-rendering',
        number: '1.6',
        title: 'Conditional Rendering',
        description: 'Render different UI depending on a condition.',
        component: 'ConditionalRenderingDemo',
        level: 'Beginner',
      },
    ],
  },
  {
    id: 'state',
    number: '2',
    title: 'State Management',
    subtitle: 'Learn how React stores and updates changing data.',
    topics: [
      {
        id: 'use-state',
        number: '2.1',
        title: 'useState',
        description: 'Store and update component-level state.',
        component: 'UseStateDemo',
        level: 'Beginner',
      },
      {
        id: 'multiple-state',
        number: '2.2',
        title: 'Multiple State',
        description: 'Manage several independent state values in one component.',
        component: 'MultipleStateDemo',
        level: 'Beginner',
      },
      {
        id: 'object-state',
        number: '2.3',
        title: 'Object State',
        description: 'Keep related values together in a single state object.',
        component: 'ObjectStateDemo',
        level: 'Beginner',
      },
      {
        id: 'array-state',
        number: '2.4',
        title: 'Array State',
        description: 'Add, update and remove items from a state array.',
        component: 'ArrayStateDemo',
        level: 'Beginner',
      },
      {
        id: 'functional-updates',
        number: '2.5',
        title: 'Functional Updates',
        description: 'Update state safely from the previous state value.',
        component: 'FunctionalUpdateDemo',
        level: 'Intermediate',
      },
    ],
  },
  {
    id: 'effects',
    number: '3',
    title: 'Effects',
    subtitle: 'Learn how React synchronizes components with external systems.',
    topics: [
      {
        id: 'use-effect',
        number: '3.1',
        title: 'useEffect',
        description: 'Run side effects after a component renders.',
        component: 'UseEffectDemo',
        level: 'Beginner',
      },
      {
        id: 'dependency-array',
        number: '3.2',
        title: 'Dependency Array',
        description: 'Control when an effect re-runs using dependencies.',
        component: 'EffectDependencyDemo',
        level: 'Intermediate',
      },
      {
        id: 'no-dependency-array',
        number: '3.3',
        title: 'No Dependency Array',
        description: 'See what happens when an effect has no dependency array.',
        component: 'EffectNoDependencyDemo',
        level: 'Intermediate',
      },
      {
        id: 'cleanup',
        number: '3.4',
        title: 'Cleanup',
        description: 'Tear down timers, listeners and subscriptions after an effect.',
        component: 'EffectCleanupDemo',
        level: 'Intermediate',
      },
      {
        id: 'fetching-data',
        number: '3.5',
        title: 'Fetching Data',
        description: 'Load data from an API with loading and error states.',
        component: 'EffectFetchDemo',
        level: 'Intermediate',
      },
    ],
  },
  {
    id: 'refs',
    number: '4',
    title: 'References',
    subtitle: 'Learn how to store mutable values and access DOM elements.',
    topics: [
      {
        id: 'use-ref',
        number: '4.1',
        title: 'useRef',
        description: 'Keep a mutable value across renders without re-rendering.',
        component: 'UseRefDemo',
        level: 'Intermediate',
      },
      {
        id: 'dom-reference',
        number: '4.2',
        title: 'DOM Reference',
        description: 'Point a ref at a real DOM element and focus it.',
        component: 'DomRefDemo',
        level: 'Intermediate',
      },
      {
        id: 'use-ref-vs-use-state',
        number: '4.3',
        title: 'useRef vs useState',
        description: 'Compare when to reach for a ref and when to use state.',
        component: 'RefVsStateDemo',
        level: 'Intermediate',
      },
    ],
  },
  {
    id: 'performance',
    number: '5',
    title: 'Performance',
    subtitle: 'Learn how React rendering and memoization work.',
    topics: [
      {
        id: 'react-memo',
        number: '5.1',
        title: 'React.memo',
        description: 'Skip re-rendering a child when its props did not change.',
        component: 'ReactMemoDemo',
        level: 'Intermediate',
      },
      {
        id: 'use-memo',
        number: '5.2',
        title: 'useMemo',
        description: 'Cache the result of an expensive calculation.',
        component: 'UseMemoDemo',
        level: 'Intermediate',
      },
      {
        id: 'use-callback',
        number: '5.3',
        title: 'useCallback',
        description: 'Keep a function reference stable between renders.',
        component: 'UseCallbackDemo',
        level: 'Intermediate',
      },
    ],
  },
  {
    id: 'context',
    number: '6',
    title: 'Context',
    subtitle: 'Learn how to share data between components without passing props manually.',
    topics: [
      {
        id: 'create-context',
        number: '6.1',
        title: 'createContext',
        description: 'Create a context object to share values across the tree.',
        component: 'CreateContextDemo',
        level: 'Intermediate',
      },
      {
        id: 'provider',
        number: '6.2',
        title: 'Provider',
        description: 'Supply context values to every component below the provider.',
        component: 'ContextProviderDemo',
        level: 'Intermediate',
      },
      {
        id: 'use-context',
        number: '6.3',
        title: 'useContext',
        description: 'Read a context value from any component in the tree.',
        component: 'UseContextDemo',
        level: 'Intermediate',
      },
    ],
  },
  {
    id: 'custom-hooks',
    number: '7',
    title: 'Custom Hooks',
    subtitle: 'Learn how to extract reusable React logic into custom hooks.',
    topics: [
      {
        id: 'what-is-a-custom-hook',
        number: '7.1',
        title: 'What is a Custom Hook?',
        description: 'Understand the idea behind extracting and reusing logic.',
        component: 'CustomHookIntroductionDemo',
        level: 'Beginner',
      },
      {
        id: 'use-counter',
        number: '7.2',
        title: 'useCounter',
        description: 'Build a reusable counter hook with increment and decrement.',
        component: 'UseCounterDemo',
        level: 'Intermediate',
      },
      {
        id: 'use-toggle',
        number: '7.3',
        title: 'useToggle',
        description: 'Build a hook that flips a boolean value.',
        component: 'UseToggleDemo',
        level: 'Intermediate',
      },
      {
        id: 'use-input',
        number: '7.4',
        title: 'useInput',
        description: 'Bind an input to state with a reusable hook.',
        component: 'UseInputDemo',
        level: 'Intermediate',
      },
      {
        id: 'use-local-storage',
        number: '7.5',
        title: 'useLocalStorage',
        description: 'Persist state to localStorage with a reusable hook.',
        component: 'UseLocalStorageDemo',
        level: 'Advanced',
      },
    ],
  },
  {
    id: 'forms',
    number: '8',
    title: 'Forms',
    subtitle: 'Learn how React controls and manages form inputs.',
    topics: [
      {
        id: 'controlled-input',
        number: '8.1',
        title: 'Controlled Input',
        description: "Drive an input's value from React state.",
        component: 'ControlledInputDemo',
        level: 'Beginner',
      },
      {
        id: 'form-submit',
        number: '8.2',
        title: 'Form Submit',
        description: 'Handle form submission and prevent the default page reload.',
        component: 'FormSubmitDemo',
        level: 'Beginner',
      },
      {
        id: 'multiple-inputs',
        number: '8.3',
        title: 'Multiple Inputs',
        description: 'Manage a whole form with a single state object.',
        component: 'MultipleInputsDemo',
        level: 'Intermediate',
      },
      {
        id: 'validation',
        number: '8.4',
        title: 'Validation',
        description: 'Validate form fields and show error messages.',
        component: 'ValidationDemo',
        level: 'Intermediate',
      },
    ],
  },
  {
    id: 'advanced',
    number: '9',
    title: 'Advanced Hooks',
    subtitle: 'Explore advanced React hooks and rendering behavior.',
    topics: [
      {
        id: 'use-reducer',
        number: '9.1',
        title: 'useReducer',
        description: 'Model complex state transitions with a reducer.',
        component: 'UseReducerDemo',
        level: 'Advanced',
      },
      {
        id: 'use-transition',
        number: '9.2',
        title: 'useTransition',
        description: 'Mark a state update as non-urgent.',
        component: 'UseTransitionDemo',
        level: 'Advanced',
      },
      {
        id: 'use-deferred-value',
        number: '9.3',
        title: 'useDeferredValue',
        description: 'Keep the UI responsive while a value catches up.',
        component: 'UseDeferredValueDemo',
        level: 'Advanced',
      },
      {
        id: 'use-id',
        number: '9.4',
        title: 'useId',
        description: 'Generate stable unique ids for accessibility attributes.',
        component: 'UseIdDemo',
        level: 'Intermediate',
      },
      {
        id: 'use-layout-effect',
        number: '9.5',
        title: 'useLayoutEffect',
        description: 'Read and write the DOM before the browser paints.',
        component: 'UseLayoutEffectDemo',
        level: 'Advanced',
      },
      {
        id: 'use-imperative-handle',
        number: '9.6',
        title: 'useImperativeHandle',
        description: 'Expose a limited imperative API from a child component.',
        component: 'UseImperativeHandleDemo',
        level: 'Advanced',
      },
      {
        id: 'use-sync-external-store',
        number: '9.7',
        title: 'useSyncExternalStore',
        description: 'Subscribe a component to a store that lives outside React.',
        component: 'UseSyncExternalStoreDemo',
        level: 'Advanced',
      },
    ],
  },
  {
    id: 'patterns',
    number: '10',
    title: 'React Patterns',
    subtitle: 'Learn common patterns for building maintainable React applications.',
    topics: [
      {
        id: 'composition',
        number: '10.1',
        title: 'Component Composition',
        description: 'Build flexible components by composing smaller ones.',
        component: 'CompositionDemo',
        level: 'Intermediate',
      },
      {
        id: 'prop-drilling',
        number: '10.2',
        title: 'Prop Drilling',
        description: 'Recognise and fix props passed through many layers.',
        component: 'PropDrillingDemo',
        level: 'Intermediate',
      },
      {
        id: 'compound-components',
        number: '10.3',
        title: 'Compound Components',
        description: 'Share state between a parent and its related children.',
        component: 'CompoundComponentsDemo',
        level: 'Advanced',
      },
      {
        id: 'container-presentational',
        number: '10.4',
        title: 'Container / Presentational',
        description: 'Split data handling from the UI that renders it.',
        component: 'ContainerPresentationalDemo',
        level: 'Advanced',
      },
      {
        id: 'render-props',
        number: '10.5',
        title: 'Render Props',
        description: 'Pass a function as a prop to customise rendering.',
        component: 'RenderPropsDemo',
        level: 'Advanced',
      },
      {
        id: 'higher-order-components',
        number: '10.6',
        title: 'Higher-Order Components',
        description: 'Wrap a component to add behaviour to it.',
        component: 'HigherOrderComponentDemo',
        level: 'Advanced',
      },
    ],
  },
]

/** Flat list of every topic, each one carrying a reference to its section. */
export const allTopics = curriculum.flatMap((section) =>
  section.topics.map((topic) => ({ ...topic, section })),
)

export const topicCount = allTopics.length

/** URL for a topic, e.g. /fundamentals/components */
export function topicPath(sectionId, topicId) {
  return `/${sectionId}/${topicId}`
}

/** Look up a section, or undefined. */
export function findSection(sectionId) {
  return curriculum.find((section) => section.id === sectionId)
}

/** Look up a topic, returning both the topic and its section. */
export function findTopic(sectionId, topicId) {
  const section = findSection(sectionId)
  const topic = section?.topics.find((item) => item.id === topicId)
  return topic ? { section, topic } : undefined
}

/** Previous / next topic across the whole curriculum, for footer navigation. */
export function getAdjacentTopics(sectionId, topicId) {
  const index = allTopics.findIndex(
    (item) => item.section.id === sectionId && item.id === topicId,
  )
  if (index === -1) return { previous: undefined, next: undefined }

  // `sectionId` and `id` travel along so the page can look up the translated
  // title; `title` stays as the English fallback.
  const describe = (item) =>
    item && {
      title: item.title,
      number: item.number,
      sectionId: item.section.id,
      id: item.id,
      path: topicPath(item.section.id, item.id),
    }

  return { previous: describe(allTopics[index - 1]), next: describe(allTopics[index + 1]) }
}
