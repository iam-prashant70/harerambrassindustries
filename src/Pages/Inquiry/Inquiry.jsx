import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';

export default function Inquiry() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const id = query.get("id");
  
    const [product, setProduct] = useState(null);
  
    // useEffect(() => {
    //   const foundProduct = allProducts.find((p) => String(p.id) === id);
    //   setProduct(foundProduct);
    // }, [id]);
  
    if (!product) return <p style={{ padding: "20px" }}>Loading product...</p>;
  
  return (
    <>
    <h2>hehehhehe   </h2></>
  )
}
