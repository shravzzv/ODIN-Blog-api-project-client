import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Post from './pages/Post.jsx'
import Error from './pages/Error.jsx'
import Profile from './pages/Profile.jsx'
import { useState } from 'react'

export default function Router() {
  const token = JSON.parse(localStorage.getItem('token'))
  const [isAuthenticated, setIsAuthenticated] = useState(token ? true : false)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout isAuthenticated={isAuthenticated} />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/signin',
          element: (
            <SignIn
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          ),
        },
        {
          path: '/signup',
          element: (
            <SignUp
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          ),
        },
        {
          path: '/post/:id',
          element: <Post />,
        },
        {
          path: '/profile',
          element: (
            <Profile
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          ),
        },
        {
          path: '*',
          element: <Error />,
        },
      ],
    },
    {
      path: '*',
      element: <Error />,
    },
  ])

  return <RouterProvider router={router} />
}
