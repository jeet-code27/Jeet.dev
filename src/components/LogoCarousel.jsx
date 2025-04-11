import React from 'react';
import Carousel from 'react-multi-carousel';

const LogoCarousel = () => {
  // Sample logo data array with image URLs
  const logos = [
    { id: 1, image: "/images/ambujalogo.jpg" },
    { id: 2, image: "/images/dsc-logo.jpg" },
    { id: 3, image: "/images/morganics-logo.png" },
    { id: 4, image: "/images/sms-logo.jpeg" },
    { id: 5, image: "/images/hotel-logo.png" },
    // { id: 6, image: "/api/placeholder/200/100" }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1280 },
      items: 5,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 3,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
      slidesToSlide: 1
    }
  };

  return (
    <div className="w-full  py-12">
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-center mb-12">
          Companies I worked with
        </h2>
        
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          arrows={false}
          showDots={false}
          swipeable={true}
          draggable={true}
          ssr={true}
          keyBoardControl={true}
          customTransition="transform 1000ms ease-in-out"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType="desktop"
        >
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex items-center justify-center px-4"
            >
              <img
                src={logo.image}
                alt={`Company logo ${logo.id}`}
                className="w-full h-auto object-contain max-h-24"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default LogoCarousel;