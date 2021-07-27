import React from "react";
import { Card, Row, Col } from "antd";
import Food from "../food.json";

const Cards = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {Food.map((item) => {
          return (
            <Col span={8}>
              <Card title={item.name} bordered={false}>
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
  );
};

export default Cards;
