import fundamentalsEn from './fundamentals.en.js'
import stateEn from './state.en.js'
import fundamentalsMy from './fundamentals.my.js'
import stateMy from './state.my.js'

/**
 * Demo copy, split by curriculum section so a new lesson means editing the file
 * for its own section rather than a single ever-growing blob.
 *
 * Each file is one namespace per demo component, named exactly as the component
 * in `src/concepts/registry.js`.
 */
export const demosEn = { ...fundamentalsEn, ...stateEn }
export const demosMy = { ...fundamentalsMy, ...stateMy }
