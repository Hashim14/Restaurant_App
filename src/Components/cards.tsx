import React from 'react';
import { Card, Row , Col} from 'antd';
import Food from '../food.json';
function Cards() {
  return (
    <>
    
    <Row gutter={16}>
     
   <div className="Card-wrapper"> 
      {
        (Food || []).map((item, idx) => {
            return(
              <Col className="gutter-row" span={6}>

            
              <Card hoverable
              style={{ width: 240 }} key={idx}>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <p>{item.rating}</p>
              </Card>
              
      </Col>
              
            )
        })
      }
   </div>
   </Row>
   </>
  );
}

export default Cards;



