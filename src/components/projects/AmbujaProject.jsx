import React, { useState } from "react";
import { motion } from "framer-motion";

const AmbujaProject = () => {
  const [currentTab, setCurrentTab] = useState("overview");
  
  const features = [
    "User role-based access control (Admin, HR, Candidates)",
    "Candidate status tracking and feedback system",
    "Vacancy management (open/closed positions)",
    "Admin dashboard for user and vacancy management",
    "Comprehensive candidate details view",
    "HR remarks and candidate evaluation"
  ];
  
  const technologies = [
    "MongoDB - Database for storing user profiles and vacancy data",
    "Express - Backend framework for API development",
    "React - Frontend user interface with responsive design",
    "Node.js - Server-side JavaScript runtime",
    "Redux - State management across the application",
    "JWT - Secure authentication and authorization"
  ];
  
  const services = [
    "Full-stack development with MERN",
    "User interface design and implementation",
    "Database architecture and optimization",
    "API development and integration",
    "Deployment and continuous integration",
    "Documentation and knowledge transfer"
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
        Hiring Support System for Ambuja Foundation
      </motion.h1>
      
      {/* Project Showcase Image */}
      <motion.div 
        className="rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-blue-50 to-indigo-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img 
          src="/images/ambujalogin.webp" 
          alt="Hiring Support System Dashboard" 
          className="w-full object-cover"
        />
      </motion.div>
      
      {/* Project Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Client</p>
          <p className="font-medium">Ambuja Foundation</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Service</p>
          <p className="font-medium">MERN Stack Development</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Website</p>
          <a href="https://hiringsupportaf.in/" className="font-medium text-blue-600 hover:underline">hiringsupportaf.in</a>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="flex space-x-1 mb-8 border-b overflow-x-auto pb-1">
        {["overview", "features", "technologies", "services"].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
              currentTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:text-gray-800"
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
              The Hiring Support System for Ambuja Foundation is a comprehensive user-role-based 
              platform designed to streamline HR processes and enhance candidate selection. 
              This MERN stack application provides tailored interfaces for administrators, HR professionals, 
              and candidates, with robust features for managing the entire hiring workflow.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The system enables HR to update candidate status, provide remarks, and access complete 
              candidate details. Administrators can manage user accounts and vacancy postings, with 
              clear visibility into open and closed positions. The responsive design ensures a 
              seamless experience across all devices.
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
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
            <img src="/images/ambuja-dashboard.webp" alt="Dashboard View" className="w-full" />
            <div className="p-4 bg-white">
              <h3 className="font-medium text-gray-800">Admin Dashboard</h3>
              <p className="text-sm text-gray-500">Candidate management interface</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/images/ambuja-home.webp" alt="Candidate Status" className="w-full" />
            <div className="p-4 bg-white">
              <h3 className="font-medium text-gray-800">Home Page</h3>
              <p className="text-sm text-gray-500">Home Page of Hiring Support System</p>
            </div>
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
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 font-medium">01</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">Requirements Analysis</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We worked closely with Ambuja Foundation to understand their hiring workflow, 
                identifying key pain points and opportunities for automation. 
                This led to detailed user stories and system requirements.
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
              <h3 className="text-xl font-medium text-gray-800">Design & Prototyping</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We created wireframes and interactive prototypes for each user role, 
                ensuring the interface was intuitive and efficient for daily operations.
                Multiple feedback rounds helped refine the user experience.
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
              <h3 className="text-xl font-medium text-gray-800">Development & Testing</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                Using the MERN stack, we implemented the system with a focus on security, 
                performance, and scalability. Rigorous testing ensured data integrity 
                and a smooth user experience across devices.
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
            <img src="/api/placeholder/400/300" alt="E-commerce Project" className="w-full" />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">E-commerce Platform</h3>
              <p className="text-sm text-gray-500 mb-3">MERN Stack Development</p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">View Project →</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/api/placeholder/400/300" alt="CRM System" className="w-full" />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">CRM System</h3>
              <p className="text-sm text-gray-500 mb-3">Full-stack React Application</p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">View Project →</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/api/placeholder/400/300" alt="Analytics Dashboard" className="w-full" />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">Analytics Dashboard</h3>
              <p className="text-sm text-gray-500 mb-3">Data Visualization</p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">View Project →</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AmbujaProject;