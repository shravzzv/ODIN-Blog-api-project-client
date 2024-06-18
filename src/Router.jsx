import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Post from './pages/Post.jsx'

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      // todo: Add error and exceptions pages
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/signin',
          element: <SignIn />,
        },
        {
          path: '/signup',
          element: <SignUp />,
        },
        {
          path: '/post/:id',
          element: <Post />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
