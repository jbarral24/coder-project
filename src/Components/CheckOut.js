import React, { useContext, useState } from "react";
import { getFirestore } from "../Libs/firebase";
import CartContext from "../Providers/CartProvider";
import "./CheckOut.css";

const calculateTotal = (cartItems) => {
  let total = 0;

  for (let i = 0; i < cartItems.length; i++) {
    const cartItem = cartItems[i];
    total += cartItem.quantity * cartItem.price;
  }
  return total;
};

const CheckOut = () => {
  const { cartItems } = useContext(CartContext);
  const [Name, setName] = useState("");
  const [Mail, setMail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const SendCheckOut = (event) => {
    event.preventDefault();
    const db = getFirestore();
    const Orders = db.collection("orders");
    const NewOrder = {
      Buyer: { name: Name, mail: Mail, phone: PhoneNumber },
      Items: cartItems,
      Total: calculateTotal(cartItems),
    };
    Orders.add(NewOrder).then(() => {
      alert("Order finished succesfully");
    });
  };
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form>
              <div className="row">
                <div className="col-50">
                  <h3>Billing Form</h3>
                  <label for="fname">
                    <i className="fa fa-user"></i> Full Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                    onChange={(event) => setName(event.target.value)}
                  />
                  <label for="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    onChange={(event) => setMail(event.target.value)}
                  />
                  <label for="phn">
                    <i className="fa fa-phone number-card-o"></i> Phone Number
                  </label>
                  <input
                    type="text"
                    id="phn"
                    name="phone number"
                    placeholder="00-00000000"
                    onChange={(event) => setPhoneNumber(event.target.value)}
                  />
                </div>

                <div className="col-50">
                  <div className="row">
                    <div className="col-50"></div>
                    <div className="col-50"></div>
                  </div>
                </div>
              </div>

              <button className="btn" onClick={(event) => SendCheckOut(event)}>
                Finish checkout
              </button>
            </form>
          </div>
        </div>
        <div className="col-25">
          <div className="container">
            <h4>
              Cart
              <span className="price">
                <i className="fa fa-shopping-cart"></i>{" "}
                <b>{cartItems.length}</b>
              </span>
            </h4>
            <ul>
              {cartItems.map((cartItem) => {
                return (
                  <li>
                    <b>
                      {cartItem.title} {cartItem.quantity}
                    </b>
                  </li>
                );
              })}
            </ul>
            <hr />
            <p>
              Total{" "}
              <span className="price">
                <b>{calculateTotal(cartItems)}</b>
              </span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CheckOut;
