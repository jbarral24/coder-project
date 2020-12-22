import React from "react";
import ItemList from "./ItemList";

const Home = (props) => {
  return (
    <React.Fragment>
      <h1>{props.greetings}</h1>
      <ItemList></ItemList>
    </React.Fragment>
  );
};

export default Home;
