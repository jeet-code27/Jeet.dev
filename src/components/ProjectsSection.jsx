import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ title, category, description, imageSrc }) => {
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-full font-medium w-full text-lg"
          >
            Open Project
          </motion.button>
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
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-10 py-4 rounded-full font-medium text-lg w-fit"
          >
            Open Project
          </motion.button>
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
    <div className="min-h-screen  py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-serif text-center mb-20">
          Explore my Projects
        </h1>
        
        <div className="space-y-12">
          <ProjectCard 
            category="Print Campaign"
            title="Branding Strategy for EcoFriendly"
            description="Creation of a branding strategy to enhance market presence and engagement."
            imageSrc="/api/placeholder/800/600"
          />
           <ProjectCard 
            category="Print Campaign"
            title="Branding Strategy for EcoFriendly"
            description="Creation of a branding strategy to enhance market presence and engagement."
            imageSrc="/api/placeholder/800/600"
          />
           <ProjectCard 
            category="Print Campaign"
            title="Branding Strategy for EcoFriendly"
            description="Creation of a branding strategy to enhance market presence and engagement."
            imageSrc="/api/placeholder/800/600"
          />
        </div>

        <div className="mt-16 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-lg font-medium text-black hover:text-gray-700 transition-colors"
            > */}
            <div className='inline-flex items-center gap-2 text-lg font-medium text-black hover:text-gray-700 transition-colors cursor-pointer'>
              See all projects 
              <ArrowRight className="w-5 h-5" />
              </div>
            {/* </Link> */}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectsSection; 