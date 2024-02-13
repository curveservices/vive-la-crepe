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
import styles from './Navbar.module.scss'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    
    return ( 
        <div className={styles.navbar}>
            <nav className={showNav ? styles.active : ''}>
            <FontAwesomeIcon 
                icon={faClose} 
                color='#29323e'
                size='3x'
                className={styles.close}
                onClick={() => setShowNav(false)}/>
                <NavLink
                exact='true'
                activeclassname="actice"
                className={styles.homeLink}
                to='/'
                onClick={() => setShowNav(false)} >
                    <FontAwesomeIcon icon={faHome} color="#29323e" />
                </NavLink>
                <NavLink
                exact='true'
                activeclassname="actice"
                className={styles.aboutLink}
                to='/about'
                onClick={() => setShowNav(false)} >
                    <FontAwesomeIcon icon={faUser} color="#29323e" />
                </NavLink>
                <NavLink
                exact='true'
                activeclassname="actice"
                className={styles.menuLink}
                to='/menu'
                onClick={() => setShowNav(false)} >
                    <FontAwesomeIcon icon={faUtensils} color="#29323e" />
                </NavLink>
                <NavLink
                exact='true'
                activeclassname="actice"
                className={styles.blogLink}
                to='/blog'
                onClick={() => setShowNav(false)} >
                    <FontAwesomeIcon icon={faBlog} color="#29323e" />
                </NavLink>
                <NavLink
                exact='true'
                activeclassname="actice"
                className={styles.contactLink}
                to='/blog'
                onClick={() => setShowNav(false)} >
                    <FontAwesomeIcon icon={faEnvelopeOpen} color="#29323e" />
                </NavLink>
            </nav>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="29323e"
                size="2x"
                className={`${showNav ? styles.hide : styles.hamburger}`}
            />
        </div>
     );
}
 
export default Navbar;