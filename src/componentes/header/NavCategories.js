import React from "react";
import styled from "styled-components";

const NavHeader = styled.nav`
  font-size: 1.7rem;
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
    { id: 1, name: "Peces" },
    { id: 2, name: "Peceras" },
    { id: 3, name: "Plantas" },
  ];

  return (
    <NavHeader>
      {categories.map((category) => {
        return (
          <a key={category.id} style={styles.categorias} href="">
            {category.name}
          </a>
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