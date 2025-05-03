import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, category, description, imageSrc, projectLink }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-[1000px] mx-auto"
    >
      {/* Mobile Layout (flex-col) */}
      <div className="md:hidden flex flex-col">
        <motion.div 
          className="relative h-80"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src={imageSrc || "/api/placeholder/800/600"} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="p-8 space-y-4">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
            <span className="text-sm text-gray-600">{category}</span>
          </div>
          <h3 className="text-3xl font-semibold">{title}</h3>
          <div className="text-gray-500 text-lg">{category}</div>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>

        <div className="p-8 pt-6">
          <Link to={projectLink} >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black t text-white px-8 py-4 rounded-full font-medium w-full text-lg"
            >
              Open Project
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Desktop Layout (flex-row) */}
      <div className="hidden md:flex flex-row items-stretch min-h-[500px]">
        <div className="p-12 w-1/2 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
              <span className="text-sm text-gray-600">{category}</span>
            </div>
            <h3 className="text-4xl font-semibold">{title}</h3>
            <div className="text-gray-500 text-lg">{category}</div>
            <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
          </div>
          
          <Link to={projectLink} >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-10 py-4 rounded-full font-medium text-lg w-fit"
            >
              Open Project
            </motion.button>
          </Link>
        </div>
        
        <motion.div 
          className="w-1/2 relative"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src={imageSrc || "/api/placeholder/800/600"} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

function ProjectsSection() {
  return (
    <div className="min-h-screen py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-serif text-center mb-6">
          Explore my Projects
        </h1>
        
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-20">
          I handle a wide range of projects, from sleek personal portfolios to dynamic content-driven websites. Just share your vision, and we'll bring it to life together.
        </p>
        
        <div className="space-y-12">
          <ProjectCard 
            category="Hiring Support"
            title="Hiring Support System – Ambuja Foundation"
            description="A user-role-based hiring support system designed to streamline HR processes and enhance candidate selection."
            imageSrc="/images/ambujafoundation.webp"
            projectLink="/work/ambujaproject"
          />

<ProjectCard 
  category="Doctor Website"
  title="Pediatric & Neonatal Care – Dr. Mayur Goyal"
  description="A modern website built for Dr. Mayur Goyal, a pediatrician and neonatologist, featuring patient consultation booking and an admin panel to manage and view appointments."
  imageSrc="/images/drmayurgoyal.webp"
  projectLink="/work/drmayurgoyalproject"
/>


          <ProjectCard 
            category="Architecture & Design"
            title="DS Concept – Architecture & Design "
            description="A modern architectural firm website showcasing projects with a seamless content management system and intuitive UI."
            imageSrc="/images/dsc.webp"
            projectLink="/work/dsconceptproject"
          />
        </div>

        <div className="mt-16 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/work" 
              className="inline-flex items-center gap-2 text-lg font-medium text-black hover:text-gray-700 transition-colors"
            >
              See all projects 
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectsSection;