import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './DemoCarousel.css';

const DemoCarousel = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const desktopImages = [
    "images/banner1.png",
    // "images/banner2.png",
    "images/banner3.png"
  ];

  const mobileImages = [
    // "images/veticalposter.jpg",
    "images/veticalposter3.png",
    "images/veticalposter4.png",
    "images/veticalposter1.jpg",
    // "images/bannerm4.jpg"
  ];

  const imagesToUse = isMobile ? mobileImages : desktopImages;

  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={3000}
        stopOnHover={false}
        swipeable={false}
        emulateTouch={false}
      >
        {imagesToUse.map((img, index) => (
          <div key={index} className='carousel-imagediv'>
            <img src={img} alt={`Slide ${index + 1}`} className={`imghereis${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
