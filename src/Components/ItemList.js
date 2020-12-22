import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirestore } from '../Libs/firebase'

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => { 
    const db = getFirestore();
    const itemsCollection = db.collection('items');
    itemsCollection.get().then((querySnapshot) => {
       const aux = querySnapshot.docs.map(doc => {return {id: doc.id, ...doc.data()}})
       setItems(aux)
 
    })
  }, []);

  if (items.length === 0){
    return(
        <h3>LOADING</h3>
    );
  }
  else{
    return (
      
        <div>
          {items.map((elemento) => {
            return (
              <React.Fragment key= {elemento.id}>
                <Link to={"/item/" + elemento.id}>{elemento.title}</Link>
                <br />
              </React.Fragment>
            );
          })}
        </div>
      );
  }
  
};

export default ItemList;
