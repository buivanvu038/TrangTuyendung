// import React, { useState } from "react";
import Footer from "../Footer/Footer";
import { Stylebody, Stylebodymain, Styletext, Stylefooter } from "./Style";
import { Button, Form, Input, Row, Col } from "antd";
import { SendOutlined } from "@ant-design/icons";
import HeaderEnterprise from "../../HeaderEnterprise/HeaderEnterprise";

const RegisterEnterprise = () => {
  return (
    <Stylebody className="container">
      <HeaderEnterprise />
      <Stylefooter>
        <Stylebodymain>
          <Styletext>ĐIỀN THÔNG TIN ĐĂNG KÝ</Styletext>

          <Form>
            <Row style={{ maxWidth: "100%" }} gutter={[16, 16]}>
              <Col span={6}>
                <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                  Email liên hệ<span style={{ color: "red" }}>*</span>
                </div>
                <Form.Item
                  className="Email"
                  name="Email"
                  rules={[{ required: true, message: "Vui lòng nhập Email" }]}
                >
                  <Input className="formInput" placeholder="Nhập Email" />
                </Form.Item>

                <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                  Tên doanh nghiệp<span style={{ color: "red" }}>*</span>
                </div>
                <Form.Item
                  className="Namecompany"
                  name="Namecompany"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tên doanh nghiệp",
                    },
                  ]}
                >
                  <Input
                    className="formInput"
                    placeholder="Nhập tên doanh nghiệp"
                  />
                </Form.Item>

                <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                  Điện thoại công ty<span style={{ color: "red" }}>*</span>
                </div>
                <Form.Item
                  className="phonenumbercompany"
                  name="phonenumbercompany"
                  rules={[
                    { required: true, message: "Vui lòng nhập số điện thoại" },
                  ]}
                >
                  <Input
                    className="formInput"
                    placeholder="Nhập số điện thoại công ty"
                  />
                </Form.Item>
              </Col>

              <Col span={6}>
                <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                  Địa chỉ công ty<span style={{ color: "red" }}>*</span>
                </div>
                <Form.Item
                  className="Address"
                  name="Address"
                  rules={[{ required: true, message: "Nhập địa chỉ công ty" }]}
                >
                  <Input
                    className="formInput"
                    placeholder="Nhập địa chỉ công ty"
                  />
                </Form.Item>

                <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                  Người quản lý<span style={{ color: "red" }}>*</span>
                </div>
                <Form.Item
                  className="manager"
                  name="manager"
                  rules={[{ required: true, message: "Nhập người quản lý" }]}
                >
                  <Input
                    className="formInput"
                    placeholder="Nhập người quản lý"
                  />
                </Form.Item>
                <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                  Điện thoại người quản lý
                  <span style={{ color: "red" }}>*</span>
                </div>
                <Form.Item
                  className="phonenumber"
                  name="phonenumber"
                  rules={[
                    {
                      required: true,
                      message: "Nhập điên thoại người quản lý",
                    },
                  ]}
                >
                  <Input
                    className="formInput"
                    placeholder="Nhập điện thoại người quản lý"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item style={{ paddingBottom: "10px" }}>
              <Button
                htmlType="submit"
                style={{
                  margin: "3px",
                  background: "#F26D21",
                  color: "white",
                  width: "100px",
                  height: "40px",
                }}
              >
                Gửi{" "}
                <i>
                  <SendOutlined
                    style={{ marginLeft: "8px", transform: "rotate(-40deg)" }}
                  />
                </i>
              </Button>
            </Form.Item>
          </Form>
        </Stylebodymain>
      </Stylefooter>

      <Footer />
    </Stylebody>
  );
};

export default RegisterEnterprise;
