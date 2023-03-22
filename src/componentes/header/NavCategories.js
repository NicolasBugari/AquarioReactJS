import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavCategories = () => {
  const categories = [
    { id: 1, name: "fish", route: "/categories/fish" },
    { id: 2, name: "plant", route: "/categories/plant" },
    { id: 3, name: "fishbowl", route: "/categories/fishbowl" },
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
    color: "blue",
    textDecoration: "none",
  },
};

const NavHeader = styled.nav`
  font-size: 1.5rem;
  font-weight: bold;
  border: 4px;
  border-radius: 3px;
  border-color: primary;
  border-style: double;
  padding: 1rem;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`;


export default NavCategories;
