import styles from './Socials.module.scss'
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialIcons = () => {
  return (
    <>
      <ul className={styles.iconList}>
        <li className={styles.icons}>
          <a
            href="https://www.instagram.com/vive_la_crepe/"
            target="_blank"
            rel="noreferer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className={styles.icons}>
          <a
            href="https://www.facebook.com/vivecrepe/"
            target="_blank"
            rel="noreferer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className={styles.icons}>
          <a
            href="https://twitter.com/ViveCrepe"
            target="_blank"
            rel="noreferer"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </li>
      </ul>
    </>
  )
}

export default SocialIcons
