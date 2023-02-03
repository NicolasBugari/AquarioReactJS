import React from 'react';
import Navbar from "./componentes/header/Navbar"

const App = () => {
  const userName = "Name";

  return (
    <>
      <Navbar name={userName} />
    </>
  );
};
export default App;
