import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import { Button } from "@mui/material";

const CartList = () => {

    const { cartList, totalBuy, removeItem, emptyCart } = useContext(CartContext)

    return (
        <div>
            <div className="row mt-4 justify-content-center text-center">
                <div className="col-lg-3 col-sm-3"></div>
                <h5 className="col-lg-3 col-sm-3">Nombre:</h5>
                <h5 className="col-lg-2 col-sm-2">Precio:</h5>
                <h5 className="col-lg-1 col-sm-1">Cantidad:</h5>
                <h5 className="col-lg-2 col-sm-2">Total:</h5>
                <div className="col-lg-1 col-sm-1"></div>
            </div>
            <hr></hr>
            <div className="row justify-content-center text-center">
                {cartList.map(product => 
                    <div className="row align-items-center" key={product.id}>
                        <div className="col-lg-3 col-sm-3">
                            <img src={product.image} style={{width:150}}></img>
                        </div>
                        <div className="col-lg-3 col-sm-3">
                            <h5>{product.title}</h5>
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <h5>${product.price}</h5>
                        </div>
                        <div className="col-lg-1 col-sm-1">
                            <h5>{product.quantity}</h5>
                        </div>
                        <div className="col-lg-2 col-sm-2">
                            <h5>${product.quantity * product.price}</h5>
                        </div>
                        <div className="col-lg-1 col-sm-1">
                        <Button variant="contained" color="error" onClick={() => removeItem(product.id)}>Eliminar</Button>
                        </div>
                        <hr></hr>
                    </div>
                )}
                <h3><b>Total:</b></h3>
                <h4 className="text-center"><b>${totalBuy()}</b></h4>
                <div className="d-flex justify-content-center mt-5">
                <Button variant="contained" color="error">Vaciar Carrito</Button>
                    <Link to="/checkout">
                    <Button variant="contained" color="success">Realizar Compra</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartList