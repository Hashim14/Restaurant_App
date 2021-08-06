import React from "react";
import { Dropdown, Input, Layout, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import {
  UpOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  DownOutlined,
} from "@ant-design/icons";

// import DropdownButton from "antd/lib/dropdown/dropdown-button";

const NavArea = ({
  priceToggle,
  handleChange,
  nameToggle,
}: {
  priceToggle: any;
  nameToggle: any;
  handleChange: () => void;
}) => {
  const [toggle, setToggle] = React.useState(true);
  const [sortNameToggle, setSortNameToggle] = React.useState(true);

  const sortPrice = () => {
    setToggle(!toggle);
    priceToggle(toggle);
  };
  const sortName = () => {
    setSortNameToggle(!sortNameToggle);
    nameToggle(!sortNameToggle);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={sortPrice}>
        {toggle === false ? <UpOutlined /> : <DownOutlined />} Price:{" "}
        <span>{toggle === false ? "Low to Top" : "Top to Low"}</span>
      </Menu.Item>
      <Menu.Item key="2" onClick={sortName}>
        {sortNameToggle === true ? (
          <SortAscendingOutlined />
        ) : (
          <SortDescendingOutlined />
        )}{" "}
        Name
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Layout>
        <Header className="header" style={{ background: "#138585" }}>
          <Menu
            theme="dark"
            style={{ background: "#138585" }}
            mode="horizontal"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1" disabled>
              Home
            </Menu.Item>
            <Menu.Item>
              <Dropdown overlay={menu} trigger={["click"]}>
                <span className="ant-dropdown-link ">Filter</span>
              </Dropdown>
            </Menu.Item>

            <Input
              style={{ width: "200px" }}
              placeholder="Search Food"
              onChange={handleChange}
            />
          </Menu>
        </Header>
      </Layout>
    </>
  );
};

export default NavArea;
