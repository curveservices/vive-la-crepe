import { 
    faBars, 
    faBlog, 
    faEnvelopeOpen, 
    faHome,  
    faUtensils,
    faClose
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);
    
    return ( 
        <div className='navbar'>
            <nav className={showNav ? 'active' : ''}>
            <FontAwesomeIcon 
                icon={faClose} 
                color='#29323e'
                size='2x'
                className='close'
                onClick={() => setShowNav(false)}/>
                <NavLink
                exact='true'
                activeclassname="active"
                className='homeLink'
                to='/'
                onClick={() => setShowNav(false)} >
                    <FontAwesomeIcon icon={faHome} color="#29323e" />
                </NavLink>
                <NavLink
                exact='true'
                activeclassname="active"
                className='menuLink'
                to='/menu'
                onClick={() => setShowNav(false)} >
                    <FontAwesomeIcon icon={faUtensils} color="#29323e" />
                </NavLink>
                <NavLink
                exact='true'
                activeclassname="active"
                className='blogLink'
                to='/blog'
                onClick={() => setShowNav(false)} >
                    <FontAwesomeIcon icon={faBlog} color="#29323e" />
                </NavLink>
                <NavLink
                exact='true'
                activeclassname="active"
                className='contactLink'
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
                className={showNav ? 'hide' : 'hamburger'}
            />
        </div>
     );
}
 
export default Navbar;