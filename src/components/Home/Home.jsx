import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TextAnimate from '../AnimatedLetters/TextAnimate'
import './Home.scss'
import vive from '../../assets/images/Vive+La+Crepe+street+food.png'
import About from './About/About'
import Loader from 'react-loaders'
import Work from './Work'

const Home = () => {
  const [letterClass, setLetterClass] = useState('textAnimate')
  const homeArray = [
    'V',
    'i',
    'v',
    'e',
    ' ',
    'l',
    'a',
    ' ',
    'C',
    'r',
    'ê',
    'p',
    'e',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('textAnimateHover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="homePage">
        <div className="text-box">
          <h1>
            <TextAnimate
              stringArray={homeArray}
              letterClass={letterClass}
              idx={15}
            />
          </h1>
          <h2 className="strap">A guilty pleasure made innocent</h2>
          <Link to="/contact" className="flat-btn">
            Get in touch
          </Link>
          <div className="img-container">
            <img
              className="home-img"
              src={vive}
              alt="Vive La Crepe food stand"
            />
          </div>
          <About />
          <Work />
        </div>
      </div>
      <Loader type="line-spin-fade-loader" />
    </>
  )
}

export default Home
