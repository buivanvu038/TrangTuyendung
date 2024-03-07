import styled from "styled-components";
import { Button } from "antd";

export const StyledNavbarWrapper = styled.div`
  background-color: #f9f9f9; /* Light gray background color */
  padding: 20px; /* Add padding to create space between content and container */
  border-radius: 10px; /* Rounded corners */
`;

export const StyledNavbar = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  margin-left: 500px;
  margin-right: 500px;
  border-radius: 7px;
  margin-bottom: 20px;
`;

export const DropdownContainer = styled.div`
  margin-right: 30px;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-right: 30px;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;
  padding: 5px;
  font-size: 14px;
  border: none;
  outline: none;
`;

export const PlaceholderText = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #999;
  font-size: 16px;
`;

export const Drop2 = styled.span`
  margin-left: 70px;
`;

export const StyledButton = styled(Button)`
  background-color: #f26d21 !important;
  color: #fff !important;
  border: none !important;
  &:hover {
    background-color: #f26d21 !important;
  }
  margin-left: 20px;
`;
