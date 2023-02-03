import React from "react";
import logo from "../../Imagenes/apple-touch-icon.png";
import {style} from "./Navbar.style";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import NavCategorias from "./NavCategorias";

const Navbar = ({ name }) => {
    return (
      <header style={styles.container}>
        <a style={styles.imagenes} href="">
          <img style={styles.imagenes} src={logo} alt="tienda online" />
        </a>
        <h1>Bienvenido {name}</h1>
  
        <NavCategories />
  
        <LocalGroceryStoreIcon color="secondary" fontSize="medium" />
      </header>
    );
  };
  
  export default Navbar;