import React from 'react';
import IntroComponent from './IntroComponent';
import ImageCarousel from './ImageCarousel';
import ProjectsSection from './ProjectsSection';
import AboutMe from './AboutMe';
import LogoCarousel from './LogoCarousel';
import FAQAccordion from './FAQAccordion';
import HireBanner from './HireBanner';
import Hero from './Hero';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
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
      
      {/* Main content container */}
      <div className="relative z-10">
        <Hero/>
        <IntroComponent />
        <ImageCarousel />
        <ProjectsSection />
        <AboutMe />
        <LogoCarousel />
        <FAQAccordion />
        <HireBanner />
      </div>
    </div>
  );
};

export default Home;