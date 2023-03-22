import React from "react";
import logo from "../Imagenes/favicon-16x16.png";
import { styles } from "./Navbar.style";
import NavCategories from "./NavCategories";
import CartWidget from "../Cart/CarWidget";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AppStyle = styled.body`
  font-size: 2rem;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
  border: 3px;
  border-radius: 3px;
  border-color: primary;
  border-style: double;
  padding: 1rem;
`;

const Navbar = ({ cartCount }) => {
    return (
      <header style={styles.container}>
        <Link style={styles.imagenes} to={"/"}>
          <img style={styles.imagenes} src={logo} alt="tienda online" /></Link>
        <AppStyle>Ecommerce Coderhouse React{cartCount}</AppStyle>
        <NavCategories />
      <Link to={"/cart"}><CartWidget /></Link>
    </header>
    );
  };
  
  export default Navbar;