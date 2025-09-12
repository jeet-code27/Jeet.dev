import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IntroComponent = () => {
  // const [showWave, setShowWave] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowWave(true);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-3xl mx-auto px-4">
        <motion.div 
          initial={{ x: -100, y: -100, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="group perspective w-32 h-40 sm:w-40 sm:h-40 md:w-48 md:h-58 mx-auto mb-6 sm:mb-8"
        >
          <div className="relative w-full h-full transition-transform duration-500 preserve-3d group-hover:rotate-y-180">
            <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg">
              <img
                src="images/finall.webp"
                alt="Profile"
                className="w-full h-full object-fit border-4 border-white"
              />
            </div>
            <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-lg bg-blue-600 rotate-y-180 flex items-center justify-center text-white p-4">
              <p className="text-lg font-medium">Hello World! 👋</p>
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
            {/* {showWave && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: [0, -20, 20, -20, 0],
                }}
                transition={{ 
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                  rotate: { 
                    repeat: Infinity,
                    repeatDelay: 2.5,
                    duration: 2,
                    delay: 0.3
                  }
                }}
                className="flex items-center gap-2"
              >
                <span className="hover:scale-125 transition-transform duration-300">👋</span>
              </motion.div>
            )} */}
            <motion.h1 
              className="font-serif"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              I'm Jeetendra 
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
  );
};

export default IntroComponent;
