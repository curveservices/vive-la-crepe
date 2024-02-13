import { Link, Outlet } from "react-router-dom";
import SocialIcons from '../Socials/SocialIcons'
import Navbar from "../NavBar/Navbar";
import Logo from '../../assets/images/logo-1000x428-1000x428+(1).png' 
import styles from './Layout.module.scss'

const Layout = () => {
    return ( 
        <div className="App">
            <div className={styles.header}>
            <Navbar />
            <Link to='/'>
                <img src={Logo}/>
            </Link>
            <SocialIcons />
        </div>
            <div className="page">
                <Outlet />
            </div>
        </div>
     );
}
 
export default Layout;