import React from "react";
import { Input, Button, Dropdown, Menu } from "antd";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>
        <Input style={{ width: "100px", marginRight: "5px" }} />
        <Dropdown overlay={menu1}>
          <Button style={{ marginRight: "5px" }}>Dropdown 1</Button>
        </Dropdown>
        <Dropdown overlay={menu2}>
          <Button style={{ marginRight: "5px" }}>Dropdown 2</Button>
        </Dropdown>
        <Button type="primary">Search</Button>
      </div>
    </div>
  );
};

const menu1 = (
  <Menu>
    <Menu.Item key="1">Option 1</Menu.Item>
    <Menu.Item key="2">Option 2</Menu.Item>
    <Menu.Item key="3">Option 3</Menu.Item>
  </Menu>
);

const menu2 = (
  <Menu>
    <Menu.Item key="1">Option A</Menu.Item>
    <Menu.Item key="2">Option B</Menu.Item>
    <Menu.Item key="3">Option C</Menu.Item>
  </Menu>
);

export default Navbar;
