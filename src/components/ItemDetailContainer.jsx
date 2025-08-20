import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import ItemDetail from "../components/ItemDetail";
import { CartContext } from "../context/CartContext";


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addItem } = useContext(CartContext);
  const handleAdd = () => {
    addItem(product);
  };

  useEffect(() => {
    getProductById(id).then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      {/* acá más adelante se agrega el ItemCount */}
      <ItemDetail product={product} onAdd={handleAdd} />
    </div>
  );
};

export default ItemDetailContainer;
