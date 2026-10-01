/**
 * Lesson content, keyed by topic id.
 *
 * Kept out of `curriculum.js` on purpose: the sidebar and search only need the
 * metadata, while the topic page needs the prose. A topic without an entry here
 * still renders — the page simply skips the sections it has no content for.
 *
 * Each entry may provide:
 *   explanation what the topic is, in plain language
 *   features    sub-topics, each with its own prose and example file
 *   flow        ordered steps shown as a "How It Works" chain
 *   sourceCode  snippet shown in the Source Code block
 *   keyPoints   takeaways listed at the bottom of the page
 *
 * A feature is `{ id, title, body, filename, code }` plus an optional `note`
 * for a caveat worth flagging. The `id` is the join key: the Burmese overlay in
 * `src/i18n/translations/lessons.my.js` is an object keyed by it, so a feature
 * can be reordered or have its prose rewritten without the translations
 * following it by mistake. `code` and `filename` stay untranslated — code is
 * code in every language.
 *
 * Keys are "<sectionId>/<topicId>", matching the URL of the lesson.
 */
export const lessons = {
  // ---------------------------------------------------------------- 1
  'fundamentals/components': {
    explanation:
      'A component is a reusable function that returns JSX. Its name starts with a capital letter so React can tell it apart from a plain HTML tag. Components can use other components, so you build a UI by nesting small pieces instead of writing one large function.',
    features: [
      {
        id: 'functional',
        title: 'Functional components',
        filename: 'FunctionalComponent.jsx',
        body:
          'Functional components are JavaScript functions that accept props and return React elements (JSX) describing what should appear on the screen.',
        code: `// A modern functional component.
export function FunctionalComponent() {
  return (
    <div className="card">
      <h2>Welcome to React Revision!</h2>
      <p>This is a modern functional component.</p>
    </div>
  );
}`,
      },
      {
        id: 'composition',
        title: 'Component composition',
        filename: 'ComponentComposition.jsx',
        body:
          'Component composition is the pattern of combining smaller, independent components together to build complex UI structures.',
        code: `function Header() {
  return <header><h1>My Application</h1></header>;
}

function Sidebar() {
  return <aside>Sidebar Navigation</aside>;
}

function Content() {
  return <main>Main Content Area</main>;
}

// Composition: combining smaller components inside a layout
export function ComponentComposition() {
  return (
    <div className="layout">
      <Header />
      <div className="body-wrapper">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}`,
      },
      {
        id: 'data-flow',
        title: 'Parent to child, and back again',
        filename: 'ParentChildDataFlow.jsx',
        body:
          'Data in React flows one way (parent to child via props). To pass data from child to parent, the parent passes a callback function down as a prop, which the child invokes with arguments.',
        code: `import { useState } from "react";

// Child component
function ChildInput({ onDataSend }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Child → Parent: calling the parent's function with data
    onDataSend(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type message for Parent..."
      />
      <button type="submit">Send to Parent</button>
    </form>
  );
}

// Parent component
export function ParentChildDataFlow() {
  const [childMessage, setChildMessage] = useState("No data yet");

  // Callback function to receive data from the child
  const handleChildData = (data) => {
    setChildMessage(data);
  };

  return (
    <div>
      <h3>Parent Component</h3>
      <p>Data received from child: <strong>{childMessage}</strong></p>

      {/* Parent → Child: passing a callback function as a prop */}
      <ChildInput onDataSend={handleChildData} />
    </div>
  );
}`,
      },
      {
        id: 'reusable',
        title: 'Reusable components and single responsibility',
        filename: 'ReusableComponent.jsx',
        body:
          'Reusable components are generic UI pieces configured via props. According to the Single Responsibility Principle, each component should ideally do only one thing.',
        code: `// Reusable button component
function BaseButton({ label, variant = "primary", onClick }) {
  const buttonStyle = {
    padding: "8px 16px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    backgroundColor: variant === "primary" ? "#0066cc" : "#dc3545",
    color: "#ffffff",
    marginRight: "8px",
  };

  return <button style={buttonStyle} onClick={onClick}>{label}</button>;
}

export function ReusableComponent() {
  return (
    <div>
      <h3>Reusable Buttons Example</h3>
      <BaseButton label="Save Changes" variant="primary" onClick={() => alert("Saved!")} />
      <BaseButton label="Delete Item" variant="danger" onClick={() => alert("Deleted!")} />
    </div>
  );
}`,
      },
      {
        id: 'presentational-vs-container',
        title: 'Presentational vs container',
        filename: 'PresentationalVsContainer.jsx',
        body:
          'Presentational components care about how things look (UI/HTML/CSS), receiving data via props. Container components care about how things work (state, fetching logic, lifecycle events).',
        note:
          'The simulated API call here uses setTimeout. A real effect that schedules a timer or opens a subscription has to return a cleanup function — see the Cleanup topic in section 3.',
        code: `import { useEffect, useState } from "react";

// 1. Presentational component (concerned with how it looks)
function UserListUI({ users, loading }) {
  if (loading) return <p>Loading users...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name} ({user.email})</li>
      ))}
    </ul>
  );
}

// 2. Container component (concerned with state and data fetching)
export function PresentationalVsContainer() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated API call
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Aung Aung", email: "aung@gmail.com" },
        { id: 2, name: "Mya Mya", email: "mya@gmail.com" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Passes the data to the presentational component
  return <UserListUI users={users} loading={loading} />;
}`,
      },
    ],
    flow: ['Parent Component', '<Header />', '<UserCard />', '<Footer />'],
    sourceCode: `// Condensed from src/concepts/fundamentals/ComponentsDemo.jsx

// 1. Child components — plain functions that return JSX.
function Header({ title }) {
  return <div>{title}</div>;
}

function UserCard({ name, role }) {
  return <p>{name} — {role}</p>;
}

function Footer({ children }) {
  return <footer>{children}</footer>;
}

// 2. The parent owns the data and decides what to render.
export default function ComponentsDemo() {
  const [name, setName] = useState("John");
  const [hidden, setHidden] = useState([]);

  const isVisible = (id) => !hidden.includes(id);

  return (
    <div>
      {isVisible("header") && <Header title="React Learning Lab" />}
      {isVisible("user") && <UserCard name={name} role="Frontend Developer" />}
      {isVisible("footer") && <Footer>Composed by ComponentsDemo</Footer>}
    </div>
  );
}`,
    keyPoints: [
      'Component names must start with a capital letter',
      'A component must return JSX, and a capitalised component is used as <Component />',
      'Components can be nested inside other components',
      'A component is just a function — no classes and no inheritance needed',
    ],
  },

  'fundamentals/jsx': {
    explanation:
      'JSX is a syntax extension that lets you write HTML-like markup inside JavaScript. Anything in curly braces is evaluated as a JavaScript expression, so variables, arithmetic and function calls can all be dropped straight into the markup. JSX compiles down to plain JavaScript, so browsers never parse JSX directly.',
    features: [
      {
        id: 'basic',
        title: 'JSX syntax and JavaScript inside it',
        filename: 'JsxBasic.jsx',
        body:
          'JSX stands for JavaScript XML. It allows us to write HTML-like markup directly inside a JavaScript file. We use curly braces {} to embed any JavaScript value or variable.',
        code: `export function JsxBasic() {
  // JavaScript variables
  const greeting = "Hello, React Developer!";
  const username = "Aung Aung";

  return (
    <div className="card">
      {/* JavaScript inside JSX using {} */}
      <h1>{greeting}</h1>
      <p>Welcome back, {username}!</p>
    </div>
  );
}`,
      },
      {
        id: 'expressions',
        title: 'Expressions',
        filename: 'JsxExpressions.jsx',
        body:
          'Inside {} in JSX, you can put any valid JavaScript expression (math calculations, function calls, string concatenation, or logical checks) that evaluates to a value.',
        code: `export function JsxExpressions() {
  const price = 100;
  const taxRate = 0.05;

  const calculateTotal = (p, t) => p + (p * t);

  return (
    <div>
      <h3>Order Summary</h3>
      {/* Math calculation expression */}
      <p>Item Price: \${price}</p>
      <p>Tax: \${price * taxRate}</p>

      {/* Function call expression */}
      <h4>Total Price: \${calculateTotal(price, taxRate)}</h4>
    </div>
  );
}`,
      },
      {
        id: 'conditional',
        title: 'Conditional rendering',
        filename: 'ConditionalRendering.jsx',
        body:
          'Conditional rendering in React works the same way conditions work in JavaScript. You can use the ternary operator (? :) for binary choices, or logical AND (&&) when you only want to render something if a condition is true.',
        code: `export function ConditionalRendering({ isLoggedIn, unreadMessagesCount }) {
  return (
    <nav>
      {/* Ternary operator: condition ? ifTrue : ifFalse */}
      {isLoggedIn ? (
        <button>Logout</button>
      ) : (
        <button>Login</button>
      )}

      {/* Logical AND: condition && render this if true */}
      {unreadMessagesCount > 0 && (
        <span className="badge">
          You have {unreadMessagesCount} new messages!
        </span>
      )}
    </nav>
  );
}`,
      },
      {
        id: 'lists',
        title: 'Lists and .map()',
        filename: 'ListsAndMap.jsx',
        body:
          'To render a list of dynamic elements in React, we transform array data into JSX elements using JavaScript .map() array method.',
        note:
          'key={index} is fine for a list that is never reordered, but the moment items are added or removed the index no longer identifies an item. Use an id — see the next feature.',
        code: `export function ListsAndMap() {
  const skills = ["JavaScript", "React", "TypeScript", "Node.js"];

  return (
    <div>
      <h3>Developer Skills</h3>
      <ul>
        {/* Transforming array items into <li> JSX elements */}
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}`,
      },
      {
        id: 'keys',
        title: 'The key prop',
        filename: 'KeyProp.jsx',
        body:
          'Keys help React identify which items have changed, been added, or been removed in a list. Keys must be given to elements inside an array to give them a stable, unique identity for performance and state tracking.',
        code: `export function KeyProp() {
  const users = [
    { id: "usr-101", name: "Aung Aung", role: "Frontend Developer" },
    { id: "usr-102", name: "Mya Mya", role: "UI/UX Designer" },
    { id: "usr-103", name: "Kyaw Kyaw", role: "Backend Developer" },
  ];

  return (
    <div>
      <h3>Team Members</h3>
      {users.map((user) => (
        // Using a unique 'id' as the key
        <div key={user.id} className="user-card">
          <h4>{user.name}</h4>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
}`,
      },
      {
        id: 'fragments',
        title: 'Fragments',
        filename: 'ReactFragments.jsx',
        body:
          'A React component must return a single root element. React Fragments (<React.Fragment> or <>...</>) let you group multiple children without adding an extra node to the HTML DOM structure.',
        code: `export function ReactFragments() {
  return (
    // <>...</> is the short syntax for <React.Fragment>...</React.Fragment>
    <>
      <h2>Title without an extra wrapper</h2>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </>
  );
}`,
      },
      {
        id: 'jsx-vs-html',
        title: 'JSX vs HTML',
        filename: 'JsxVsHtml.jsx',
        body:
          'Although JSX looks identical to HTML, it transpiles to JavaScript objects behind the scenes. Therefore it uses camelCase naming, enforces self-closing tags, and expects inline styles as objects.',
        code: `export function JsxVsHtml() {
  // Inline styles in JSX are objects, not CSS strings
  const customStyle = {
    color: "#0066cc",
    backgroundColor: "#f0f0f0",
    padding: "10px",
    borderRadius: "5px",
  };

  return (
    <div>
      {/* 1. className instead of class */}
      {/* 2. htmlFor instead of for */}
      <label htmlFor="user-input" className="form-label">
        Enter Username:
      </label>

      {/* 3. All tags must be closed (self-closing tag) */}
      <input id="user-input" type="text" placeholder="John Doe" />

      {/* 4. Inline styles are passed as a JavaScript object */}
      <div style={customStyle}>
        This is styled using a JavaScript object in JSX!
      </div>
    </div>
  );
}`,
      },
    ],
    flow: ['JavaScript expression', '{value}', 'Evaluated', 'Rendered as text'],
    sourceCode: `// Condensed from src/concepts/fundamentals/JsxDemo.jsx

const TOPICS = ["Components", "JSX", "Props", "Children", "Events"];

export default function JsxDemo() {
  const [name, setName] = useState("John");

  return (
    <div>
      {/* A variable and a method call, both evaluated by { } */}
      <h1>Hello {name || "React"}</h1>
      <p>{TOPICS.length} topics in section 1</p>

      {/* An expression can return a whole list */}
      <ul>
        {TOPICS.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>

      {/* When the condition is false, && renders nothing */}
      {isDark && <Badge>I only exist when the condition is true</Badge>}
    </div>
  );
}`,
    keyPoints: [
      'Curly braces { } evaluate JavaScript inside JSX',
      'Attributes use camelCase, e.g. className and onClick',
      'JSX must be wrapped in a single parent element (or a fragment <> </>)',
      'You can write {condition && <Thing />} to conditionally render',
    ],
  },

  'fundamentals/props': {
    explanation:
      'Props are the arguments a component receives. A parent passes them down like attributes on an HTML element, and the child reads them through the props object or by destructuring. Props are read-only: a component may never modify a prop, it can only ask its parent for a change through a callback.',
    features: [
      {
        id: 'destructuring',
        title: 'Passing and destructuring props',
        filename: 'PassingAndDestructuringProps.jsx',
        body:
          'Props allow you to pass custom data into components. Destructuring props directly in the parameter list makes component syntax cleaner and easier to read.',
        code: `// Destructuring props directly in the function signature
function UserProfileCard({ name, role, age }) {
  return (
    <div className="profile-card">
      <h4>{name}</h4>
      <p>Role: {role}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export function PassingAndDestructuringProps() {
  return (
    <div>
      {/* Passing props to a child component */}
      <UserProfileCard name="Kyaw Kyaw" role="Frontend Developer" age={26} />
    </div>
  );
}`,
      },
      {
        id: 'defaults-validation',
        title: 'Default values and validation',
        filename: 'DefaultValuesAndValidation.jsx',
        body:
          'Default prop values act as fallbacks if a prop is undefined. PropTypes validates data types passed to components to prevent runtime bugs.',
        note:
          'PropTypes still works as a development-time check, but it is no longer bundled with React. New code usually uses TypeScript types or a schema validator instead.',
        code: `import PropTypes from "prop-types";

// A component with default values for its props
function StatusBadge({ status = "Pending", priority = "Low" }) {
  return (
    <div>
      <span>Status: {status}</span> | <span>Priority: {priority}</span>
    </div>
  );
}

// Props validation using PropTypes
StatusBadge.propTypes = {
  status: PropTypes.string,
  priority: PropTypes.string,
};

export function DefaultValuesAndValidation() {
  return (
    <div>
      {/* Uses the fallback default values */}
      <StatusBadge />
      {/* Overrides the default values */}
      <StatusBadge status="Completed" priority="High" />
    </div>
  );
}`,
      },
      {
        id: 'functions-objects',
        title: 'Functions, objects and arrays',
        filename: 'PassingFunctionsAndObjects.jsx',
        body:
          'Props can accept complex structures like objects, arrays, and functions. Functions can be passed with dynamic arguments to notify the parent of child events.',
        code: `function ProductList({ items, config, onDeleteItem }) {
  return (
    <div>
      <h4>{config.title} ({config.currency})</h4>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - \${item.price}
            {/* Passing a function with an argument as a prop */}
            <button onClick={() => onDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PassingFunctionsAndObjects() {
  const products = [
    { id: 101, name: "Laptop", price: 999 },
    { id: 102, name: "Mouse", price: 25 },
  ];

  const listConfig = { title: "Available Items", currency: "USD" };

  const handleDelete = (productId) => {
    console.log(\`Product with ID \${productId} deleted!\`);
  };

  return (
    <ProductList
      items={products}
      config={listConfig}
      onDeleteItem={handleDelete}
    />
  );
}`,
      },
      {
        id: 'children-prop',
        title: 'The children prop',
        filename: 'ChildrenProp.jsx',
        body:
          'The children prop is a reserved React prop that passes the JSX elements placed inside a component opening and closing tags. It is ideal for container wrappers like Cards, Modals and Layouts.',
        code: `// A wrapper component using 'children'
function CustomCard({ title, children }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px", marginBottom: "12px" }}>
      {title && <h3>{title}</h3>}
      {/* Renders the nested content injected from the parent */}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export function ChildrenProp() {
  return (
    <div>
      {/* Example 1: passing text and a button */}
      <CustomCard title="Notification">
        <p>Your subscription is about to expire!</p>
        <button>Renew Now</button>
      </CustomCard>

      {/* Example 2: passing custom list UI */}
      <CustomCard title="Quick Stats">
        <ul>
          <li>Views: 1,200</li>
          <li>Likes: 450</li>
        </ul>
      </CustomCard>
    </div>
  );
}`,
      },
    ],
    flow: ['Parent', 'props: name="John"', 'Child', 'Hello John'],
    sourceCode: `// Condensed from src/concepts/fundamentals/PropsDemo.jsx

function Child(props) {
  // Destructuring is only shorthand — props.name means the same thing.
  const { name, role, onSuggestName } = props;

  return <p>Hello {name} — {role}</p>;
}

export default function PropsDemo() {
  const [name, setName] = useState("John");

  return (
    // Down with props, up with a callback the parent passed down.
    <Child name={name} role="Student" onSuggestName={setName} />
  );
}

// Reading a prop is fine. Writing to one throws in development:
// React freezes the props object.
tryToWriteProp(props); // TypeError: read only property 'name'`,
    keyPoints: [
      'Props are passed like HTML attributes: <Child name="John" />',
      'Destructure props in the function parameter for readability',
      'Props are read-only inside the child component',
      'Data flows one way: down through props, up through callback functions',
    ],
  },

  'fundamentals/children': {
    explanation:
      'When you put JSX between a component’s opening and closing tags, React receives it as the special children prop. This lets a component wrap arbitrary content — like a Card — without knowing what is inside it, which is one of the simplest ways to build reusable layouts.',
    flow: ['<Card>', 'children', 'Child component', 'Renders children inside'],
    sourceCode: `// Condensed from src/concepts/fundamentals/ChildrenDemo.jsx

function Card({ title, children }) {
  return (
    <div>
      {title && <p>{title}</p>}
      {children}
    </div>
  );
}

export default function ChildrenDemo() {
  return (
    <Card title="Greeting">
      <p>Hello React</p>
    </Card>
  );
}

// Card never changes — it just decides where the content goes.
// Any content works: elements, several elements, plain text, or nothing.`,
    keyPoints: [
      'JSX between tags arrives as props.children',
      'children can be a single element, several elements, or a string',
      'Render {children} wherever the wrapped content should appear',
      'This is the basis of layout components and compound components',
    ],
  },

  'fundamentals/events': {
    explanation:
      'React attaches events with props like onClick, onChange and onSubmit. The handler receives a synthetic event object, which mimics the browser event but is normalised across browsers. Events flow up: a child button can call the handler its parent passed down as a prop.',
    flow: ['User clicks', 'onClick handler', 'setState(...)', 'Component re-renders'],
    sourceCode: `// Condensed from src/concepts/fundamentals/EventsDemo.jsx

export default function EventsDemo() {
  const [clicks, setClicks] = useState(0);

  return (
    <button onClick={(event) => setClicks((prev) => prev + 1)}>
      Clicked: {clicks} times
    </button>
  );
}

// Without this the browser reloads the page and the state is lost.
function handleSubmit(event) {
  event.preventDefault();
  setItems((prev) => [...prev, text]);
}

// An arrow function is how you pass an argument:
// without it React hands the event object to the handler instead.
<button onClick={() => greet("Ada")}>Greet Ada</button>
<button onClick={greet}>This one gets the event</button>

// A child handler runs first, then the click keeps going up to every ancestor
// until something calls stopPropagation().
function Child({ onPick }) {
  return <button onClick={(e) => { e.stopPropagation(); onPick("inner"); }}>Pick</button>;
}`,
    keyPoints: [
      'Handlers are named onXxx props: onClick, onChange, onSubmit',
      'They receive a synthetic event object with preventDefault() and stopPropagation()',
      'A handler can be an inline arrow function or a named function',
      'To pass arguments, wrap the call in an arrow function',
    ],
  },

  'fundamentals/conditional-rendering': {
    explanation:
      'React has no special syntax for if/else in markup, so you use plain JavaScript inside JSX. The three common forms are the ternary operator for choose-one, the && operator for show-or-nothing, and an early return for when nothing should render at all.',
    flow: ['Condition', 'ternary &&  ||  return null', 'Render matching UI'],
    sourceCode: `// Condensed from src/concepts/fundamentals/ConditionalRenderingDemo.jsx

export default function ConditionalRenderingDemo() {
  const [user, setUser] = useState(null);
  const isLoggedIn = user !== null;

  return (
    <div>
      {/* Choose one of two */}
      {isLoggedIn ? <Dashboard name={user} /> : <Login onLogin={setUser} />}

      {/* Or render something or nothing */}
      {isLoggedIn && <p>Welcome back</p>}
    </div>
  );
}

// The && gotcha: 0 is falsy, but it is also valid JSX to render.
{count && <Badge />}        // renders the text "0" when count is 0
{count > 0 && <Badge />}    // safe — nothing renders when count is 0`,
    keyPoints: [
      'Ternary picks between two elements: cond ? <A /> : <B />',
      '&& renders nothing when the condition is false',
      'Return null to render an empty component',
      'Read the ternary first — nesting them quickly becomes unreadable',
    ],
  },

  // ---------------------------------------------------------------- 2
  'state/use-state': {
    explanation:
      'useState gives a component its own memory. It returns the current value and a setter function; calling the setter asks React to re-render the component with the new value. State is a snapshot, so two calls in the same handler both see the value from the current render.',
    flow: ['User input', 'onChange', 'setName(value)', 'State update', 'Re-render'],
    sourceCode: `// Condensed from src/concepts/state/UseStateDemo.jsx

import { useState } from "react";

export default function UseStateDemo() {
  const [name, setName] = useState("");

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello {name || "React"}</p>
    </>
  );
}

// Why not a plain variable? The component body runs again from the top on
// every render, so this is back to 0 before the button can ever read it.
let localValue = 0;        // never survives a render
const [count, setCount] = useState(0);  // React keeps this one`,
    keyPoints: [
      'const [value, setValue] = useState(initialValue)',
      'Calling the setter triggers a re-render with the new value',
      'State is private to the component that declares it',
      'State is a snapshot — reading it twice in one handler gives the same value',
    ],
  },

  'state/multiple-state': {
    explanation:
      'Nothing stops a component from calling useState several times. Each call is an independent slot with its own value and setter, and React groups the updates so the component renders once no matter how many setters you call in the same event.',
    flow: ['useState("")', 'useState(0)', 'Independent values', 'One re-render'],
    sourceCode: `// Condensed from src/concepts/state/MultipleStateDemo.jsx

import { useState } from "react";

export default function MultipleStateDemo() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isStudent, setIsStudent] = useState(false);

  // Four setters, three slots. React collects them all and renders once.
  function updateEverything() {
    setName("updated");
    setAge((prev) => prev + 1);
    setIsStudent(true);
    setAge((prev) => prev + 1);
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setAge((prev) => prev + 1)}>Age: {age}</button>
    </div>
  );
}

// Hooks are matched by position, not by name — so never call useState
// inside an if, a loop, or after an early return.`,
    keyPoints: [
      'Call useState once per independent value',
      'Each hook call keeps its own position, so order must never change',
      'Updating several states in one event still causes a single re-render',
      'Group values that always change together into one object state instead',
    ],
  },

  'state/object-state': {
    explanation:
      'When several fields belong together — a user, a form, a product — one object is usually cleaner than three separate states. Because state is replaced rather than merged, every update must spread the previous object and override only the keys that change.',
    flow: ['setUser(prev => ({ ...prev, age: prev.age + 1 }))', 'New object', 'Re-render'],
    sourceCode: `// Condensed from src/concepts/state/ObjectStateDemo.jsx

import { useState } from "react";

export default function ObjectStateDemo() {
  const [user, setUser] = useState({ name: "", age: 0 });

  // One helper means no caller can forget the spread.
  const update = (key, value) =>
    setUser((prev) => ({ ...prev, [key]: value }));

  return <input value={user.name} onChange={(e) => update("name", e.target.value)} />;
}

// Both of these change data. Only one changes anything you can see:
user.age = 40;                                  // mutates — React sees the
setUser(user);                                  // same reference, skips it

setUser((prev) => ({ ...prev, age: prev.age + 1 }));  // new object — renders

// And this one loses every field it did not mention:
setUser({ age: user.age + 1 });   // name and city are gone`,
    keyPoints: [
      'State is replaced, not merged — always spread the previous object',
      'Use a functional update when the next value depends on the old one',
      'Keep objects immutable: create new objects instead of mutating them',
      'Related fields in one object makes updates atomic',
    ],
  },

  'state/array-state': {
    explanation:
      'Arrays are the most common case where the "replace, do not mutate" rule bites. Adding uses spread and concat-style spreading, removing uses filter, and updating maps over the list to replace one entry. The array reference must always be new so React sees a change.',
    flow: ['setItems(prev => [...prev, newItem])', 'New array', 'Re-render'],
    sourceCode: `// Condensed from src/concepts/state/ArrayStateDemo.jsx

import { useState } from "react";

export default function ArrayStateDemo() {
  const [items, setItems] = useState([]);

  const add = (item) => setItems((prev) => [...prev, item]);
  const remove = (id) =>
    setItems((prev) => prev.filter((entry) => entry.id !== id));
  const rename = (id, text) =>
    setItems((prev) =>
      prev.map((entry) => (entry.id === id ? { ...entry, text } : entry)),
    );

  return <button onClick={() => add({ id: nextId(), text: "Apple" })}>Add Item</button>;
}

// These all change the array you already hold, so React never notices:
items.push(x);   items.splice(i, 1);   items.sort();
items.reverse(); items.pop();          items[0] = x;

// Reordering is fine as long as you build a new array first:
setItems((prev) => [...prev].reverse());
setItems((prev) => [...prev].sort((a, b) => a.text.localeCompare(b.text)));

// Keys: use the entry id. An index is only stable while nothing is
// added or removed, and it makes inputs lose their place on screen.`,
    keyPoints: [
      'Add with [...prev, item] and remove with filter',
      'Update with map to produce a new array',
      'Never use push/splice/sort directly on state',
      'Use the entry id as the key, not the array index',
    ],
  },

  'state/functional-updates': {
    explanation:
      'When the next state depends on the previous state, pass a function instead of a value. React queues updater functions and applies them in order, so two increments in the same click both count — with a captured value, the second would overwrite the first.',
    flow: ['setCount(prev => prev + 1)', 'React queues the updater', 'Applies to latest state', 'Re-render'],
    sourceCode: `// Condensed from src/concepts/state/FunctionalUpdateDemo.jsx

import { useState } from "react";

export default function FunctionalUpdateDemo() {
  const [count, setCount] = useState(0);

  function stale() {
    // Both calls read the same \`count\` from this render,
    // so the second overwrites the first.  0 -> 1, not 0 -> 2.
    setCount(count + 1);
    setCount(count + 1);
  }

  function fresh() {
    // React queues both functions and runs them against the latest
    // state, in order.  0 -> 2.
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  return <button onClick={stale}>stale</button>;
}

// Inside a timer, an effect, or any callback that runs later, there is
// no correct version that reads the captured variable. Always pass
// a function there.`,
    keyPoints: [
      'Pass a value only when it does not depend on current state',
      'The updater receives the latest state, not the value from this render',
      'React batches updates and applies updaters in order',
      'Prefer functional updates inside async callbacks and effects',
    ],
  },

  // ---------------------------------------------------------------- 3
  'effects/use-effect': {
    explanation:
      'useEffect runs a side effect after React has painted the DOM. It is for synchronising with things outside React — timers, subscriptions, the browser API, a network request. It is not for computing values; that is what useMemo is for.',
    flow: ['Render', 'Commit DOM', 'Effect runs', 'Cleanup on unmount'],
    sourceCode: `import { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [renders, setRenders] = useState(0);
  setRenders((prev) => prev + 1);

  useEffect(() => {
    console.log("Effect executed");
  }, []);

  return <p>Render Count: {renders}</p>;
}`,
    keyPoints: [
      'Effects run after the render is committed to the DOM',
      'The dependency array controls how often the effect re-runs',
      'An effect must return a cleanup function or nothing',
      'Never define state inside an effect without a dependency that changes',
    ],
  },

  'effects/dependency-array': {
    explanation:
      'The dependency array is the contract between the effect and the outside world. React stores the previous array, compares it with the current one, and re-runs the effect if any value changed. Every reactive value the effect reads must be listed, or the effect will use a stale value.',
    flow: ['Change count', 'New render', 'Deps differ', 'Effect re-runs'],
    sourceCode: `useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]); // re-runs only when count changes`,
    keyPoints: [
      '[] means run once on mount',
      '[value] means run when that value changes',
      'No array means run after every render',
      'The linter warns about missing dependencies — fix the cause, do not silence it',
    ],
  },

  'effects/no-dependency-array': {
    explanation:
      'Omit the dependency array and the effect runs after every render, including renders caused by its own state updates. That is fine for logging, and dangerous for anything that writes state — each run schedules a new render, and the next run schedules another.',
    flow: ['Render', 'Effect runs', 'Effect sets state', 'Render again', '...'],
    sourceCode: `useEffect(() => {
  console.log("ran after every render");
}); // no dependency array`,
    keyPoints: [
      'No array means the effect runs after every single render',
      'Great for logging and debugging render behaviour',
      'Setting state inside such an effect causes an endless loop',
      'Add a dependency array to stop the loop',
    ],
  },

  'effects/cleanup': {
    explanation:
      'The function you return from an effect is its cleanup. React runs it before the effect re-runs and again when the component unmounts, which is how you cancel timers, remove listeners and abort requests. Without cleanup, every re-run would stack another subscription on top of the last one.',
    flow: ['Effect runs', 'Re-render or unmount', 'Cleanup runs', 'Effect runs again'],
    sourceCode: `useEffect(() => {
  const timer = setInterval(() => setTick((t) => t + 1), 1000);

  return () => clearInterval(timer);
}, []);`,
    keyPoints: [
      'Return a function from the effect to define cleanup',
      'Cleanup runs before the next run and on unmount',
      'Always clear timers, listeners and subscriptions',
      'In StrictMode, effects run, clean up, and run again — cleanup must be idempotent',
    ],
  },

  'effects/fetching-data': {
    explanation:
      'Fetching in an effect follows three states: loading, success, error. A live request can resolve after the component is gone or after newer data arrived, so guard with an ignore flag or an AbortController to avoid setting state on an unmounted component or overwriting newer results.',
    flow: ['Loading', 'API request', 'Success', 'or Error'],
    sourceCode: `useEffect(() => {
  let ignore = false;
  const controller = new AbortController();

  fetch("/api/users", { signal: controller.signal })
    .then((res) => res.json())
    .then((data) => { if (!ignore) setUsers(data); })
    .catch((err) => { if (!ignore) setError(err.message); })
    .finally(() => { if (!ignore) setLoading(false); });

  return () => { ignore = true; controller.abort(); };
}, []);`,
    keyPoints: [
      'Track loading and error state alongside the data',
      'Cancel the request on cleanup to avoid stale responses',
      'The dependency array decides when the request re-fires',
      'For read-only data consider a framework or a data library instead',
    ],
  },

  // ---------------------------------------------------------------- 4
  'refs/use-ref': {
    explanation:
      'useRef returns a mutable container whose current value survives every render. Mutating it does not re-render the component, which makes it ideal for values React does not need to display: timers, previous values, counters and DOM nodes.',
    flow: ['useRef(initial)', 'Mutate .current', 'Value persists', 'No re-render'],
    sourceCode: `import { useRef } from "react";

export default function UseRefDemo() {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return <p>Rendered {renderCount.current} times</p>;
}`,
    keyPoints: [
      'const ref = useRef(initialValue)',
      'Read and write ref.current freely — it is mutable',
      'Changing .current never triggers a re-render',
      'If the UI must show the value, use state instead of a ref',
    ],
  },

  'refs/dom-reference': {
    explanation:
      'Passing a ref object as a prop to a JSX element gives React attaches the real DOM node to ref.current. That lets you call browser methods such as focus(), scrollIntoView() or measure an element’s size — things you cannot do with state alone.',
    flow: ['<input ref={inputRef} />', 'Mount', 'inputRef.current = DOM node', 'Call .focus()'],
    sourceCode: `import { useRef } from "react";

export default function DomRefDemo() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} placeholder="Input" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </>
  );
}`,
    keyPoints: [
      'ref.current is null on the first render and the node after mount',
      'Access DOM nodes inside effects or event handlers, not during render',
      'Typing a JSX factory that forwards a ref is called useImperativeHandle',
      'Prefer state for anything the user should see',
    ],
  },

  'refs/use-ref-vs-use-state': {
    explanation:
      'Both persist between renders, but only state re-renders the component. The rule is simple: if the value affects what is painted, use state. If it is a handle, a timer id or a value only read later by an effect, use a ref — re-rendering for it would be wasted work.',
    flow: ['useState: set value -> re-render', 'useRef: set .current -> no re-render'],
    sourceCode: `const [count, setCount] = useState(0);   // re-renders
const countRef = useRef(0);        // does not

// Use the ref to read the latest value inside a long-lived callback.
useEffect(() => {
  const id = setInterval(() => console.log(countRef.current), 1000);
  return () => clearInterval(id);
}, []);`,
    keyPoints: [
      'State is for values the UI must display',
      'Refs are for mutable values the UI never displays',
      'A ref lets an effect or timer read the newest value without re-subscribing',
      'Never write a ref during render; change it in an effect or a handler',
    ],
  },

  // ---------------------------------------------------------------- 5
  'performance/react-memo': {
    explanation:
      'React.memo wraps a component so React can skip re-rendering it when its props are shallowly equal to the previous render. It only works if every prop is stable: an inline object, array or function is a new reference each render and defeats the memo entirely.',
    flow: ['Parent re-renders', 'Compare props with React.memo', 'Same -> skip child render'],
    sourceCode: `import { memo } from "react";

const Row = memo(function Row({ label }) {
  console.log("Row rendered");
  return <li>{label}</li>;
});

export default function ReactMemoDemo() {
  return (
    <>
      <Row label="Apple" />
      <OtherState />
    </>
  );
}`,
    keyPoints: [
      'memo() compares props with Object.is',
      'A new function, object or array prop breaks the comparison',
      'memo only helps for expensive children; measure first',
      'Combine with useCallback and useMemo for stable props',
    ],
  },

  'performance/use-memo': {
    explanation:
      'useMemo caches the result of a calculation between renders. If the dependencies have not changed, React returns the cached value and the calculation never runs. Use it for genuinely expensive work or for a value that must keep a stable identity, not as a reflex.',
    flow: ['Change dependency', 'useMemo recomputes', 'Otherwise returns cache'],
    sourceCode: `import { useMemo, useState } from "react";

const expensiveCalculation = (n) => { /* heavy work */ return n * 2; };

export default function UseMemoDemo() {
  const [number, setNumber] = useState(1);
  const [unrelated, setUnrelated] = useState(0);

  const result = useMemo(() => expensiveCalculation(number), [number]);

  return <button onClick={() => setUnrelated(unrelated + 1)}>unrelated: {unrelated}</button>;
}`,
    keyPoints: [
      'const value = useMemo(() => compute(), [deps])',
      'The calculation only re-runs when a dependency changes',
      'Changing unrelated state keeps the cached result',
      'Memoization has a cost — only wrap expensive work',
    ],
  },

  'performance/use-callback': {
    explanation:
      'useCallback is useMemo for functions. It returns the same function reference until a dependency changes, which stops that function from becoming a new prop on every render — the thing that most often defeats React.memo on a child.',
    flow: ['Deps change', 'New function reference', 'Deps same -> same reference'],
    sourceCode: `import { useCallback, useState } from "react";

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // no dependencies -> stable forever

  return <button onClick={handleClick}>{count}</button>;
}`,
    keyPoints: [
      'const fn = useCallback(() => {}, [deps])',
      'Keeps the function reference stable between renders',
      'Makes props stable so React.memo can actually skip renders',
      'Pass state used inside the callback as a dependency',
    ],
  },

  // ---------------------------------------------------------------- 6
  'context/create-context': {
    explanation:
      'createContext returns a context object holding a default value. Nothing reads it yet — the object is just a way for a provider far up the tree and a consumer far below to agree on the same value. Without a provider, consumers fall back to that default.',
    flow: ['createContext(defaultValue)', 'Context object', 'Provider sets value', 'Consumer reads value'],
    sourceCode: `import { createContext } from "react";

const ThemeContext = createContext("light");

export default ThemeContext; // usually not needed, import it where you use it`,
    keyPoints: [
      'createContext(defaultValue) returns a context object',
      'A context is defined once, usually in its own file',
      'The default value is used by consumers that have no provider above them',
      'Context does not re-render consumers when the provider is a parent of the consumer',
    ],
  },

  'context/provider': {
    explanation:
      'The provider component takes a value prop and puts it into the context for everything rendered inside it. Any number of nested providers may exist; a consumer always uses the closest one above it. The value is read with useContext, never from props.',
    flow: ['ThemeContext.Provider', 'value: theme', 'Any descendant', 'useContext(ThemeContext)'],
    sourceCode: `function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <Page />
    </ThemeContext.Provider>
  );
}`,
    keyPoints: [
      'Every component below the provider can read the value',
      'The closest provider wins when providers are nested',
      'The value prop is the only thing consumers receive',
      'Keep the value stable, or memoize the value object for expensive trees',
    ],
  },

  'context/use-context': {
    explanation:
      'useContext subscribes a component to a context and returns the current value. The component re-renders whenever the value changes, no matter how deep it sits in the tree — that is the whole point, and the reason context replaces most prop drilling.',
    flow: ['useContext(ThemeContext)', 'Theme: light', 'Toggle in provider', 'Theme: dark'],
    sourceCode: `import { useContext } from "react";

function ToggleButton() {
  const theme = useContext(ThemeContext);
  return <button>Current theme: {theme}</button>;
}`,
    keyPoints: [
      'const value = useContext(MyContext)',
      'Hooks can only be called at the top level of a component or a custom hook',
      'Every consumer of a changed context re-renders',
      'Split contexts by update frequency when a value changes often',
    ],
  },

  // ---------------------------------------------------------------- 7
  'custom-hooks/what-is-a-custom-hook': {
    explanation:
      'A custom hook is a function whose name starts with use that may call other hooks. It is how you name and reuse a piece of stateful logic. It does not create a new component, and two components using the same hook still have completely separate state.',
    flow: ['Component A + B', 'shared state logic', 'useCounter()', 'Reusable, but separate state'],
    sourceCode: `function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  return {
    count,
    increment: () => setCount((prev) => prev + 1),
  };
}

// Two components, one hook, two independent counters.
function A() { const c = useCounter(); /* ... */ }
function B() { const c = useCounter(); /* ... */ }`,
    keyPoints: [
      'Name it with a use prefix so the rules of hooks apply',
      'Extract the logic, not the JSX — the hook returns values, the component renders',
      'State is per component instance, never shared through a hook',
      'Return an object when the hook exposes more than one value',
    ],
  },

  'custom-hooks/use-counter': {
    explanation:
      'useCounter is the classic teaching hook: one piece of state, a few actions built from functional updates, and a tidy object returned to the caller. Every consumer gets its own count, so one instance cannot accidentally affect another.',
    flow: ['useCounter(10)', 'count: 10', 'increment / decrement', 'count: 11'],
    sourceCode: `import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}`,
    keyPoints: [
      'Always update from prev to avoid stale values',
      'Give the initial value a default so the hook is flexible',
      'Expose reset when the component needs to restore the initial value',
      'Two components using the hook keep separate counts',
    ],
  },

  'custom-hooks/use-toggle': {
    explanation:
      'useToggle wraps a boolean and the function that flips it. The setter from useState ignores function values, so toggle receives the current value and inverts it explicitly. Return the value under a readable name rather than as a bare boolean.',
    flow: ['useToggle()', 'value: false', 'toggle()', 'value: true'],
    sourceCode: `import { useState } from "react";

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, toggle, setTrue, setFalse };
}`,
    keyPoints: [
      'Flip with a functional update: setValue((prev) => !prev)',
      'Do not pass a function directly to a state setter',
      'Extra setters make the hook usable in more places',
      'Small hooks compose: useToggle can live inside useMenu',
    ],
  },

  'custom-hooks/use-input': {
    explanation:
      'useInput binds one input to state and returns the value together with a change handler. Spreading the returned props onto the input removes all the repetition that would otherwise be copy-pasted into every form in the app.',
    flow: ['useInput("")', 'value + onChange', 'Spread on <input />', 'Live value'],
    sourceCode: `import { useState } from "react";

export function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => setValue(event.target.value);
  const reset = () => setValue(initialValue);

  return { value, onChange, reset };
}

// usage: <input {...useInput("")} />`,
    keyPoints: [
      'Return value and onChange so they can be spread onto the element',
      'Accept an initial value to make the hook reusable',
      'Add reset, focus and validation helpers as the hook grows',
      'One hook per input keeps each field independent',
    ],
  },

  'custom-hooks/use-local-storage': {
    explanation:
      'useLocalStorage reads its initial value from localStorage and writes every change straight back. Storage is a shared external system, so the hook has to survive bad JSON, a missing key and a full quota without crashing the component.',
    flow: ['read localStorage', 'useState initial', 'On change: write to localStorage', 'Reload reads it again'],
    sourceCode: `import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const update = (next) => {
    setValue((prev) => {
      const resolved = typeof next === "function" ? next(prev) : next;
      window.localStorage.setItem(key, JSON.stringify(resolved));
      return resolved;
    });
  };

  return [value, update];
}`,
    keyPoints: [
      'Read storage lazily in the useState initialiser so it runs once',
      'JSON.parse can throw — wrap it in try/catch',
      'Write on every change, using a functional update to stay correct',
      'The initialiser only runs on mount; later changes use the stored value',
    ],
  },

  // ---------------------------------------------------------------- 8
  'forms/controlled-input': {
    explanation:
      'A controlled input takes its value from React state and reports every keystroke through onChange. React decides what appears in the field, which means the displayed value and your state can never disagree. Leave the value undefined and the input goes back to being uncontrolled.',
    flow: ['Keystroke', 'onChange', 'setValue', 'Re-render with new value'],
    sourceCode: `const [name, setName] = useState("");

<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>

// If you forget onChange, React warns: "a controlled input without onChange".`,
    keyPoints: [
      'value + onChange is the controlled pattern',
      'The value always comes from state, never from the DOM',
      'Without onChange the input is uncontrolled and warns',
      'Always provide a string — null and undefined make the input uncontrolled',
    ],
  },

  'forms/form-submit': {
    explanation:
      'Handle submissions with onSubmit on the form and call event.preventDefault() to stop the browser from reloading the page. Validate before you save, then clear the state so the form is ready for the next entry.',
    flow: ['Submit', 'onSubmit(e)', 'preventDefault()', 'Read state', 'Save and reset'],
    sourceCode: `const [name, setName] = useState("");
const [submitted, setSubmitted] = useState(null);

function handleSubmit(event) {
  event.preventDefault(); // stop the page reload
  if (!name.trim()) return;
  setSubmitted(name);
  setName("");
}

<form onSubmit={handleSubmit}>...</form>`,
    keyPoints: [
      'Always call preventDefault() inside onSubmit',
      'Read the values from state, not from FormData of a live DOM',
      'Give submit buttons type="submit" so Enter also works',
      'Reset the state after a successful submit',
    ],
  },

  'forms/multiple-inputs': {
    explanation:
      'For several fields, keep one state object and give every input a name. One generic handleChange updates the matching key, so adding a field means adding a key and an input — not another handler. This is the same object-state pattern from section 2.3.',
    flow: ['Change input', 'name="email"', 'setForm(prev => ({ ...prev, email }))', 'Re-render'],
    sourceCode: `const [form, setForm] = useState({ name: "", email: "" });

const handleChange = (event) => {
  const { name, value } = event.target;
  setForm((prev) => ({ ...prev, [name]: value }));
};

<input name="name" value={form.name} onChange={handleChange} />
<input name="email" value={form.email} onChange={handleChange} />`,
    keyPoints: [
      'One state object, one generic change handler',
      'Use name on the input and read it from event.target',
      'Spread the previous object on every update',
      'Add a nested path like form.address.city for grouped fields',
    ],
  },

  'forms/validation': {
    explanation:
      'Validate on submit first, then re-validate a field once it has been touched. Showing an error for an empty field the user has not typed in yet is noise. Keep the rules as a plain object of functions so they can be reused and tested.',
    flow: ['Submit', 'Run rules', 'Set errors', 'Show messages', 'Re-validate on change'],
    sourceCode: `const rules = {
  email: (v) => (!v ? "Email is required" : !/^[^@]+@[^@]+$/.test(v) ? "Invalid email" : ""),
};

const [errors, setErrors] = useState({});

function validate(values) {
  return Object.fromEntries(
    Object.entries(rules).map(([field, rule]) => [field, rule(values[field])]),
  );
}`,
    keyPoints: [
      'Validate on submit, then live once a field is touched',
      'Keep rules in plain functions, separate from the components',
      'Mark invalid fields with aria-invalid and link messages with aria-describedby',
      'Never rely on validation alone — check on the server too',
    ],
  },

  // ---------------------------------------------------------------- 9
  'advanced/use-reducer': {
    explanation:
      'useReducer moves state transitions into a pure function. Instead of three scattered setters you get one action type and one reducer that describes every legal change. When updates start depending on each other, a reducer is far easier to follow and to test.',
    flow: ['Dispatch action', 'reducer(state, action)', 'New state', 'Re-render'],
    sourceCode: `import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: "increment" });`,
    keyPoints: [
      'The reducer must be pure — no side effects, no mutation',
      'Return the same state object to skip a re-render',
      'One action per change makes the flow easy to trace and log',
      'useReducer pairs well with context for complex global state',
    ],
  },

  'advanced/use-transition': {
    explanation:
      'useTransition marks an update as non-urgent. React renders the new state in the background and keeps the current UI interactive while it works, showing isPending until the transition finishes. It cannot control text inputs — use useDeferredValue for that.',
    flow: ['startTransition(() => setTab(next))', 'Old UI stays interactive', 'isPending true', 'New UI paints'],
    sourceCode: `import { useState, useTransition } from "react";

const [isPending, startTransition] = useTransition();
const [tab, setTab] = useState("home");

function select(next) {
  startTransition(() => setTab(next)); // non-urgent
}`,
    keyPoints: [
      'Non-urgent updates render in the background',
      'isPending tells you when to show a subtle loading state',
      'The current UI stays responsive during the transition',
      'Never use a transition to control an input value',
    ],
  },

  'advanced/use-deferred-value': {
    explanation:
      'useDeferredValue returns a second, lagging copy of a value. The component renders immediately with the new value for cheap parts, while the expensive part keeps using the previous one until React catches up. It is the tool for keeping a search box responsive while a long list filters.',
    flow: ['Type quickly', 'Deferred value lags behind', 'Expensive list uses old value', 'React catches up'],
    sourceCode: `import { useDeferredValue, useState } from "react";

const [query, setQuery] = useState("");
const deferredQuery = useDeferredValue(query);

return (
  <>
    <input value={query} onChange={(e) => setQuery(e.target.value)} />
    <SlowList query={deferredQuery} />
  </>
);`,
    keyPoints: [
      'The deferred value trails the real value by a render or two',
      'Use it to defer expensive work, not the state that owns an input',
      'Combine with Suspense for data fetching',
      'Compare with useTransition: this defers a value, that defers an update',
    ],
  },

  'advanced/use-id': {
    explanation:
      'useId generates an id that is unique across every component using the hook, and — unlike Math.random or a counter — it stays identical between the server and the client. That makes it the correct way to connect a label to its input with htmlFor and id.',
    flow: ['useId()', ':r1:', 'label htmlFor + input id', 'Correct association'],
    sourceCode: `import { useId } from "react";

function Field({ label, children }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {children(id)}
    </div>
  );
}`,
    keyPoints: [
      'Returns a stable unique id string',
      'Safe for SSR and for lists where an index will not do',
      'Use it for htmlFor/id and aria-describedby pairs',
      'Not a substitute for a real database id',
    ],
  },

  'advanced/use-layout-effect': {
    explanation:
      'useLayoutEffect runs after the DOM is updated but before the browser paints, so the user never sees the intermediate state. Use it only when you must measure or change the DOM first — measuring an element or repositioning something. For everything else, useEffect is the right choice.',
    flow: ['DOM updated', 'useLayoutEffect runs (before paint)', 'Measure / adjust', 'Browser paints'],
    sourceCode: `import { useLayoutEffect, useRef } from "react";

const ref = useRef(null);

useLayoutEffect(() => {
  const { height } = ref.current.getBoundingClientRect();
  setHeight(height); // no visible flash
}, [content]);`,
    keyPoints: [
      'Blocks painting until it finishes',
      'Use it for measurement that would otherwise flicker',
      'Prefer useEffect — it is faster and does not block paint',
      'The server warns about useLayoutEffect in SSR apps',
    ],
  },

  'advanced/use-imperative-handle': {
    explanation:
      'useImperativeHandle lets a child choose what its ref exposes. Instead of handing the parent the whole DOM node, you return a small object with just the methods the parent is allowed to call — keeping the child’s internals private.',
    flow: ['Parent creates ref', 'useImperativeHandle(ref, () => ({ focus }))', 'Parent calls ref.current.focus()'],
    sourceCode: `import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
    clear: () => { inputRef.current.value = ""; },
  }), []);

  return <input ref={inputRef} {...props} />;
});`,
    keyPoints: [
      'Pair it with forwardRef to receive the ref',
      'Return only the methods the parent should use',
      'List the reactive values used inside as dependencies',
      'An empty ref lets the parent reach the DOM node directly',
    ],
  },

  'advanced/use-sync-external-store': {
    explanation:
      'useSyncExternalStore subscribes a component to a store that lives outside React — a websocket, a Web Worker, an event emitter. React calls getSnapshot on every render and re-renders when the snapshot changes, which is exactly what external stores need in order to stay consistent.',
    flow: ['getSnapshot()', 'Render with value', 'subscribe(listener)', 'Store changes -> re-render'],
    sourceCode: `import { useSyncExternalStore } from "react";

const store = {
  listeners: new Set(),
  value: 0,
  set(next) { this.value = next; this.listeners.forEach((l) => l()); },
  getSnapshot: () => store.value,
  subscribe: (listener) => {
    store.listeners.add(listener);
    return () => store.listeners.delete(listener);
  },
};

function useStore() {
  return useSyncExternalStore(store.subscribe, store.getSnapshot);
}`,
    keyPoints: [
      'Needs subscribe, getSnapshot and optionally getServerSnapshot',
      'getSnapshot must return a cached value — a new object every call loops',
      'Use it to bring non-React stores into React safely',
      'This is the primitive most state libraries are built on',
    ],
  },

  // ---------------------------------------------------------------- 10
  'patterns/composition': {
    explanation:
      'Instead of a component with fifty boolean props, build small parts and let the parent assemble them. The caller then composes exactly the structure it needs, and the parts stay reusable because they know nothing about each other.',
    flow: ['Small building blocks', 'Parent composes', 'Layout defined at the call site'],
    sourceCode: `function Avatar({ user }) { /* ... */ }
function Card({ children }) { return <div className="card">{children}</div>; }

// The parent owns the layout, the parts stay dumb.
<Card>
  <Avatar user={user} />
  <h2>{user.name}</h2>
</Card>`,
    keyPoints: [
      'Prefer children and composition over configuration props',
      'Accept className and extra props so parts stay flexible',
      'Keep the parts unaware of each other',
      'Related components should live in the same file when they are a set',
    ],
  },

  'patterns/prop-drilling': {
    explanation:
      'Prop drilling is threading a prop through components that do not care about it, only to reach one that does. It works, but every intermediate component changes whenever the prop changes. The fixes are children, composition, or context — usually composition, because it also removes the wrapper.',
    flow: ['Top has data', 'Passes down 3 levels', 'Middle ignores it', 'Bottom needs it'],
    sourceCode: `// Smell: Middle only forwards user.
<Layout user={user}>
  <Sidebar user={user}>
    <Profile user={user} />
  </Sidebar>
</Layout>

// Fix with composition: no middle component.
<Layout>
  <Sidebar />
  <Profile user={user} />
</Layout>`,
    keyPoints: [
      'Prop drilling is not an error, it is a signal the tree is too deep',
      'Composition usually removes the pass-through component entirely',
      'Context is the right fix when the value is truly global',
      'Lifting state up is another valid answer',
    ],
  },

  'patterns/compound-components': {
    explanation:
      'A compound component is a parent that owns shared state and a set of children that read it from context. Callers assemble the pieces, but they cannot work apart — which gives you an API like <Tabs><TabList><Tab/></TabList><TabPanel/></Tabs> with a guaranteed consistent structure.',
    flow: ['Parent holds state', 'Provider wraps children', 'Children call useContext', 'Shared state'],
    sourceCode: `const TabsContext = createContext(null);

export function Tabs({ defaultTab, children }) {
  const [tab, setTab] = useState(defaultTab);
  return (
    <TabsContext.Provider value={{ tab, setTab }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function Tab({ id, children }) {
  const { tab, setTab } = useContext(TabsContext);
  return <button onClick={() => setTab(id)}>{children}</button>;
}`,
    keyPoints: [
      'The parent owns the state, the children read it from context',
      'Children must be rendered inside the parent — fail loudly if not',
      'The caller controls the structure, the library controls the behaviour',
      'The pattern behind Radix, Headless UI and React Aria',
    ],
  },

  'patterns/container-presentational': {
    explanation:
      'A container component owns the data — fetching, state, effects — and renders a presentational component that only receives props and has no logic of its own. The benefit is testability: the UI is a pure function of its props, so you can test it without mocking anything.',
    flow: ['Container: fetch + state', 'Props', 'Presentational: UI only', 'Pure and testable'],
    sourceCode: `// Container
function UserListContainer() {
  const [users, setUsers] = useState([]);
  useEffect(() => { fetchUsers().then(setUsers); }, []);
  return <UserList users={users} onSelect={setUsers} />;
}

// Presentational — no hooks, no requests
function UserList({ users, onSelect }) {
  return users.map((user) => <li key={user.id} onClick={() => onSelect(user)}>{user.name}</li>);
}`,
    keyPoints: [
      'The container knows about the data, the view does not',
      'The presentational component is a pure function of its props',
      'Cheap to test, reuse and to render in Storybook',
      'With hooks this split is a convention rather than a hard rule',
    ],
  },

  'patterns/render-props': {
    explanation:
      'A render prop is a function passed as a child, so the caller decides how the shared state is displayed. The component keeps the state and the logic, and hands both to the function. The tradeoff: the function is a new reference on every render, which is why useCallback often appears alongside it.',
    flow: ['Component holds state', 'Calls children(state)', 'Your function renders the UI'],
    sourceCode: `function Counter({ children }) {
  const [count, setCount] = useState(0);
  return <div>{children({ count, increment: () => setCount((c) => c + 1) })}</div>;
}

<Counter>
  {({ count, increment }) => (
    <button onClick={increment}>{count}</button>
  )}
</Counter>`,
    keyPoints: [
      'The child of the component is a function, not JSX',
      'Gives the caller full control over rendering',
      'The function must be called — never treat it as a component reference',
      'Consider children-as-a-function or a compound component for the same job',
    ],
  },

  'patterns/higher-order-components': {
    explanation:
      'A higher-order component is a function that takes a component and returns a new component with extra behaviour — logging, auth, theme. It is the functional version of a decorator, and the classic way libraries such as Redux, React Router and styled-components add features without touching your code.',
    flow: ['withFeature(Component)', 'Returns Wrapper', 'Wrapper renders Component', 'With extra behaviour'],
    sourceCode: `function withLogging(WrappedComponent) {
  return function LoggedComponent(props) {
    console.log("rendering", WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}

const ButtonWithLogging = withLogging(Button);

// props get a second ref argument
function withRef(Wrapped) {
  return function Wrapper(props, ref) {
    return <Wrapped {...props} ref={ref} />;
  };
}`,
    keyPoints: [
      'A HOC takes a component and returns a component',
      'Pass every prop through with {...props}',
      'Forward refs explicitly — a HOC otherwise blocks them',
      'Name the returned component for readable React DevTools output',
    ],
  },
}

/** Lesson content for a route, or undefined when the topic has no entry yet. */
export function getLesson(sectionId, topicId) {
  return lessons[`${sectionId}/${topicId}`]
}
