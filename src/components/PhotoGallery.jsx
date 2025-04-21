import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PhotoGallery = () => {
  // State to track which cards are flipped (for mobile touch)
  const [flippedCards, setFlippedCards] = useState({});

  const images = [
    {
      src: "/images/cycling.webp",
      alt: "Morning cycling adventure",
      rotate: "-5deg",
      description: "Early morning rides through the city streets. Nothing beats the rush of wind and the peaceful solitude of cycling at dawn.",
      category: "Fitness & Wellness"
    },
    {
      src: "/images/jaipur.jpg",
      alt: "Pink City exploration",
      rotate: "3deg",
      description: "Wandering through the enchanting streets of Jaipur, discovering its rich heritage, colorful markets, and architectural marvels.",
      category: "Travel & Culture"
    },
    {
      src: "/images/nahargarh.jpg",
      alt: "Sunrise at Nahargarh",
      rotate: "-4deg",
      description: "Witnessing the breathtaking sunrise from Nahargarh Fort, as the first rays of light paint the Pink City in golden hues.",
      category: "Photography"
    },
    {
      src: "/images/longdrive.avif",
      alt: "Scenic road trip",
      rotate: "5deg",
      description: "Taking the scenic route on a long drive, where every turn brings new landscapes and unexpected adventures.",
      category: "Road Trips"
    }
  ];

  // Handle click to toggle flip state
  const handleCardClick = (index) => {
    setFlippedCards(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-8">
      <h1 className="text-4xl mb-16 text-center font-serif">My Adventure Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group w-72"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            style={{ perspective: '1000px' }}
            onClick={() => handleCardClick(index)}
          >
            <div
              className={`relative w-full h-96 transition-transform duration-700 ${flippedCards[index] ? 'rotate-y-180' : ''} hover:rotate-y-180`}
              style={{ 
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Front of card */}
              <div
                className="absolute w-full h-full rounded-lg overflow-hidden shadow-xl bg-white"
                style={{ 
                  transform: `rotate(${image.rotate}) translateY(-8px)`,
                  backfaceVisibility: 'hidden'
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Back of card */}
              <div
                className="absolute w-full h-full bg-[#fffaf1] text-[brown] rounded-lg p-6 shadow-xl"
                style={{ 
                  transform: `rotateY(180deg) rotate(${image.rotate}) translateY(-8px)`,
                  backfaceVisibility: 'hidden'
                }}
              >
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-4">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-semibold mb-3">{image.alt}</h3>
                    <p className="text-sm leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                  <div className="text-center mt-4">
                    <span className="text-xs text-gray-400 hidden md:inline">Hover to flip back</span>
                    <span className="text-xs text-gray-400 md:hidden">Tap to flip back</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;