import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../Libs/firebase";
import CartContext from "../Providers/CartProvider";
import ItemCount from "./ItemCount";

const ItemsDetailContainer = (props) => {
  const { setCartItems } = useContext(CartContext);
  const maxItemNumber = 20;
  const [counter, SetCounter] = useState(0);
  const AddCounter = () => {
    if (counter < maxItemNumber) {
      SetCounter(counter + 1);
    }
  };

  const SubstractCounter = () => {
    if (counter > 0) {
      SetCounter(counter - 1);
    }
  };
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);

    item.get().then((doc) => {
      setItem({ ...doc.data() });
    });
  }, [id]);

  if (item === undefined) {
    return <h3>LOADING</h3>;
  } else {
    return (
      <React.Fragment>
        <div>
          {item.title}

          <b> ${item.price}</b>

          <br />

          <b>{item.stock} </b>

          <br />

          <b>{item.description} </b>
          <br />
{item.image !== undefined &&
          <img src={item.image} style={{ width: 100, height: 100 }} />
  }
          <br />
          <button
            onClick={() => { if (counter === 0){
              alert("please add at least one item")
            }
            else{
              setCartItems((cartItems) => [
                ...cartItems,
                { title: item.title, quantity: counter, price: item.price },
              ]);
              alert("Item added to your cart");}
            }}
          >
            Buy {counter}
          </button>
        </div>
        <br />
        <ItemCount
          item={counter}
          AddCounterEvent={AddCounter}
          SubstractCounterEvent={SubstractCounter}
        />
      </React.Fragment>
    );
  }
};

export default ItemsDetailContainer;
