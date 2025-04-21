import React, { useState } from "react";
import { motion } from "framer-motion";

const BoneAndJointsProject = () => {
  const [currentTab, setCurrentTab] = useState("overview");
  
  const features = [
    "Online consultation booking system for next-day appointments",
    "Admin panel for appointment management",
    "Automated email confirmation system",
    "Patient information collection and management",
    "Doctor's profile and specialization showcase",
    "Educational resources about orthopedic conditions"
  ];
  
  const technologies = [
    "Next.js - React framework with server-side rendering",
    "Firebase - Backend services (Authentication, Firestore, Storage)",
    "Tailwind CSS - Utility-first styling framework",
    "Framer Motion - Animation library for React",
    "Nodemailer - Email sending functionality",
    "Vercel - Deployment and hosting"
  ];
  
  const services = [
    "Full website design and development",
    "Custom admin dashboard implementation",
    "Firebase integration and database setup",
    "Email service configuration",
    "Responsive design implementation",
    "SEO optimization for medical practice"
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
        Bone and Joints – Orthopaedic Surgeon Website
      </motion.h1>
      
      {/* Project Showcase Image */}
      <motion.div 
        className="rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-blue-50 to-teal-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img 
          src="/images/boneandjoints-home.webp" 
          alt="Bone and Joints Website Homepage" 
          className="w-full object-cover"
        />
      </motion.div>
      
      {/* Project Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Client</p>
          <p className="font-medium">Bone and Joints Clinic</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Service</p>
          <p className="font-medium">Next.js & Firebase Development</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Website</p>
          <a href="#" className="font-medium text-blue-600 hover:underline">boneandjoints.in</a>
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
              The Bone and Joints website is a modern digital platform designed for an orthopaedic 
              surgeon's practice. Built with Next.js and Firebase, this professional medical website 
              allows patients to easily book next-day consultations online, eliminating the need for 
              phone calls during busy clinic hours.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The site features a comprehensive admin panel that gives the clinic staff complete 
              control over appointment management. Through this interface, administrators can view 
              upcoming appointments, manage patient information, and send confirmation emails 
              directly to patients. The integration of Firebase provides secure data storage 
              and real-time updates for both patient and admin interfaces.
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
            <img src="/images/boneandjoints-booking.webp" alt="Booking System" className="w-full" />
            <div className="p-4 bg-white">
              <h3 className="font-medium text-gray-800">Online Booking System</h3>
              <p className="text-sm text-gray-500">Patient appointment scheduling interface</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/images/boneandjoints-dashboard.webp" alt="Admin Dashboard" className="w-full" />
            <div className="p-4 bg-white">
              <h3 className="font-medium text-gray-800">Admin Dashboard</h3>
              <p className="text-sm text-gray-500">Appointment management and email system</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Technical Highlights */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Technical Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Next.js Framework</h3>
            <p className="text-gray-600">
              Leveraged Next.js for server-side rendering, optimized page loading, and improved SEO performance critical for medical websites.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Firebase Integration</h3>
            <p className="text-gray-600">
              Implemented Firestore for patient data management, Firebase Authentication for admin access, and Firebase Cloud Functions for email automation.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Responsive Design</h3>
            <p className="text-gray-600">
              Created a fully responsive interface using Tailwind CSS, ensuring optimal user experience on all devices, especially mobile users booking on-the-go.
            </p>
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
              <h3 className="text-xl font-medium text-gray-800">Discovery & Planning</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We collaborated closely with the orthopedic surgeon to understand the clinic's workflow, 
                patient needs, and administrative challenges. This phase included defining the appointment 
                booking requirements and email notification system specifications.
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
              <h3 className="text-xl font-medium text-gray-800">UX/UI Design</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                Created wireframes and high-fidelity designs for both patient-facing and admin interfaces. 
                Special attention was given to creating an accessible booking flow that would be easy for patients 
                of all ages to navigate, with a professional medical aesthetic throughout.
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
              <h3 className="text-xl font-medium text-gray-800">Development & Integration</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                Built the website using Next.js and Tailwind CSS, with Firebase providing the backend infrastructure. 
                The development process included creating a secure admin authentication system, implementing 
                the appointment booking flow, and setting up the email notification service.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Results Section */}
      <div className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-6">Project Outcomes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
            <p className="text-gray-600">Increase in new patient appointments</p>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
            <p className="text-gray-600">Reduction in scheduling-related phone calls</p>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <p className="text-gray-600">Patient satisfaction with booking experience</p>
          </motion.div>
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
          "The website has completely transformed how we handle patient appointments. The online booking system 
          has significantly reduced administrative workload, and patients appreciate the convenience of scheduling 
          consultations at any time. The admin panel is intuitive and makes managing our daily schedule effortless."
        </p>
        <div className="flex items-center">
          {/* <div className="w-12 h-12 bg-blue-100 rounded-full flex-shrink-0"></div> */}
          <div className="ml-4">
            <p className="font-medium text-gray-800">Dr. Abhishek Saxena</p>
            <p className="text-sm text-gray-600">Bone and Joints Clinic</p>
          </div>
        </div>
      </motion.div>
      
      {/* More Projects Section */}
      <div>
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/api/placeholder/400/300" alt="Healthcare App" className="w-full" />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">HealthPlus Mobile App</h3>
              <p className="text-sm text-gray-500 mb-3">MERN Stack Development</p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">View Project →</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/api/placeholder/400/300" alt="Dental Website" className="w-full" />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">Smile Dental Clinic</h3>
              <p className="text-sm text-gray-500 mb-3">Next.js Website Development</p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">View Project →</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/api/placeholder/400/300" alt="Telemedicine Platform" className="w-full" />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">MediConnect Platform</h3>
              <p className="text-sm text-gray-500 mb-3">Full-stack Application</p>
              <a href="#" className="text-blue-600 text-sm font-medium hover:underline">View Project →</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BoneAndJointsProject;