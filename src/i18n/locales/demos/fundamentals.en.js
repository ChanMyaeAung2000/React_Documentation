/**
 * English copy for the Section 1 demos.
 *
 * One namespace per component, named as the component is registered in
 * `src/concepts/registry.js`. Keys nest by card so a demo's locale reads in the
 * same order as its JSX.
 *
 * Deliberately not translated: JSX tags, prop names and other code fragments.
 * Those are what the reader sees in their editor, so they stay verbatim.
 */
export default {
  ComponentsDemo: {
    tree: {
      title: 'Component tree',
      subtitle: 'What ComponentsDemo renders',
      parent: 'parent',
      rendered: 'rendered',
      notRendered: 'not rendered',
    },
    output: {
      title: 'Live output',
      subtitle: 'Toggle a row to change what the parent renders',
      hide: 'Hide',
      show: 'Show',
      composedBy: 'Composed by',
      empty:
        'The parent rendered nothing — the components still exist, they are just not placed in the tree.',
    },
    props: {
      title: 'Props from the parent',
      subtitle: 'Edit these and watch UserCard update',
      footer: 'A state change in the parent re-renders its children with new props.',
      name: 'name',
      role: 'role',
    },
  },

  JsxDemo: {
    react: 'React',
    nameLabel: 'Name',
    greeting: 'Hello {{name}}',
    expression: {
      title: 'JavaScript inside JSX',
      subtitle: 'Type a name and watch the {expression} update',
      count: '{{count}} topics in section 1',
    },
    attributes: {
      title: 'Attributes',
      subtitle: 'Props on the JSX tag itself',
      dark: 'Dark',
      light: 'Light',
      demo: 'attribute demo',
      hint: 'Click it — the className expression picks a different set of classes.',
    },
    oneLine: {
      title: 'One line of JSX',
      subtitle: 'Toggle to see {condition && <Thing />}',
      toggle: 'Toggle the condition',
      onlyWhenTrue: 'I only exist when the condition is true',
    },
    really: {
      title: 'What JSX really is',
      subtitle: 'Every tag is a function call',
      footer: 'Browsers never see JSX. A build step turns it into this before it ships.',
      youWrite: 'You write',
      itBecomes: 'It becomes',
    },
  },

  PropsDemo: {
    stranger: 'stranger',
    nameLabel: 'name  (the prop)',
    parent: {
      title: 'Parent',
      subtitle: 'Owns the state, passes it down as props',
      footer: 'Everything the child shows comes from here.',
    },
    child: {
      badge: 'Child',
      greeting: 'Hello {{name}}',
      tryWrite: 'Try to change this prop',
      askParent: 'Ask the parent for a new name',
    },
    childCard: {
      title: 'Child',
      subtitle: 'Receives { name, role, onSuggestName } and reads them',
      footer: 'Press the button to call a function that was passed in as a prop.',
    },
    flow: {
      title: 'Which way does data flow?',
      subtitle: 'Down with props, up with callbacks',
      down: 'Parent → Child',
      downBody: 'the child can read it but not change it.',
      up: 'Child → Parent',
      upBody: 'the child asks, the parent decides and updates its own state.',
    },
  },

  ChildrenDemo: {
    examples: {
      element: {
        label: 'A single element',
        node: 'Hello React',
      },
      many: {
        label: 'Several elements',
        button: 'Click me',
      },
      text: {
        label: 'Plain text',
        node: 'Just a string',
      },
      expression: {
        label: 'An expression',
        is: 'is',
      },
      nothing: {
        label: 'Nothing at all',
        node: 'children is undefined',
      },
    },
    kinds: {
      title: 'One component, five kinds of children',
      subtitle: 'Card never changes — only what you put inside it',
      result: 'Result',
      youWrote: 'What you wrote',
    },
    own: {
      title: 'Type your own',
      subtitle: 'The string becomes props.children',
      footer: 'A text input is a child too — Card renders it exactly like anything else.',
      label: 'Text passed as children',
      placeholder: 'Hello from the parent',
    },
    why: {
      title: 'Why this matters',
      subtitle: 'Layout components without knowing the content',
      without: 'Without children',
      with: 'With children',
    },
  },

  ConditionalRenderingDemo: {
    iExist: 'I exist',
    login: {
      name: 'Name',
      submit: 'Log in',
    },
    dashboard: {
      welcome: 'Welcome back, {{name}}',
      logout: 'Log out',
    },
    classic: {
      title: 'The classic example',
      subtitle: '{isLoggedIn ? <Dashboard /> : <Login />}',
      footer: 'The Login component only exists while the user is logged out.',
      andNote: 'The line below uses && instead — it disappears when you log out.',
    },
    three: {
      title: 'Three ways, one result',
      subtitle: 'Flip a switch and compare',
      footer: 'Pick a technique on the left, then toggle the switch to see it change.',
      openPanel: 'Open the panel',
      closePanel: 'Close the panel',
      result: 'Result',
      source: 'Source',
    },
    techniques: {
      ternary: { note: 'Use when you render one of two things.' },
      and: { note: 'Use when you render something or nothing at all.' },
      null: { note: 'Use inside the component when the whole thing should be empty.' },
    },
    gotcha: {
      title: 'The && gotcha',
      subtitle: 'Why you should not write {count && <X />}',
      footer: 'Use a ternary or a boolean to be safe.',
      items: '{{count}} items',
      zeroRenders: 'With count = 0 this line renders the text',
      insteadOfNothing: 'instead of nothing.',
      extraComparison: 'The extra comparison makes 0 falsy, so nothing renders.',
    },
    readable: {
      title: 'Keep it readable',
      subtitle: 'One ternary per expression — nest with care',
      hard: 'Hard to read',
      easier: 'Easier to follow',
    },
  },

  EventsDemo: {
    inspector: {
      none: 'no event captured yet.',
      present: 'present',
      missing: 'missing',
    },
    click: {
      subtitle: 'The counter from the spec — click the button',
      button: 'Click Me',
      countedBefore: 'Clicked:',
      countedAfter: 'times',
      reset: 'Reset',
      handler: 'The handler',
      inspector: 'The event object',
      note: 'Note',
      noteIs: 'is the',
      noteNot: ', not the',
      noteEnd: 'you clicked — events bubble up from the element that was actually pressed.',
    },
    change: {
      subtitle: 'Fires on every keystroke, with event.target.value',
      label: 'Type something',
      inspector: 'The change event',
    },
    submit: {
      subtitle: 'preventDefault() stops the page reload',
      footer: 'If you delete the preventDefault() call, the page reloads and every value below is lost.',
      label: 'Add an item',
      button: 'Submit',
      empty: 'Nothing submitted yet.',
    },
    args: {
      title: 'Passing arguments',
      subtitle: 'Wrap the call in an arrow function',
      withArrow: "greet('Ada') with an arrow",
      direct: 'pass the handler directly',
      hello: 'Hello Ada',
      prompt: 'Click the first button.',
      noArrow:
        'No arrow, so React calls greet with the event object — which is why you see an object instead of a name.',
    },
    bubble: {
      subtitle: 'Which handlers fire when you press each button?',
      footer:
        'A click on a child runs the child\'s handler first, then keeps going up through every ancestor.',
      clear: 'Clear log',
      outer: 'outer',
      innerStopped: 'inner (stopped)',
      innerNotStopped: 'inner (not stopped)',
      childStops: 'child that calls stopPropagation()',
      childKeeps: 'child that does not',
      log: 'log:',
      prompt: 'Press the left button to see the difference.',
      explanation: 'One press logs one entry on the right, two on the left.',
    },
  },
}
