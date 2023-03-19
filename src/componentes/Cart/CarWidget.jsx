import React, {useContext} from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../CartContext/CartContext";


export const CartWidget = () => {
  const { cartList } = useContext
  (CartContext)

  return (
    <div style={{display:'flex'}}>
      <ShoppingCartIcon color="primary" fontSize="large" />
      {cartList.length === 0}
     
    </div>
  );
};

export default CartWidget;
