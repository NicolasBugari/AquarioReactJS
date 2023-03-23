import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import './ItemCount.css';

const ItemCount = ({ onAdd, stock = 5 }) => {
    const [count, setCount] = useState(1);
  
    const handlerClickAdd = () => {
      if (count < stock) {
        setCount(count + 1);
      }
    };
  
    const handlerClickSubtrack = () => {
      if (count > 1) {
        setCount(count - 1);
      }
    };
  
    return (
        <div>
          <Button variant="danger" onClick={() => handlerClickSubtrack()}>
            -
          </Button>
          <h2>{count}</h2>
          <Button variant="success" onClick={() => handlerClickAdd()}>
            +
          </Button>
        <Button variant="info" onClick={() => onAdd(count)}>
          Agregar al carrito
        </Button>
        </div>
    );
  };
  

export default ItemCount
