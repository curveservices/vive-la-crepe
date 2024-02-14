import { Link, Outlet } from "react-router-dom";
import SocialIcons from '../Socials/SocialIcons'
import Navbar from "../NavBar/Navbar";
import Logo from '../../assets/images/vlc.png' 
import './Layout.scss'

const Layout = () => {
    return ( 
        <div className="App">
            <div className="header">
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