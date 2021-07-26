import React from "react";
import { Input, Layout, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import Modal from "antd/lib/modal/Modal";

const NavArea = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  const onOkay = () => {
    setVisible(false);
  };

  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Filter</Menu.Item>
            <Menu.Item key="3" onClick={showModal}>
              Add Restaurant
            </Menu.Item>
            <Input
              style={{ width: "200px" }}
              placeholder="Search Food,Restaurant"
            />
            <Modal
              title="Create Restaurant"
              visible={visible}
              onCancel={closeModal}
              onOk={onOkay}
            >
              hi
            </Modal>
          </Menu>
        </Header>
      </Layout>
    </>
  );
};

export default NavArea;
