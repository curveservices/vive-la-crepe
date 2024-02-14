import { Link, Outlet } from 'react-router-dom'
import SocialIcons from '../Socials/SocialIcons'
import Navbar from '../NavBar/Navbar'
import Logo from '../../assets/images/vlc.png'
import './Layout.scss'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div className="app">
      <header className="header">
        <Navbar />
        <Link to="/">
          <img className='logo' src={Logo} />
        </Link>
        <SocialIcons />
      </header>
      <main className="page">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
