import React, { useState } from "react";
import { motion } from "framer-motion";

const PortfolioWebsiteProject = () => {
  const [currentTab, setCurrentTab] = useState("overview");
  
  const features = [
    "Clean and responsive project showcase gallery",
    "Interactive skills section with progress bars",
    "Contact form with form validation",
    "Animated page transitions and scrolling effects",
    // "Dark/light mode toggle for better readability",
    // "Project filtering by technology categories"
  ];
  
  const technologies = [
    "HTML5 - Semantic markup structure",
    "CSS3 - Custom animations and responsive design",
    "JavaScript - Interactive elements and DOM manipulation",
    "SASS - CSS preprocessor for better organization",
    "AOS.js - Scroll animations library",
    "FormSubmit - Backend for contact form processing"
  ];
  
  const sections = [
    "Header with navigation and introduction",
    "Projects showcase with filterable gallery",
    "About me section with professional journey",
    "Skills visualization with progress indicators",
    "Contact section with validated form",
    "Footer with social media links"
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
        Personal Portfolio – HTML, CSS & JavaScript
      </motion.h1>
      
      {/* Project Showcase Image */}
      <motion.div 
        className="rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-blue-50 to-indigo-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img 
          src="/images/port-home.webp" 
          alt="Portfolio Website Homepage" 
          className="w-full object-cover"
        />
      </motion.div>
      
      {/* Project Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Project Type</p>
          <p className="font-medium">Personal Portfolio</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Built With</p>
          <p className="font-medium">HTML, CSS & JavaScript</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Timeline</p>
          <a href="https://jeet-code27.github.io/jeetendra.github.io/" target="_blank" className="font-medium text-blue-600">My First Web Project</a>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="flex space-x-1 mb-8 border-b overflow-x-auto pb-1">
        {["overview", "features", "technologies", "sections"].map((tab) => (
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
              This was my first personal portfolio website, designed and developed from scratch using 
              fundamental web technologies: HTML, CSS, and JavaScript. The project served as both a 
              learning experience and a platform to showcase my early projects and skills to potential 
              employers and clients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The design follows a clean and simple layout with a focus on readability and ease of 
              navigation. I prioritized making the site fully responsive to ensure a seamless experience 
              across all devices, from mobile phones to desktop computers. The minimalist aesthetic allows 
              the content to take center stage while still incorporating subtle animations and interactive 
              elements to engage visitors.
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
        
        {currentTab === "sections" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-medium text-gray-800">Website Sections</h2>
            <ul className="space-y-3">
              {sections.map((section, index) => (
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
                  <span className="ml-3 text-gray-600">{section}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
      
      {/* Learning Experience */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Learning Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Challenges Overcome</h3>
            <p className="text-gray-600">
              Creating a responsive design that worked well across all devices was my biggest challenge. 
              I learned about media queries and flexible layouts, experimenting with different approaches 
              until finding solutions that worked consistently.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-gray-50 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Skills Acquired</h3>
            <p className="text-gray-600">
              This project helped me develop fundamental skills in HTML structure, CSS styling techniques, 
              and JavaScript interactivity. I also learned about performance optimization, browser compatibility, 
              and basic UX principles through hands-on experience.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Website Screenshots */}
      {/* <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Key Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="h-48 bg-gray-200">
              <img src="/api/placeholder/400/300" alt="Projects Section" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800">Projects Showcase</h3>
              <p className="text-sm text-gray-500">Filterable gallery of my work</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="h-48 bg-gray-200">
              <img src="/api/placeholder/400/300" alt="Skills Section" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800">Skills Section</h3>
              <p className="text-sm text-gray-500">Visual representation of expertise</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="h-48 bg-gray-200">
              <img src="/api/placeholder/400/300" alt="Contact Form" className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800">Contact Section</h3>
              <p className="text-sm text-gray-500">Form with validation and loading states</p>
            </div>
          </motion.div>
        </div>
      </div> */}
      
      {/* Development Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Development Journey</h2>
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
              <h3 className="text-xl font-medium text-gray-800">Design & Planning</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                I started with sketching layouts on paper and creating wireframes to plan the 
                user experience. This helped me organize content and establish a clear information 
                hierarchy before diving into code. I researched other portfolio sites for inspiration 
                while ensuring my design would remain unique.
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
              <h3 className="text-xl font-medium text-gray-800">HTML & CSS Implementation</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                I built the structure with semantic HTML5, focusing on accessibility and SEO best practices. 
                Then I styled the site using CSS3, implementing responsive design with media queries and 
                flexible grid layouts to ensure compatibility across devices of all sizes.
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
              <h3 className="text-xl font-medium text-gray-800">JavaScript Interactivity</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                I enhanced the user experience by adding interactive elements with vanilla JavaScript, 
                including smooth scrolling, form validation, project filtering, and subtle animations. 
                These features made the site more engaging while maintaining fast performance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Key Takeaways */}
      <motion.div 
        className="mb-16 bg-gray-50 p-8 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-medium text-gray-800 mb-6">Key Takeaways</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="ml-3 text-gray-600">
                <strong className="text-gray-800">Fundamentals Matter:</strong> Mastering HTML, CSS, and JavaScript 
                fundamentals provided a strong foundation for more advanced web development projects later on.
              </p>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="ml-3 text-gray-600">
                <strong className="text-gray-800">Mobile-First Approach:</strong> Designing for mobile first and 
                then scaling up for larger screens resulted in a more consistent responsive experience.
              </p>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="ml-3 text-gray-600">
                <strong className="text-gray-800">Problem-Solving Skills:</strong> Each challenge encountered during 
                development taught me valuable debugging and problem-solving techniques.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Project Evolution */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Evolution & Growth</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-600 mb-4">
              This portfolio represents my starting point as a web developer. Looking back at this 
              project helps me appreciate how far my skills have progressed since then. While I've 
              moved on to more complex frameworks and technologies, this project remains special as 
              the foundation of my web development journey.
            </p>
            <p className="text-gray-600">
              The clean code principles and attention to detail I developed while working on this 
              portfolio continue to influence my approach to new projects. Each subsequent portfolio 
              iteration has built upon the lessons learned from this first version.
            </p>
          </motion.div>
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-100 p-6 rounded-xl">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Skills Growth Timeline</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">HTML/CSS</span>
                    <span>Beginner → Intermediate</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">JavaScript</span>
                    <span>Beginner → Basic Proficiency</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">Responsive Design</span>
                    <span>Novice → Competent</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Call To Action */}
      <motion.div 
        className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-xl text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl md:text-3xl font-medium mb-4">See My Current Portfolio</h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          While this was my first portfolio website, I've since created newer versions with advanced 
          technologies and improved design. Check out my current work to see how my skills have evolved.
        </p>
        <motion.a 
          href="/" 
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          whileHover={{ y: -3 }}
          whileTap={{ y: 0 }}
        >
          View Latest Portfolio
        </motion.a>
      </motion.div>
    </div>
  );
};

export default PortfolioWebsiteProject;