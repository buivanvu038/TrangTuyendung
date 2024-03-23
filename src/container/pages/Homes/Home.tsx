import React from "react";

import Navbar from "../../../components/Navbar/Navbar";
import Card from "../../../components/Cards/Card";
import { Col, Row } from "antd";
import { BodyStyle, Texttitle, RowStyle, PaginationStyle } from "./Style";
import logocard from "../../../asset/img/logocard.jpeg";

import logo3 from "../../../asset/img/logo3.jpeg";
import { Pagination } from "antd";
import logo4 from "../../../asset/img/logo4.jpeg";

const Home = () => {
  return (
    <BodyStyle className="container">
      <Navbar />
      <div className="content">
        <Texttitle>
          TÌM <strong style={{ color: "#f26d21" }}>CÔNG VIỆC ƯỚC MƠ </strong>
          CỦA BẠN <br /> TẠI NGÔI NHÀ MỚI{" "}
        </Texttitle>
        <RowStyle>
          {" "}
          <Row gutter={[16, 16]} style={{ marginBottom: "30px" }}>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Card
                title="Thiết kế UI/UX (Figma)"
                description="Alta Software"
                image={logocard}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Card
                title="Thiết kế UI/UX (Figma)"
                description="Alta Software"
                image={logo3}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Card
                title="Thiết kế UI/UX (Figma)"
                description="Alta Software"
                image={logo3}
              />
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginBottom: "30px" }}>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Card
                title="Thiết kế UI/UX (Figma)"
                description="Alta Software"
                image={logo4}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Card
                title="Thiết kế UI/UX (Figma)"
                description="Alta Software"
                image={logo3}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Card
                title="Thiết kế UI/UX (Figma)"
                description="Alta Software"
                image={logo4}
              />
            </Col>
          </Row>
          <Row gutter={[16, 16]} style={{ marginBottom: "30px" }}>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Card
                title="Thiết kế UI/UX (Figma)"
                description="Alta Software"
                image={logo3}
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Card
                title="Thiết kế UI/UX (Figma)"
                description="Alta Software"
                image={logo4}
              />
            </Col>

            <Col xs={{ span: 24 }} lg={{ span: 8 }}>
              <Card
                title="Thiết kế UI/UX (Figma)"
                description="Alta Software"
                image={logo4}
              />
            </Col>
          </Row>
        </RowStyle>
        <PaginationStyle>
          {" "}
          <Pagination defaultCurrent={1} total={500} />
        </PaginationStyle>
      </div>
    </BodyStyle>
  );
};

export default Home;
