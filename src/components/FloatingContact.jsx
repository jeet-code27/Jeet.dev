import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const phoneNumber = '+917878253451';
  const whatsappNumber = '7878253451';
  const instagramUsername = 'mr__rathore01';

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${instagramUsername}`, '_blank');
  };

  // Button variants for animations
  const buttonVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: {
      scale: 0.95
    }
  };

  // Container variants for animations
  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  // Toggle button variants
  const toggleVariants = {
    open: { rotate: 0 },
    closed: { rotate: 180 }
  };

  const ActionButton = ({ onClick, icon, label, bgColor, hoverBgColor, custom }) => (
    <motion.div 
      onClick={onClick}
      className={`flex items-center justify-center gap-2 px-4 py-3 cursor-pointer ${bgColor} rounded-md mx-1 my-1`}
      variants={buttonVariants}
      custom={custom}
      whileHover="hover"
      whileTap="tap"
    >
      <motion.div 
        className="flex items-center justify-center"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
      >
        {icon}
      </motion.div>
      <span className="text-white text-sm font-medium whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );

  const pulseAnimation = {
    pulse: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0px 0px 0px rgba(79, 70, 229, 0.4)",
        "0px 0px 20px rgba(79, 70, 229, 0.6)",
        "0px 0px 0px rgba(79, 70, 229, 0.4)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  return (
    <div className="fixed top-0 right-0 z-50">
      <div className="flex flex-col items-end">
        {/* Contact toggle button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-6 flex items-center justify-center gap-2 rounded-bl-md shadow-lg"
          animate="pulse"
          variants={pulseAnimation}
          whileHover={{ 
            scale: 1.05, 
            backgroundImage: "linear-gradient(to right, #6366f1, #9333ea, #db2777)" 
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={toggleVariants}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
            )}
          </motion.div>
          <span className="font-medium">
            {isOpen ? "Close Contact" : "Contact Us"}
          </span>
        </motion.button>
        
        {/* Contact options panel with staggered animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className=" shadow-xl rounded-bl-md rounded-tl-md overflow-hidden mt-1"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col p-2">
                <ActionButton
                  onClick={handleInstagramClick}
                  icon={
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-current">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  }
                  label="Follow on Instagram"
                  bgColor="bg-gradient-to-r from-pink-500 to-pink-700"
                  custom={0}
                />
                <ActionButton
                  onClick={handleWhatsAppClick}
                  icon={
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  }
                  label="Chat on WhatsApp"
                  bgColor="bg-gradient-to-r from-green-500 to-green-700"
                  custom={1}
                />
                <ActionButton
                  onClick={handleCallClick}
                  icon={
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                    </svg>
                  }
                  label="Call Us Now"
                  bgColor="bg-gradient-to-r from-blue-500 to-blue-700"
                  custom={2}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloatingContact;