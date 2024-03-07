import React, { useState } from "react";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Space } from "antd";

import {
  StyledNavbar,
  InputContainer,
  Input,
  PlaceholderText,
  Drop2,
  StyledButton,
} from "./Style";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const items1 = [
    {
      label: <a href="/#">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="/#">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  const items2 = [
    {
      label: "Dropdown 2 - Item 1",
      key: "0",
    },
    {
      label: "Dropdown 2 - Item 2",
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "Dropdown 2 - Item 3",
      key: "3",
    },
  ];

  return (
    <StyledNavbar>
      <SearchOutlined style={{ color: "#f26d21", marginRight: "8px" }} />

      <InputContainer>
        <Input type="text" value={inputValue} onChange={handleChange} />
        {inputValue === "" && (
          <PlaceholderText>Nhập vị trí muốn ứng tuyển</PlaceholderText>
        )}
      </InputContainer>
      <Dropdown
        overlay={
          <Menu>
            {items1.map((item) => (
              <Menu.Item key={item.key}>{item.label}</Menu.Item>
            ))}
          </Menu>
        }
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Chọn lĩnh vực chuyên môn
            <DownOutlined style={{ color: "#f26d21", marginRight: "8px" }} />
          </Space>
        </a>
      </Dropdown>
      <Drop2>
        <Dropdown
          overlay={
            <Menu>
              {items2.map((item) => (
                <Menu.Item key={item.key}>{item.label}</Menu.Item>
              ))}
            </Menu>
          }
          trigger={["click"]}
        >
          <a onClick={(e: React.MouseEvent) => e.preventDefault()}>
            <Space>
              Chọn công ty
              <DownOutlined style={{ color: "#f26d21", marginRight: "8px" }} />
            </Space>
          </a>
        </Dropdown>
      </Drop2>
      <StyledButton href="/notfound" icon={<SearchOutlined />}>
        Tìm việc
      </StyledButton>
    </StyledNavbar>
  );
};

export default Navbar;
