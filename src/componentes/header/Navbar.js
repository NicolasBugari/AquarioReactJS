import React from "react";
import logo from "../../Imagenes/apple-touch-icon.png";
import { styles } from "./Navbar.style";
import NavCategories from "./NavCategories";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = ({ name }) => {
    return (
      <header style={styles.container}>
        <a style={styles.imagenes} href="">
          <img style={styles.imagenes} src={logo} alt="tienda online" />
        </a>
        <h1>Ocean World - Tienda de Peces {name}</h1>
  
        <NavCategories />
  
        <ShoppingCartIcon color="success" fontSize="medium" />
      </header>
    );
  };
  
  export default Navbar;