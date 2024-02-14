import './Footer.scss'
import ncass from '../../assets/images/ncass_web_transp.png'
import fh5 from '../../assets/images/fh5.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="footer">
      <div className="img-container">
        <img src={ncass} alt="ncass" />
        <img src={fh5} alt="food hygiene 5 star" />
        <Link to="https://dev-paul.netlify.app/" target="_blank">
          <p>Copyright Immutable Designs &copy; {year}</p>
        </Link>
      </div>
    </div>
  )
}

export default Footer
