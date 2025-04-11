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
         My Skills and Team Expertise

        </motion.h1>

        {/* Content Container */}
        <motion.div className="flex flex-col items-center md:items-start md:flex-row gap-16 md:gap-32">
          {/* Left Content */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-7/12"
          >
            <p className="text-gray-800 leading-relaxed text-justify text-lg  md:text-justify">
            I'm a MERN Stack Developer who builds fast, mobile-friendly, and scalable websites. I have strong experience in SEO, performance optimization, and modern tools like React, Next.js, and Tailwind CSS. I focus on creating websites that look great, load quickly, and help businesses grow online.
<br/>
<br/>
Along with web development, I also offer services like Google My Business optimization and digital marketing to boost your online presence. I work with a team of skilled professionals who are experts in their fields—whether it's logo design, SEO, video editing, content creation, or more. Together, we deliver complete digital solutions that bring real results for clients across the world.


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
              <div className="font-serif text-3xl">Web Development</div>
              <div className="font-serif text-3xl">SEO Optimization</div>
              <div className="font-serif text-3xl">Digital Marketing</div>
              <div className="font-serif text-3xl">Google My Buisness Profile Optimization</div>
              <div className="font-serif text-3xl">Logo Design</div>
              <div className="font-serif text-3xl">Video Editing</div>

            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PortfolioSection;