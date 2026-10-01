# React Learning Lab

## 1. Project Concept

**React Learning Lab** is an interactive React learning application.

The application teaches React concepts through:

* Structured learning sections
* Sidebar navigation
* Main titles and subtitles
* Interactive demos
* Live state/result visualization
* Source code
* Explanation
* Key points

The most important architecture rule is:

> **Every React concept/demo must be implemented as a separate React component.**

For example:

```text
useState
   ↓
UseStateDemo.jsx

useEffect
   ↓
UseEffectDemo.jsx

useMemo
   ↓
UseMemoDemo.jsx

Custom Hook
   ↓
UseCounterDemo.jsx
```

This makes the project itself a practical example of component-based React architecture.

---

# 2. Main UI Layout

The application should use a **Sidebar + Main Content** layout.

```text
┌────────────────────────────────────────────────────────────────────┐
│ React Learning Lab                                                │
├──────────────────┬─────────────────────────────────────────────────┤
│                  │                                                 │
│ SIDEBAR          │  1. React Fundamentals                          │
│                  │  Learn the basic building blocks of React.      │
│ 1. React         │                                                 │
│    Fundamentals  │  ───────────────────────────────────────────    │
│                  │                                                 │
│  1.1 Components  │  1.1 Components                                 │
│  1.2 JSX         │                                                 │
│  1.3 Props       │  Explanation                                    │
│  1.4 Events      │                                                 │
│                  │  Interactive Demo                               │
│ 2. State         │  ┌───────────────────────────────────────────┐  │
│    Management    │  │                                           │  │
│                  │  │           Component Demo                 │  │
│  2.1 useState    │  │                                           │  │
│  2.2 State Obj.  │  │                                           │  │
│  2.3 State Array │  └───────────────────────────────────────────┘  │
│                  │                                                 │
│ 3. Effects       │  Source Code                                   │
│                  │  ┌───────────────────────────────────────────┐  │
│  3.1 useEffect   │  │ const ...                                │  │
│  3.2 Cleanup     │  └───────────────────────────────────────────┘  │
│                  │                                                 │
└──────────────────┴─────────────────────────────────────────────────┘
```

---

# 3. Header

The application should have a top header.

```text
┌──────────────────────────────────────────────────────────────┐
│ ⚛ React Learning Lab                         Search    Theme │
└──────────────────────────────────────────────────────────────┘
```

Header contains:

* React Learning Lab logo/title
* Search
* Dark/Light mode
* Mobile menu button

---

# 4. Sidebar

The sidebar is one of the most important parts of the application.

It should display the React learning curriculum in a hierarchical structure.

Example:

```text
React Learning Lab

01  React Fundamentals
    ├── 1.1 Components
    ├── 1.2 JSX
    ├── 1.3 Props
    ├── 1.4 Children
    ├── 1.5 Events
    └── 1.6 Conditional Rendering

02  State Management
    ├── 2.1 useState
    ├── 2.2 Multiple State
    ├── 2.3 Object State
    ├── 2.4 Array State
    └── 2.5 Functional Updates

03  Effects
    ├── 3.1 useEffect
    ├── 3.2 Dependency Array
    ├── 3.3 Empty Dependency
    ├── 3.4 Cleanup
    └── 3.5 Fetching Data

04  References
    ├── 4.1 useRef
    ├── 4.2 DOM Reference
    └── 4.3 useRef vs useState

05  Performance
    ├── 5.1 React.memo
    ├── 5.2 useMemo
    └── 5.3 useCallback

06  Context
    ├── 6.1 createContext
    ├── 6.2 Provider
    └── 6.3 useContext

07  Custom Hooks
    ├── 7.1 What is a Custom Hook?
    ├── 7.2 useCounter
    ├── 7.3 useToggle
    ├── 7.4 useInput
    └── 7.5 useLocalStorage

08  Forms
    ├── 8.1 Controlled Input
    ├── 8.2 Form Submit
    ├── 8.3 Validation
    └── 8.4 Multiple Inputs

09  Advanced Hooks
    ├── 9.1 useReducer
    ├── 9.2 useTransition
    ├── 9.3 useDeferredValue
    ├── 9.4 useId
    ├── 9.5 useLayoutEffect
    └── 9.6 useImperativeHandle

10  React Patterns
    ├── 10.1 Composition
    ├── 10.2 Prop Drilling
    ├── 10.3 Compound Components
    └── 10.4 Container / Presentational
```

