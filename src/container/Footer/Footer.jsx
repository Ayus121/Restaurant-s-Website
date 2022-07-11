import React from 'react';
import { images } from '../../constants';
import {FiFacebook, FiInstagram , FiTwitter} from 'react-icons/fi'
import { FooterOverlay,Newsletter } from '../../components';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer_links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className='p__opensans'>9W 3rd Street, New York</p>
        <p className='p__opensans'>+1 234-567-890</p>
        <p className='p__opensans'>+1 563-489-542</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt='logo' />
        <p className='p__opensans'>The best way to find yourself is to loose yourself in the service of others</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop:'15px'}} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className='p__opensans'>2021 Gericht. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
