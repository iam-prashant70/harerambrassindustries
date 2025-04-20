import React, { useEffect, useState, useRef } from "react";
import "./Heroslider.css";

const slides = [
  {
    image: "images/meeting.jpg",
    title: "Innovative Tech Solutions",
    description: "Empowering businesses with cutting-edge technology",
  },
  {
    image: "images/office2.jpg",
    title: "Future-Ready Designs",
    description: "Modern UI/UX crafted for excellence",
  },
  {
    image: "images/team.jpg",
    title: "Collaborative Growth",
    description: "Together we achieve more",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  const totalSlides = slides.length;

  // Cloned slides: original + copy of first
  const extendedSlides = [...slides, slides[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsTransitioning(true);
  };

  // Handle transition end (to loop smoothly)
  const handleTransitionEnd = () => {
    if (currentIndex === totalSlides) {
      // Reset without transition
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  return (
    <section className="hero-slider-wrapper">
      <div
        className="hero-slider"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.8s ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
        ref={sliderRef}
      >
        {extendedSlides.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="overlay"></div>
            <img src={slide.image} alt={slide.title} className="hero-image" />
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button className="primary-button">Discover More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Buttons */}
      <div className="slider-buttons">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`slider-btn ${
              index === (currentIndex % totalSlides) ? "active" : ""
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
