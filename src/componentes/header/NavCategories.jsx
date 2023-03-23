import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavCategories = () => {
  const categories = [
    { id: 1, name: "Peces", route: "/categories/fish" },
    { id: 2, name: "Plantas", route: "/categories/plant" },
    { id: 3, name: "Peceras", route: "/categories/fishbowl" },
  ];

  return (
    <NavHeader style={styled.nav}>
      {categories.map((category) => {
        return (
          <NavLink
            key={category.id}
            style={styles.categories}
            to={category.route}
          >
            {category.name}
          </NavLink>
        );
      })}
    </NavHeader>
  );
};

export const styles = {
  categories: {
    margin: 10,
    color: "#2B4733",
    textDecoration: "none",

  },
};

const NavHeader = styled.nav`
  font-size: 1.8rem;
  font-weight: bold;
  border: 4px;
  border-radius: 3px;
  border-color: blue;
  border-style: double;
  padding: 1rem;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`;


export default NavCategories;
