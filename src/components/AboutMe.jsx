import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const AboutMe = () => {
  const services = [
    "Full Stack Development", "SEO Optimization", "API Development",
    "Database Design", "Performance Optimization", "Technical Consulting"
  ];

  const technologies = [
    "MongoDB", "Express.js", "React.js", "Node.js",
    "Next.js", "TypeScript", "TailwindCSS", "Redux"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="max-w-[1000px] w-full  rounded-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="font-serif text-4xl md:text-5xl tracking-tight">
              About me
            </h1>
            
            <p className="text-gray-800 text-lg leading-relaxed">
              I am a MERN Stack Developer with expertise in SEO optimization and 
              performance tuning. Specializing in building scalable web applications 
              and delivering high-impact digital solutions that drive real business results 
              for clients worldwide.
            </p>

            <div>
              <h2 className="text-sm font-medium uppercase tracking-wider mb-4">
                WHAT I OFFER
              </h2>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <span
                    key={service}
                    className="text-gray-600 text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-medium uppercase tracking-wider mb-4">
                TECH STACK
              </h2>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-50 px-3 py-1 rounded-full text-sm text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 w-30">
              <img src="images/signature.svg" alt="" />
            </div>

            <div className="flex gap-6">
              <a 
                href="https://github.com/jeet-code27" 
                target='_blank'
                className="hover:opacity-70 transition-opacity"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jeetendra-singh-rathore/" 
                 target='_blank'
                className="hover:opacity-70 transition-opacity"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative order-first md:order-last">
            <img 
              src="/api/placeholder/600/800"
              alt="Profile" 
              className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;