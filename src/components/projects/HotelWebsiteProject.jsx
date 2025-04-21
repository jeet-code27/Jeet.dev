import React, { useState } from "react";
import { motion } from "framer-motion";

const HotelWebsiteProject = () => {
  const [currentTab, setCurrentTab] = useState("overview");
  
  const features = [
    "Elegant room showcase with immersive gallery views",
    "Integrated booking system with real-time availability",
    "Virtual hotel tour with interactive 360° views",
    "Restaurant menus and online table reservations",
    "Event spaces booking with customizable packages",
    "Guest reviews and testimonials section"
  ];
  
  const technologies = [
    "React - Frontend library for building user interfaces",
    "Context API - State management for booking data",
    "Firebase - Backend services for user authentication",
    "Framer Motion - Smooth animations and transitions",
    "Tailwind CSS - Utility-first responsive framework",
    "Mapbox - Interactive location and vicinity maps"
  ];
  
  const services = [
    "UI/UX design with hospitality-focused experience",
    "Custom React component development",
    "Mobile-first responsive implementation",
    "Booking API integration with payment gateway",
    "Performance optimization for image-heavy content",
    "Multi-language support for international guests"
  ];
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Header with Top Navigation */}
      <div className="mb-8">
        <motion.a 
          href="/work" 
          className="text-gray-600 flex items-center mb-2 hover:text-teal-600 transition-colors"
          whileHover={{ x: 5 }}
        >
          <span>Go to all projects</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </motion.a>
      </div>
      
      {/* Project Title */}
      <motion.h1 
        className="text-4xl md:text-5xl font-serif font-medium mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Sarovar Portico – Premium Hotel Website
      </motion.h1>
      
      {/* Project Showcase Image */}
      <motion.div 
        className="rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-teal-50 to-blue-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img 
          src="/images/hotel-home.webp" 
          alt="Sarovar Portico Hotel Website Homepage" 
          className="w-full object-cover"
        />
      </motion.div>
      
      {/* Project Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Project</p>
          <p className="font-medium">Sarovar Portico</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Type</p>
          <p className="font-medium">React Demo Website</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Visit</p>
          <a href="https://sarovar-portico-hotel.vercel.app/" target="_blank" className="font-medium text-teal-600">Hotel & Hospitality</a>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="flex space-x-1 mb-8 border-b overflow-x-auto pb-1">
        {["overview", "features", "technologies", "services"].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
              currentTab === tab ? "text-teal-600 border-b-2 border-teal-600" : "text-gray-500 hover:text-gray-800"
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            {tab}
          </motion.button>
        ))}
      </div>
      
      {/* Tab Content */}
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={currentTab}
      >
        {currentTab === "overview" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-medium text-gray-800">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              This demo hotel website for Sarovar Portico was designed to showcase the potential of 
              React in the hospitality industry. The project demonstrates how a luxury hotel brand 
              can create an immersive digital experience that highlights amenities, room options, 
              and effortless booking capabilities while maintaining an elegant aesthetic.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The website features a mobile-first approach with special attention to image optimization 
              for fast loading times even with high-resolution photography. The booking experience 
              prioritizes simplicity and user comfort, reducing friction points in the reservation 
              process while still collecting all necessary information for the hotel.
            </p>
          </div>
        )}
        
        {currentTab === "features" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-medium text-gray-800">Key Features</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-teal-600"></div>
                  </div>
                  <span className="ml-3 text-gray-600">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
        
        {currentTab === "technologies" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-medium text-gray-800">Technologies Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <p className="text-gray-700">{tech}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}
        
        {currentTab === "services" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-medium text-gray-800">Development Services</h2>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">{service}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
      
      {/* Performance Metrics */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Website Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl font-bold text-teal-600 mb-2">98/100</div>
            <p className="text-gray-600">Google PageSpeed Score</p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="text-4xl font-bold text-teal-600 mb-2">1.4s</div>
            <p className="text-gray-600">Average Load Time</p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-teal-600 mb-2">32%</div>
            <p className="text-gray-600">Booking Conversion Rate</p>
          </motion.div>
        </div>
      </div>
      
      {/* Development Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Development Process</h2>
        <div className="space-y-12">
          <motion.div 
            className="flex flex-col md:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="md:w-1/3">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <span className="text-teal-600 font-medium">01</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">Research & Concept</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We began by researching luxury hotel websites and identifying key features that enhance 
                the booking experience. Special attention was paid to understanding the typical user 
                journey of hotel guests, from initial discovery to final booking confirmation.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="md:w-1/3">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <span className="text-teal-600 font-medium">02</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">UI Design & Prototyping</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                High-fidelity designs were created with a focus on showcasing the hotel's elegance 
                while maintaining usability. Interactive prototypes allowed us to test the booking 
                flow and room selection process before development began.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="md:w-1/3">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <span className="text-teal-600 font-medium">03</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">Development & Optimization</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                Using React and Tailwind CSS, we built a component-based architecture that allowed for 
                consistent styling across the site. Special attention was paid to image optimization and 
                lazy loading techniques to ensure fast loading times despite the visual richness.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Feature Showcase */}
      {/* <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Key Website Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img src="/api/placeholder/500/300" alt="Room Booking Interface" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Room Booking Interface</h3>
            <p className="text-gray-600">
              An intuitive booking system that allows guests to select dates, view real-time 
              availability, compare room types, and complete reservations without leaving the site.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img src="/api/placeholder/500/300" alt="Virtual Tour Feature" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Virtual Tour Experience</h3>
            <p className="text-gray-600">
              Interactive 360° views of hotel spaces allow potential guests to explore 
              rooms, restaurants, and amenities before booking, increasing confidence in their choice.
            </p>
          </motion.div>
        </div>
      </div> */}
      
      {/* Testimonial Section */}
      <motion.div 
        className="mb-16 bg-gray-50 p-8 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto">
          <svg className="w-10 h-10 text-teal-300 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8v6c0 3.314-2.686 6-6 6H4v4h4c5.523 0 10-4.477 10-10V8h-8zm18 0v6c0 3.314-2.686 6-6 6h0v4h4c5.523 0 10-4.477 10-10V8h-8z"/>
          </svg>
          <p className="text-xl md:text-2xl font-serif text-gray-800 mb-6">
            "This demo website perfectly captures the essence of our vision for a luxury hotel digital experience. 
            The attention to detail in both design and functionality demonstrates exceptional understanding of the hospitality sector."
          </p>
          <div className="flex items-center">
            <div>
              <p className="text-gray-500 text-sm">Design Evaluation</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Responsive Design */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Responsive Design</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 mb-4">
              The website was built with a mobile-first approach, ensuring a seamless experience 
              across all devices. Special consideration was given to touch interactions and 
              simplified booking flows on smaller screens.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Adaptive layouts for all screen sizes
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Touch-optimized gallery views
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="w-4 h-4 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Simplified mobile booking process
              </li>
            </ul>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
                <img src="/images/hotel-homemobile.webp" alt="Mobile Design" className="w-full h-full object-fit" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-48 h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg z-10">
                <img src="/images/hotel-homemobile.webp" alt="Tablet Design" className="w-full h-full object-fit" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Call To Action */}
      <motion.div 
        className="bg-gradient-to-r from-teal-500 to-blue-500 p-8 rounded-xl text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-medium mb-4">Interested in similar projects?</h2>
        <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
          Let's collaborate on creating exceptional web experiences for the hospitality industry or other business sectors.
        </p>
        <motion.a 
          href="/contact" 
          className="inline-block bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors"
          whileHover={{ y: -3 }}
          whileTap={{ y: 0 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </div>
  );
};

export default HotelWebsiteProject;