import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <button
      type="button"
      className="btn btn-outline-light position-relative"
      data-bs-toggle="offcanvas"
      data-bs-target="#cartOffcanvas"
      aria-controls="cartOffcanvas"
      title="Ver carrito"
    >
      🛒
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
        {cartQuantity}
      </span>
    </button>
  );
};

export default CartWidget;
