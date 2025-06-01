import React from 'react';
import footer_logo from '../Assets/logo.png';
import ig_icon from '../Assets/ig_icon.svg';
import whatsapp_icon from '../Assets/whatsapp_icon.svg';
import pinterest_icon from '../Assets/pinterest_icon.svg';

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8 py-8 sm:py-12 bg-white px-4">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <img 
          src={footer_logo} 
          alt="Footer Logo" 
          className="h-10 w-auto max-w-full" 
        />
      </div>
      
      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center list-none gap-3 sm:gap-6 md:gap-8 lg:gap-12 text-gray-800 text-sm sm:text-base md:text-lg">
        {['Company', 'Products', 'Offices', 'About', 'Contact'].map((item, index) => (
          <li 
            key={index}
            className="cursor-pointer hover:text-blue-500 transition-colors duration-300 px-2 py-1"
          >
            {item}
          </li>
        ))}
      </ul>
      
      {/* Social Icons */}
      <div className="flex gap-3 sm:gap-4 md:gap-5">
        {[
          {icon: ig_icon, alt: 'Instagram'},
          {icon: pinterest_icon, alt: 'Pinterest'},
          {icon: whatsapp_icon, alt: 'WhatsApp'},
        ].map((social, index) => (
          <div 
            key={index}
            className="p-2 bg-gray-100 border border-gray-300 rounded-sm hover:bg-gray-200 transition-colors duration-300"
          >
            <img 
              src={social.icon} 
              alt={social.alt} 
              className="w-5 h-5 sm:w-6 sm:h-6" 
            />
          </div>
        ))}
      </div>
      
      {/* Copyright Section */}
      <div className="flex flex-col items-center gap-4 w-full mt-2 sm:mt-4 text-gray-700 text-sm sm:text-base">
        <hr className="w-full max-w-4xl border-none h-px rounded-full bg-gray-300" />
        <p className="text-center px-4">Copyright @2025 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;