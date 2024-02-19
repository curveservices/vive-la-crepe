import './index.scss'
import ripped from '../../assets/images/404.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className='not-found'>
            <h1>Page Not Found</h1>
            <Link to='/' className='flat-btn'>Back Home</Link>
            <img src={ripped} className='ripped' />
        </div> 
     );
}
 
export default NotFound;