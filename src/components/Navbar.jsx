import '../styles/components/Navbar.css'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
}

export default function Navbar({ isAuthenticated }) {
  const [activeLink, setActiveLink] = useState(1)
  const { pathname } = useLocation()

  useEffect(() => {
    if (pathname == '/') setActiveLink(1)
    if (pathname == '/signin') setActiveLink(2)
    if (pathname == '/signup') setActiveLink(3)
    if (pathname == '/profile') setActiveLink(4)
    if (!['/', '/signin', '/signup', '/profile'].includes(pathname)) {
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
        {isAuthenticated && (
          <li>
            <Link
              to='/profile'
              className={activeLink == 4 ? 'active' : ''}
              onClick={() => setActiveLink(4)}
            >
              Profile
            </Link>
          </li>
        )}
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
