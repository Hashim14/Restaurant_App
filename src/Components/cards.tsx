import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'antd';

import Food from '../food.json';
function Cards() {

  return (
    
    <div className="site-card-wrapper">
      {
        Food.map(( item) => {
          <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
             <h3>Food Name: {item.name}</h3>
             <p>Desc: {item.description}</p>
             <p>Price: {item.price}</p>
             <p>Ratings: {item.rating}</p>
            </Card>
          </Col>
        </Row>
        })
      }
    </div>
  )

}

export default Cards;



