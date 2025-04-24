import React, { useEffect } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import ProductCard from '../../component/ProductCard/ProductCard';
import './Productsp.css';
import { Link } from 'react-router-dom';
import AllProducts from '../../component/Data/Allproducts';


export default function Productsp() {

  useEffect(() => {
    document.title = 'Products | Hareram Brass Industries';
  }, []);

  return (
    <>

      <div className="overlayreturnsactive">
        <img src="images/logofull.png" alt="loading" />
      </div>
      <Navbar /> <br />
      <span className='brudandbread'>
        <div className="divbreaad">
          <Link to="/">Home</Link> /
          <Link to="/products" className='activeonbread' >Products</Link>
        </div>
      </span>
      <div className="products-page" style={{ marginTop: "40px" }}>
        <h1 className="products-title">Our Products</h1>
        <div className="product_wrapper">
          {AllProducts.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${index * 220}ms` }}
              className="product-card"
            >
              <ProductCard data={product} />
            </div>
          ))}
        

        </div>
      </div>

    </>
  );
}
