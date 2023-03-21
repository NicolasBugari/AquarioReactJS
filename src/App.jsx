import React from "react";
import Navbar from "./componentes/header/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Cart from "./componentes/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContext } from "./componentes/CartContext/CartContext";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Error404 from "./Error404";

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
