import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavHeader = styled.nav`
  font-size: 1.5rem;
  font-weight: bold;
  border: 4px;
  border-radius: 3px;
  border-color: primary;
  border-style: double;
  padding: 1rem;
  background-color: #0093E9;
  background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
`;

const NavCategories = () => {
  const categories = [
    { id: 1, name: "Electronics", route:'/categories/electronics' },
    { id: 2, name: "Jewelery", route:'/categories/jewelery'},
    { id: 3, name: "Men's Clothing", route:"/categories/men's clothing"},
    { id: 4, name: "Women's Clothing", route:"/categories/women's clothing"}
  ];

  return (
    <NavHeader style={styled.nav}>
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
    color: "blue",
    textDecoration: "none",
  },
};

export default NavCategories;