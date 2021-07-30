import React, {useState} from "react";
import { Card, Row, Col, Input, Result } from "antd";
import  Food   from "../food.json";

const Cards = ({search}: {search: string}) => {
  const[foodList, setFoodList]= useState<{name: string, description: string, price: number, rating: number}[]>([]);


  React.useEffect(()=> {
     console.log(search);
      const result = Food.filter((item) => 
         item.name.toLowerCase().includes(search.toLowerCase())
        
      )      
      setFoodList(result);
  
  },[search])
  

  // const[searchResults, setSearchResults]=React.useState([])
   
  // React.useEffect(() => {
  // const result = !search ? Food
  //  : Food.filter((item) => item.name.toLowerCase().includes(search));
  //  setSearchResults(result);
    
  // }, [searchResults]);
  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {foodList.map((item) => {
          return (
            <>
            <Col span={8} >
              <Card title={item.name} bordered={true} style={{ background:"#efdbff" }}>
                <Card style={{background:" #69c0ff"}} >
                <h3>Food Name: {item.name}</h3>
                <p>Desc: {item.description}</p>
                <p>Price: {item.price}</p>
                <p>Ratings: {item.rating}</p>
                </Card>
              </Card>
            </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
      }    


export default Cards;