---

# 5. Curriculum Structure

The project should follow this structure.

---

## 1. React Fundamentals

Subtitle:

> Learn the basic building blocks of React applications.

### 1.1 Components

Learn:

* What is a component?
* Functional components
* Component composition
* Parent and child components

Demo:

```text
Parent Component
       │
       ├── Header
       ├── UserCard
       └── Footer
```

Component:

```text
ComponentsDemo.jsx
```

---

### 1.2 JSX

Learn:

* JSX syntax
* JavaScript inside JSX
* Expressions
* JSX attributes
* Conditional JSX

Demo:

```text
Name:
[ John ]

Result:

Hello John
```

Component:

```text
JsxDemo.jsx
```

---

### 1.3 Props

Learn:

* Passing data
* Props destructuring
* Props are read-only
* Parent → Child communication

Demo:

```text
Parent

Name:
[ John ]

        ↓ props

Child

Hello John
```

Component:

```text
PropsDemo.jsx
```

---

### 1.4 Children

Learn:

```jsx
<Card>
  <p>Hello React</p>
</Card>
```

Component:

```text
ChildrenDemo.jsx
```

---

### 1.5 Events

Learn:

* onClick
* onChange
* onSubmit
* Event object

Demo:

```text
[ Click Me ]

Clicked: 5 times
```

Component:

```text
EventsDemo.jsx
```

---

### 1.6 Conditional Rendering

Learn:

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

Component:

```text
ConditionalRenderingDemo.jsx
```

---

# 6. State Management

Subtitle:

> Learn how React stores and updates changing data.

---

## 2.1 useState

Basic syntax:

```jsx
const [name, setName] = useState("");
```

Interactive UI:

```text
Name

┌─────────────────────────────┐
│ Hello React                 │
└─────────────────────────────┘

Initial Value:
""

Current Value:
"Hello React"
```

Show the flow:

```text
User Input
    ↓
onChange
    ↓
setName()
    ↓
State Update
    ↓
Component Re-render
    ↓
Updated UI
```

Component:

```text
UseStateDemo.jsx
```

---

## 2.2 Multiple State

```jsx
const [name, setName] = useState("");
const [age, setAge] = useState(0);
```

Component:

```text
MultipleStateDemo.jsx
```

---

## 2.3 Object State

```jsx
const [user, setUser] = useState({
  name: "",
  age: 0,
});
```

Component:

```text
ObjectStateDemo.jsx
```

---

## 2.4 Array State

```jsx
const [items, setItems] = useState([]);
```

Interactive:

```text
[ Add Item ]

1. Apple
2. Orange
3. Banana
```

Component:

```text
ArrayStateDemo.jsx
```

---

## 2.5 Functional State Updates

```jsx
setCount(prev => prev + 1);
```

Component:

```text
FunctionalUpdateDemo.jsx
```

---

# 7. Effects

Subtitle:

> Learn how React synchronizes components with external systems.

---

## 3.1 useEffect

```jsx
useEffect(() => {
  console.log("Effect executed");
}, []);
```

Interactive demo should display:

```text
Render Count: 3

Effect Count: 1
```

Component:

```text
UseEffectDemo.jsx
```

---

## 3.2 Dependency Array

```jsx
useEffect(() => {
  // runs when count changes
}, [count]);
```

Interactive:

```text
Count: 5

Effect Executions: 5
```

Component:

```text
EffectDependencyDemo.jsx
```

---

## 3.3 No Dependency Array

```jsx
useEffect(() => {
  // runs after every render
});
```

Component:

```text
EffectNoDependencyDemo.jsx
```

---

## 3.4 Cleanup

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    // ...
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

Interactive timer.

Component:

```text
EffectCleanupDemo.jsx
```

---

## 3.5 Fetching Data

Demonstrate:

```text
Loading
   ↓
API Request
   ↓
Success / Error
```

Component:

```text
EffectFetchDemo.jsx
```

---

# 8. References

Subtitle:

> Learn how to store mutable values and access DOM elements.

---

## 4.1 useRef

```jsx
const inputRef = useRef(null);
```

Component:

```text
UseRefDemo.jsx
```

---

## 4.2 DOM Reference

Interactive:

```text
[ Input ]

[ Focus Input ]
```

Component:

```text
DomRefDemo.jsx
```

