import React , { useContext} from "react";
import { ProductData } from "../Data/ProductData";
import { CartContext } from "../Context/CartContext";

const Products = () => {

 const {addItemToCart} = useContext(CartContext);

  return (
    <div >
    <h1 className="productTitle" >Productos</h1>
    <div className="productContainer">
      {ProductData.map((product) => (
        <div  className="productBox" key={product.id}>
          <img src={product.image} alt={product.name} />
          <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
          <button className="productButton" onClick={() => addItemToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
    </div>
  );
}


export default Products;