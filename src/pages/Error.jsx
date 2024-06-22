import { Link } from 'react-router-dom'
import '../styles/pages/Error.css'

export default function Error() {
  return (
    <main className='error'>
      <h1>404</h1>
      <p>OOPS! There is nothing to see here.</p>
      <Link to='/' className='homeLink'>
        Click here to go back to home
      </Link>
    </main>
  )
}