---

## 4.3 useRef vs useState

Show:

```text
useState
   ↓
Update
   ↓
Re-render

useRef
   ↓
Update .current
   ↓
No re-render
```

Component:

```text
RefVsStateDemo.jsx
```

---

# 9. Performance

Subtitle:

> Learn how React rendering and memoization work.

---

## 5.1 React.memo

Component:

```text
ReactMemoDemo.jsx
```

Show render counters:

```text
Parent Render: 5
Child Render: 1
```

---

## 5.2 useMemo

```jsx
const result = useMemo(() => {
  return expensiveCalculation(number);
}, [number]);
```

Component:

```text
UseMemoDemo.jsx
```

Show:

```text
Calculation Count: 1
```

Then change unrelated state and observe the calculation count.

---

## 5.3 useCallback

```jsx
const handleClick = useCallback(() => {
  // ...
}, []);
```

Component:

```text
UseCallbackDemo.jsx
```

---

# 10. Context API

Subtitle:

> Learn how to share data between components without passing props manually.

---

## 6.1 createContext

Component:

```text
CreateContextDemo.jsx
```

---

## 6.2 Provider

Component:

```text
ContextProviderDemo.jsx
```

---

## 6.3 useContext

Interactive theme example:

```text
Theme: Light

[ Toggle Theme ]

Theme: Dark
```

Component:

```text
UseContextDemo.jsx
```

---

# 11. Custom Hooks

Subtitle:

> Learn how to extract reusable React logic into custom hooks.

This section is especially important because it demonstrates how React logic can be reused.

---

## 7.1 What is a Custom Hook?

Explain:

```text
Component A
    │
    ├── State Logic
    └── Event Logic

Component B
    │
    ├── State Logic
    └── Event Logic

             ↓

       Custom Hook
             ↓

      Reusable Logic
```

Component:

```text
CustomHookIntroductionDemo.jsx
```

---

## 7.2 useCounter

Hook:

```jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
}
```

Demo:

```text
Count: 10

[ - ] [ + ]
```

Files:

```text
hooks/
└── useCounter.js

concepts/
└── custom-hooks/
    └── UseCounterDemo.jsx
```

---

## 7.3 useToggle

```jsx
const { value, toggle } = useToggle();
```

Demo:

```text
Status: OFF

[ Toggle ]

Status: ON
```

Files:

```text
hooks/
└── useToggle.js

concepts/
└── custom-hooks/
    └── UseToggleDemo.jsx
```

---

## 7.4 useInput

```jsx
const name = useInput("");
```

Demo:

```text
Name

[ John ]

Current Value:

John
```

Files:

```text
hooks/
└── useInput.js

concepts/
└── custom-hooks/
    └── UseInputDemo.jsx
```

---

## 7.5 useLocalStorage

```jsx
const [name, setName] = useLocalStorage(
  "name",
  ""
);
```

Demo:

```text
Name

[ John ]

localStorage:

name = "John"
```

Component:

```text
UseLocalStorageDemo.jsx
```

---

# 12. Forms

Subtitle:

> Learn how React controls and manages form inputs.

Topics:

```text
8.1 Controlled Input
8.2 Form Submit
8.3 Multiple Inputs
8.4 Validation
```

Each topic must have its own demo component.

---

# 13. Advanced Hooks

Subtitle:

> Explore advanced React hooks and rendering behavior.

Topics:

```text
9.1 useReducer
9.2 useTransition
9.3 useDeferredValue
9.4 useId
9.5 useLayoutEffect
9.6 useImperativeHandle
9.7 useSyncExternalStore
```

Each topic gets a separate component.

---

# 14. React Patterns

Subtitle:

> Learn common patterns for building maintainable React applications.

Topics:

```text
10.1 Component Composition
10.2 Prop Drilling
10.3 Compound Components
10.4 Container / Presentational
10.5 Render Props
10.6 Higher-Order Components
```

---

# 15. Demo Component Rule

This is a **mandatory project architecture rule**.

Every sidebar topic must have its own demo component.

For example:

```text
1. React Fundamentals
│
├── 1.1 Components
│     └── ComponentsDemo.jsx
│
├── 1.2 JSX
│     └── JsxDemo.jsx
│
├── 1.3 Props
│     └── PropsDemo.jsx
│
└── 1.4 Events
      └── EventsDemo.jsx
```

State:

