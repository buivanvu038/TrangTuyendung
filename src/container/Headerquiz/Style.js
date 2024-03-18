import styled from "styled-components";

export const StyledImageWrapper = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  margin-left: 10%;
  margin-top: 10px;
`;

export const StyledImage = styled.div`
  margin-left: 45%;
  margin-top: 40px;
  display: flex;
  font-family: roboto;
  font-size: 20px;
  font-weight: bold;
`;

export const StyledImagee = styled.div`
  display: flex;
  background: #ffff;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
`;

export const Text = styled.a`
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
  color: black;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #f26d21;
    text-decoration: none;
  }
`;

export const Text2 = styled.a`
  display: flex;
  margin-bottom: 20px;
  margin-left: 20px;
  cursor: pointer;
  color: black;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #f26d21;
    text-decoration: none;
  }
`;
export const BtnUser = styled.div`
  height: 40px;
  background-color: #f26d21;
  width: 120px;
  margin-left: 20px;
  text-align: center;
  border-radius: 7px;
  margin-top: 30px;
`;
export const TextUser = styled.div`
  display: flex;
  align-items: center; /* Canh giữa theo chiều dọc */
  color: #fff;
  font-family: "Roboto", sans-serif; /* Sử dụng font Roboto */
  font-weight: bold; /* Làm cho chữ đậm */
`;

export const UserImage = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 50%;
  margin-right: 10px; /* Khoảng cách giữa ảnh và văn bản */
  margin-top: 4px;
  margin-left: 4px;
`;
