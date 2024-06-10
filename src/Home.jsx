import Navbar from './components/Navbar'
import './styles/pages/Home.css'
import Footer from './components/Footer'
import Card from './components/Card'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id='home'>
        <div className='hero'>
          <div className='imageContainer'>
            <img
              src='https://web.dev/static/images/blog-header_720.png'
              alt='hero'
            />
          </div>
          <div className='content'>
            <h1>Blog</h1>
            <p>Our latest news, updates, and stories for developers</p>
          </div>
        </div>
        <div className='cards'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
      <Footer />
    </>
  )
}
