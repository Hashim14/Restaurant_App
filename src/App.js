import React from "react";
import "./App.css";
import NavArea from "./Components/navArea";
import Cards from "./Components/cards";

const App = () => {
  const [priceOrder, setPriceOrder] = React.useState(false);
//   const [nameOrder, setNameOrder] = React.useState(false);

  const priceToggle = (toggle) => {
    // console.log("testing", toggle);
    setPriceOrder(toggle);
  };

//   const nameToggle = (toggle) => {
//     console.log("Testing name", toggle);
//     setNameOrder(toggle);
//   };

  console.log(priceOrder, "filter");
  return (
    <div className="App">
      <NavArea priceToggle={priceToggle}  />
      <Cards priceOrder={priceOrder}  />
    </div>
  );
};

export default App;
