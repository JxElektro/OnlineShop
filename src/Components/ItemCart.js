import React, { useContext } from "react";
import CartContext from "../Context/CartContext";

const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { editItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { amount } = item;

  return (
    <div>
      
      <div >
        <div >
          <p>{item.name}</p>
          <div >
            <button onClick={() => editItemToCart(item._id, "add", amount)}>
              AGREGAR
            </button>
            <button onClick={() => editItemToCart(item._id, "del", amount)}>
              SACAR
            </button>
          </div>
        </div>
        <div>
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};


export default ItemCart;