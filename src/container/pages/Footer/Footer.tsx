import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: #fff;
  color: black;
  text-align: center;
  padding: 10px 0;
  margin-top: 120px;
`;

export const StyledText = styled.i`
  margin-top: 20px;
  color: black;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <br />
      <StyledText>Alta Software - Training Team - 04/2023 </StyledText>{" "}
    </StyledFooter>
  );
};

export default Footer;
