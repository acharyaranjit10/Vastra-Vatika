import React from 'react';

const NewsLetter = () => {
  return (
    <div className="w-full px-4 sm:px-6 py-12 md:py-16 lg:py-20 flex flex-col items-center mx-auto mb-16 md:mb-24 lg:mb-32 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] gap-6 md:gap-8 rounded-xl max-w-6xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-700">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-center text-gray-700">
        Subscribe Us and stay Updated
      </p>
      <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4 sm:gap-0">
        <input 
          type="email" 
          placeholder="Your Email id"
          className="w-full py-4 px-6 rounded-full sm:rounded-r-none sm:rounded-l-full border border-gray-300 focus:border-red-400 focus:outline-none text-gray-600 font-poppins"
        />
        <button className="w-full sm:w-auto py-4 px-8 bg-red-500 hover:bg-red-600 text-white rounded-full sm:rounded-l-none sm:rounded-r-full transition-colors duration-300 whitespace-nowrap">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;