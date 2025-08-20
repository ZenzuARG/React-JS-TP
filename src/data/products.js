const products = [
  { id: "1", name: "Teclado RGB", price: 30, category: "perifericos", img: "..." },
  { id: "2", name: "Mouse Gamer", price: 25, category: "perifericos", img: "..." },
  { id: "3", name: "Silla Gamer", price: 200, category: "mobiliario", img: "..." },
  { id: "4", name: "Auriculares 7.1", price: 75, category: "perifericos", img: "..." },
  { id: "5", name: "Mousepad XXL", price: 15, category: "perifericos", img: "..." },
  { id: "6", name: "Lámpara RGB", price: 40, category: "decoracion", img: "..." },
];

export const getProducts = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });

export const getProductById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products.find((p) => p.id === id)), 500);
  });
