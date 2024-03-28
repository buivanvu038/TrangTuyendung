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
    border-radius: 50%;
    border-color: #f1f3f5;
    transition: background-color 0.3s;
    color: white;

    &:hover,
    &:active,
    &:focus {
      background-color: #f26d21;
    }
  }

  @media screen and (max-width: 768px) {
    .ant-pagination-item {
      font-size: 14px; /* Điều chỉnh kích thước font cho điện thoại di động */
      width: 30px; /* Điều chỉnh kích thước ô phân trang cho điện thoại di động */
      height: 30px;
    }
  }
`;
