import React from 'react';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-green-50/20 py-16 md:py-24 flex md:flex-row flex-col items-center justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-36">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
          Exclusive
          <br className="hidden md:block" />
          Offers For You
        </h1>
        <p className="text-lg md:text-xl font-semibold text-gray-700 mt-4">ONLY ON BEST SELLERS</p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold text-lg md:text-xl rounded-full py-3 px-8 mt-8 focus:outline-none">
          Check Now
        </button>
      </div>
      <div className="flex-shrink-0 mt-10 md:mt-0 md:ml-8">
        <img src={exclusive_image} alt="Exclusive Offer" className="max-w-full h-auto md:max-h-96 object-contain" />
      </div>
    </div>
  );
};

export default Offers;