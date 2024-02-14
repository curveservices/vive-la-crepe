import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TextAnimate from '../AnimatedLetters/TextAnimate'
import './Home.scss'
import vive from '../../assets/images/Vive+La+Crepe+street+food.jpeg'
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
    }, 4000)
  }, [])

  return (
    <div className="container homePage">
      <div className="textBox">
        <h1>
          <TextAnimate
            stringArray={homeArray}
            letterClass={letterClass}
            idx={15}
          />
        </h1>
        <h2>A guilty pleasure made innocent</h2>
        <Link to="/contact" className="flatBtn">
          CONTACT US
        </Link>

        <div className="imgContainer">
          <img src={vive} alt="Vive La Crepe food stand" />
        </div>
        <About />
        <Work />
      </div>
      <Loader type="line-spin-fade-loader" />
    </div>
  )
}

export default Home
