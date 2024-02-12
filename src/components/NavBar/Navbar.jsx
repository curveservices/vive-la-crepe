import { 
    faBars, 
    faBlog, 
    faEnvelopeOpen, 
    faHome, 
    faUser, 
    faUtensils,
    faClose
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    
    return ( 
        <div className={styles.navbar}>
         
            <nav className={showNav ? 'active' : ''}>
                <NavLink
                exact='true'
                activeclassname="actice"
                className={styles.home}
                to='/'
                onClick={() => setShowNav(true)} >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                exact='true'
                activeclassname="actice"
                className={styles.about}
                to='/about'
                onClick={() => setShowNav(true)} >
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                exact='true'
                activeclassname="actice"
                className={styles.menu}
                to='/menu'
                onClick={() => setShowNav(true)} >
                    <FontAwesomeIcon icon={faUtensils} color="#4d4d4e" />
                </NavLink>
                <NavLink
                exact='true'
                activeclassname="actice"
                className={styles.blog}
                to='/blog'
                onClick={() => setShowNav(true)} >
                    <FontAwesomeIcon icon={faBlog} color="#4d4d4e" />
                </NavLink>
                <NavLink
                exact='true'
                activeclassname="actice"
                className={styles.contact}
                to='/blog'
                onClick={() => setShowNav(true)} >
                    <FontAwesomeIcon icon={faEnvelopeOpen} color="#4d4d4e" />
                </NavLink>

                <FontAwesomeIcon 
                icon={faClose} 
                color='#'/>
            </nav>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#000"
                size="3x"
                className={styles.hamburger}
            />
        </div>
     );
}
 
export default Navbar;