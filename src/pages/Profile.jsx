import { Navigate, useNavigate } from 'react-router-dom'
import '../styles/pages/Profile.css'
import PropTypes from 'prop-types'

Profile.propTypes = {
  isAuthenticated: PropTypes.bool,
  setIsAuthenticated: PropTypes.func,
}

export default function Profile({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
    navigate('/')
  }

  if (!isAuthenticated) {
    return <Navigate to={'/'} replace />
  }

  return (
    <main id='profile'>
      <h1>Profile</h1>
      <button className='filled' onClick={handleLogout}>
        Logout
      </button>
    </main>
  )
}
