import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">PixelGear</div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/perifericos">Periféricos</Link></li>
        <li><Link to="/category/mobiliario">Mobiliario</Link></li>
      </ul>
      <div className="navbar-cart">
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
