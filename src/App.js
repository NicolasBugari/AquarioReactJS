import React from 'react';
import Navbar from "./componentes/header/Navbar"
import styled from 'styled-components';
import ItemListContainer from './componentes/header/ItemListContainer/ItemListContainer';

const AppStyle = styled.body`
  background: rgb(13,8,94);
  background: linear-gradient(0deg, rgba(13,8,94,1) 20%, rgba(9,121,33,1) 60%, rgba(0,212,255,1) 98%);
`;


const App = () => {
  const userName = "";

  return (
    <AppStyle>
      <Navbar name={userName} />
      <ItemListContainer/>
    </AppStyle>
  );
};
export default App;
