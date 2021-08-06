import React, { useState } from "react";
import "./App.css";
import NavArea from "./Components/navArea";
import Cards from "./Components/itemList";

const App = () => {
  const [priceOrder, setPriceOrder] = React.useState(false);
  const [search, setSearch] = useState("");
  const [nameOrder, setNameOrder] = React.useState(true);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const priceToggle = (toggle) => {
    // console.log("testing", toggle);
    setPriceOrder(toggle);
  };

  const nameToggle = (nameOrder) => {
    console.log("Testing name", nameOrder);
    setNameOrder(nameOrder);
  };

  console.log(nameOrder, "filter");

  return (
    <div className="App">
      <NavArea
        handleChange={handleChange}
        search={search}
        priceToggle={priceToggle}
        nameToggle={nameToggle}
      />
      <Cards search={search} priceOrder={priceOrder} nameOrder={nameOrder} />
    </div>
  );
};

//

export default App;
