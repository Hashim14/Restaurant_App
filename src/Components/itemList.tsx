import React, { useState } from "react";
import Food from "../food.json";
import ItemCard from "./itemCard";
import { Button, Form, Input, InputNumber, Row } from "antd";
import Modal from "antd/lib/modal/Modal";

export type modalType = {
  name: string;
  description: string;
  price: number;
  rating: number;
};

const Cards = ({
  priceOrder,
  search,
  nameOrder,
}: {
  priceOrder: boolean;
  nameOrder: boolean;
  search: string;
}) => {
  const [foodList, setFoodList] = useState(Food);
  // const [emptyForm, setEmptyForm] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const clonedList = [...foodList];
  const showModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };
  const onFinish = (values: any) => {
    //console.log("Success:", values);
    clonedList.push(values);
    console.log(clonedList, "updatted list");
    setFoodList(clonedList);
    // setFoodList("");
    setVisible(false);
  };
  // const onOkay = () => {

  // };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  React.useEffect(() => {
    const forSearch = foodList.filter((item) => {
      console.log("name");
      return item?.name?.toLowerCase().includes(search?.toLowerCase());
    });
    console.log(forSearch, "search test");
    {
      search.length > 1 ? setFoodList(forSearch) : setFoodList(Food);
    }
  }, [search]);

  React.useEffect(() => {
    // console.log("sort test");
    const result = foodList.sort((a: any, b: any) => {
      console.log("sort");
      if (a.price > b.price && priceOrder) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(result);
    setFoodList(result);
  }, [priceOrder]);

  React.useEffect(() => {
    console.log("sort name", foodList);
    const sortNames = foodList.sort((a: any, b: any) => {
      if (a.name > b.name && nameOrder) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(sortNames);
    setFoodList(sortNames);
  }, [nameOrder]);

  return (
    <div className="site-card-wrapper">
      <Button onClick={showModal}>Add Food</Button>
      <Modal
        title="Create Restaurant"
        visible={visible}
        onCancel={closeModal}
        onOk={onFinish}
      >
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Food Name"
            name="name"
            rules={[{ required: true, message: "Please input the Food Name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              { required: true, message: "Please input the Food Description!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[
              { required: true, message: "Please enter the Price in numbers!" },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Rating"
            name="rating"
            rules={[{ required: true, message: "Please give a  Rating!" }]}
          >
            <InputNumber min={1} max={5} defaultValue={3} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <div
        className="site-card-wrapper"
        style={{
          padding: "8px",
        }}
      >
        <Row gutter={16}>
          {foodList.map((item: any) => {
            return <ItemCard item={item} />;
          })}
        </Row>
      </div>
    </div>
  );
};

export default Cards;
