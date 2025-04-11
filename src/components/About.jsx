import React from 'react';
import { motion } from 'framer-motion';
import LogoCarousel from './LogoCarousel';
import PortfolioSection from './PortfolioSection';
import PhotoGallery from './PhotoGallery';
import HireBanner from './HireBanner';

const About = () => {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center p-4">
       <div 
        className="fixed inset-0 bg-repeat opacity-30 -z-10"
        style={{
          backgroundImage: "url('images/background.png')",
          backgroundPosition: "0 0",
          backgroundSize: "auto"
        }}
      />
      
      {/* Gradient background */}
      <div 
        className="absolute rounded-[999rem] -z-10 w-[50vw] h-[50vh]"
        style={{
          filter: "blur(15rem)",
          backgroundImage: "linear-gradient(135deg, #e5f0ff, #d0e6ff 28%, #b9e0ff 35%, #a2d6ff 45%, #8dccff 59%, #7cb7ec 69%, #728fcd 84%, #7171f2)",
          inset: "25vh auto auto 25vw"
        }}
      />
      <div className="text-center max-w-3xl mx-auto px-4">
        <motion.div 
          initial={{ x: -100, y: -100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="group perspective w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] mx-auto mb-6 sm:mb-8"
        >
          <div className="relative w-full h-full transition-transform duration-500 preserve-3d group-hover:rotate-y-180">
            {/* Front of card */}
            <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <img
                src="images/final.webp"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Back of card */}
            <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg bg-blue-600 rotate-y-180 flex items-center justify-center text-white p-4 border-4 border-white">
              <p className="text-lg sm:text-xl md:text-2xl font-medium">Hello World! 👋</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="space-y-4 sm:space-y-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-800">
            <motion.h1 
              className="font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Hello
            </motion.h1>
            <motion.div
              animate={{ 
                rotate: [0, -20, 20, -20, 0],
                transition: { 
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  duration: 2
                }
              }}
              className="hover:scale-125 transition-transform duration-300"
            >
              👋
            </motion.div>
            <motion.h1 
              className="font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              I'm Jeetendra, based in Jaipur
            </motion.h1>
          </div>
          
         <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-slate-700">
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      className="mb-2"
                    >
                      I craft websites that
                      <span className="italic text-blue-600 hover:text-blue-700 transition-colors duration-300"> tell stories</span>,
                      <span className="italic text-blue-600 hover:text-blue-700 transition-colors duration-300"> drive results</span>, and
                      <span className="italic text-blue-600 hover:text-blue-700 transition-colors duration-300"> stand out</span>.
                    </motion.p>
                  </div>
        </motion.div>
      </div>
    </div>
    <section className='mt-20'>
      <LogoCarousel/>
      <PortfolioSection/>
      <PhotoGallery/>
      <HireBanner/>
      </section>
    </>
  );
};

export default About;