import React, { useState } from "react";
import { motion } from "framer-motion";

const DrMayurGoyal = () => {
  const [currentTab, setCurrentTab] = useState("overview");
  
  const features = [
    "Online consultation scheduling system for pediatric appointments",
    "Secure patient information portal for parents",
    "Admin dashboard for appointment management",
    "Automated SMS and email reminder system",
    "Educational resources on child health and development",
    "Virtual consultation preparation guides for parents"
  ];
  
  const technologies = [
    "React.js - Frontend UI library",
    "Next.js - React framework with server-side rendering",
    "Firebase - Backend services (Authentication, Firestore, Storage)",
    "Tailwind CSS - Utility-first styling framework",
    "Twilio - SMS notification integration",
    "Vercel - Deployment and hosting"
  ];
  
  const services = [
    "Custom website design and development",
    "Mobile-responsive interface implementation",
    "Patient portal and database integration",
    "Appointment management system setup",
    "Content management system for health articles",
    "SEO optimization for pediatric practice"
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
        Dr. Mayur Goyal – Pediatric & Neonatal Care Website
      </motion.h1>
      
      {/* Project Showcase Image */}
      <motion.div 
        className="rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-blue-50 to-indigo-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img 
          src="/images/drmayurgoyal.webp" 
          alt="Dr. Mayur Goyal Website Homepage" 
          className="w-full object-cover"
        />
      </motion.div>
      
      {/* Project Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Client</p>
          <p className="font-medium">Dr. Mayur Goyal</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Service</p>
          <p className="font-medium">React & Firebase Development</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Website</p>
          <a href="https://drmayurkumargoyal.com/" className="font-medium text-blue-600 hover:underline">drmayurkumargoyal.com</a>
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
              The Dr. Mayur Goyal website is a comprehensive digital platform designed for a 
              specialist pediatrician and neonatologist practice. Built with modern web technologies, 
              this professional medical website focuses on providing parents with an intuitive 
              interface to schedule pediatric consultations online and access valuable child 
              healthcare resources.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The website features a secure patient portal where parents can manage their 
              children's appointments and access medical recommendations. The integrated 
              admin panel gives Dr. Goyal and his staff full control over the appointment schedule, 
              with automated reminders sent to parents via SMS and email. This system has significantly 
              reduced missed appointments and streamlined the clinic's operations.
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
            <img src="/images/drmayurgoyal-booking.webp" alt="Pediatric Consultation Booking" className="w-full" />
            <div className="p-4 bg-white">
              <h3 className="font-medium text-gray-800">Consultation Booking System</h3>
              <p className="text-sm text-gray-500">Child-friendly appointment scheduling interface</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/images/drmayurgoyal-dashboard.webp" alt="Admin Dashboard" className="w-full" />
            <div className="p-4 bg-white">
              <h3 className="font-medium text-gray-800">Doctor's Dashboard</h3>
              <p className="text-sm text-gray-500">Patient management and appointment overview</p>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Secure Patient Portal</h3>
            <p className="text-gray-600">
              Implemented encrypted data storage and HIPAA-compliant security protocols to protect sensitive pediatric patient information and medical history.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Smart Scheduling System</h3>
            <p className="text-gray-600">
              Developed an intelligent appointment algorithm that optimizes the doctor's schedule based on urgency categories and ensures emergency slots are always available.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl"
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Responsive Design</h3>
            <p className="text-gray-600">
              Created a fully mobile-optimized interface using Tailwind CSS, ensuring parents can easily schedule appointments from any device, especially on smartphones.
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
              <h3 className="text-xl font-medium text-gray-800">Requirements Analysis</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We worked closely with Dr. Mayur Goyal to understand his pediatric practice workflow, 
                appointment scheduling needs, and patient communication requirements. This phase included 
                analyzing the unique needs of parents seeking pediatric and neonatal care services.
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
              <h3 className="text-xl font-medium text-gray-800">User Experience Design</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                Designed a child-friendly and parent-focused interface with an emphasis on simplicity 
                and accessibility. Created wireframes and high-fidelity mockups for both the patient-facing 
                website and the administrative dashboard, with special attention to creating a calming 
                and reassuring visual experience.
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
                Built the website using React and Next.js with Tailwind CSS for the frontend, while 
                implementing Firebase for secure backend operations. Integrated Twilio for appointment 
                reminders via SMS and developed a custom notification system to keep parents informed 
                about their children's appointments.
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
            <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
            <p className="text-gray-600">Reduction in appointment no-shows</p>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">35%</div>
            <p className="text-gray-600">Increase in new patient registrations</p>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
            <p className="text-gray-600">Parent satisfaction with digital experience</p>
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
          "The website has revolutionized how parents connect with our pediatric practice. The online 
          booking system has made scheduling appointments effortless for busy parents, while the automated 
          reminders have significantly reduced missed appointments. The educational resources section has 
          become a valuable reference for parents seeking reliable pediatric health information."
        </p>
        <div className="flex items-center">
          <div className="ml-4">
            <p className="font-medium text-gray-800">Dr. Mayur Goyal</p>
            <p className="text-sm text-gray-600">Pediatrician & Neonatologist</p>
          </div>
        </div>
      </motion.div>
      
      {/* CTA Section */}
      <motion.div 
        className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-medium mb-4">Need a healthcare website solution?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          We specialize in creating digital experiences for medical professionals that enhance patient care 
          and streamline practice management. Let's discuss how we can transform your medical practice online.
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

export default DrMayurGoyal;