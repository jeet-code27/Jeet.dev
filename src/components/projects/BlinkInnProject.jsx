import React, { useState } from "react";
import { motion } from "framer-motion";

const BlinkInnProject = () => {
  const [currentTab, setCurrentTab] = useState("overview");
  
  const features = [
    "Elegant room showcase with high-quality image galleries",
    "Comprehensive amenities section with detailed descriptions",
    "Integrated booking inquiry system with contact forms",
    "Responsive design optimized for all device sizes",
    "Location and directions integration with interactive maps",
    "Guest testimonials and reviews display system"
  ];
  
  const technologies = [
    "Next.js - React framework with SSR and SSG capabilities",
    "React.js - Component-based frontend development",
    "Tailwind CSS - Utility-first CSS framework for styling",
    "Framer Motion - Smooth animations and transitions",
    "SEO Optimization - Meta tags, structured data, and performance optimization",
    "Responsive Design - Mobile-first approach for all screen sizes",
    "Image Optimization - Next.js built-in image optimization"
  ];
  
  const seoFeatures = [
    "Server-Side Rendering (SSR) for improved search engine visibility",
    "Optimized meta tags and structured data markup",
    "Fast loading times with Next.js performance optimizations",
    "Mobile-first responsive design for better mobile rankings",
    "Semantic HTML structure for enhanced accessibility",
    "Optimized images with automatic WebP conversion"
  ];
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Header with Top Navigation */}
      <div className="mb-8">
        <motion.a 
          href="/work" 
          className="text-gray-600 flex items-center mb-2 hover:text-blue-600 transition-colors"
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
        Blink Inn – Hotel Website
      </motion.h1>
      
      {/* Project Showcase Image */}
      <motion.div 
        className="rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-blue-50 to-indigo-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img 
          src="/images/blink-home.jpg" 
          alt="Blink Inn Hotel Website Homepage" 
          className="w-full object-cover"
        />
      </motion.div>
      
      {/* Project Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Client</p>
          <p className="font-medium">Blink Inn Hotel  (<a href="https://blink-inn.vercel.app/" target="_blank" className="underline">blinkinn.in</a>)</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Service</p>
          <p className="font-medium">Next.js Development & SEO</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Category</p>
          <p className="font-medium">Hotel Website</p>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="flex space-x-1 mb-8 border-b overflow-x-auto pb-1">
        {["overview", "features", "technologies", "seo"].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
              currentTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-800"
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
          >
            {tab === "seo" ? "SEO Optimization" : tab}
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
              The Blink Inn website is a modern and elegant digital presence designed for a boutique hotel experience. 
              Built with Next.js, this website prioritizes user experience, mobile responsiveness, and search engine 
              optimization to help the hotel attract and convert potential guests effectively.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The website features a clean, sophisticated design that showcases the hotel's rooms, amenities, and unique 
              selling points. Every aspect of the site is optimized for conversion, from the compelling hero section to 
              the strategically placed booking inquiry forms. The responsive design ensures that guests can easily browse 
              and make inquiries whether they're using a desktop computer, tablet, or smartphone.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a focus on SEO-friendly architecture, the website is built to rank well in search engines, helping 
              Blink Inn capture organic traffic from travelers searching for accommodation in their area. The combination 
              of technical optimization and engaging content creates a powerful tool for driving direct bookings.
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
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-blue-600"></div>
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
        
        {currentTab === "seo" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-medium text-gray-800">SEO Optimization</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Blink Inn website was built with SEO as a primary consideration, implementing best practices 
              to ensure maximum visibility in search engine results and improved organic traffic.
            </p>
            <ul className="space-y-3">
              {seoFeatures.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  </div>
                  <span className="ml-3 text-gray-600">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
      
      {/* Room Showcase Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Room Showcase</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-medium text-gray-800">Elegant Room Presentations</h3>
              <p className="text-gray-600">
                Each room type is presented with high-quality imagery and detailed descriptions that highlight 
                unique features and amenities. The gallery system allows guests to view multiple angles and 
                get a true sense of the space before making their booking decision. Interactive elements and 
                smooth transitions create an engaging browsing experience that encourages exploration.
              </p>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-blue-100 to-indigo-100 p-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="text-center">
                <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                <h4 className="text-lg font-medium text-gray-800">Room Gallery System</h4>
                <p className="text-gray-600 mt-2">Interactive image galleries with zoom functionality and mobile-optimized viewing</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Amenities & Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Amenities & Features</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-indigo-100 to-purple-100 p-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <svg className="w-12 h-12 text-indigo-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  <p className="text-sm font-medium text-gray-800">Free WiFi</p>
                </div>
                <div className="text-center">
                  <svg className="w-12 h-12 text-indigo-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                  <p className="text-sm font-medium text-gray-800">24/7 Service</p>
                </div>
                <div className="text-center">
                  <svg className="w-12 h-12 text-indigo-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-sm font-medium text-gray-800">Prime Location</p>
                </div>
                <div className="text-center">
                  <svg className="w-12 h-12 text-indigo-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <p className="text-sm font-medium text-gray-800">Clean & Safe</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-medium text-gray-800">Comprehensive Amenities Display</h3>
              <p className="text-gray-600">
                The amenities section provides detailed information about all hotel facilities and services. 
                From complimentary WiFi and 24/7 room service to location advantages and safety protocols, 
                guests can easily understand what makes Blink Inn special. The visual presentation uses 
                intuitive icons and clear descriptions to communicate value propositions effectively.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Testimonial */}
      <motion.div 
        className="mb-16 bg-blue-50 p-8 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <svg className="w-10 h-10 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-lg text-gray-700 italic mb-6">
          "The new website has transformed how guests discover and interact with our hotel online. The booking 
          inquiries have increased significantly, and guests frequently compliment the easy navigation and 
          beautiful presentation of our rooms. The mobile experience is exceptional, which is crucial since 
          most of our guests browse on their phones while traveling. The SEO improvements have also helped us 
          appear higher in local search results."
        </p>
        <div className="flex items-center">
          <div className="ml-4">
            <p className="font-medium text-gray-800">Hotel Management</p>
            <p className="text-sm text-gray-600">Blink Inn</p>
          </div>
        </div>
      </motion.div>
      
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
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 font-medium">01</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">Discovery & Strategy</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We conducted thorough research into the hotel industry and analyzed competitor websites to 
                understand guest expectations and booking behaviors. This informed our strategy for user 
                experience design, content structure, and conversion optimization.
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
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 font-medium">02</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">Design & Development</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                Using Next.js and modern web technologies, we crafted a responsive website that prioritizes 
                visual appeal and user experience. The design focuses on showcasing the hotel's unique 
                character while maintaining fast loading times and smooth navigation across all devices.
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
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 font-medium">03</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">SEO & Optimization</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We implemented comprehensive SEO strategies including technical optimization, content 
                optimization, and local SEO tactics. The website architecture was designed to rank well 
                for hospitality-related keywords while providing exceptional user experience for better 
                conversion rates.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Call to Action */}
      <motion.div 
        className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-medium mb-4">Ready to elevate your hotel's online presence?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          From stunning hotel websites to comprehensive SEO strategies and digital marketing, we're here to help 
          your hospitality business attract more guests and increase direct bookings.
        </p>
        <motion.a 
          href="/contact" 
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          whileHover={{ y: -3 }}
          whileTap={{ y: 0 }}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </div>
  );
};

export default BlinkInnProject;