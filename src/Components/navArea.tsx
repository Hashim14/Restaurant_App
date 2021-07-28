import { Input, Layout, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useState, useEffect
 } from "react";
const NavArea = (handleChange: any) => {
  
  console.log(handleChange, "anything");
  


  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Input style={{width: "200px"}} placeholder="Search Food,Restaurant" onChange={handleChange} />
            <Menu.Item key="2">Filter</Menu.Item>
            <Menu.Item key="3">Add Restaurant</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
};

export default NavArea;
