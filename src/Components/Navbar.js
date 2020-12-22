import React from "react";
import "./Navbar.css";
import CartIcon from "./CartIcon";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="topnav">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/Cart"}>
        <CartIcon /> Your Cart
      </NavLink>
    </div>
  );
};

export default Navbar;
