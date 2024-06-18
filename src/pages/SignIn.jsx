import Navbar from '../components/Navbar'
import '../styles/pages/SignIn.css'
import Footer from '../components/Footer'

export default function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <Navbar />
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
            />
          </div>

          <div className='formControl'>
            <label htmlFor='password'>Password*</label>
            <input
              type='password'
              name='password'
              id='password'
              required
              minLength={8}
            />
          </div>
          {/* todo: figure out how you're gonna add a password visibility toggle */}

          <button className='filled' type='submit'>
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </>
  )
}
