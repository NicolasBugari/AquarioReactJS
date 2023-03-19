import React from "react";
import Navbar from "./componentes/header/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Cart from "./componentes/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "./componentes/CartContext/CartContext";

const App = () => {
  const userName = "";

  return (
    <BrowserRouter>
      <CartContext>
      <Navbar name={userName} />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a Acuario Ocean World" />} />

        <Route
          path="/categories/:name"
          element={<ItemListContainer />}
        />

        <Route
          path="/product/:id"
          element={<ItemDetailContainer />}
        />

        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<Error404 />} />


      </Routes>
      </CartContext>
    </BrowserRouter>
  );
};
export default App;
