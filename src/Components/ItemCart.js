import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { addItemToCart } = useContext(CartContext);
  const { deleteItemToCart } = useContext(CartContext);
  /* Desestructuramos el item para sacar solo la id */
  const { amount } = item;

  return (
    <>
    <div className="itemCart">
    <img className="imgCart" src={item.image} alt={item.title} />
      <div className="itemCart__info">
       
        <p className="itemCart__info__title">{item.name}</p>
        <p className="itemCart__info__price">Precio Unitario : ${item.price}</p>
         <p className="itemCart__info__price">Precio Total : ${item.price * amount}</p>
      </div>

      <div className="itemCart__amount">
        <p>Cantidad :{amount}</p>
        <button onClick={() => addItemToCart(item, "add")}>agregar</button>
        <button onClick={() => deleteItemToCart(item, "remove")}>Sacar</button>
      </div>
    </div>
    </>
  );
};
