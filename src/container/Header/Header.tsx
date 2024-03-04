import React from "react";
import { StyledImageWrapper, StyledImage, StyledImagee } from "./Style";

import img from "../../asset/img/img1.jpg";

const Header = () => {
  return (
    <div>
      {" "}
      <StyledImagee>
        <StyledImageWrapper>
          <img src={img} alt="" />
        </StyledImageWrapper>
        <StyledImage>
          {" "}
          HỆ THỐNG TUYỂN DỤNG <br /> VÀ QUẢN LÝ SINH VIÊN
        </StyledImage>
      </StyledImagee>
      <div></div>
    </div>
  );
};

export default Header;
