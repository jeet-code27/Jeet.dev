import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const faqItems = [
    {
      question: "What technologies do you specialize in?",
      answer: "I'm a MERN Stack Developer specializing in React, Next.js, and Tailwind CSS. I build fast, mobile-friendly, and scalable websites with a focus on performance optimization and SEO."
    },
    {
      question: "Do you offer SEO services?",
      answer: "Yes, I have strong experience in SEO optimization. I focus on creating websites that not only look great but also load quickly and help businesses grow their online presence through effective SEO strategies."
    },
    {
      question: "What other services do you provide besides web development?",
      answer: "Along with web development, I offer digital marketing services including Google My Business optimization, logo design, video editing, and content creation. I work with a team of skilled professionals to deliver complete digital solutions."
    },
    {
      question: "How does your team approach projects?",
      answer: "I collaborate with a team of experts in various fields. Whether it's design, SEO, video production, or content creation, we work together to deliver comprehensive digital solutions that bring real results for our clients worldwide."
    },
    {
      question: "What makes your websites stand out?",
      answer: "My websites are built with modern tools and frameworks to ensure they are fast, mobile-friendly, and scalable. I prioritize both aesthetics and performance, creating sites that look great while loading quickly and ranking well in search engines."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-serif text-center mb-12">FAQ</h1>
      
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <motion.button
              className="w-full py-6 flex justify-between items-center text-left"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span className="text-lg">{item.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-gray-600">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;