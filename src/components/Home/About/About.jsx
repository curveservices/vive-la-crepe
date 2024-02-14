import { useEffect, useState } from 'react'
import TextAnimate from '../../AnimatedLetters/TextAnimate'
import logo from '../../../assets/images/vlc.png'
import './index.scss'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const About = () => {
  const [letterClass, setLetterClass] = useState('textAnimate')
  const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'U', 's']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('textAnimateHover')
    }, 3000)
  }, [])

  return (
    <>
    <AnimationOnScroll 
    animateIn='animate__fadeIn'>
      <h1 className="about-title">
        <TextAnimate
          stringArray={aboutArray}
          letterClass={letterClass}
          idx={15}
        />
      </h1>
      <img className="left" src={logo} alt="logo" />
      <div className="text-content">
        <h2>
          We have been working hard on our recipe since 2015 perfecting and
          ensuring a tasty, crispy crêpe. We are always improving our crêpes by
          taking your feedback and applying it to our food.
        </h2>
        <h2>
          We started out in 2015 testing our product on local street food
          markets in Horsham West Sussex and in Marylebone, London. From there
          we moved our crêperie into the events and festivals and have been
          traveling the UK from our South East London base.
        </h2>
        <h2>
          Since starting our humble crêperie we have learnt lots about events
          and festivals and we want to share some knowledge, reviews and
          feedback to help others that work in this fun environment and
          hopefully provide value to those who enjoy it as customers.
        </h2>
      </div>
      </AnimationOnScroll>
    </>
  )
}

export default About
