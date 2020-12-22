import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../Providers/CartProvider";


const Cart = () => {

 const {cartItems} = useContext(CartContext)

 if (cartItems.length===0){
   return(
     <h1>Sorry there is no items in your cart</h1>
   )
 }
 else{
  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((cartItem) => {
        return (<React.Fragment>
          <b>{cartItem.title} {cartItem.quantity}</b>
          <br/>
          </React.Fragment>

        )
      })} <NavLink to={"/CheckOut"}>CheckOut</NavLink>
    </div>
  );}
};
export default Cart;
