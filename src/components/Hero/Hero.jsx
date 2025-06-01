import React from 'react';
import hand_icon from '../Assets/hand_icon.png';
import hero_image from '../Assets/hero_image.png';
import arrow_icon from '../Assets/arrow_icon.png';

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-pink-100 to-green-50/20 h-screen flex md:flex-row flex-col-reverse items-center justify-center overflow-hidden">
      <div className="flex-1 flex flex-col justify-center gap-y-5 md:gap-y-8 pl-8 md:pl-36 pr-4 md:pr-0 text-center md:text-left">
        <h2 className="text-gray-800 text-xl md:text-3xl font-semibold">NEW ARRIVALS ONLY</h2>
        <div>
          <div className="flex items-center gap-x-4 justify-center md:justify-start">
            <p className="bg-white text-red-500 font-bold py-1 px-3 rounded-full text-sm">new</p>
            <img src={hand_icon} alt="Hand Icon" className="w-20 md:w-24" />
          </div>
          <p className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight">Collection</p>
          <p className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight">for everyone</p>
        </div>
        <div className="flex items-center justify-center md:justify-start gap-x-4 mt-6 md:mt-10">
          <div className="bg-red-500 text-white rounded-full py-3 px-8 font-medium text-lg md:text-xl cursor-pointer">
            Latest Collection
          </div>
          <img src={arrow_icon} alt="Arrow Icon" className="w-6 h-auto fill-white" />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <img src={hero_image} alt="Hero Image" className="max-w-full h-auto md:max-h-[80vh]" />
      </div>
    </div>
  );
};

export default Hero;