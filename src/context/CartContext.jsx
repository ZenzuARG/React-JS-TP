import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);
      if (found) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [
        ...prev,
        { id: product.id, name: product.name, price: product.price, img: product.img, qty },
      ];
    });
  };

  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));
  const clearCart = () => setCart([]);

  const cartQuantity = cart.reduce((acc, p) => acc + p.qty, 0);
  const cartTotal = cart.reduce((acc, p) => acc + p.price * p.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, cartQuantity, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
