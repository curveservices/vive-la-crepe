import { useEffect, useState } from 'react';
import TextAnimate from '../AnimatedLetters/TextAnimate';
import Card from './Card';
import './index.scss'

const Menu = () => {
    const pageArray = ['O', 'u', 'r', ' ', 'M', 'e', 'n', 'u'];
    const [letterClass, setLetterClass] = useState('textAnimate');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('textAnimateHover')
        }, 3000)
    }, [])
    return ( 
        <>
            <div className="menu-page">
                <div className="text-box">
                    <h1>
                    <TextAnimate
                    letterClass={letterClass}
                    stringArray={pageArray}
                    idx={15}/>
                    </h1>
                    <h2 className='strap'>
                        Our sweet crepes contain gluten and dairy
                        &apm; our galettes are naturally gluten free
                    </h2>
                    </div>
                <Card />
                
           
        </div>
         
        </>
     );
}
 
export default Menu;