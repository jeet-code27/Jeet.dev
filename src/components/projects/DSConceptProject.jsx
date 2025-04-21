import React, { useState } from "react";
import { motion } from "framer-motion";

const DSConceptProject = () => {
  const [currentTab, setCurrentTab] = useState("overview");
  
  const features = [
    "Interactive studio showcase page with team profiles",
    "Dynamic project portfolio with filtering capabilities",
    "Comprehensive admin panel for content management",
    "Secure authentication system for admin access",
    "Client testimonials and reviews section",
    "Contact and inquiry form with backend integration"
  ];
  
  const technologies = [
    "MongoDB - NoSQL database for project and studio data",
    "Express.js - Backend API framework",
    "React.js - Frontend user interface development",
    "Node.js - Server-side JavaScript runtime",
    "Tailwind CSS - Utility-first styling framework",
    "Framer Motion - Animation library for smooth transitions",
    "JWT - Authentication for secure admin access"
  ];
  
  const services = [
    "Custom MERN stack development",
    "Responsive design implementation",
    "Admin panel creation with CRUD operations",
    "SEO optimization for architecture studio",
    "Image gallery optimization",
    "Deployment and hosting setup"
  ];
  
//   const projects = [
//     {
//       title: "Modern Villa",
//       category: "Residential",
//       image: "/api/placeholder/500/300"
//     },
//     {
//       title: "Corporate Office",
//       category: "Commercial",
//       image: "/api/placeholder/500/300"
//     },
//     {
//       title: "Boutique Hotel",
//       category: "Hospitality",
//       image: "/api/placeholder/500/300"
//     }
//   ];
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Header with Top Navigation */}
      <div className="mb-8">
        <motion.a 
          href="/work" 
          className="text-gray-600 flex items-center mb-2 hover:text-amber-600 transition-colors"
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
        DSConcept Architecture Studio Website
      </motion.h1>
      
      {/* Project Showcase Image */}
      <motion.div 
        className="rounded-xl overflow-hidden mb-12 bg-gradient-to-r from-amber-50 to-neutral-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img 
          src="/images/dsc-home.webp" 
          alt="DSConcept Studio Website Homepage" 
          className="w-full object-cover"
        />
      </motion.div>
      
      {/* Project Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Client</p>
          <p className="font-medium">DSConcept Studio</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Service</p>
          <p className="font-medium">MERN Stack Development</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">Website</p>
          <a href="https://dsconcept.in/"  target="_blank" className="font-medium text-amber-600 hover:underline">dsconcept.in</a>
        </div>
      </div>
      
      {/* Tabs Navigation */}
      <div className="flex space-x-1 mb-8 border-b overflow-x-auto pb-1">
        {["overview", "features", "technologies"].map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
              currentTab === tab ? "text-amber-600 border-b-2 border-amber-600" : "text-gray-500 hover:text-gray-800"
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
              The DSConcept Studio website is an elegant, dynamic platform developed for Dipanshu Chauhan, 
              the owner of DSConcept Studio, an architecture and interior design firm. Built with the MERN stack 
              (MongoDB, Express.js, React.js, and Node.js), the website serves as both a digital portfolio and a 
              professional introduction to the studio's capabilities and team.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The site features two primary sections: a comprehensive Studio page highlighting the team's expertise 
              and philosophy, and a dynamic Projects page showcasing the firm's portfolio of architectural and interior 
              design work. All content is managed through a custom-built admin panel that allows the studio owner to 
              effortlessly add new projects, update information, and manage client testimonials without requiring 
              technical assistance.
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
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-amber-600"></div>
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
        
        {/* {currentTab === "projects" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-medium text-gray-800">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  className="group relative overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white font-medium text-xl">{project.title}</h3>
                    <p className="text-amber-300 text-sm">{project.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )} */}
      </motion.div>
      
      {/* Admin Panel Feature */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Admin Panel</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <img src="/images/dsc-dashboard.webp" alt="Admin Dashboard" className="w-full" />
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-medium text-gray-800">Project Management System</h3>
              <p className="text-gray-600">
                A custom-built admin panel provides DSConcept Studio with complete control over their website projects. 
                The intuitive interface allows them to:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Add, edit, and manage project showcases</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Update studio information and team profiles</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Moderate and publish client testimonials</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Upload and organize project images</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Studio Showcase Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Studio Showcase</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-medium text-gray-800">Team & Philosophy</h3>
              <p className="text-gray-600">
                The Studio page presents the essence of DSConcept's approach to architecture and interior design. 
                Visitors can learn about the team's collective expertise, their design philosophy, and the core 
                values that drive their creative process. The page features elegant animations and transitions 
                powered by Framer Motion, creating an engaging user experience that reflects the studio's 
                attention to detail and aesthetic sensibility.
              </p>
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <motion.div 
              className="rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img src="/images/dsc-studio.webp" alt="Studio Page" className="w-full" />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Projects Portfolio */}
      {/* <div className="mb-16">
        <h2 className="text-3xl font-serif font-medium text-gray-800 mb-8">Projects Portfolio</h2>        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-medium text-gray-800">Dynamic Project Gallery</h3>
            <p className="text-gray-600">
              The Projects page serves as a comprehensive portfolio of DSConcept's work. The interactive gallery 
              allows visitors to filter projects by category, such as residential, commercial, or hospitality. 
              Each project features multiple high-quality images and detailed information about the design concept, 
              challenges, and solutions. The gallery is optimized for both desktop and mobile viewing, ensuring that 
              the visual impact of the studio's work is preserved across all devices.
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/api/placeholder/300/300" alt="Project Gallery" className="w-full" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/api/placeholder/300/300" alt="Project Detail" className="w-full" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/api/placeholder/300/300" alt="Project Filter" className="w-full" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md">
              <img src="/api/placeholder/300/300" alt="Project Showcase" className="w-full" />
            </div>
          </motion.div>
        </div>
      </div> */}
      
      {/* Testimonial */}
      <motion.div 
        className="mb-16 bg-amber-50 p-8 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <svg className="w-10 h-10 text-amber-400 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-lg text-gray-700 italic mb-6">
          "The website perfectly captures the essence of our studio's aesthetic and philosophy. The project showcase 
          has significantly improved how we present our work to potential clients. The admin panel is intuitive and 
          allows us to keep our portfolio current without any technical assistance. The team delivered exactly what 
          we needed - a sophisticated platform that elevates our digital presence in the architecture community."
        </p>
        <div className="flex items-center">
         
          <div className="ml-4">
            <p className="font-medium text-gray-800">Dipanshu Chauhan</p>
            <p className="text-sm text-gray-600">Owner, DSConcept Studio</p>
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
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <span className="text-amber-600 font-medium">01</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">Design Consultation</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We began with extensive consultations with Dipanshu Chauhan to understand the studio's aesthetic, 
                portfolio requirements, and content management needs. This phase established the visual direction 
                and functional requirements that would guide the development process.
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
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <span className="text-amber-600 font-medium">02</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">Frontend Development</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                Using React.js, Tailwind CSS, and Framer Motion, we created a responsive and visually striking 
                frontend that prioritizes the presentation of architectural work. Special attention was paid to 
                image optimization, typography, and animation timing to create a premium, sophisticated user experience.
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
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                <span className="text-amber-600 font-medium">03</span>
              </div>
              <h3 className="text-xl font-medium text-gray-800">Backend & Admin Development</h3>
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0">
              <p className="text-gray-600">
                We implemented a MongoDB database structure optimized for project and image management, with Express.js 
                and Node.js powering the API. The admin panel was developed with a focus on user-friendliness, providing 
                intuitive interfaces for all project management tasks without requiring technical expertise.
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
            <img src="/api/placeholder/400/300" alt="HealthPlus Project" className="w-full" />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">HealthPlus Mobile App</h3>
              <p className="text-sm text-gray-500 mb-3">MERN Stack Development</p>
              <a href="#" className="text-amber-600 text-sm font-medium hover:underline">View Project →</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/api/placeholder/400/300" alt="Bone and Joints Website" className="w-full" />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">Bone and Joints Clinic</h3>
              <p className="text-sm text-gray-500 mb-3">Next.js & Firebase Development</p>
              <a href="#" className="text-amber-600 text-sm font-medium hover:underline">View Project →</a>
            </div>
          </motion.div>
          
          <motion.div 
            className="rounded-xl overflow-hidden shadow-md bg-white"
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <img src="/api/placeholder/400/300" alt="E-commerce Platform" className="w-full" />
            <div className="p-4">
              <h3 className="font-medium text-gray-800">LuxMarket E-commerce</h3>
              <p className="text-sm text-gray-500 mb-3">Full-stack Application</p>
              <a href="#" className="text-amber-600 text-sm font-medium hover:underline">View Project →</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DSConceptProject;