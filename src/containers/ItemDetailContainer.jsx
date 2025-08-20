import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "../components/ItemDetail";
import { CartContext } from "../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  const handleAdd = (qty) => addItem(product, qty);

  return <ItemDetail product={product} onAdd={handleAdd} />;
};

export default ItemDetailContainer;
