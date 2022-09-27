import React from "react";
import { ProductData } from "../../Data/ProductData";

const Products = () => {
  return (
    <div>
      {ProductData.map((product) => (
        <div key={product.id}>
          <img src={product.img} alt={product.name} />
          <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          </div>
          <button onClick={() => console.log("Added to cart")}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}


export default Products;