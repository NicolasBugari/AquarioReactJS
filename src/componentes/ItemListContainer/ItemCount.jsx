import React, {useState} from "react";

const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handlerAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  const handlerSubtract = () => {
    if (count > 1) setCount(count - 1);
  };
  const handlerSelect = () => {
    if (stock > 0) onAdd(count);
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
      <button onClick={handlerSubtract} className="btn-btn-red">Restar</button>
      <h1>{count}</h1>
      <button onClick={handlerAdd} className="btn-btn-green">Sumar</button>
      <button onClick={handlerSelect} className="btn-btn-blue">Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
