import React from "react";

const ItemDetail = ({product, onAdd}) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={() => onAdd(product)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemDetail;