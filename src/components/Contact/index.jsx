import './index.scss';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useEffect, useState, useRef } from 'react';
import TextAnimate from '../AnimatedLetters/TextAnimate';
import SocialIcons from '../Socials/SocialIcons';
import Loader from 'react-loaders';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('textAnimate');
    const contactArray = ['C','o','n','t','a','c','t', ' ', 'U','s'];
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('textAnimateHover')
        }, 3000)
      }, []);

      const sendEmail = (e) => {
          e.preventDefault()

          emailjs
          .sendForm(
              'p.roossiter83@gmail.com',
              'contact_form',
              refForm.current,
              'w1ULsXxchzrjhuclR'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send your message, please try again')
                }
            )
        }
    return ( 
        <>
        <div className="container contact-page">
            <div className="text-box">
                <h1>
                    <TextAnimate
                    letterClass={letterClass}
                    stringArray={contactArray}
                    idx={15} 
                    />
                </h1>
                <p>
                    If you are interested in our services for you special day,
                    party or event please contact us. We are dedicatted to making you special 
                    event memorable. However, if you have any other requuests or questions, please do not hesitate to contact us using the form below
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name='name' placeholder='Enter your name...' required />
                            </li>
                            <li className='half'>
                                <input 
                                type="email"
                                name='email'
                                placeholder='Enter your email...'
                                required />
                            </li>
                            <li>
                                <input 
                                type="text"
                                name='subject'
                                 placeholder='Subject'
                                 required
                                 />
                            </li>
                            <li>
                                <textarea 
                                name="message"
                                placeholder='Your message...'
                                required
                                ></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-btn' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Vive la Crêpe
                <br />
                London, SE10
                <br />
                United Kingdom,
                <br />
                <SocialIcons />
                <span>info@vive-la-crepe.co.uk</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[51.5, 0.0192269]} zoom={13} scrollWheelZoom={false}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[51.4852, 0.0175]}>
                <Popup>We are here</Popup>
                </Marker>
            </MapContainer>
            </div>
        </div>
        <Loader type="line-spin-fade-loader" />
        </>
     );
}
 
export default Contact;