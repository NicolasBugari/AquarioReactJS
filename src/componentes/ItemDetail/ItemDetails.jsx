import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import ItemCount from "../ItemListContainer/ItemCount";
import "./ItemDetails.css";

const ItemDetail = ({ product }) => {

  const [goToCart, setGoToCart] = useState(false)

  const { addToCart } = useContext(CartContext)

  const onAdd = (quantity) => {
      setGoToCart(true)
      addToCart({...product, quantity: quantity})
  }

  return (
    <div key={product.id} className="container mt-5">
        <div className="row justify-content-center text-center align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-6 pb-5">  
                <img src={product.image} className="itemDetail-img" alt={product.title}></img>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <h1>{product.title}</h1>
                <h4>${product.price}</h4>
                <p>{product.description}</p>
                <h5>Stock: {product.stock}</h5>

                {!goToCart ? 
                    <ItemCount initial={1} max={product.stock} onAdd={onAdd} /> 
                : 
                    <div className="d-flex justify-content-center">
                        <Link to={`/cart`}> 
                            <button className="btn btn-danger bg-gradient me-3 mt-3">Ir al carrito</button>
                        </Link>
                        <Link to={`/`}> 
                            <button className="btn btn-danger bg-gradient ms-3 mt-3">Seguir comprando</button>
                        </Link>
                    
                    </div>
                }
            </div>
        </div>
    </div>
)
}

export default ItemDetail

