import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import ItemCount from "../ItemListContainer/ItemCount";
import "./ItemDetails.css";
import { Button } from "@mui/material";

const ItemDetail = ({ product }) => {

  const [goToCart, setGoToCart] = useState(false)

  const { addToCart } = useContext(CartContext)

  const onAdd = (quantity) => {
      setGoToCart(true)
      addToCart({...product, quantity: quantity})
  }

  return (
    <div key={product.id} className="container mt-5" style={styles.infoContainer}>
        <div className="row justify-content-center text-center align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-6 pb-5">  
                <img src={product.image} className="itemDetail-img" alt={product.title} style={styles.img}></img>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6" style={styles.infoTextContainer}>
                <h2>{product.title}</h2>
                <h4>${product.price}</h4>
                <p>{product.description}</p>
                <h5 style={styles.infoText}>Stock: {product.stock}</h5>

                {!goToCart ? 
                    <ItemCount initial={1} max={product.stock} onAdd={onAdd} /> 
                : 
                    <div className="d-flex justify-content-center">
                        <Link to={`/cart`}> 
                        <Button variant="contained" color="primary">Ir al Carrito</Button>
                        </Link>
                        <Link to={`/`}> 
                        <Button variant="contained" color="success">Seguir Comprando</Button>
                        </Link>
                    
                    </div>
                }
            </div>
        </div>
    </div>
)
}

const styles = {
    infoContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marging: "2rem",
      padding: "1rem",
    },
    img: {
      aspectRatio: "1/1",
    },
    infoTextContainer: {
      display: "flex",
      flexDirection: "column",
      color: "#2B4733",
      fontSize: "1.5rem"
    },
    infoText: {
      padding: "10px",
      marging: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      fontSize: "1rem"
    },
  };
  
export default ItemDetail

