import React from "react";
import { UserAddOutlined, BookOutlined } from "@ant-design/icons";

import {
  StyledImageWrapper,
  StyledImage,
  StyledImagee,
  Text,
  Text2,
  BtnUser,
  TextUser,
  UserImage,
} from "./Style";
import img from "../../asset/img/img1.jpg";

const Headerquiz = () => {
  return (
    <div>
      {" "}
      <StyledImagee>
        <StyledImageWrapper>
          <img src={img} alt="" />
        </StyledImageWrapper>
        <StyledImage>
          <Text href="/Choosetopic">
            <UserAddOutlined style={{ marginRight: "10px" }} /> Thi trắc nghiệm
          </Text>
          <Text2 href="/Studyprocess">
            <BookOutlined style={{ marginRight: "10px" }} /> Tiến trình học tập
          </Text2>
        </StyledImage>

        <BtnUser>
          {" "}
          <TextUser>
            <UserImage
              src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg"
              alt=""
            />
            VŨ BÙI
          </TextUser>
        </BtnUser>
      </StyledImagee>
    </div>
  );
};

export default Headerquiz;
