import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = () => {
  const images = [
    {
      id: 1,
      url: "/api/placeholder/800/500",
      alt: "Design mockup with yellow background"
    },
    {
      id: 2,
      url: "/api/placeholder/800/500",
      alt: "iMac display with orange screen"
    },
    {
      id: 3,
      url: "/api/placeholder/800/500",
      alt: "Typography design mockup"
    },
    {
      id: 4,
      url: "/api/placeholder/800/500",
      alt: "Design sample 4"
    },
    {
      id: 5,
      url: "/api/placeholder/800/500",
      alt: "Design sample 5"
    },
    {
      id: 6,
      url: "/api/placeholder/800/500",
      alt: "Design sample 6"
    }
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

  return (
    <div className="w-full px-8">
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
          {images.map((image) => (
            <div key={image.id} className="relative aspect-[4/3] w-full group">
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
    </div>
  );
};

export default ImageSlider;