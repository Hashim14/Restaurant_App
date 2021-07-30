import React from "react";
import { Card, Row, Col } from "antd";
import Food from "../food.json";

const Cards = ({ priceOrder }: { priceOrder: boolean }) => {
  const [sortedList, setSortedList] = React.useState(Food);
  React.useEffect(() => {
    console.log("sort test");
    const sorted = Food.sort((a, b) => {
      const isSorted = priceOrder ? 1 : -1;
      return isSorted * a.price - b.price;
    });
    setSortedList(sortedList);
    // console.log(sorted,"sorted");
  }, [priceOrder]);

  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          {sortedList.map((item) => {
            return (
              <Col span={8} className="m1">
                <Card title={item.name} bordered={true}>
                  <h3>Food Name: {item.name}</h3>
                  <p>Desc: {item.description}</p>
                  <p>Price: {item.price}</p>
                  <p>Ratings: {item.rating}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default Cards;
