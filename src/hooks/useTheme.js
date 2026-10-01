import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext.jsx'

/** Read the current theme and the toggle helper. */
export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used inside <ThemeProvider>')
  }

  return context
}
