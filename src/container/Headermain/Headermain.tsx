import React from "react";
import { UserAddOutlined, BookOutlined } from "@ant-design/icons";

import {
  StyledImageWrapper,
  StyledImage,
  StyledImagee,
  Text,
  Text2,
} from "./Style";
import img from "../../asset/img/img1.jpg";

const Headermain: React.FC = () => {
  return (
    <div>
      <StyledImagee>
        <StyledImageWrapper>
          <img src={img} alt="" />
        </StyledImageWrapper>
        <StyledImage>
          <Text href="/home">
            <UserAddOutlined style={{ marginRight: "10px" }} /> Thi trắc nghiệm
          </Text>
          <Text2 href="/Registeronline">
            <BookOutlined style={{ marginRight: "10px" }} /> Tiến trình học tập
          </Text2>
        </StyledImage>
      </StyledImagee>
    </div>
  );
};

export default Headermain;
