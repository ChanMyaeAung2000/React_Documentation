# React Learning Lab

An interactive React learning app. Every topic in the curriculum is its own demo
component, so the app is both the documentation and a working example of
component-based React architecture.

Built with Vite, React 19, Tailwind CSS v4 and react-router-dom.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint` | oxlint, with the React Compiler rules |
| `npm run check:data` | Verify the curriculum and lesson content agree |
| `npm run check` | `lint` + `check:data` |

## How the app is wired

The sidebar, the search box, the home page and the lesson pages all read from
one file, so adding a lesson never means touching the UI:

```
src/data/curriculum.js   sections, topics, routing helpers
src/data/lessons.js      explanation, flow, source code, key points
src/concepts/registry.js demo component name -> component
```

```
Sidebar  ->  /:sectionId/:topicId  ->  ConceptPage  ->  DemoOutlet  ->  Demo component
```

### Adding a lesson

1. Add a topic to `src/data/curriculum.js`:
   ```js
   { id: 'use-state', number: '2.1', title: 'useState',
     description: 'Store and update component-level state.',
     component: 'UseStateDemo', level: 'Beginner' }
   ```
2. Add its content to `src/data/lessons.js` under the key `state/use-state`.
3. Create `src/concepts/state/UseStateDemo.jsx` with a default-exported component.
4. Register it in `src/concepts/registry.js`:
   ```js
   const registry = {
     UseStateDemo: () => import('./state/UseStateDemo.jsx'),
   }
   ```
5. Run `npm run check:data`.

Until step 4 the lesson page still renders completely, with a placeholder in
place of the demo — the sidebar, search and lesson content already work.

## Styling

Tailwind v4 is wired through the Vite plugin (`@tailwindcss/vite`); there is no
`tailwind.config.js`. Dark mode is a `dark` class on `<html>`, declared in
`src/index.css` with `@custom-variant dark`, and persisted to localStorage by
`src/context/ThemeContext.jsx`.

## Layout

```
src/
├── components/
│   ├── layout/      Header, Sidebar, MainLayout
│   ├── navigation/  SidebarSection, SidebarItem
│   └── ui/          Card, Button, Input, Badge, CodeBlock
├── concepts/        demo components + registry
├── context/         ThemeContext
├── data/            curriculum.js, lessons.js
├── hooks/           useTheme
├── pages/           Home, ConceptPage
├── scripts/         check-curriculum.js
├── App.jsx
├── main.jsx
└── index.css
```

`SPEC.md` holds the original brief this project is built from.