```text
2. State Management
│
├── 2.1 useState
│     └── UseStateDemo.jsx
│
├── 2.2 Multiple State
│     └── MultipleStateDemo.jsx
│
├── 2.3 Object State
│     └── ObjectStateDemo.jsx
│
└── 2.4 Array State
      └── ArrayStateDemo.jsx
```

Effects:

```text
3. Effects
│
├── 3.1 useEffect
│     └── UseEffectDemo.jsx
│
├── 3.2 Dependency Array
│     └── EffectDependencyDemo.jsx
│
└── 3.3 Cleanup
      └── EffectCleanupDemo.jsx
```

---

# 16. Recommended Folder Structure

```text
src/
│
├── components/
│   │
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── MainLayout.jsx
│   │
│   ├── navigation/
│   │   ├── SidebarSection.jsx
│   │   └── SidebarItem.jsx
│   │
│   └── ui/
│       ├── Card.jsx
│       ├── Button.jsx
│       ├── Input.jsx
│       ├── Badge.jsx
│       └── CodeBlock.jsx
│
├── concepts/
│   │
│   ├── fundamentals/
│   │   ├── ComponentsDemo.jsx
│   │   ├── JsxDemo.jsx
│   │   ├── PropsDemo.jsx
│   │   ├── ChildrenDemo.jsx
│   │   ├── EventsDemo.jsx
│   │   └── ConditionalRenderingDemo.jsx
│   │
│   ├── state/
│   │   ├── UseStateDemo.jsx
│   │   ├── MultipleStateDemo.jsx
│   │   ├── ObjectStateDemo.jsx
│   │   ├── ArrayStateDemo.jsx
│   │   └── FunctionalUpdateDemo.jsx
│   │
│   ├── effects/
│   │   ├── UseEffectDemo.jsx
│   │   ├── EffectDependencyDemo.jsx
│   │   ├── EffectNoDependencyDemo.jsx
│   │   ├── EffectCleanupDemo.jsx
│   │   └── EffectFetchDemo.jsx
│   │
│   ├── refs/
│   │   ├── UseRefDemo.jsx
│   │   ├── DomRefDemo.jsx
│   │   └── RefVsStateDemo.jsx
│   │
│   ├── performance/
│   │   ├── ReactMemoDemo.jsx
│   │   ├── UseMemoDemo.jsx
│   │   └── UseCallbackDemo.jsx
│   │
│   ├── context/
│   │   ├── CreateContextDemo.jsx
│   │   ├── ContextProviderDemo.jsx
│   │   └── UseContextDemo.jsx
│   │
│   ├── custom-hooks/
│   │   ├── CustomHookIntroductionDemo.jsx
│   │   ├── UseCounterDemo.jsx
│   │   ├── UseToggleDemo.jsx
│   │   ├── UseInputDemo.jsx
│   │   └── UseLocalStorageDemo.jsx
│   │
│   ├── forms/
│   │   ├── ControlledInputDemo.jsx
│   │   ├── FormSubmitDemo.jsx
│   │   ├── MultipleInputsDemo.jsx
│   │   └── ValidationDemo.jsx
│   │
│   ├── advanced/
│   │   ├── UseReducerDemo.jsx
│   │   ├── UseTransitionDemo.jsx
│   │   ├── UseDeferredValueDemo.jsx
│   │   ├── UseIdDemo.jsx
│   │   ├── UseLayoutEffectDemo.jsx
│   │   └── UseImperativeHandleDemo.jsx
│   │
│   └── patterns/
│       ├── CompositionDemo.jsx
│       ├── PropDrillingDemo.jsx
│       ├── CompoundComponentsDemo.jsx
│       └── RenderPropsDemo.jsx
│
├── hooks/
│   ├── useCounter.js
│   ├── useToggle.js
│   ├── useInput.js
│   └── useLocalStorage.js
│
├── data/
│   └── curriculum.js
│
├── pages/
│   ├── Home.jsx
│   └── ConceptPage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 17. Curriculum Data

The sidebar should not manually hard-code every item.

Create:

```text
src/data/curriculum.js
```

Example:

```js
export const curriculum = [
  {
    id: "fundamentals",
    number: "1",
    title: "React Fundamentals",
    subtitle: "Learn the basic building blocks of React.",
    topics: [
      {
        id: "components",
        number: "1.1",
        title: "Components",
        description: "Learn how React components work.",
        component: "ComponentsDemo",
        level: "Beginner",
      },
      {
        id: "jsx",
        number: "1.2",
        title: "JSX",
        description: "Learn how JSX works.",
        component: "JsxDemo",
        level: "Beginner",
      },
      {
        id: "props",
        number: "1.3",
        title: "Props",
        description: "Learn how to pass data between components.",
        component: "PropsDemo",
        level: "Beginner",
      },
    ],
  },

  {
    id: "state",
    number: "2",
    title: "State Management",
    subtitle: "Learn how React stores and updates data.",
    topics: [
      {
        id: "use-state",
        number: "2.1",
        title: "useState",
        description: "Manage component state.",
        component: "UseStateDemo",
        level: "Beginner",
      },
    ],
  },
];
```

---

# 18. Dynamic Demo Rendering

The selected topic determines which demo component appears.

Conceptually:

```text
Sidebar
   │
   │ User clicks "2.1 useState"
   ↓
