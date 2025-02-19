
import React from 'react';

const ProjectCard = ({ title, subtitle, description, category, imageSrc }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-[1000px] mx-auto">
      {/* Image Section - Always at top */}
      <div className="w-full h-80 relative">
        <img 
          src={imageSrc || "/api/placeholder/800/600"} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-8 md:p-12">
        <div className="space-y-4">
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full">
            <span className="text-sm text-gray-600">{category}</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-medium">
            {title}
          </h2>
          
          <div className="text-gray-600">
            {subtitle}
          </div>
          
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
        
        <button className="mt-8 bg-black text-white px-8 py-4 rounded-full font-medium text-lg w-full md:w-auto hover:bg-gray-800 transition-colors duration-200">
          Open Project
        </button>
      </div>
    </div>
  );
};

// Example usage
const Work = () => {
  return (
    <div className="min-h-screen  py-20 px-6">

<div 
        className="fixed inset-0 bg-repeat opacity-30 -z-10"
        style={{
          backgroundImage: "url('images/background.png')",
          backgroundPosition: "0 0",
          backgroundSize: "auto"
        }}
      />
      
      {/* Gradient background */}
      <div 
        className="absolute rounded-[999rem] -z-10 w-[50vw] h-[50vh]"
        style={{
          filter: "blur(15rem)",
          backgroundImage: "linear-gradient(135deg, #e5f0ff, #d0e6ff 28%, #b9e0ff 35%, #a2d6ff 45%, #8dccff 59%, #7cb7ec 69%, #728fcd 84%, #7171f2)",
          inset: "25vh auto auto 25vw"
        }}
      />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif text-center mb-20">
          Current Projects & Activities
        </h1>
        
        <div className="space-y-8">
          <ProjectCard 
            category="Print Campaign"
            title="Branding Strategy for EcoFriendly"
            subtitle="EcoFriendly"
            description="Creation of a branding strategy to enhance market presence and engagement."
            imageSrc="/api/placeholder/800/600"
          />
            <ProjectCard 
            category="Print Campaign"
            title="Branding Strategy for EcoFriendly"
            subtitle="EcoFriendly"
            description="Creation of a branding strategy to enhance market presence and engagement."
            imageSrc="/api/placeholder/800/600"
          />
            <ProjectCard 
            category="Print Campaign"
            title="Branding Strategy for EcoFriendly"
            subtitle="EcoFriendly"
            description="Creation of a branding strategy to enhance market presence and engagement."
            imageSrc="/api/placeholder/800/600"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;