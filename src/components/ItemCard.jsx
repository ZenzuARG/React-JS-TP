import React from "react";
import { Link } from "react-router-dom";


const ItemCard = ({ product }) => {
  return (
    <div className="card p-3 h-100">
      <img className="square-img mb-3" src={product.img} alt={product.name} />
      <h5 className="mb-1">{product.name}</h5>
      <small className="text-muted text-capitalize">{product.category}</small>
      <p className="mt-2 mb-3 fw-semibold">${product.price}</p>
      <div className="d-flex gap-2 mt-auto">
        <Link className="btn btn-primary w-100" to={`/item/${product.id}`}>
          Ver detalle
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
