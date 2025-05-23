import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 pt-12 border-t border-gray-300 relative">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
        {/* Left Section - Hidden on mobile, shown on md screens and up */}
        <div className="hidden md:block space-y-2 order-1">
          <h3 className="text-lg font-medium text-gray-900">Jeetendra's personal site</h3>
          <p className="text-gray-600">Building digital products.</p>
        </div>

        {/* Right Section Container for Pages and Connect */}
        <div className="grid grid-cols-2 gap-8 order-1 md:order-2">
          {/* Pages Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Pages</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              <Link to="/work" className="text-gray-500 hover:text-gray-700">Projects</Link>
              <Link to="/about" className="text-gray-500 hover:text-gray-700">About</Link>
              <Link to="/contact" className="text-gray-500 hover:text-gray-700">Contact</Link>
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-gray-900 uppercase tracking-wider">Connect</h4>
            <nav className="flex flex-col space-y-2">
              <a href="https://www.instagram.com/mr__rathore01/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-500 hover:text-gray-700">
                Instagram
              </a>
              <a href="https://www.linkedin.com/in/jeetendra-singh-rathore/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-500 hover:text-gray-700">
                LinkedIn
              </a>
              <a href="https://github.com/jeet-code27" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-gray-500 hover:text-gray-700">
                GitHub
              </a>
            </nav>
          </div>
        </div>

        {/* Left Section - Shown on mobile, hidden on md screens and up */}
        <div className="md:hidden space-y-2 order-2">
          <h3 className="text-lg font-medium text-gray-900">Jeetendra's personal site</h3>
          <p className="text-gray-600">Building digital products.</p>
        </div>
      </div>

      {/* Large Decorative Text */}
      <div className="w-full border-t border-gray-100 pb-4">
        <div className="relative h-16 p-2 sm:h-24 overflow-hidden">
          <h1 className="absolute bottom-0.5 left-0 right-0 top-0.5 text-[30px] sm:text-[6rem] md:text-[8rem] leading-none font-['Instrument_Serif'] text-transparent [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:#171717] whitespace-nowrap">
            Jeetendra Singh Rathore
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;