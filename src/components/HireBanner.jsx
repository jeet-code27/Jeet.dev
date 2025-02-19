import React from 'react';
import { motion } from 'framer-motion';

const HireBanner = () => {
  return (
    <div className="py-20 flex flex-col items-center justify-center p-4">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-serif text-gray-900 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Let's work. Available for hire.
        </motion.h1>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <a 
            href="/contact" 
            className="inline-block bg-orange-500 text-white px-8 py-4 mt-6 rounded-full font-medium text-lg hover:bg-orange-600 transition-colors duration-300"
          >
            Contact now
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HireBanner;