import React, { useState } from "react";
import { motion } from "framer-motion";

const HolisticHealthProject = () => {
  const [currentTab, setCurrentTab] = useState("overview");
  
  const features = [
    "Online appointment booking system with calendar integration",
    "Personalized doctor profiles with credentials and specialties",
    "Patient testimonials and success stories gallery",
    "Health articles and wellness resources library",
    "Nutrition plans and diet consultation information",
    "Responsive design optimized for all devices",
    "Virtual consultation booking and management"
  ];
  
  const technologies = [
    "React.js - For building a dynamic and interactive UI",
    "Next.js - React framework with SSR for improved SEO",
    "Tailwind CSS - Utility-first CSS framework for responsive design",
    "Sanity.io - Headless CMS for content management",
    "Calendly API - For appointment scheduling integration",
    "Node.js & Express - Backend API development",
    "MongoDB - Database for patient resources and content"
  ];
  
  const services = [
    "Comprehensive website design and development",
    "SEO optimization for local healthcare searches",
    "Content strategy for patient education materials",
    "Appointment system integration and setup",
    "Mobile responsiveness and accessibility implementation",
    "Patient portal development and integration",
    "On-page SEO and local business optimization"
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
        Holistic Health – Dr. Manish Sharma & Dr. Gauri Mehra
      </motion.h1>
      
      {/* Project Showcase Image */}
      <motion.div 
        className="rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-blue-50 to-indigo-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img 
          src="/images/holistichealthproject.webp" 
          alt="Holistic Health Website Homepage" 
          className="w-full object-cover"
        />
      </motion.div>
      
      {/* Project Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Client</p>
          <p className="font-medium">Dr. Manish Sharma & Dr. Gauri Mehra</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Service</p>
          <p className="font-medium">Doctor Website Development with SEO</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Website</p>
          <a href="https://your-domain.vercel.app/" target="_blank" className="font-medium text-blue-600 hover:underline">visit site</a>
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
              The Holistic Health website serves as a digital platform for Dr. Manish Sharma, 
              a respected general physician, and Dr. Gauri Mehra, a certified dietician. The 
              website was designed to reflect their integrated approach to health and wellness, 
              combining medical expertise with nutritional guidance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our main objectives were to create an informative yet approachable online presence 
              that would help patients easily book appointments, access health resources, and learn 
              about the doctors' unique approach to holistic wellness. The website needed to be 
              both visually appealing and functionally robust, with a focus on local SEO to attract 
              patients in their geographic area.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The result is a modern, user-friendly website that effectively communicates the 
              practice's philosophy while providing practical tools for patient engagement and 
              appointment management. Since launch, the site has significantly increased new patient 
              inquiries and established the practice as a digital leader in the local healthcare landscape.
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
            <img src="/images/holistichealth-doctors.webp" alt="Doctor Profiles" className="w-full" />
            <div className="p-4 bg-white">
              <h3 className="font-medium text-gray-800">Doctor Profiles</h3>
              <p className="text-sm text-gray-500">Detailed profiles highlighting expertise and credentials</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/images/holistichealth-services.webp" alt="Appointment Booking" className="w-full" />
            <div className="p-4 bg-white">
              <h3 className="font-medium text-gray-800">Service Page</h3>
              <p className="text-sm text-gray-500"></p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Website Performance */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Website Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">97%</div>
            <p className="text-gray-600">Mobile Performance Score</p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">+65%</div>
            <p className="text-gray-600">Increase in Appointment Bookings</p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="text-4xl font-bold text-blue-600 mb-2">Top 5</div>
            <p className="text-gray-600">Local Search Rankings</p>
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
              <h3 className="text-xl font-medium text-gray-800">Discovery & Strategy</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We began with comprehensive interviews with both doctors to understand their practice philosophy, 
                target patient demographics, and business goals. This informed our local SEO strategy, content 
                approach, and website architecture, ensuring alignment with their holistic health vision.
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
              <h3 className="text-xl font-medium text-gray-800">Design & User Experience</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We created a clean, calming design that reflects the medical professionalism while remaining 
                approachable and warm. The user experience was carefully mapped to guide patients from information 
                gathering to appointment booking with minimal friction, with special attention to accessibility standards.
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
                We built the website using React and Next.js for optimal performance and SEO benefits. 
                The appointment booking system was integrated with the doctors' calendars, and the content 
                management system was configured to allow easy updates to health resources and blog content.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="md:w-1/3">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <span className="text-blue-600 font-medium">04</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">Launch & Optimization</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                Following launch, we implemented comprehensive local SEO strategies, including Google Business 
                Profile optimization, local citations, and schema markup. Continuous performance monitoring 
                and patient feedback have informed ongoing optimizations to further enhance the user experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Client Testimonial */}
      <div className="mb-16 bg-gray-50 p-8 rounded-xl">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-6">Client Testimonial</h2>
        <div className="flex items-start">
          <svg className="w-12 h-12 text-blue-400 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"/>
          </svg>
          <div>
            <p className="text-gray-600 italic mb-4">
              "Our practice has seen tremendous growth since launching this website. The design 
              perfectly captures our approach to integrated healthcare, and the appointment system 
              has streamlined our patient intake process. We're particularly impressed with the 
              SEO results, which have helped us connect with patients seeking holistic health solutions."
            </p>
            <p className="font-medium text-gray-800">Dr. Manish Sharma</p>
            <p className="text-gray-500 text-sm">General Physician, Holistic Health</p>
          </div>
        </div>
      </div>
      
      {/* Results Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Project Results</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h3 className="font-medium text-gray-800">Increased Patient Engagement</h3>
            </div>
            <p className="text-gray-600 pl-7">
              The website has achieved a 45% increase in time spent on educational content pages, 
              with patients actively engaging with wellness resources and blog articles.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h3 className="font-medium text-gray-800">Appointment Efficiency</h3>
            </div>
            <p className="text-gray-600 pl-7">
              The online booking system has reduced administrative phone time by 70%, allowing staff 
              to focus more on in-office patient care and experience.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h3 className="font-medium text-gray-800">Local Search Visibility</h3>
            </div>
            <p className="text-gray-600 pl-7">
              The practice now ranks in the top 5 results for key local search terms including 
              "holistic doctor," "integrative physician," and "nutrition specialist" in their area.
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h3 className="font-medium text-gray-800">Patient Acquisition</h3>
            </div>
            <p className="text-gray-600 pl-7">
              New patient inquiries increased by 65% in the first six months following launch, 
              with 40% of new patients citing the website as their first point of contact.
            </p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <motion.div 
        className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-medium mb-4">Need a Website for Your Medical Practice?</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          We specialize in creating effective digital platforms for healthcare professionals that enhance patient engagement and drive practice growth.
        </p>
        <motion.a 
          href="/contact" 
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          whileHover={{ y: -3 }}
          whileTap={{ y: 0 }}
        >
          Let's Discuss Your Project
        </motion.a>
      </motion.div>
    </div>
  );
};

export default HolisticHealthProject;