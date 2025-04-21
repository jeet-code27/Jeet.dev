import React, { useState } from "react";
import { motion } from "framer-motion";

const SeocialMediaProject = () => {
  const [currentTab, setCurrentTab] = useState("overview");
  
  const features = [
    "Service showcase with interactive case studies",
    "Client testimonials and result metrics",
    "SEO performance tracking dashboard",
    "Blog with optimized content marketing articles",
    "Lead generation forms with analytics integration",
    "Portfolio highlighting successful campaigns"
  ];
  
  const technologies = [
    "React - Frontend library for building user interfaces",
    // "Redux - State management for client data",
    "Firebase - Backend services and analytics",
    // "GSAP - Advanced animations and interactions",
    "Tailwind CSS - Utility-first responsive framework",
    // "Chart.js - Data visualization for campaign results"
  ];
  
  const services = [
    "UI/UX design with conversion optimization",
    "React component development",
    "Performance optimization for Core Web Vitals",
    // "API development for marketing tools integration",
    // "Analytics implementation and tracking",
    // "Content management system integration"
  ];
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Header with Top Navigation */}
      <div className="mb-8">
        <motion.a 
          href="/work" 
          className="text-gray-600 flex items-center mb-2 hover:text-purple-600 transition-colors"
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
        SEOcial Media Solutions – Digital Marketing Agency
      </motion.h1>
      
      {/* Project Showcase Image */}
      <motion.div 
        className="rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-purple-50 to-indigo-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img 
          src="/images/seo-home.webp" 
          alt="SEOcial Media Solutions Homepage" 
          className="w-full object-cover"
        />
      </motion.div>
      
      {/* Project Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Client</p>
          <p className="font-medium">SEOcial Media Solutions</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Service</p>
          <p className="font-medium">React Web Development</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Website</p>
          <a href="https://seocialmedia.in/" target="_blank" className="font-medium text-purple-600 hover:underline">seocialmedia.in</a>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="flex space-x-1 mb-8 border-b overflow-x-auto pb-1">
        {["overview", "features", "technologies", "services"].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
              currentTab === tab ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-800"
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
              SEOcial Media Solutions required a dynamic website that would effectively showcase 
              their digital marketing expertise while serving as a powerful lead generation tool. 
              The fully responsive React-based website was designed to highlight their services, 
              demonstrate client results, and drive conversions through strategic CTAs.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As a startup digital marketing agency, the website needed to establish credibility 
              quickly through case studies, testimonials, and data-driven results. The design implements 
              conversion optimization principles throughout, with attention-grabbing animations 
              and intuitive user flows that guide potential clients toward taking action.
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
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-purple-600"></div>
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
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
      {/* <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Project Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/images/seocial-services.webp" alt="Services Page" className="w-full" />
            <div className="p-4 bg-white">
              <h3 className="font-medium text-gray-800">Services Showcase</h3>
              <p className="text-sm text-gray-500">Interactive service cards with CTAs</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/images/seocial-results.webp" alt="Results Dashboard" className="w-full" />
            <div className="p-4 bg-white">
              <h3 className="font-medium text-gray-800">Results Dashboard</h3>
              <p className="text-sm text-gray-500">Client campaign performance visualization</p>
            </div>
          </motion.div>
        </div>
      </div>
       */}
      {/* Conversion Metrics */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl font-bold text-purple-600 mb-2">+175%</div>
            <p className="text-gray-600">Increased Lead Generation</p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="text-4xl font-bold text-purple-600 mb-2">3.2s</div>
            <p className="text-gray-600">Average Session Duration</p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-purple-600 mb-2">45%</div>
            <p className="text-gray-600">Conversion Rate</p>
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
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-purple-600 font-medium">01</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">Strategy & UX Research</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We began by analyzing competitor websites and identifying conversion optimization 
                opportunities. User research helped us understand the target audience – primarily 
                small to medium businesses seeking digital marketing services – and their needs.
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
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-purple-600 font-medium">02</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">Design & Prototyping</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We created high-fidelity designs with a focus on showcasing marketing results 
                visually. Interactive prototypes helped test user flows and ensure the site 
                would effectively guide visitors toward contact forms and service pages.
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
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <span className="text-purple-600 font-medium">03</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">Development & Analytics</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                Using React, we built a component-based architecture that allowed for easy content 
                updates. Special attention was paid to implementing comprehensive analytics to 
                track user behavior and conversion funnel performance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Testimonial Section */}
      <motion.div 
        className="mb-16 bg-gray-50 p-8 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto">
          <svg className="w-10 h-10 text-purple-300 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8v6c0 3.314-2.686 6-6 6H4v4h4c5.523 0 10-4.477 10-10V8h-8zm18 0v6c0 3.314-2.686 6-6 6h0v4h4c5.523 0 10-4.477 10-10V8h-8z"/>
          </svg>
          <p className="text-xl md:text-2xl font-serif text-gray-800 mb-6">
            "The website has transformed our digital presence and significantly increased our lead generation. 
            The analytics implementation has given us valuable insights into our customer journey."
          </p>
          <div className="flex items-center">
            {/* <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center mr-4">
              <span className="font-medium text-purple-700">JD</span>
            </div> */}
            <div>
              {/* <p className="font-medium">Jamie Davis</p> */}
              <p className="text-gray-500 text-sm">Founder, SEOcial Media Solutions</p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* More Projects Section */}
      {/* <div>
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/api/placeholder/400/300" alt="E-commerce Website" className="w-full" />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">E-commerce Platform</h3>
              <p className="text-sm text-gray-500 mb-3">Shopify Development</p>
              <a href="#" className="text-purple-600 text-sm font-medium hover:underline">View Project →</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/api/placeholder/400/300" alt="SaaS Dashboard" className="w-full" />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">Marketing Analytics Dashboard</h3>
              <p className="text-sm text-gray-500 mb-3">Web Application</p>
              <a href="#" className="text-purple-600 text-sm font-medium hover:underline">View Project →</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/api/placeholder/400/300" alt="Mobile App" className="w-full" />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">Social Media Management Tool</h3>
              <p className="text-sm text-gray-500 mb-3">React Native Application</p>
              <a href="#" className="text-purple-600 text-sm font-medium hover:underline">View Project →</a>
            </div>
          </motion.div>
        </div>
      </div> */}
       <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl text-white text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl md:text-3xl font-medium mb-4">Interested in similar projects?</h2>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                    From stunning websites to smart SEO and branding, we’re here to support your business every step of the digital journey.
                    </p>
                    <motion.a 
                      href="/contact" 
                      className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors"
                      whileHover={{ y: -3 }}
                      whileTap={{ y: 0 }}
                    >
                      Get in Touch
                    </motion.a>
                  </motion.div>
    </div>
  );
};

export default SeocialMediaProject;