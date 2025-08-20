import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const cartQuantity = cart.length;

  return (
    <CartContext.Provider value={{ cart, addItem, cartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
