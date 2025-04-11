import React from 'react';

const ProjectCard = ({ title, subtitle, description, category, imageSrc, projectLink }) => {
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
        
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <button className="mt-8 bg-black text-white px-8 py-4 rounded-full font-medium text-lg w-full md:w-auto hover:bg-gray-800 transition-colors duration-200">
            Open Project
          </button>
        </a>
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
        <h1 className="text-5xl md:text-6xl font-serif text-center mb-4">
          Current Projects & Activities
        </h1>
        
        <p className="text-lg text-center text-gray-700 mb-20 max-w-3xl mx-auto">
          I handle a wide range of projects, from sleek personal portfolios to dynamic content-driven websites. Just share your vision, and we'll bring it to life together.
        </p>
        
        <div className="space-y-8">
        <ProjectCard 
            category="Hiring Support"
            title="Hiring Support System – Ambuja Foundation"
            description="A user-role-based hiring support system designed to streamline HR processes and enhance candidate selection."
            imageSrc="/images/ambuja.webp"
            projectLink="https://hiringsupportaf.in/"
          />

        <ProjectCard 
          category="Doctor Website"
          title="Bone and Joints – Orthopaedic Surgeon Website"
          description="A modern website built for an orthopaedic surgeon featuring patient consultation booking and an admin panel to manage and view appointments."
          imageSrc="/images/boneandjointslaptop.webp"
          projectLink="https://boneandjoints.in/"
        />

        <ProjectCard 
          category="Architecture & Design"
          title="DS Concept – Architecture & Design "
          description="A modern architectural firm website showcasing projects with a seamless content management system and intuitive UI."
          imageSrc="/images/dsc-laptop.webp"
          projectLink="https://dsconcept.in/"
        />
        
        <ProjectCard 
          category="Pharmaceutical Website"
          title="Morganics"
          description="A sleek and professional pharmaceutical company website built with Next.js, featuring fast performance and fully optimized for search engines."
          imageSrc="/images/morganics-laptop.webp"
          projectLink="https://morganics.in/"
        />

        <ProjectCard 
          category="Digital Marketing Website"
          title="Seocial Media Solutions – Digital Marketing Agency"
          description="A fully responsive React-based website for a digital marketing company, designed to showcase services, client results, and drive conversions."
          imageSrc="/images/seo-laptop.webp"
          projectLink="https://seocialmedia.in/"
        />
        
        <ProjectCard 
          category="Hotel Website"
          title="Sarovar Portico – Premium Hotel Website"
          description="A modern and elegant hotel website highlighting rooms, amenities, and bookings, crafted for an exceptional user experience and seamless mobile responsiveness."
          imageSrc="/images/hotel-laptop.webp"
          projectLink="https://sarovar-portico-hotel.vercel.app/"
        />
        <ProjectCard 
  category="Portfolio Website"
  title="Personal Portfolio – HTML, CSS & JavaScript"
  description="My first personal portfolio website built using HTML, CSS, and JavaScript, showcasing my projects, skills, and contact information with a clean and simple layout."
  imageSrc="/images/port-laptop.webp"
  projectLink="https://jeet-code27.github.io/jeetendra.github.io/"
/>
        </div>
      </div>
    </div>
  );
};

export default Work;