import React, { useRef, useEffect } from "react";
import "./Product.css";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const sliderRef = useRef(null);

  const originalProducts = [
    {
      id: 1,
      name: "Industrial Robot",
      image: "images/brass-hex-insert.jpg",
      description: "Advanced robotics for automation and efficiency."
    },
    {
      id: 2,
      name: "AI Monitoring System",
      image: "images/brass-moulding-insert.jpg",
      description: "Smart monitoring powered by AI insights."
    },
    {
      id: 3,
      name: "Precision Tools",
      image: "/images/tools.jpg",
      description: "High-quality precision tools for industries."
    },
    {
      id: 4,
      name: "Laser Cutter",
      image: "/images/tools.jpg",
      description: "Precision laser cutting machines for modern factories."
    },
    {
      id: 5,
      name: "Smart Sensor",
      image: "/images/tools.jpg",
      description: "Environment-aware sensors for smart automation."
    },
    {
      id: 6,
      name: "Conveyor Belt System",
      image: "/images/tools.jpg",
      description: "Efficient material handling system for warehouses."
    },
    {
      id: 7,
      name: "Assembly Bot",
      image: "/images/tools.jpg",
      description: "Automated assembly line solution."
    },
    {
      id: 8,
      name: "Welding Machine",
      image: "/images/tools.jpg",
      description: "Robotic precision welding."
    }
  ];

  const clonedProducts = [
    ...originalProducts.slice(-4), // Clone last 4 to the start
    ...originalProducts,
    ...originalProducts.slice(0, 4) // Clone first 4 to the end
  ];

  const itemWidth = 300; // Approx (with gap), adjust if needed
  const visibleItems = 4;
  const totalCloneWidth = itemWidth * visibleItems;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
  
    // Go to real content (after first 4 clones)
    slider.scrollLeft = totalCloneWidth;
  
    const handleScroll = () => {
      const maxScroll = slider.scrollWidth - slider.offsetWidth;
  
      if (slider.scrollLeft <= 0) {
        // Disable smooth temporarily
        slider.style.scrollBehavior = "auto";
        slider.scrollLeft = maxScroll - totalCloneWidth * 2;
        // Re-enable smooth
        requestAnimationFrame(() => {
          slider.style.scrollBehavior = "smooth";
        });
      }
  
      if (slider.scrollLeft >= maxScroll - 1) {
        slider.style.scrollBehavior = "auto";
        slider.scrollLeft = totalCloneWidth;
        requestAnimationFrame(() => {
          slider.style.scrollBehavior = "smooth";
        });
      }
    };
  
    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);
  

const handleScrollRight = () => {
  const slider = sliderRef.current;
  slider.scrollBy({ left: itemWidth, behavior: "smooth" });
};

const handleScrollLeft = () => {
  const slider = sliderRef.current;
  slider.scrollBy({ left: -itemWidth, behavior: "smooth" });
};

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
    <>
      <section id="products" className="products-section">
        <div className="text-center">
          <h2 className="section-title">Our Products</h2>
          <div className="underline"></div>
        </div>
        <div className="container">

          <div className="proslid slider-wrapper" ref={sliderRef}>
            <div className="slider">
              {clonedProducts.map((product, index) => (
                <ProductCard key={index} data={product} />
              ))}
            </div>
          </div>

        </div>
        <div className="scroll-buttons text-center" style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "10px" }}>
          <button className="view-details" onClick={handleScrollLeft}>
            ←
          </button>
          <button className="view-details" onClick={handleScrollRight}>
            →
          </button>
        </div>
      </section>
    </>
  );
};

export default Products;
