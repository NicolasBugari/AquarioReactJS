import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavHeader = styled.nav`
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10 px;
  margin: 10 px;
  border: 2px solid;
  border-radius: 3px;
  background-color: #80D0C7;
  background-image: linear-gradient(180deg, #80D0C7 10%, #0093E9 37%, #ffffff 100%);
  text-decoration: none;
`;

const NavCategories = () => {
  const categories = [
    { id: 1, name: "electronics", route:'/categories/electronics' },
    { id: 2, name: "jewelery", route:'/categories/jewelery'},
    { id: 3, name: "men's clothing", route:"/categories/men's clothing"},
    { id: 4, name: "women's clothing", route:"/categories/women's clothing"}
  ];

  return (
    <NavHeader>
      {categories.map((category) => {
        return (
          <NavLink key={category.id} style={styles.categorias} to={category.route}>
            {category.name}
          </NavLink>
        );
      })}
    </NavHeader>
  );
};

export const styles = {
  categorias: {
    margin: 10,
    color: "red",
  },
};

export default NavCategories;