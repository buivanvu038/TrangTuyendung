import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  @media screen and (max-width: 768px) {
    margin-left: -100px;
    margin-top: -100px;
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  padding: 20px;
  margin-left: 10%;
`;

export const ImageContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Textdangnhap = styled.h1`
  color: #f26d21;
`;
export const Image = styled.img`
  width: 80%;
  height: 60%;
  margin-left: -15%;
`;
export const Imagerecapcha = styled.img`
  width: 10%;
  height: 50%;

  margin-right: 10%;
`;
export const CustomButton = styled.button`
  width: 65%;
  padding: 10px;
  background-color: #f26d21;
  border: none;
  margin-top: 30px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
`;
export const Text = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: bold;
`;
export const TextPass = styled.a`
  a {
    margin-left: 35%;
    color: #f26d21;
    text-decoration: underline;
    @media screen and (max-width: 768px) {
      margin-left: 10px;
    }
  }
`;
export const Recapcha = styled.div`
  display: flex;
  align-items: center; /* Canh giữa theo chiều dọc */
  justify-content: center; /* Canh giữa theo chiều ngang */
  width: 350px; /* Điều chỉnh kích thước của hình chữ nhật */
  height: 80px;
  background-color: #f0f0f0; /* Màu xám nền */
  border-radius: 5px; /* Đường viền cong */
`;

export const ImageRecapcha = styled.img`
  width: 100%; /* Hình ảnh sẽ chiếm toàn bộ chiều rộng của phần tử cha */
  height: auto; /* Tự động điều chỉnh chiều cao dựa trên chiều rộng */
`;
