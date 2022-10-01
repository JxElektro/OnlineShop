import React from "react";
import { ProductData } from "../Data/ProductData";

// This Component some of the moss popular products in the store
// It is used in the Home.js file

export default function Highlights() {
  return (
    <>
    <h1 className="productTitle">Productos destacados</h1>
    <div className="containerHome__productos">
       {// Show the first 3 products with lest stock
       }
      {ProductData.sort((a, b) => a.stock - b.stock).slice(0, 4).map((product) => (
        <div className="containerHome__productos__box" key={product.id}>
          <img src={product.image} alt={product.name} />
            
          <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
