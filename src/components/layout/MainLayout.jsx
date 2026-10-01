import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'

/** MainLayout — header + sidebar + routed content, per the spec layout. */
export default function MainLayout() {
  const { pathname } = useLocation()

  // The drawer stores the route it was opened on, so it closes itself as soon
  // as the route changes — no effect, no extra render.
  const [openedOn, setOpenedOn] = useState(null)
  const isSidebarOpen = openedOn === pathname

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Header onOpenMenu={() => setOpenedOn(pathname)} />

      <div className="flex min-h-0 flex-1">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setOpenedOn(null)} />

        <main className="min-w-0 flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
