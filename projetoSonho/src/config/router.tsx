import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// PAGES
import Home from '@/pages/home'
import Contact from '@/pages/contact'
import { Spinner } from '@/components/ui'
import Login from '@/pages/login/Indexlogin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

export default function Router() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
