import React from 'react';
import { motion } from 'framer-motion';

const PortfolioSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="max-w-[1024px] mx-auto px-6 py-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col"
      >
        {/* Top Title */}
        <motion.h1 
          variants={itemVariants}
          className="font-serif text-5xl mb-16 text-center "
        >
          Stuff I'm good at
        </motion.h1>

        {/* Content Container */}
        <motion.div className="flex flex-col items-center md:items-start md:flex-row gap-16 md:gap-32">
          {/* Left Content */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-7/12"
          >
            <p className="text-gray-800 leading-relaxed text-lg text-center md:text-left">
              I'm a full-stack web developer passionate about crafting clean, 
              efficient, and scalable solutions. With expertise in modern frameworks 
              and development practices, I transform complex requirements into 
              robust applications. From API design and database architecture to 
              responsive frontends and optimization, I bring a comprehensive 
              approach to every project, ensuring both technical excellence and 
              exceptional user experience.
            </p>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-5/12 flex flex-col items-center md:items-start"
          >
            <motion.div 
              variants={itemVariants}
              className="space-y-8 text-center md:text-left w-full"
            >
              <div className="font-serif text-3xl">Consultations</div>
              <div className="font-serif text-3xl">App Design</div>
              <div className="font-serif text-3xl">Web Design</div>
              <div className="font-serif text-3xl">Webflow</div>
              <div className="font-serif text-3xl">Print Design</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PortfolioSection;