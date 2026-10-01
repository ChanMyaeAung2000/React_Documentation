/**
 * English UI chrome.
 *
 * This file holds only the strings the app shell owns — labels, headings,
 * button text, empty states. Curriculum titles and lesson prose are NOT here:
 * those live in `src/data/` (which is the English source of truth) and are
 * registered automatically by `src/i18n/config.js`.
 *
 * Demo copy lives in `src/i18n/locales/demos.en.js`.
 */
export default {
  app: {
    name: 'React Learning Lab',
  },

  lang: {
    /** Shown on the toggle itself. */
    toggle: 'Language',
    switchTo: 'Switch to {{language}}',
  },

  header: {
    openNav: 'Open navigation',
    searchLabel: 'Search topics',
    searchPlaceholder: 'Search topics…',
    noResults: 'No topic matches “{{query}}”.',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
  },

  sidebar: {
    heading: 'Curriculum',
    navLabel: 'Curriculum',
    closeNav: 'Close navigation',
    counts: '{{sections}} sections · {{topics}} topics',
  },

  home: {
    eyebrow: 'Interactive',
    tagline:
      'Learn React by reading a lesson and then playing with the real thing. Every topic has its own demo component, so you can see the state, the effects and the render counts change as you click.',
    startWith: 'Start with {{number}} {{title}}',
    curriculumHeading: 'Curriculum',
    moreInSidebar: '+{{count}} more in the sidebar',
  },

  concept: {
    breadcrumbLabel: 'Breadcrumb',
    navLabel: 'Lesson navigation',
    home: 'Home',
    explanation: 'Explanation',
    demo: 'Interactive Demo',
    features: 'In Depth',
    showCode: 'Show {{file}}',
    howItWorks: 'How It Works',
    sourceCode: 'Source Code',
    keyPoints: 'Key Points',
    previous: '← Previous',
    next: 'Next →',
    notFoundTitle: 'Topic not found',
    notFoundBody: 'There is no topic at /{{section}}/{{topic}}.',
    backHome: '← Back to the home page',
  },

  demo: {
    loading: 'Loading demo…',
    placeholderBody:
      'This demo is not built yet. Create src/concepts/{{name}}.jsx and register it in src/concepts/registry.js.',
  },

  common: {
    copy: 'Copy',
    copied: 'Copied',
  },

  levels: {
    Beginner: 'Beginner',
    Intermediate: 'Intermediate',
    Advanced: 'Advanced',
  },
}
