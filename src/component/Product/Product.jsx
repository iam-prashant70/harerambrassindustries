import React, { useRef, useEffect } from "react";
import "./Product.css";
import ProductCard from "../ProductCard/ProductCard";
import originalProducts from "../Data/Products";

const Products = () => {
  const sliderRef = useRef(null);

  const itemWidth = 300; // adjust this if your card size changes

  const handleScrollRight = () => {
    const slider = sliderRef.current;
    slider.scrollBy({ left: itemWidth, behavior: "smooth" });
  };

  const handleScrollLeft = () => {
    const slider = sliderRef.current;
    slider.scrollBy({ left: -itemWidth, behavior: "smooth" });
  };

  // Drag to scroll with mouse
  useEffect(() => {
    const slider = sliderRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {
      isDown = true;
      slider.classList.add("dragging");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const mouseLeave = () => {
      isDown = false;
      slider.classList.remove("dragging");
    };

    const mouseUp = () => {
      isDown = false;
      slider.classList.remove("dragging");
    };

    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeave);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mousemove", mouseMove);

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeave);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <section id="products" className="products-section">
      <div className="text-center">
        <h2 className="section-title">Our Products</h2>
        <div className="underline"></div>
      </div>
      <div className="container">
        <div className="proslid slider-wrapper" ref={sliderRef}>
          <div className="slider">
            {originalProducts.map((product, index) => (
              <ProductCard key={index} data={product} />
            ))}
          </div>
        </div>
      </div>
      <div
        className="scroll-buttons text-center"
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "10px"
        }}
      >
        <button className="view-details arrow-btn left-arrow" onClick={handleScrollLeft}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="none">
            <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button className="view-details arrow-btn" onClick={handleScrollRight}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="none">
            <path d="M20.0001 11.9998L4.00012 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

      </div>
    </section>
  );
};

export default Products;
