import React from 'react';
import Navbar from "./componentes/header/header/Navbar"
import styled from 'styled-components';
import ItemListContainer from './componentes/header/containers/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppStyle = styled.body`
  background: rgb(13,8,94);
  background: linear-gradient(0deg, rgba(13,8,94,1) 20%, rgba(9,121,33,1) 60%, rgba(0,212,255,1) 98%);
`;


const App = () => {
  const userName = "";
  const greeting = "Bienvenidos a nuestra Tienda";

  return (
    <BrowserRouter>
      <Navbar name={userName} />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={greeting} />}/>
        <Route path="/categories/:name" element={<ItemListContainer greeting={greeting} />} />
        <Route path="/product/:id" element={<ItemListContainer greeting={greeting} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Componente404 />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
