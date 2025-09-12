import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ImageSlider = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = [
    {
      id: 1,
      url: "/images/boneandjointslaptop.webp",
      alt: "Design mockup with yellow background"
    },
    {
      id: 2,
      url: "/images/blinkinn.jpg",
      alt: "iMac display with orange screen"
    },
    {
      id: 3,
      url: "/images/ambujafoundation.jpg",
      alt: "iMac display with orange screen"
    },
    {
      id: 4,
      url: "/images/dsc-laptop.webp",
      alt: "Typography design mockup"
    },
    {
      id: 5,
      url: "/images/seo-laptop.webp",
      alt: "Design sample 4"
    },
    {
      id: 5,
      url: "/images/morganics-laptop.webp",
      alt: "Design sample 5"
    },
    {
      id: 6,
      url: "/images/port-laptop.webp",
      alt: "Design sample 6"
    },
   
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const CustomDot = ({ onClick, active }) => {
    return (
      <button
        className={`h-3 w-3 mx-2 rounded-full transition-all duration-300 ${
          active ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
        }`}
        onClick={onClick}
      />
    );
  };

  const CustomButtonGroup = ({ next, previous }) => {
    return (
      <div className="absolute w-full top-1/2 transform -translate-y-1/2">
        <button
          className="absolute -left-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-lg group"
          onClick={previous}
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
        </button>
        <button
          className="absolute -right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 shadow-lg group"
          onClick={next}
        >
          <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-gray-900" />
        </button>
      </div>
    );
  };

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = (e) => {
    e?.stopPropagation();
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = (e) => {
    e?.stopPropagation();
    setSelectedImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowLeft') {
          goToPrevious();
        } else if (e.key === 'ArrowRight') {
          goToNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  return (
    <div className="w-full">
      <div className="relative">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          customDot={<CustomDot />}
          customButtonGroup={<CustomButtonGroup />}
          arrows={false}
          renderButtonGroupOutside={false}
          containerClass="pb-12"
          itemClass="px-2"
        >
          {images.map((image, index) => (
            <div 
              key={image.id} 
              className="relative aspect-[4/3] w-full group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20 rounded-lg group-hover:from-black/10 group-hover:to-black/40 transition-all duration-300" />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 z-50"
            aria-label="Close lightbox"
            style={{ touchAction: 'manipulation' }}
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <div 
            className="relative w-full max-w-6xl h-full max-h-[90vh] flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={goToPrevious}
              className="absolute left-4 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 z-10"
              aria-label="Previous image"
              style={{ touchAction: 'manipulation' }}
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            <div className="w-full h-full flex items-center justify-center">
              <img
                src={images[selectedImageIndex].url}
                alt={images[selectedImageIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>

            <button 
              onClick={goToNext}
              className="absolute right-4 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 z-10"
              aria-label="Next image"
              style={{ touchAction: 'manipulation' }}
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          </div>

          <div 
            className="absolute bottom-8 left-0 right-0 flex justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImageIndex(index);
                  }}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === selectedImageIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                  style={{ touchAction: 'manipulation' }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;