import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({data}) {
  
  return (
    <>
    <Link to={`/productdetails?id=${data.id}`}>
      <div className="product-card">
        <div className="product-image">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="product-content">
          <h3>{data.name}</h3>
        </div>
      </div>
    </Link>
    </>
  )
}
