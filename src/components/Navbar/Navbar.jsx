import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons

export const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getCartIcon } = useContext(ShopContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="shadow-md py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="flex items-center gap-x-2">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center list-none gap-x-12 text-gray-600 text-lg font-medium">
        <li
          className="flex flex-col items-center justify-center cursor-pointer gap-y-1"
          onClick={() => {
            setMenu('shop');
          }}
        >
          <Link to="/" className="no-underline">
            Shop
          </Link>
          {menu === 'shop' ? <hr className="border-none w-4/5 h-0.5 rounded-full bg-red-500" /> : <></>}
        </li>
        <li
          className="flex flex-col items-center justify-center cursor-pointer gap-y-1"
          onClick={() => {
            setMenu('mens');
          }}
        >
          <Link to="/mens" className="no-underline">
            Mens
          </Link>
          {menu === 'mens' ? <hr className="border-none w-4/5 h-0.5 rounded-full bg-red-500" /> : <></>}
        </li>
        <li
          className="flex flex-col items-center justify-center cursor-pointer gap-y-1"
          onClick={() => {
            setMenu('womens');
          }}
        >
          <Link to="/womens" className="no-underline">
            Womens
          </Link>
          {menu === 'womens' ? <hr className="border-none w-4/5 h-0.5 rounded-full bg-red-500" /> : <></>}
        </li>
        <li
          className="flex flex-col items-center justify-center cursor-pointer gap-y-1"
          onClick={() => {
            setMenu('kids');
          }}
        >
          <Link to="/kids" className="no-underline">
            Kids
          </Link>
          {menu === 'kids' ? <hr className="border-none w-4/5 h-0.5 rounded-full bg-red-500" /> : <></>}
        </li>
      </ul>
      <div className="flex items-center gap-x-8">
        <Link to="/login" className="hidden md:block">
          <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 rounded-full text-gray-600 text-lg font-medium bg-white hover:bg-gray-100 focus:outline-none active:bg-gray-200">
            LogIn
          </button>
        </Link>
        <Link to="/cart" className="relative">
          <img src={cart_icon} alt="Cart Icon" className="h-9 w-auto" />
          {getCartIcon() > 0 && (
            <div className="absolute top-[-10px] right-[-10px] w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              {getCartIcon()}
            </div>
          )}
        </Link>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">
            {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute  top-[10%] left-0 right-0 bg-white shadow-md z-10">
          <ul className="py-2 flex flex-col items-center">
            <li
              className="py-2 cursor-pointer"
              onClick={() => {
                setMenu('shop');
                setIsMobileMenuOpen(false);
              }}
            >
              <Link to="/" className="no-underline text-gray-600 text-lg font-medium">
                Shop
              </Link>
              {menu === 'shop' ? <hr className="border-none w-4/5 h-0.5 rounded-full bg-red-500 mt-1" /> : <></>}
            </li>
            <li
              className="py-2 cursor-pointer"
              onClick={() => {
                setMenu('mens');
                setIsMobileMenuOpen(false);
              }}
            >
              <Link to="/mens" className="no-underline text-gray-600 text-lg font-medium">
                Mens
              </Link>
              {menu === 'mens' ? <hr className="border-none w-4/5 h-0.5 rounded-full bg-red-500 mt-1" /> : <></>}
            </li>
            <li
              className="py-2 cursor-pointer"
              onClick={() => {
                setMenu('womens');
                setIsMobileMenuOpen(false);
              }}
            >
              <Link to="/womens" className="no-underline text-gray-600 text-lg font-medium">
                Womens
              </Link>
              {menu === 'womens' ? <hr className="border-none w-4/5 h-0.5 rounded-full bg-red-500 mt-1" /> : <></>}
            </li>
            <li
              className="py-2 cursor-pointer"
              onClick={() => {
                setMenu('kids');
                setIsMobileMenuOpen(false);
              }}
            >
              <Link to="/kids" className="no-underline text-gray-600 text-lg font-medium">
                Kids
              </Link>
              {menu === 'kids' ? <hr className="border-none w-4/5 h-0.5 rounded-full bg-red-500 mt-1" /> : <></>}
            </li>
            <li className="py-2">
              <Link to="/login" className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 rounded-full text-gray-600 text-lg font-medium bg-white hover:bg-gray-100 focus:outline-none active:bg-gray-200">
                LogIn
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};