import React, { useState } from "react";
import { motion } from "framer-motion";

const MorganicsProject = () => {
  const [currentTab, setCurrentTab] = useState("overview");
  
  const features = [
    "Responsive product catalog with filtering capabilities",
    "Doctor portal with prescription management",
    "Research papers and clinical studies database",
    "Interactive drug information search",
    "Patient education resources and FAQ section",
    "Pharmacy locator with integrated Google Maps"
  ];
  
  const technologies = [
    "Next.js - React framework with SSR for optimal SEO",
    "TypeScript - For type safety and better code quality",
    "Tailwind CSS - Utility-first CSS framework for responsive design",
    "MongoDB - Database for product and research information",
    "GraphQL - API layer for efficient data fetching",
    "Jest - Unit and integration testing framework"
  ];
  
  const services = [
    "Next.js development with SEO optimization",
    "Responsive UI/UX design implementation",
    "Database architecture and content management",
    "API development with GraphQL endpoints",
    "SEO strategy and implementation",
    "Performance optimization and analytics setup"
  ];
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Header with Top Navigation */}
      <div className="mb-8">
        <motion.a 
          href="/work" 
          className="text-gray-600 flex items-center mb-2 hover:text-green-600 transition-colors"
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
        M Organics Pharmaceutical Website
      </motion.h1>
      
      {/* Project Showcase Image */}
      <motion.div 
        className="rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-green-50 to-teal-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img 
          src="/images/morganics-home.webp" 
          alt="Morganics Pharmaceutical Website Homepage" 
          className="w-full object-cover"
        />
      </motion.div>
      
      {/* Project Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Client</p>
          <p className="font-medium">M Organics Pharmaceuticals</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Service</p>
          <p className="font-medium">Next.js Development with SEO</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Website</p>
          <a href="https://morganics.in/" target="_blank" className="font-medium text-green-600 hover:underline">morganics.in</a>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="flex space-x-1 mb-8 border-b overflow-x-auto pb-1">
        {["overview", "features", "technologies", "services"].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
              currentTab === tab ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-gray-800"
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
              The M Organics Pharmaceutical Website is a comprehensive digital platform designed 
              to showcase their pharmaceutical products, research initiatives, and corporate information. 
              Built with Next.js for superior SEO optimization, the website delivers exceptional 
              performance metrics and maintains top rankings in Google search results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The platform features a seamless user experience across all devices with carefully 
              implemented structured data, semantic HTML, and optimized loading speeds. Healthcare 
              professionals can access specialized content through a secure portal, while patients 
              benefit from educational resources and an intuitive product search functionality.
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
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
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
            <h2 className="text-3xl font-serif font-medium text-gray-800">Services Provided</h2>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">{service}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
      
      {/* Project Screenshots */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Project Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/images/morganics-products.webp" alt="Product Catalog" className="w-full" />
            <div className="p-4 bg-white">
              <h3 className="font-medium text-gray-800">Product Catalog</h3>
              <p className="text-sm text-gray-500">Interactive pharmaceutical product listings</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/images/morganics-company.webp" alt="Blog Page" className="w-full" />
            <div className="p-4 bg-white">
              <h3 className="font-medium text-gray-800">Company Page</h3>
              <p className="text-sm text-gray-500">About Company Page for M Organics</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* SEO Performance */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">SEO Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
            <p className="text-gray-600">Mobile Performance Score</p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="text-4xl font-bold text-green-600 mb-2">Top 3</div>
            <p className="text-gray-600">Google Rankings</p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-green-600 mb-2">0.7s</div>
            <p className="text-gray-600">Average Load Time</p>
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
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-green-600 font-medium">01</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">SEO Research & Planning</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We conducted extensive keyword research and competitive analysis in the pharmaceutical 
                industry to identify key SEO opportunities. This informed our content strategy 
                and technical implementation plan to maximize search visibility.
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
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-green-600 font-medium">02</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">Architecture & Development</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We built the M Organics website using Next.js for its superior SEO capabilities, 
                implementing server-side rendering, static generation, and dynamic paths. 
                The architecture ensures fast loading times and optimal crawlability.
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
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <span className="text-green-600 font-medium">03</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">Optimization & Launch</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We implemented advanced technical SEO features including structured data, 
                semantic HTML, optimized images, and comprehensive meta data. Post-launch 
                monitoring ensured continued performance in search rankings.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* More Projects Section */}
      <div>
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/api/placeholder/400/300" alt="Healthcare Platform" className="w-full" />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">Healthcare Platform</h3>
              <p className="text-sm text-gray-500 mb-3">React Native Mobile App</p>
              <a href="#" className="text-green-600 text-sm font-medium hover:underline">View Project →</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/api/placeholder/400/300" alt="Medical Dashboard" className="w-full" />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">Medical Dashboard</h3>
              <p className="text-sm text-gray-500 mb-3">Data Visualization Platform</p>
              <a href="#" className="text-green-600 text-sm font-medium hover:underline">View Project →</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/api/placeholder/400/300" alt="Clinical Trial App" className="w-full" />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">Clinical Trial App</h3>
              <p className="text-sm text-gray-500 mb-3">Mobile Application</p>
              <a href="#" className="text-green-600 text-sm font-medium hover:underline">View Project →</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MorganicsProject;