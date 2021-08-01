import React, { useState } from "react";
import "./App.css";
import NavArea from "./Components/navArea";
import Cards from "./Components/cards";

const App = () => {
  const [priceOrder, setPriceOrder] = React.useState(false);
  const [search, setSearch] = useState('');
  //   const [nameOrder, setNameOrder] = React.useState(false);

  const priceToggle = (toggle) => {
    console.log("testing", toggle);
    setPriceOrder(toggle);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  //   const nameToggle = (toggle) => {
  //     console.log("Testing name", toggle);
  //     setNameOrder(toggle);
  //   };

  console.log(priceOrder, "filter");
  return (
    <div className="App">
      <NavArea
        handleChange={handleChange}
        search={search}
        priceToggle={priceToggle}
      />
      <Cards search={search} priceOrder={priceOrder} />
    </div>
  );
};
export default App;
