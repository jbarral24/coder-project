import React from "react";

const CartContext = React.createContext({
  cartItems: [],
  setCartItems: () => {},
});

export const CartProvider = CartContext.Provider;

export default CartContext;
