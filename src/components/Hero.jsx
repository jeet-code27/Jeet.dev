import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {

  return (
    <div className="relative w-full min-h-[80vh] flex flex-col justify-center  items-center overflow-hidden px-4 md:px-8 lg:px-16">
      {/* Circle Background */}
      <div
        className="absolute left-0 top-0 w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] rounded-full bg-blue-400 -translate-x-1/3 -translate-y-1/3 z-0"
      />
      
      {/* Content */}
      <div className="max-w-6xl mx-auto text-center z-10 mt-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4">
          <span className="text-[#3A271B]">Awesome Websites</span>
        </h1>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 md:mb-4">
          <span className="text-[#3A271B]">For </span>
          <span className="text-blue-600">Awesome</span>
          <span className="text-[#3A271B]"> Businesses</span>
        </h1>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8">
          <span className="text-[#3A271B]">& </span>
          <span className="text-blue-600">People</span>
        </h1>
        
        <div>
         <Link to={"/contact"}>
            <button className="bg-[#3A271B] text-white px-8 py-3 rounded-full font-medium tracking-wide hover:scale-105 transition-transform duration-200">
              LET'S WORK TOGETHER
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;