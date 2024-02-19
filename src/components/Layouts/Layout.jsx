import { Link, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SocialIcons from '../Socials/SocialIcons'
import Navbar from '../NavBar/Navbar'
import Logo from '../../assets/images/vlc.png'
import './Layout.scss'
import Footer from '../Footer/Footer'

const Layout = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <div className="app">
        <header className="header">
          <Navbar />
          <Link to="/">
            <img className="logo" src={Logo} />
          </Link>
          <SocialIcons />
        </header>
        <main className="page">
          <Outlet />
        </main>
      </div>
      {showButton && (
            <button className="back-to-top" onClick={scrollToTop}>
              &#11014;
            </button>
          )}
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
