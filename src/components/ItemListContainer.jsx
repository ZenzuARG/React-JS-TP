import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts().then((data) => {
      if (categoryId) {
        setItems(data.filter((prod) => prod.category === categoryId));
      } else {
        setItems(data);
      }
    });
  }, [categoryId]);

  return (
    <section style={{ padding: "2rem" }}>
      <h2>{greeting}</h2>
      {items.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.name}</h3>
          <p>${prod.price}</p>
          <a href={`/item/${prod.id}`}>Ver detalle</a>
        </div>
      ))}
    </section>
  );
};

export default ItemListContainer;
