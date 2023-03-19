import React from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";
import CartList from "../CartList/CartList";


const Cart = () => {

    const { cartList } = useContext (CartContext)

    return (
        <>
            <div className="img-fluid"></div>
            {cartList.length === 0
            ? 
                <div className="container mt-5">
                    <div className="row text-center justify-content-center">
                        <h3 className="my-5"><strong>No hay productos en tu carrito</strong></h3>
                        <h4 className="my-5">Agregar productos al Carrito</h4>
                        <Link className="btn btn-danger bg-gradient w-25" to="/">
                            Volver a comprar
                        </Link>
                    </div>
                </div>
            :
                <CartList />
            }
        </>
    )
}

export default Cart