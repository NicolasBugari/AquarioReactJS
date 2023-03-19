import React from "react";
import Navbar from "./componentes/header/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Cart from "./componentes/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const userName = "";
  const greeting = "Bienvenidos a nuestra Tienda";

  return (
    <BrowserRouter>
      <Navbar name={userName} />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a Acuario Ocean World" />} />

        <Route
          path="/categories/:name"
          element={<ItemListContainer greeting={greeting} />}
        />

        <Route
          path="/product/:id"
          element={<ItemDetailContainer greeting={greeting} />}
        />

        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<Error404 />} />


      </Routes>
    </BrowserRouter>
  );
};
export default App;
