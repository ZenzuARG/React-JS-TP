import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ product, onAdd }) => {
  return (
    <div className="row g-4 align-items-start">
      <div className="col-12 col-md-5">
        <img src={product.img} alt={product.name} className="square-img" />
      </div>
      <div className="col-12 col-md-7">
        <h2 className="mb-2">{product.name}</h2>
        <p className="text-capitalize text-muted">{product.category}</p>
        <h4 className="my-3">${product.price}</h4>
        <p className="mb-4">{product.desc}</p>

        <ItemCount stock={20} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
