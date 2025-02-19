import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const blinkingDot = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.5, 1],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen p-8">
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
      <motion.div 
        className="max-w-2xl mx-auto pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-5xl font-serif mb-4"
          {...fadeIn}
        >
          Contact me
        </motion.h1>
        
        <motion.div 
          className="space-y-3 mb-8"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-700">Say hello.</p>
          <p className="text-gray-700">Looking to start a project and need that magical touch? Reach out.</p>
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={blinkingDot.animate}
              transition={blinkingDot.transition}
            />
            <p className="text-gray-700">Open for new opportunities</p>
          </div>
        </motion.div>

        <motion.form 
          className="space-y-6"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Name"
              className="w-full p-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-pink-300 transition-colors"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Email"
              className="w-full p-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-pink-300 transition-colors"
            />
          </div>
          
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            placeholder="Your message for me"
            rows={6}
            className="w-full p-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-pink-300 transition-colors"
          />

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Submit
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;