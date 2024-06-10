import { useState } from 'react'
import '../styles/components/Navbar.css'

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <nav>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        {!isAuthenticated && (
          <>
            <li>
              <a href='#'>Sign in</a>
            </li>
            <li>
              <a href='#'>Sign up</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}
