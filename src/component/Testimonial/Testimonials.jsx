import React, { useState } from 'react';
import './Testimonials.css';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, TechCorp",
      image: "images/tap.jpg",
      text: "Outstanding products that have optimized our operations!",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Lee",
      position: "Operations Manager, FactoryPro",
      image: "images/meeting.jpg",
      text: "High-quality and reliable solutions for our business needs.",
      rating: 4
    },
    {
      id: 3,
      name: "Ravi Kumar",
      position: "CTO, DevSolutions",
      image: "/images/client3.jpg",
      text: "The tech they provided was top-notch and support was stellar.",
      rating: 5
    },
    {
      id: 4,
      name: "Linda Smith",
      position: "Product Manager, BuildX",
      image: "/images/client4.jpg",
      text: "Reliable team and high-quality results every time.",
      rating: 5
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / 2);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev < totalSlides - 1 ? prev + 1 : prev
    );
  };

  return (
    <section id="testimonials" className="testimonials-section testi-section">
      <div style={{marginBottom: "10vh"}} className="text-center testi-header">
        <h2 className="section-title testi-title">What Our Clients Say</h2>
        <div className="underline testi-underline"></div>
      </div>

      <div className="testimonials-slider-wrapper testi-slider-wrapper">
        <button className="slider-btn left testi-btn-left" onClick={handlePrev}>
          &#8592;
        </button>
        <button className="slider-btn right testi-btn-right" onClick={handleNext}>
          &#8594;
        </button>

        <div
          className="testimonials-slider testi-slider"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div className="testimonial testi-item" >
              <div className="testimonial-content testi-content" key={testimonial.id}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image testi-image"
                />
                <h3 className="testi-name">{testimonial.name}</h3>
                <p className="position testi-position">{testimonial.position}</p>
                <p className="testimonial-text testi-text">"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-dots testi-dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`dot testi-dot ${index === activeIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
