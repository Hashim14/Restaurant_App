import React, { useState } from "react";
import { Card, Row, Col } from "antd";
import Food from "../food.json";

const Cards = ({
  priceOrder,
  search,
}: {
  priceOrder: boolean;
  search: string;
}) => {
  // const [sortedList, setSortedList] = React.useState(Food);

  const [foodList, setFoodList] = useState<
    { name: string; description: string; price: number; rating: number }[]
  >([]);

  React.useEffect(() => {
    const forSearch = Food.filter((item) => {
      console.log("name");
      return item?.name?.toLowerCase().includes(search?.toLowerCase());
    });
    console.log(forSearch, "search test");
    setFoodList(forSearch);
  }, [search]);

  React.useEffect(() => {
    console.log("sort test");
    const result = Food.sort((a, b) => {
      console.log("sort");
      return -1 * b.price - a.price;
    });
    console.log(result);
    setFoodList(result);
  }, [priceOrder]);

  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          {foodList.map((item) => {
            return (
              <Col span={8} style={{ padding: "25px" }}>
                <Card 
                  bordered={false}
                  title={item.name}
                  hoverable
                  headStyle={{
                    backgroundColor: "#58d1c9",
                    borderStartStartRadius: "25px"
                    
                  }}
                  bodyStyle={{
                    backgroundColor: "#84e2d8",
                    borderEndEndRadius: "25px",
                  }}
                >
                  <h3>Food Name: {item.name}</h3>
                  <p>Description: {item.description}</p>
                  <p>Price: Rs.{item.price}</p>
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
