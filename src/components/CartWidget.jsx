import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div className="cart-widget">
      🛒 <span style={{ marginLeft:'5px', fontWeight: 'bold' }}>{cartQuantity}</span>
    </div>
  );
};

export default CartWidget;
