import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import ProductCard from '../../component/ProductCard/ProductCard';
import Footer from '../../component/Footer/Footer';
import './Productsp.css';

export default function Productsp() {
  const allProducts = [
    {
      id: 1,
      name: "Industrial Robot",
      image: "/images/brass-hex-insert.jpg",
      description: "Advanced robotics for automation and efficiency.",
    },
    {
      id: 2,
      name: "AI Monitoring System",
      image: "/images/brass-moulding-insert.jpg",
      description: "Smart monitoring powered by AI insights.",
    },
    {
      id: 3,
      name: "Precision Tools",
      image: "/images/tools.jpg",
      description: "High-quality precision tools for industries.",
    },
    {
      id: 4,
      name: "Laser Cutter",
      image: "/images/tools.jpg",
      description: "Precision laser cutting machines for modern factories.",
    },
    {
      id: 5,
      name: "Smart Sensor",
      image: "/images/tools.jpg",
      description: "Environment-aware sensors for smart automation.",
    },
    {
      id: 6,
      name: "Conveyor Belt System",
      image: "/images/tools.jpg",
      description: "Efficient material handling system for warehouses.",
    },
    {
      id: 7,
      name: "Assembly Bot",
      image: "/images/tools.jpg",
      description: "Automated assembly line solution.",
    },
    {
      id: 8,
      name: "Welding Machine",
      image: "/images/tools.jpg",
      description: "Robotic precision welding.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="products-page" >
        <h1 className="products-title">Our Products</h1>
        <div className="product_wrapper">
          {allProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
