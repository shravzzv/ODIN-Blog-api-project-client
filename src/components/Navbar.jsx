import '../styles/components/Navbar.css'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeLink, setActiveLink] = useState(1)
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname == '/') setActiveLink(1)
    if (pathname == '/signin') setActiveLink(2)
    if (pathname == '/signup') setActiveLink(3)
    if (!['/', '/signin', '/signup'].includes(pathname)) {
      setActiveLink(null)
    }
  }, [pathname])

  return (
    <nav>
      <ul>
        <li>
          <Link
            to='/'
            className={activeLink == 1 ? 'active' : ''}
            onClick={() => setActiveLink(1)}
          >
            Home
          </Link>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <Link
                to='/signin'
                className={activeLink == 2 ? 'active' : ''}
                onClick={() => setActiveLink(2)}
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                to='/signup'
                className={activeLink == 3 ? 'active' : ''}
                onClick={() => setActiveLink(3)}
              >
                Sign up
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
