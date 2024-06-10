import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './styles/pages/home.css'

export default function Home() {
  return (
    <div className='home'>
      <Navbar />
      <p>Home</p>
      <Footer />
    </div>
  )
}
