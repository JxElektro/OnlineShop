import React from "react";
import { CartContext } from "../Context/CartContext";
import { ItemCart } from "../Components/ItemCart";
import { useContext } from "react";


 function Carrito() {
  const { cartItems } = useContext(CartContext);
  const total = cartItems?.reduce( (previous, current) => previous + current.amount * current.price,
  0)
  return (
    <div className="containerCarrito" >
      <div className="containerCarrito__items">
    <h1>Carrito</h1>
      {cartItems?.map((item) => (
        <ItemCart key={item.id} item={item}  />
      ))}

      {cartItems.length === 0 && <h1>El carrito esta vacio</h1>}

       <h1>Total: {total}</h1>
      </div>

            
    </div>
  );
}

export default Carrito;
