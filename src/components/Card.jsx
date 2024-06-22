import '../styles/components/Card.css'
import { Link } from 'react-router-dom'

export default function Card() {
  return (
    <div className='card'>
      <div className='imageContainer'>
        <Link to='/post/someId'>
          <img
            src='https://web.dev/static/blog/web-platform-05-2024/hero.png'
            alt='card cover'
          />
        </Link>
      </div>
      <div className='content'>
        <h2>What is new in the web</h2>
        <p>
          What is new in Baseline this year, and about the new tools to help you
          make better use of Baseline.
        </p>
      </div>
    </div>
  )
}
