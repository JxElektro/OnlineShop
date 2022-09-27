import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem("cartProducts");
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      return [];
    }
  });


  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );
    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) =>
          productInCart.id === product.id
            ? { ...inCart, amount: inCart.amount + 1 } : productInCart
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
    const deleteItemFromCart = (product) => {
      const inCart = cartItems.find(
        (productInCart) => productInCart.id === product.id
      );

      if (inCart.amount === 1) {
        setCartItems(cartItems.filter((productInCart) => productInCart.id !== product.id)
        );
      } else {
        setCartItems((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        });
      }
    };
    return (
      <CartContext.Provider value={{ cartItems, addItemToCart, deleteItemFromCart }}>
        {children}
      </CartContext.Provider>
    );
  };
}
