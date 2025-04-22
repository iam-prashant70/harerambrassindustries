import React, { useState } from 'react';
import './Testimonials.css';
import testimonials from '../Data/Testimonials';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = testimonials.length;


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
      <div style={{ marginBottom: "10vh" }} className="text-center testi-header">
        <h2 className="section-title testi-title">What Our Clients Say</h2>
        <div className="underline testi-underline"></div>
      </div>

      <div className="testimonials-slider-wrapper testi-slider-wrapper">

        <button className="slider-btn testi-btn-left" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            fill="none"
            className="arrow-icon left"
          >
            <path
              d="M20.0001 11.9998L4.00012 11.9998"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="slider-btn testi-btn-right" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            fill="none"
            className="arrow-icon"
          >
            <path
              d="M20.0001 11.9998L4.00012 11.9998"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div
          className="testimonials-slider testi-slider"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {/* {testimonials.map((testimonial) => (
            <div className="testimonial testi-item" key={testimonial.id}>
              <div className="testimonial-content testi-content">
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
          ))} */}

          {testimonials.map((testimonial) => (
            <div className="testimonial testi-item" key={testimonial.id}>
              <div className="reviewcard">
                <div className="reviewcardHeader">
                  <div className="prof_review">
                    <div className="profile_on_review">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div>
                      <span style={{ fontSize: "1.3em", fontWeight: 600 }}>{testimonial.name}</span> <br />
                      <span>{testimonial.position}</span>
                    </div>
                  </div>
                </div>
                <br />
                {testimonial.text}
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
