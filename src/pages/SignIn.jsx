import { useState } from 'react'
import '../styles/pages/SignIn.css'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

SignIn.propTypes = {
  isAuthenticated: PropTypes.bool,
  setIsAuthenticated: PropTypes.func,
}

export default function SignIn({ isAuthenticated, setIsAuthenticated }) {
  const [data, setData] = useState({
    username: '',
    password: '',
  })
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const res = await axios.post('http://localhost:3000/users/signin', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const token = res.data.token
      localStorage.setItem('token', JSON.stringify(token))
      setIsAuthenticated(true)
      navigate('/')
    } catch (error) {
      setErrors(error.response.data.errors)
    }
  }

  if (isAuthenticated) {
    return <Navigate to={'/'} replace />
  }

  return (
    <main id='signin'>
      <form onSubmit={handleSubmit}>
        <div className='formControl'>
          <label htmlFor='username'>Username*</label>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='johnDo3'
            minLength={3}
            maxLength={20}
            required
            value={data.username}
            onChange={handleChange}
          />
          {errors && errors.find((error) => error.path === 'username') && (
            <span className='error'>
              {errors.find((error) => error.path === 'username').msg}
            </span>
          )}
        </div>

        <div className='formControl'>
          <label htmlFor='password'>Password*</label>
          <input
            type='password'
            name='password'
            id='password'
            required
            minLength={8}
            value={data.password}
            onChange={handleChange}
          />
          {errors && errors.find((error) => error.path === 'password') && (
            <span className='error'>
              {errors.find((error) => error.path === 'password').msg}
            </span>
          )}
        </div>
        {/* todo: figure out how you're gonna add a password visibility toggle */}

        <button className='filled' type='submit'>
          Submit
        </button>
      </form>
    </main>
  )
}
