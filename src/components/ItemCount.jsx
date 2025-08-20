import React, { useState } from "react";

const ItemCount = ({ stock = 20, initial = 1, onAdd }) => {
  const [qty, setQty] = useState(initial);

  const dec = () => setQty((q) => Math.max(1, q - 1));
  const inc = () => setQty((q) => Math.min(stock, q + 1));

  return (
    <div className="d-flex align-items-center gap-2">
      <div className="btn-group" role="group" aria-label="qty">
        <button className="btn btn-outline-light" onClick={dec}>-</button>
        <span className="btn btn-outline-light disabled">{qty}</span>
        <button className="btn btn-outline-light" onClick={inc}>+</button>
      </div>
      <button className="btn btn-primary" onClick={() => onAdd(qty)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
