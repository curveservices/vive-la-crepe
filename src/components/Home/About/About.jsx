import { useEffect, useState } from 'react'
import TextAnimate from '../../AnimatedLetters/TextAnimate'

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
      <h1>
        <TextAnimate
          stringArray={aboutArray}
          letterClass={letterClass}
          idx={15}
        />
      </h1>
      <br />
      <h2>
        We have been working hard on our recipe since 2015 perfecting and
        ensuring a tasty, crispy and spongy crepe. We constantly improve on our
        crepes by taking your feedback and applying it to our food.
      </h2>
      <h2>
        We started out in 2015 trading and testing our product on local street
        food markets in Horsham West Sussex and in Marylebone West London. From
        there we moved our creperie into the events and festival side of our
        industry and have been traveling the UK ever since from our South East
        London base.
      </h2>
      <h2>
        Since starting our humble creperie we have learnt a lot about the events
        and festival sector and now we want to give some knowledge, reviews and
        feedback to help the people that work in this fun and crazy environment
        and hopefully provide value to those who enjoy it as customers.
      </h2>
    </>
  )
}

export default About
