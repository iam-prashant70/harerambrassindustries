// import React, { useEffect } from 'react';
// import Navbar from '../../component/Navbar/Navbar';
// import ProductCard from '../../component/ProductCard/ProductCard';
// import './Productsp.css';
// import { Link,useLocation } from 'react-router-dom';
// import AllProducts from '../../component/Data/Allproducts';


// export default function Productsp() {

//   const location = useLocation();

//   useEffect(() => {
//     document.title = 'Products | Hareram Brass Industries';
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   return (
//     <>

//       <div className="overlayreturnsactive">
//         <img src="images/logofull.png" alt="loading" />
//       </div>
//       <Navbar /> <br />
//       <span className='brudandbread'>
//         <div className="divbreaad">
//           <Link to="/">Home</Link> /
//           <Link to="/products" className='activeonbread' >Products</Link>
//         </div>
//       </span>
//       <div className="products-page" style={{ marginTop: "40px" }}>
//         <h1 className="products-title">Our Products</h1>
//         <div className="product_wrapper">
//           {AllProducts.map((product, index) => (
//             <div
//               key={product.id}
//               style={{ animationDelay: `${index * 220}ms` }}
//               className="product-card"
//             >
//               <ProductCard data={product} />
//             </div>
//           ))}


//         </div>
//       </div>

//     </>
//   );
// }



import React, { useEffect } from 'react';
import Navbar from '../../component/Navbar/Navbar';
import ProductCard from '../../component/ProductCard/ProductCard';
import './Productsp.css';
import { Link, useLocation } from 'react-router-dom';
import AllProducts from '../../component/Data/Allproducts';
import LazyRender from '../../component/lazyRender';
// import LazyRender from '../../component/lazyRender';
// import LazyRender from './component/LazyRender/LazyRender'; // <- new

export default function Productsp() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Products | Hareram Brass Industries';
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="overlayreturnsactive">
        <img src="images/logofull.png" alt="loading" />
      </div>
      <Navbar /> <br />
      <span className='brudandbread'>
        <div className="divbreaad">
          <Link to="/" className='homebrud'>Home</Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b0b0b0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right">
            <path d="m9 18 6-6-6-6" />
          </svg>
          <Link to="/products" className='activeonbread' >Products</Link>
        </div>
      </span>
      <div className="products-page" style={{ marginTop: "40px" }}>
        <h1 className="products-title">Our Products</h1>
        <div className="product_wrapper">
          {AllProducts.map((product, index) => (
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
    </>
  );
}

