import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Outlet } from 'react-router-dom'

export default function Layout(props) {
  return (
    <>
      <Navbar {...props} />
      <Outlet />
      <Footer />
    </>
  )
}
