import styled from "styled-components";

export const BodyStyle = styled.div`
  background-color: #f1f3f5;
`;
export const Texttitle = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 26px;
`;
export const RowStyle = styled.div`
  margin-left: 15%;
  margin-right: 10%;
  margin-bottom: 30px;

  & row {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    text-align: center;

    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 30px;
  }
`;
export const Row2 = styled.div`
  margin-bottom: 30px;
`;
export const PaginationStyle = styled.div`
  text-align: center;

  .ant-pagination-item {
    border-radius: 50%; // Đặt đường viền thành hình tròn
    border-color: #f1f3f5; // Đặt màu cam cho ô phân trang
    transition: background-color 0.3s; // Thêm hiệu ứng chuyển đổi màu
    color: white; // Đặt màu cho số trong ô phân trang

    &:hover,
    &:active,
    &:focus {
      background-color: #f26d21; // Giữ nguyên màu nền khi hover, được chọn và khi tập trung
    }
  }
`;
