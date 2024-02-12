import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import SocialIcons from "../Socials/SocialIcons";
import Logo from '../../assets/images/logo-1000x428-1000x428+(1).png' 
import styles from './header.module.scss'

const Header = () => {
    return ( 
        <div className={styles.header}>
            <Navbar />
            <Link to='/'>
                <img src={Logo}/>
            </Link>
            <SocialIcons />
        </div>
     );
}
 
export default Header;