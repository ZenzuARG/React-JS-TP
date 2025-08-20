import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import CartOffcanvas from "./components/CartOffcanvas";
import SobreNosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <div className="container py-4">
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a PixelGear, donde tu setup sube de nivel" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/productos/*" element={<ItemListContainer />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>

      {/* Panel lateral del carrito */}
      <CartOffcanvas />
    </>
  );
}

export default App;
