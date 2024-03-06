import React from "react";
import styled from "styled-components";
import { Row, Col, Flex } from "antd";
import {
  DownloadOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const StyledCard = styled.div`
  width: 400px;
  height: 160px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  background-color: white;
`;

const Image = styled.img`
  width: 36px;
  height: 15%;
  margin-right: 10px;
`;

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <StyledCard>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <Col span={12} style={{ marginLeft: "10px" }}>
          <Flex justify="start" align="middle" style={{ marginBottom: "10px" }}>
            <Image src={image} alt="Card Image" />
            <div>
              <h4 style={{ margin: "0" }}>{title}</h4>
              <p style={{ margin: "0", color: "#929292" }}>{description}</p>
            </div>
          </Flex>
          <div>Yêu cầu: Có tối thiểu 1 năm kinh nghiệm ReactJS, Typescript</div>
        </Col>
        <Col span={10} style={{ marginRight: "10px" }}>
          <Flex justify="end" align="middle">
            <div
              style={{
                width: "35px",
                height: "35px",
                display: "flex",
                cursor: "pointer",
                borderRadius: "5px",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#F26D21",
              }}
            >
              <DownloadOutlined style={{ color: "white", fontSize: "24px" }} />
            </div>
          </Flex>
        </Col>
      </Row>

      <Row
        style={{
          width: "100%",
          display: "flex",
          paddingTop: "5px",
          margin: "10px 0 0 0",
          justifyContent: "center",
          borderTop: "1px dashed #888",
        }}
      >
        <Col span={12}>
          <Flex
            justify="start"
            align="middle"
            style={{ borderRight: "1px solid #888" }}
          >
            <p>
              <i>
                <MailOutlined />
              </i>{" "}
              tuyendung@alta.com.vn
            </p>
          </Flex>
        </Col>

        <Col span={9}>
          <Flex align="middle" style={{ paddingLeft: "20px" }}>
            <p>
              <i>
                <PhoneOutlined />
              </i>{" "}
              0282 240 9960
            </p>
          </Flex>
        </Col>
      </Row>
    </StyledCard>
  );
};

export default Card;
