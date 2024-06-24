import { useState } from 'react'
import '../styles/pages/SignUp.css'
import axios from 'axios'
import { useNavigate, Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

SignUp.propTypes = {
  isAuthenticated: PropTypes.bool,
  setIsAuthenticated: PropTypes.func,
}

export default function SignUp({ isAuthenticated, setIsAuthenticated }) {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
    bio: '',
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
      const res = await axios.post('http://localhost:3000/users/signup', data, {
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
    <main id='signup'>
      <form onSubmit={handleSubmit}>
        <div className='formControl'>
          <label htmlFor='firstName'>First Name*</label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            placeholder='John'
            minLength={3}
            maxLength={20}
            required
            value={data.firstName}
            onChange={handleChange}
          />
          {errors && errors.find((error) => error.path === 'firstName') && (
            <span className='error'>
              {errors.find((error) => error.path === 'firstName').msg}
            </span>
          )}
        </div>

        <div className='formControl'>
          <label htmlFor='lastName'>Last Name*</label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            placeholder='Doe'
            minLength={3}
            maxLength={20}
            required
            value={data.lastName}
            onChange={handleChange}
          />
          {errors && errors.find((error) => error.path === 'lastName') && (
            <span className='error'>
              {errors.find((error) => error.path === 'lastName').msg}
            </span>
          )}
        </div>

        <div className='formControl'>
          <label htmlFor='email'>Email*</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='johndoe@mail.com'
            required
            autoComplete='on'
            value={data.email}
            onChange={handleChange}
          />
          {errors && errors.find((error) => error.path === 'email') && (
            <span className='error'>
              {errors.find((error) => error.path === 'email').msg}
            </span>
          )}
        </div>

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

        <div className='formControl'>
          <label htmlFor='passwordConfirm'>Confirm Password*</label>
          <input
            type='password'
            name='passwordConfirm'
            id='passwordConfirm'
            minLength={8}
            required
            value={data.passwordConfirm}
            onChange={handleChange}
          />
          {errors &&
            errors.find((error) => error.path === 'passwordConfirm') && (
              <span className='error'>
                {errors.find((error) => error.path === 'passwordConfirm').msg}
              </span>
            )}
        </div>

        <div className='formControl'>
          <label htmlFor='bio'>Bio</label>
          <textarea
            name='bio'
            id='bio'
            cols='24'
            rows='5'
            value={data.bio}
            onChange={handleChange}
          ></textarea>
        </div>

        <button className='filled' type='submit'>
          Submit
        </button>
      </form>
    </main>
  )
}
