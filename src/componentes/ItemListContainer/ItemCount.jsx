import React, {useState} from 'react'
import Card from "@mui/material/Card";
import { Button, 
  CardContent,
  Typography,
  } from "@mui/material";

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
      
      <CardContent>
      <Typography
        gutterBottom
        variant="h5"
        component="div" flexDirection= "row">

          <Button variant="contained" onClick={() => handlerClickSubtrack()}>
            -
          </Button>
          <h3>{count}</h3>
          <Button variant="contained" onClick={() => handlerClickAdd()}>
            +
          </Button>
        <Button variant="contained" onClick={() => onAdd(count)}>
          Agregar al carrito
        </Button>
      </Typography>
      </CardContent>
      
    );
  };
  

export default ItemCount
