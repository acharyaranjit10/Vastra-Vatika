import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png';
import ig_igon from '../Assets/ig_icon.svg';
import whatsapp_igon from '../Assets/whatsapp_icon.svg';
import pinterest_icon from '../Assets/pinterest_icon.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={ig_igon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_igon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2025 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer