import NavBar from "./components/NavBar";
import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"; // lo creamos más adelante
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a PixelGear" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<h2 style={{padding:"2rem"}}>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  );
}

export default App;
