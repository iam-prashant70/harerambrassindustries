import React, { useRef, useEffect } from "react";
import "./Product.css";
import ProductCard from "../ProductCard/ProductCard";
import originalProducts from "../Data/Products";
import { Link } from "react-router-dom";
import LazyRender from "../lazyRender";

// import AllProducts from "../Data/Allproducts";

const Products = () => {
  const sliderRef = useRef(null);

  const itemWidth = 300;

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
      <h2 className="section-title" style={{ marginBottom: "1.8em" }}>Our Products</h2>
      <div className="container">
        <div className="proslid slider-wrapper" ref={sliderRef}>
          <div className="slider">
            {originalProducts.map((product, index) => (
              // <ProductCard key={index} data={product} />
              <LazyRender
              key={product.id}
              rootMargin="400px"     // start loading when ~400px away (tweakable)
              placeholder={<div className="product-card-placeholder" style={{ animationDelay: `${index * 220}ms` }} />}
            >
              <div
                style={{ animationDelay: `${index * 220}ms` }}
                className="product-card"
              >
                <ProductCard data={product} />
              </div>
            </LazyRender>
            ))}
          </div>
        </div>
      </div>

      <div className="bottomoftestibtns">

        <Link to="/products" className='linkathomeforfeaturesokay'>
          Explore more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={35}
            height={40}
            fill="none"
            style={{ color: "#9747FF" }}
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
        </Link>

        <div style={{ display: "flex", gap: "1em", marginTop: "1em" }}>
          <button
            className="btnsattestimonialsscoll btnnotactivescroll"
            onClick={handleScrollLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={35}
              height={35}
              fill="none"
              style={{ transform: 'rotate(180deg)' }}
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
          <button
            className="btnsattestimonialsscoll btnactivescroll"
            onClick={handleScrollRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={35}
              height={35}
              fill="none"
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
        </div>
      </div>

    </section>
  );
};

export default Products;
