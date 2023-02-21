import React from "react";
import logo from "../Imagenes/ecommerce.jpg";
import { styles } from "./Navbar.style";
import NavCategories from "./NavCategories";
import CartWidget from "./CarWidget";
import styled from "styled-components";
import { Link } from "react-router-dom";



const AppStyle = styled.body`
  background: linear-gradient(0deg, rgba(13,8,94,1) 4%, rgba(9,121,33,1) 42%, rgba(0,212,255,1) 98%);
  font-size: 2rem;
  background-color: #80D0C7;
  background-image: linear-gradient(180deg, #80D0C7 10%, #0093E9 37%, #ffffff 100%);
  border: 3px;
  border-radius: 3px;
  border-color: primary;
  border-style: double;
`;

const Navbar = ({ name }) => {
    return (
      <header style={styles.container}>
        <Link style={styles.imagenes} to={"/"}>
          <img style={styles.imagenes} src={logo} alt="tienda online" />
        </Link>
        <AppStyle>ecommerce coderhouse react{name}</AppStyle>
        <NavCategories />
      <Link to={"/cart"}>
        <CartWidget />
      </Link>
    </header>
    );
  };
  
  export default Navbar;