import { Navigate, useNavigate } from 'react-router-dom'
import '../styles/pages/Profile.css'
import PropTypes from 'prop-types'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'

Profile.propTypes = {
  isAuthenticated: PropTypes.bool,
  setIsAuthenticated: PropTypes.func,
}

export default function Profile({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    bio: '',
  })
  const [formErrors, setFormErrors] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...data,
      [name]: value,
    })
  }

  const updateDialogRef = useRef(null)
  const deleteDialogRef = useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = JSON.parse(localStorage.getItem('userId'))
        const res = await axios.get(`http://localhost:3000/users/${userId}`)
        const data = res.data.user
        setData(data)
        setFormData({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          email: data.email || '',
          username: data.username || '',
          bio: data.bio || '',
        })
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    isAuthenticated && fetchData()
  }, [isAuthenticated])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    setIsAuthenticated(false)
    navigate('/')
  }

  const handleUpdateFormSubmit = async (e) => {
    try {
      e.preventDefault()
      const userId = JSON.parse(localStorage.getItem('userId'))
      const token = JSON.parse(localStorage.getItem('token'))
      const res = await axios.put(
        `http://localhost:3000/users/${userId}`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        }
      )
      setData(res.data.updatedUser)
      setFormErrors(null)
      updateDialogRef.current.close()
    } catch (error) {
      setFormErrors(error.response.data.errors)
    }
  }

  const handleDelete = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem('userId'))
      const token = JSON.parse(localStorage.getItem('token'))
      await axios.delete(`http://localhost:3000/users/${userId}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      setIsAuthenticated(false)
      navigate('/')
    } catch (error) {
      alert('An error occured while deleting the profile.')
    }
  }

  if (!isAuthenticated) {
    return <Navigate to={'/'} replace />
  }

  if (isLoading) {
    return (
      <main id='profile'>
        <p>Loading...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main id='profile'>
        <p>An error occured while fetching the user data!</p>
      </main>
    )
  }

  return (
    <main id='profile'>
      <h1>{data.firstName + ' ' + data.lastName}</h1>
      <div className='profilePicContainer'>
        <img
          src={
            data.profilePicUrl ||
            'https://res.cloudinary.com/dmt9s5xlh/image/upload/v1719130473/defaultProfile_vgn5sr.png'
          }
          alt={data.username}
        />
      </div>
      <p>@{data.username}</p>
      <p>{data.bio}</p>
      <div className='actions'>
        <button
          className='elevated'
          onClick={() => updateDialogRef.current.showModal()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 -960 960 960'
            width='24px'
          >
            <path d='M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z' />
          </svg>
          <span>Update profile</span>
        </button>
        <button
          className='elevated'
          onClick={() => deleteDialogRef.current.showModal()}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 -960 960 960'
            width='24px'
          >
            <path d='M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z' />
          </svg>
          <span>Delete profile</span>
        </button>
        <button className='filled' onClick={handleLogout}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24px'
            viewBox='0 -960 960 960'
            width='24px'
          >
            <path d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z' />
          </svg>
          <span>Logout</span>
        </button>
      </div>

      <dialog id='updateProfile' ref={updateDialogRef}>
        <p className='headline'>Update Profile</p>

        <form onSubmit={handleUpdateFormSubmit}>
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
              value={formData.firstName}
              onChange={handleChange}
            />
            {formErrors &&
              formErrors.find((error) => error.path === 'firstName') && (
                <span className='error'>
                  {formErrors.find((error) => error.path === 'firstName').msg}
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
              value={formData.lastName}
              onChange={handleChange}
            />
            {formErrors &&
              formErrors.find((error) => error.path === 'lastName') && (
                <span className='error'>
                  {formErrors.find((error) => error.path === 'lastName').msg}
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
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors &&
              formErrors.find((error) => error.path === 'email') && (
                <span className='error'>
                  {formErrors.find((error) => error.path === 'email').msg}
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
              value={formData.username}
              onChange={handleChange}
            />
            {formErrors &&
              formErrors.find((error) => error.path === 'username') && (
                <span className='error'>
                  {formErrors.find((error) => error.path === 'username').msg}
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
              value={formData.bio}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className='actions'>
            <button
              type='button'
              className='elevated'
              onClick={() => {
                updateDialogRef.current.close()
                setFormErrors(null)
              }}
            >
              close
            </button>

            <button className='filled' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </dialog>

      <dialog id='deleteProfile' ref={deleteDialogRef}>
        <h2 className='headline'>Delete Profile</h2>
        <p className='supportingText'>
          Are you sure you want to delete your profile?
        </p>
        <div className='actions'>
          <button
            className='text'
            onClick={() => deleteDialogRef.current.close()}
          >
            close
          </button>
          <button className='filled' onClick={handleDelete}>
            Delete
          </button>
        </div>
      </dialog>
    </main>
  )
}
