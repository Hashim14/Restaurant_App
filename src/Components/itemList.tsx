import React, { useState } from "react";
import Food from "../food.json";
import ItemCard from "./itemCard";
import { Button, Form, Input, InputNumber, Row, Col, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getFood } from "../Redux Saga/action/foods";

// export type modalType = {
//   name: string;
//   description: string;
//   price: number;
//   rating: number;
// };

const ItemList = ({
  priceOrder,
  search,
  nameOrder,
  addToCart,
}: {
  priceOrder: boolean;
  nameOrder: boolean;
  search: string;
  addToCart: (item:any) => void;
}) => {
  const dispatch = useDispatch();
  // const forSearch = useSelector((state) => state.food.foods);

  const [foodList, setFoodList] = useState(Food);
  const clonedList = [...foodList];

  const [visible, setVisible] = React.useState(false);
  const [form] = Form.useForm();

  const onCreate = (values: any) => {
    // console.log("Success:", values);
    clonedList.push(values);
    // console.log(clonedList, "updatted list");
    setFoodList(clonedList);
    setVisible(false);
  };

  const onCancel = () => {
    setVisible(false);
  };

  React.useEffect(() => {
    const forSearch = foodList.filter((item) => {
      // console.log("name");
      return item?.name?.toLowerCase().includes(search?.toLowerCase());
    });
    {
      search.length > 1 ? setFoodList(forSearch) : setFoodList(Food);
    }
    dispatch(getFood(setFoodList));
  }, [search]);

  React.useEffect(() => {
    // console.log("sort test");
    const result = foodList.sort((a: any, b: any) => {
      // console.log("sort");
      if (a.price > b.price && priceOrder) {
        return 1;
      } else {
        return -1;
      }
    });
    // console.log(result);
    setFoodList(result);
  }, [priceOrder]);

  React.useEffect(() => {
    // console.log("sort name", foodList);
    const sortNames = foodList.sort((a: any, b: any) => {
      if (a.name > b.name && nameOrder) {
        return 1;
      } else {
        return -1;
      }
    });
    // console.log(sortNames);
    setFoodList(sortNames);
  }, [nameOrder]);

  return (
    <div className="site-card-wrapper">
      <Col
        offset={20}
        style={{ paddingTop: "15px", zIndex: 1, position: "fixed" }}
      >
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
          style={{ backgroundColor: "#0B6767", border: "0px" }}
        >
          Add New
        </Button>
      </Col>

      <div
        className="site-card-wrapper"
        style={{
          padding: "8px",
          paddingTop: "70px",
        }}
      >
        <Row gutter={16}>
          {foodList.map((item: any) => {
            return <ItemCard item={item} addToCart={addToCart} />;
          })}
        </Row>
      </div>

      <Modal
        visible={visible}
        title="Cuisine Information"
        okText="Submit"
        cancelText="Cancel"
        onCancel={onCancel}
        style={{ paddingLeft: "50px", paddingRight: "50px" }}
        onOk={() => {
          form
            .validateFields()
            .then((values: any) => {
              form.resetFields();
              onCreate(values);
              console.log(values, "validated");
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form
          form={form}
          name="submitForm"
          // layout="vertical"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: false }}
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
            <Input maxLength={50} />
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
        </Form>
      </Modal>
    </div>
  );
};

export default ItemList;
