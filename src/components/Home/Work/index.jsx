import './index.scss'
import board from '../../../assets/images/board-masters.png'
import cardiff from '../../../assets/images/cardiff world cup.png'
import cowes from '../../../assets/images/cowes-week.png'
import ideal from '../../../assets/images/ideal-home-show.png'
import volvo from '../../../assets/images/volvo-ocean-race.png'
import mfdf from '../../../assets/images/mfdf.png'
import lytham from '../../../assets/images/lytham-festival.png'
import foodies from '../../../assets/images/Foodies-festival.png'
import borough from '../../../assets/images/bourogh-market.png'
import cambery from '../../../assets/images/camberly-food-festival.png'
import elm from '../../../assets/images/elmsbridge food festival.png'
import italiana from '../../../assets/images/festaItaliana.png'
import fested from '../../../assets/images/logochristmas.png'
import main from '../../../assets/images/main-logo.png'
import summer from '../../../assets/images/summer_fest_logo-3000-1875-1024x640.png'
import big from '../../../assets/images/The_Big_Nibble_2016.png'
import truro from '../../../assets/images/truro_food_festival.png'
import yule from '../../../assets/images/yule.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const Work = () => {
  return (
    <AnimationOnScroll animateIn='animate__fadeIn'>
    <div className="body">
      <div className="marquee">
        <div className="marquee__group">
          <img src={board} alt="boardmasters" />
          <img src={cardiff} alt="homeless world cup" />
          <img src={cowes} alt="Lendy cowes week" />
          <img src={ideal} alt="ideal home show" />
          <img src={volvo} alt="volvo ocean race" />
        </div>
        <div aria-hidden="true" className="marquee__group">
          <img src={mfdf} alt="manchester f and d festival" />
          <img src={lytham} alt="lytham festival" />
          <img src={foodies} alt="foodies festival" />
          <img src={borough} alt="borough market" />
        </div>
      </div>
      <div className="marquee marquee--borders">
        <div className="marquee__group">
          <p>Who we work with</p>
          <p aria-hidden="true">Who we work with</p>
          <p aria-hidden="true">Who we work with</p>
        </div>

        <div aria-hidden="true" className="marquee__group">
          <p>Who we work with</p>
          <p>Who we work with</p>
          <p>Who we work with</p>
        </div>
      </div>
      <div className="marquee marquee--reverse">
        <div className="marquee__group">
          <img src={cambery} alt="camberly fest" />
          <img src={elm} alt="elmsbridge" />
          <img src={italiana} alt="festival italiana" />
          <img src={fested} alt="eat and drink festival" />
          <img src={summer} alt="summer fest" />
        </div>
        <div aria-hidden="true" className="marquee__group">
          <img src={main} alt="eat and drink festival" />
          <img src={big} alt="The biig nibble" />
          <img src={truro} alt="Truro festival" />
          <img src={yule} alt="yule festival" />
        </div>
      </div>
    </div>
    </AnimationOnScroll>
  )
}

export default Work
