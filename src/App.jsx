import React from "react";
import Navbar from "./componentes/header/Navbar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import Cart from "./componentes/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./componentes/CartContext/CartContext";
import Error404 from "./Error404.jsx";
import FormBuyer from "./componentes/FormBuyer/FormBuyer";
import './App.css';


const App = () => {

  return (
    <BrowserRouter>
      <CartContextProvider>
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a Acuario Ocean World" />} />

        <Route path="/categories/:idCategory" element={<ItemListContainer />}/>

        <Route path="/detalle/:idProduct" element={<ItemDetailContainer />}/>

        <Route path="/cart" element={<Cart />} />

        <Route path="/FormBuyer" element={<FormBuyer />}/>	

        <Route path="*" element={<Error404 />} />

      </Routes>
      </div>
      </CartContextProvider>
    </BrowserRouter>
  );
};
export default App;