Selected Topic
   │
   ↓
UseStateDemo.jsx
   │
   ↓
Interactive Demo
```

The application should NOT create one giant component like:

```jsx
// ❌ Avoid
function AllReactDemos() {
  // useState
  // useEffect
  // useMemo
  // useRef
  // useCallback
  // ...
}
```

Instead:

```jsx
// ✅ Recommended

function UseStateDemo() {}

function UseEffectDemo() {}

function UseMemoDemo() {}

function UseRefDemo() {}

function UseCallbackDemo() {}
```

This keeps each lesson isolated and easy to understand.

---

# 19. Topic Page Structure

Every selected topic should follow the same UI structure.

```text
┌──────────────────────────────────────────────────────┐
│ 2.1 useState                                         │
│ Manage component state in React.                     │
├──────────────────────────────────────────────────────┤
│                                                      │
│ What is useState?                                    │
│                                                      │
│ Simple explanation...                                │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Interactive Demo                                     │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │                                                  │ │
│ │             UseStateDemo.jsx                    │ │
│ │                                                  │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ How It Works                                         │
│                                                      │
│ useState() → State → setState() → Re-render         │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Source Code                                          │
│                                                      │
│ ┌──────────────────────────────────────────────────┐ │
│ │ const [name, setName] = useState("");           │ │
│ │                                                  │ │
│ │ ...                                              │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Key Points                                           │
│                                                      │
│ ✓ State stores changing data                        │
│ ✓ setState updates state                             │
│ ✓ State update causes a render                       │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

# 20. Main Title and Subtitle Rule

Each **main section** must have:

```text
1. React Fundamentals

Learn the basic building blocks of React.
```

Each **topic** must have:

```text
1.1 Components

Build reusable pieces of UI with React components.
```

Example:

```text
2. State Management
Learn how React stores and updates changing data.

2.1 useState
Manage component-level state.

2.2 Multiple State
Manage multiple independent state values.

2.3 Object State
Manage state containing multiple related values.
```

This creates a clear learning hierarchy:

```text
Main Section
     │
     ├── Subtitle
     │
     ├── Topic
     │     ├── Explanation
     │     ├── Demo
     │     └── Source Code
     │
     ├── Topic
     │
     └── Topic
```

---

# 21. Responsive Sidebar

Desktop:

```text
Sidebar width: 280px
Main content: remaining width
```

Mobile:

```text
Sidebar → Drawer

☰ React Learning Lab

When menu opens:

┌──────────────────────┐
│ React Learning Lab   │
│                      │
│ 1. Fundamentals     │
│    1.1 Components    │
│    1.2 JSX           │
│                      │
│ 2. State             │
│    2.1 useState      │
│    2.2 Object State  │
└──────────────────────┘
```

---

# 22. Final Architecture Principle

The entire project should follow this rule:

```text
Curriculum
     ↓
Sidebar
     ↓
Selected Topic
     ↓
Topic Information
     ↓
Dedicated Demo Component
     ↓
Interactive React Behavior
     ↓
Source Code
     ↓
Key Learning Points
```

For example:

```text
2. State Management
        │
        └── 2.1 useState
                │
                ├── UseStateDemo.jsx
                │
                ├── Interactive Input
                │
                ├── Current State
                │
                ├── State Update Flow
                │
                └── Source Code
```

The application itself should therefore demonstrate good React architecture while teaching React concepts.
