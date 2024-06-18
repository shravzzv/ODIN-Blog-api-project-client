import '../styles/pages/SignUp.css'

export default function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault()
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
          />
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
          />
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
          />
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

        <div className='formControl'>
          <label htmlFor='passwordConfirm'>Confirm Password*</label>
          <input
            type='password'
            name='passwordConfirm'
            id='passwordConfirm'
            minLength={8}
            required
          />
        </div>

        <div className='formControl'>
          <label htmlFor='bio'>Bio</label>
          <textarea name='bio' id='bio' cols='24' rows='5'></textarea>
        </div>

        <button className='filled' type='submit'>
          Submit
        </button>
      </form>
    </main>
  )
}
