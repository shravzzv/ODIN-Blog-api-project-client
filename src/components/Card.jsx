import '../styles/components/Card.css'

export default function Card() {
  return (
    <div className='card'>
      <div className='imageContainer'>
        <a href='#'>
          <img
            src='https://web.dev/static/blog/web-platform-05-2024/hero.png'
            alt='card cover'
          />
        </a>
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
