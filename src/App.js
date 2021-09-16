import React, { useState } from "react";
import "./App.css";
import NavArea from "./Components/navArea";
import Cards from "./Components/itemList";
import { Col, Row } from "antd";

const App = () => {
  const [priceOrder, setPriceOrder] = React.useState(false);
  const [search, setSearch] = useState("");
  const [nameOrder, setNameOrder] = React.useState(true);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const priceToggle = (toggle) => {
     console.log("testing", toggle);
    setPriceOrder(toggle);
  };

  const nameToggle = (nameOrder) => {
    console.log("Testing name", nameOrder);
    setNameOrder(nameOrder);
  };
  React.useEffect(() => {
    total();
  }, [cart]);
  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };
  const addToCart = (el) => {
    console.log(el, "cart test");
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name} : Rs${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));
  return (
    <div className="App">
      <NavArea
        handleChange={handleChange}
        search={search}
        priceToggle={priceToggle}
        nameToggle={nameToggle}
      />
      <Row>
        <Col span={18}>
          <Cards
            search={search}
            priceOrder={priceOrder}
            nameOrder={nameOrder}
            addToCart={addToCart}
          />
        </Col>
        <Col
          span={6}
          offset={18}
          style={{ marginTop: "80px", maxWidth: "24%", position: "fixed" }}
        >
          <h3>Cart Items</h3>
          {cartItems}
          {total}
        </Col>
      </Row>
    </div>
  );
};

//

export default App;
