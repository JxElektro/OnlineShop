import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

// create a CartProvider component for a shoping cart
export const CartProvider = ({ children }) => {
  // create a state for the cart items
  const [cartItems, setCartItems] = useState(() => {
    try {
      // get the cart items from local storage
      const localData = localStorage.getItem("cartProducts");
      // if there are cart items, return them
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      // if there are no cart items, return an empty array
      return [];
    }
  });
  
  // when the cart items change, update the local storage
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    console.log(cartItems);
  }, [cartItems]);
  // add an item to the cart
  const addItemToCart = (product) => {
    // check if the item is already in the cart
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );  
    // if the item is already in the cart, increase the amount by 1
    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) =>
          productInCart.id === product.id
            ? { ...inCart, amount: inCart.amount + 1 } : productInCart
        )
      );
    } else {
      // if the item is not in the cart, add it to the cart
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };  
  // delete an item from the cart
  const deleteItemToCart = (product) => {
    // check if the item is in the cart
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );
    // if the item is in the cart and there is only one item, remove it from the cart
    if (inCart.amount === 1) {
      setCartItems(cartItems.filter((productInCart) => productInCart.id !== product.id));
    } else {
      // if the item is in the cart and there is more than one item, decrease the amount by 1
      setCartItems(
        cartItems.map((productInCart) =>
          productInCart.id === product.id
            ? { ...inCart, amount: inCart.amount - 1 } : productInCart
        )
      );
    }
    if (inCart.amount === inCart.amount - 1) {
      setCartItems(cartItems.filter((productInCart) => productInCart.id !== product.id)
      ); 
    } else {
      // if the item is in the cart and there is more than one item, decrease the amount by 1
      setCartItems((productInCart) => {
        if (productInCart.id === product.id) {
          return { ...inCart, amount: inCart.amount - 1 };
        } else return productInCart;
      });
    }
  };
  // return the cart items, the addItemToCart function, and the deleteItemFromCart function
  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, deleteItemToCart }}>
      {children}
    </CartContext.Provider>
  );  
}


