import { Input, Layout, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";

const NavArea = () => {
  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">Home</Menu.Item>
            <Input style={{width: "200px"}} placeholder="Search Food,Restaurant" />
            <Menu.Item key="2">Filter</Menu.Item>
            <Menu.Item key="3">Add Restaurant</Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </>
  );
};

export default NavArea;
