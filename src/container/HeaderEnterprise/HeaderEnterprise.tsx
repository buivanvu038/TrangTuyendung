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

const HeaderEnterprise: React.FC = () => {
  return (
    <div>
      <StyledImagee>
        <StyledImageWrapper>
          <img src={img} alt="" />
        </StyledImageWrapper>
        <StyledImage>
          <Text href="/Jobsearch">
            <UserAddOutlined style={{ marginRight: "10px" }} /> Tìm kiếm việc
            làm
          </Text>
          <Text2 href="/RegisterEnterprise">
            <BookOutlined style={{ marginRight: "10px" }} /> Doanh nghiệp đăng
            ký
          </Text2>
        </StyledImage>
      </StyledImagee>
    </div>
  );
};

export default HeaderEnterprise;
