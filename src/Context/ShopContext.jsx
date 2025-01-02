import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cart, setCart] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) })); // Prevent negative values
  };

  // Fix: Replace 'cartItems' with 'cart'
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        totalItems += cart[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    getTotalCartItems,
    all_product,
    cart,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
