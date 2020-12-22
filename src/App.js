import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./Components/Cart";
import ItemsDetailContainer from "./Components/ItemsDetailContainer";
import {CartProvider} from "./Providers/CartProvider";
import CheckOut from "./Components/CheckOut";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const value = { cartItems, setCartItems };
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <CartProvider value = {value}>
        <Switch>
          <Route exact path="/">
            <Home greetings="Welcome to Boquita's Ecommerce" />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route exact path="/item/:id">
            <ItemsDetailContainer />
          </Route>
          <Route exact path="/CheckOut">
            <CheckOut/>
        </Route>
        </Switch>
        </CartProvider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
