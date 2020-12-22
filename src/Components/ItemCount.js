import React from "react";
const ItemCount = (props) => {


  return (
    <div>
      <input type="number" disabled value={props.item} />
      <button onClick={props.AddCounterEvent}>+</button>
      <button onClick={props.SubstractCounterEvent}>- </button>
    </div>
  );
};
export default ItemCount;
