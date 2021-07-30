import React from "react";
import { Dropdown, Input, Layout, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import Modal from "antd/lib/modal/Modal";
// import DropdownButton from "antd/lib/dropdown/dropdown-button";

const NavArea = (
  { priceToggle }: { priceToggle: any }
) => {
  const [toggle, setToggle] = React.useState(true);
  // const [sortNameToggle, setSortNameToggle] = React.useState(true);

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

  const sortPrice = () => {
    setToggle(!toggle);
    priceToggle(toggle);
  };
  // const sortName = () => {
  //   setSortNameToggle(!sortNameToggle);
  //   nameToggle(sortNameToggle);
  // };

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={sortPrice}>
        Price: Top to Low
      </Menu.Item>
      <Menu.Item key="2" disabled>
        Name
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Home</Menu.Item>
            {/* <Menu.Item>
              {[
                { key: "asc", value: "Ascending" },
                { key: "desc", value: "Descending" },
              ].map((value, index) => (
                <Dropdown.Button
                  overlay={menu}
                  key={value.key}
                  onClick={(e) => setFilter(value.value)}
                >
                  <span className="ant-dropdown-link">{filter}</span>
                </Dropdown.Button>
              ))}
            </Menu.Item> */}
            <Menu.Item>
              <Dropdown overlay={menu} trigger={["click"]}>
                <span className="ant-dropdown-link ">Filter</span>
              </Dropdown>
            </Menu.Item>

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
