import { Col, Card } from "antd";

const ItemCard = ({ item }: { item: any }) => {
  return (
    <div>
      {/* <Row gutter={16}> */}
      {/* {foodList.map((item: any) => { 
         { console.log(item)} */}
      <Col span={8} style={{ padding: "15px" }}>
        <Card
          bordered={false}
          title={item.name}
          hoverable
          style={{
            width: "290px",
          }}
          headStyle={{
            backgroundColor: "#58d1c9",
            borderStartStartRadius: "25px",
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
      {/* })} */}
      {/* </Row> */}
    </div>
  );
};

export default ItemCard;
