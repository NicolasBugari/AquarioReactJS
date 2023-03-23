import React from "react";
import logo from "../Imagenes/android-chrome-512x512.png";
import { styles } from "./Navbar.style";
import NavCategories from "./NavCategories";
import CartWidget from "../Cart/CartWidget";
import { Link } from "react-router-dom";


const Navbar = ({ cartCount }) => {
    return (
      <header style={styles.container}>
        <Link style={styles.imagenes} to={"/"}>
          <img style={styles.imagenes} src={logo} alt="tienda online" /></Link>
        <h1 style={styles.AppStyle}>Ecommerce Coderhouse React{cartCount}</h1>
        <NavCategories />
        <Link to={"/cart"}>
        <CartWidget />
      </Link>
    </header>
    );
  };
  



  export default Navbar;