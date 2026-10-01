import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout.jsx'
import ConceptPage from './pages/ConceptPage.jsx'
import Home from './pages/Home.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

/**
 * Routes follow the curriculum data: /<sectionId>/<topicId>
 * Data lives in src/data/curriculum.js, so a new lesson needs no new route.
 */
export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path=":sectionId/:topicId" element={<ConceptPage />} />
            <Route path="*" element={<ConceptPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
