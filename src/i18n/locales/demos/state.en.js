export default {
  UseStateDemo: {
    demo: {
      title: 'The demo',
      subtitle: 'Type a name and watch the state drive the output',
      footer:
        'Nothing here is a global variable — React is holding the value between renders.',
      nameLabel: 'Name',
      initial: 'Initial Value',
      current: 'Current Value',
      output: 'Rendered Output',
      react: 'React',
      greeting: 'Hello {{name}}',
    },
    flow: {
      input: 'User input',
      onChange: 'onChange',
      setter: 'setName(value)',
      update: 'State update',
      rerender: 'Re-render',
    },
    flowCard: {
      title: 'The flow',
      subtitle: 'What happens on every keystroke',
    },
    local: {
      increment: 'Increment',
      explainBefore: 'The number changes, then the component re-renders for some other',
      explainAfter:
        'reason, and that line throws the value away. Press it as much as you like — it stays at 0 on screen.',
      remembers:
        'React keeps this value between renders. That memory is the entire point of the hook.',
    },
    hook: {
      title: 'Why a hook at all',
      subtitle: 'A local variable does not survive',
      footer: 'This is the problem useState solves. Both buttons look identical until you press one.',
    },
    perInstance: {
      title: 'State is private to each instance',
      subtitle: 'The same component, rendered twice',
      footer: 'Two <Counter /> elements, two independent values. Neither can read the other.',
      first: '<Counter /> — first',
      second: '<Counter /> — second',
    },
    whole: {
      title: 'The whole thing',
      subtitle: 'Fifteen lines',
    },
  },

  MultipleStateDemo: {
    slot: {
      update: 'update this slot',
    },
    slots: {
      title: 'Three independent slots',
      subtitle: 'Three useState calls, three separate values',
      footer: 'Each setter only ever touches its own value — changing age never disturbs name.',
      nameLabel: "name  —  useState('')",
      empty: 'empty',
    },
    batching: {
      title: 'One render, many setters',
      subtitle: 'React batches every update from the same event',
      footer:
        'Automatic batching means this works without any extra code — and it worked inside async callbacks too, since React 18.',
      trigger: 'Call four setters at once',
      explainBefore: 'Four setter calls, three different slots, and count jumps by',
      two: 'two',
      explainAfter:
        '— both increments landed. None of these four values ever appeared in an intermediate state; the screen went straight from one settled set of values to the next.',
      presses: 'presses so far',
    },
    order: {
      title: 'Order matters',
      subtitle: 'Hooks are matched by position, not by name',
      footer: 'The second call belongs to the second hook. Swap them and the values swap too.',
      filenameThisWay: 'Wired up this way',
      filenameSwapped: 'Swap the two lines',
      whyBefore: 'This is why calling useState inside an',
      whyAfter:
        'is a bug: on the render where the branch flips, every hook after it shifts one slot along and reads the wrong value.',
    },
    enough: {
      title: 'When one call is enough',
      subtitle: 'Values that always change together belong in one slot',
      footer: 'See 2.3 Object State.',
      threeSlots: 'Three slots',
      oneSlot: 'One slot',
      scattered: 'Scattered',
      together: 'Together',
    },
  },

  ObjectStateDemo: {
    object: {
      title: 'One object, four fields',
      subtitle: "useState({ name: 'Ada', age: 36, city: 'London', subscribed: true })",
      footer:
        'Every field lives in a single value, so saving the form is one call and the fields can never fall out of sync.',
      stateObject: 'The state object',
      reset: 'reset',
    },
    replaced: {
      title: 'State is replaced, not merged',
      subtitle: 'The mistake almost everyone makes once',
      footer: 'Press Increase age on the right and watch name and city disappear.',
    },
    merge: {
      increase: 'Increase age',
      safeNote: 'Name and city are untouched.',
      brokenNote: 'Press it once. Everything that was not in the new object is gone.',
    },
    mutate: {
      title: 'Never mutate',
      subtitle: 'The same idea, seen from the other side',
      footer: 'Both buttons change data. Only one of them changes anything you can see.',
      button: 'Mutate then set the same object',
      note:
        'The object changed in memory but the screen never updates — React saw the same reference and did nothing.',
      replace: 'Replace with a new object',
      noteOk: 'A new reference, so React re-renders and the change appears.',
    },
    helper: {
      title: 'The update helper',
      subtitle: 'One place to get it right',
    },
    when: {
      title: 'When to reach for an object',
      subtitle: 'A rough guide',
      oneObject: 'One object',
      oneObjectBody:
        'when the fields describe one thing — a user, a form, a product, a row in a table.',
      separate: 'Separate slots',
      separateBody:
        'when the values are genuinely independent — a filter and a page number that a user might change on their own.',
      neither:
        'Neither rule is a law. If two values are always saved or reset together, they belong in the same object — that is the test.',
    },
  },

  ArrayStateDemo: {
    row: {
      ariaLabel: 'item {{id}}',
      remove: 'remove',
    },
    list: {
      title: 'The list',
      subtitle: 'useState([]) — add, rename and remove',
      footer:
        'Every one of these three buttons replaces the array. None of them touches the array you already have.',
      newItem: 'New item',
      add: 'Add Item',
      dropSecond: 'Drop the 2nd',
      clear: 'Clear',
      empty: 'The list is empty.',
    },
    mutation: {
      title: 'push does not work',
      subtitle: 'The array changes, the screen does not',
      footer: 'React compares references. Same array in, same array out, no render.',
      pushThenSet: 'push then set',
      setACopy: 'set a copy',
      noteBefore: 'The array really does contain the new number after',
      noteMiddle: '— but React was handed the same reference, so it ignored the update. The',
      noteAfter: 'button finally reveals what had happened.',
      append: 'Append properly',
      noteOk:
        'A new array every time, so React always sees a change and the list updates straight away.',
    },
    operations: {
      title: 'The three array operations',
      subtitle: 'Spread to add, filter to remove, map to update',
    },
    keys: {
      title: 'Keys',
      subtitle: 'Use the entry id, not the array index',
      footer: 'An index is only stable while nothing is added or removed.',
      instruction:
        'On the right, remove the first row, then click the top input and type. The characters land in whichever row React still believes is index 0.',
    },
    quiz: {
      title: 'Check yourself',
      subtitle: 'Which of these are safe?',
      safe: 'safe — returns a new array',
      unsafe: 'unsafe — mutates',
    },
  },

  FunctionalUpdateDemo: {
    compare: {
      title: 'The bug, and the fix',
      subtitle: 'Same button, two different results',
      footer: 'Press both. Only one of them does what you meant.',
    },
    stale: {
      increment: 'Increment twice',
      explainBefore: 'Two calls, but only',
      explainAfter: 'Both calls read the same',
      explainEnd: 'value from this render, so both computed the same number.',
    },
    fresh: {
      increment: 'Increment twice',
      explainBefore: 'Two calls, and',
      explainAfter:
        'React ran each function against the result of the one before it, so nothing was lost.',
    },
    stores: {
      title: 'Where React keeps them',
      subtitle: 'Updates are queued, not applied immediately',
    },
    queue: {
      twoUpdaters: 'Queue two updaters',
      oneUpdater: 'Queue one updater',
      clear: 'Clear',
      queued: 'queued updates:',
      empty: 'nothing queued',
      applied: 'applied in order →',
      note:
        'This is a teaching model, not the real implementation — but it behaves the same way for the cases that matter.',
    },
    both: {
      title: 'Reading a state variable you just changed',
      subtitle: 'Why step still has its old value on the line below',
      footer:
        'The handler body runs as written, top to bottom. Nothing re-runs between two lines of the same function.',
      reset: 'Reset',
      noteBefore: 'Nothing here is wrong — it is just that',
      noteAfter: 'is read before the press, not after it.',
    },
    async: {
      title: 'Inside a timer',
      subtitle: 'Where the captured value is already stale',
      run: 'Run both',
      running: 'Running…',
      noteBefore: '',
      noteMiddle: 'reads the value from the render that created this handler, while',
      noteAfter: 'receives the value as an argument. Only the second one is correct inside a timer.',
    },
    rule: {
      title: 'Which one should I use?',
      subtitle: 'A rule you can apply without thinking',
      useValue: 'A plain value is fine',
      useFunction: 'A function is also fine',
      filenameFine: 'No dependency on the old value',
      filenameAlsoFine: 'Depends on the old value',
    },
  },
}
