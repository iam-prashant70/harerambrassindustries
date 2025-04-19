import React, { useEffect, useState } from "react";
import { useLocation,Link } from "react-router-dom";
import "./ProductDetails.css";
import Navbar from '../../component/Navbar/Navbar'

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

const ProductDetails = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("id");

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = allProducts.find((p) => String(p.id) === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <p style={{ padding: "20px" }}>Loading product...</p>;

  return (
    <>
      <Navbar />
      <div className="product-details-container">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details-content">
          <h1>{product.name}</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut autem similique consequatur eum eius eveniet ratione! Iste dicta maiores obcaecati quod. Commodi quod cumque amet repellat sint quo accusantium qui voluptate, quam dignissimos minima unde, distinctio reprehenderit, facere corrupti quaerat architecto in quia! Cupiditate nesciunt, dolor repudiandae id, nihil aperiam exercitationem reiciendis commodi fuga officiis maiores accusantium? Officia accusamus optio temporibus repudiandae fuga, eum, rerum dignissimos culpa repellat quisquam atque quaerat dolore neque, reprehenderit hic enim similique. Debitis quis ipsam harum, in veritatis sint laborum unde qui nulla quidem praesentium facere beatae fugiat recusandae iure eos aut impedit omnis sequi?</p>
          <button className="buy-now-btn">
            {/* <Link to={`/inquiry?id=${id}`}> */}
            <Link to={`/inquiry`}>
              Send Inquiry
            </Link>
          </button>
        </div>
      </div>
      <div className="doublequate">
        <svg className="startingquate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ac25eb"} fill={"#ac25eb"}>
          <path d="M10 8C10 9.88562 10 10.8284 9.41421 11.4142C8.82843 12 7.88562 12 6 12C4.11438 12 3.17157 12 2.58579 11.4142C2 10.8284 2 9.88562 2 8C2 6.11438 2 5.17157 2.58579 4.58579C3.17157 4 4.11438 4 6 4C7.88562 4 8.82843 4 9.41421 4.58579C10 5.17157 10 6.11438 10 8Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 7L10 11.4821C10 15.4547 7.48429 18.8237 4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22 8C22 9.88562 22 10.8284 21.4142 11.4142C20.8284 12 19.8856 12 18 12C16.1144 12 15.1716 12 14.5858 11.4142C14 10.8284 14 9.88562 14 8C14 6.11438 14 5.17157 14.5858 4.58579C15.1716 4 16.1144 4 18 4C19.8856 4 20.8284 4 21.4142 4.58579C22 5.17157 22 6.11438 22 8Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M22 7L22 11.4821C22 15.4547 19.4843 18.8237 16 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <p>Any Type of Brass Water Meter Parts can be developed and supplied exactly as per customer specifications. </p>
        <svg className="endinggquate" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ac25eb"} fill={"#ac25eb"}>
          <path d="M10 8C10 9.88562 10 10.8284 9.41421 11.4142C8.82843 12 7.88562 12 6 12C4.11438 12 3.17157 12 2.58579 11.4142C2 10.8284 2 9.88562 2 8C2 6.11438 2 5.17157 2.58579 4.58579C3.17157 4 4.11438 4 6 4C7.88562 4 8.82843 4 9.41421 4.58579C10 5.17157 10 6.11438 10 8Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 7L10 11.4821C10 15.4547 7.48429 18.8237 4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22 8C22 9.88562 22 10.8284 21.4142 11.4142C20.8284 12 19.8856 12 18 12C16.1144 12 15.1716 12 14.5858 11.4142C14 10.8284 14 9.88562 14 8C14 6.11438 14 5.17157 14.5858 4.58579C15.1716 4 16.1144 4 18 4C19.8856 4 20.8284 4 21.4142 4.58579C22 5.17157 22 6.11438 22 8Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M22 7L22 11.4821C22 15.4547 19.4843 18.8237 16 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </>

  );
};

export default ProductDetails;
