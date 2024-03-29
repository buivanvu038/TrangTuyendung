import styled from "styled-components";

export const StyledImageWrapper = styled.div`
  display: flex;
  width: 50px; /* Chiều rộng mong muốn */
  height: 50px;
  margin-left: 10%;
  margin-top: 30px;
`;
export const StyledImage = styled.div`
  margin-left: 45%;
  margin-top: 40px;
  color: #f26d21;
  display: flex;
  font-family: roboto;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px; /* Đặt khoảng cách giữa các ký tự */
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-left: 10px;
    margin-top: 100px;
  }
`;

export const StyledImagee = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
