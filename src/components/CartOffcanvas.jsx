import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartOffcanvas = () => {
  const { cart, removeItem, clearCart, cartTotal } = useContext(CartContext);

  return (
    <div
      className="offcanvas offcanvas-end text-bg-dark"
      tabIndex="-1"
      id="cartOffcanvas"
      aria-labelledby="cartOffcanvasLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="cartOffcanvasLabel">Tu carrito</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body d-flex flex-column gap-3">
        {cart.length === 0 ? (
          <p className="text-muted">Todavía no agregaste productos.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="d-flex gap-2 align-items-center">
              <img src={item.img} alt={item.name} width="54" height="54" className="rounded" />
              <div className="flex-grow-1">
                <div className="fw-semibold">{item.name}</div>
                <small className="text-muted">{item.qty} × ${item.price}</small>
              </div>
              <button className="btn btn-sm btn-outline-light" onClick={() => removeItem(item.id)}>Quitar</button>
            </div>
          ))
        )}
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <strong>Total: ${cartTotal.toFixed(2)}</strong>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-light btn-sm" onClick={clearCart}>Vaciar</button>
            <button className="btn btn-primary btn-sm">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartOffcanvas;
