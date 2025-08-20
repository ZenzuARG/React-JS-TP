import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProducts } from "../data/products";
import ItemCard from "../components/ItemCard";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts().then((data) => {
      setItems(categoryId ? data.filter((p) => p.category === categoryId) : data);
    });
  }, [categoryId]);

  return (
    <section>
      {greeting && <h2 className="mb-4">{greeting}</h2>}

      <div className="d-flex gap-2 mb-3 flex-wrap">
        <Link className="btn btn-outline-light btn-sm" to="/">Todas</Link>
        <Link className="btn btn-outline-light btn-sm" to="/category/perifericos">Periféricos</Link>
        <Link className="btn btn-outline-light btn-sm" to="/category/audio">Audio</Link>
        <Link className="btn btn-outline-light btn-sm" to="/category/iluminacion">Iluminación</Link>
        <Link className="btn btn-outline-light btn-sm" to="/category/mobiliario">Mobiliario</Link>
      </div>

      <div className="products-grid">
        {items.map((prod) => (
          <ItemCard key={prod.id} product={prod} />
        ))}
      </div>
    </section>
  );
};

export default ItemListContainer;
