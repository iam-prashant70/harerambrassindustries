import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import ProductCard from '../../component/ProductCard/ProductCard';
import './Productsp.css';
import originalProducts from "../../component/Data/Products";


export default function Productsp() {

  return (
    <>
      <Navbar />
      <div className="products-page" style={{marginTop : "100px"}}>
        <h1 className="products-title">Our Products</h1>
        <div className="product_wrapper">
          {originalProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>

    </>
  );
}
