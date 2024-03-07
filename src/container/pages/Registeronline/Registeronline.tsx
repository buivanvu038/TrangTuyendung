import React, { useState } from "react";
import Headermain from "../../Headermain/Headermain";
import Footer from "../Footer/Footer";
import {
  Stylebody,
  Styleupload,
  UploadContainer,
  UploadIcon,
  Stylebodymain,
} from "./Style";
import { Upload, Button, Form, Input, Row, Select, Col } from "antd";
import {
  UploadOutlined,
  CloudUploadOutlined,
  PlusCircleOutlined,
  SendOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload";

const Registeronline = () => {
  const [fileList, setFileList] = useState<any[]>([]);

  const handleChange = (info: UploadChangeParam) => {
    setFileList(info.fileList);
  };

  return (
    <Stylebody className="container">
      <Headermain />
      <div>
        <Stylebodymain>
          <h1>ĐIỀN THÔNG TIN ĐĂNG KÝ</h1>
          <Styleupload>
            <UploadContainer>
              <Upload
                fileList={fileList}
                onChange={handleChange}
                beforeUpload={() => false}
              >
                <Button
                  style={{
                    borderColor: "#fff",
                    color: "#fff",
                    background: "#f26d21",
                    marginTop: "30px",
                  }}
                  icon={<UploadOutlined />}
                >
                  Chọn file
                </Button>
              </Upload>
              <UploadIcon>
                <CloudUploadOutlined
                  style={{
                    marginTop: "20px",
                    fontSize: "40px",
                    color: "#f26d21",
                  }}
                />
              </UploadIcon>
            </UploadContainer>
            <PlusCircleOutlined
              style={{ marginLeft: "10px", fontSize: "20px" }}
            />
          </Styleupload>

          <Form>
            <Row gutter={[16, 16]}>
              <Col span={9}>
                <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                  Họ và tên<span style={{ color: "red" }}>*</span>
                </div>
                <Form.Item
                  className="formItem"
                  name="name"
                  rules={[
                    { required: true, message: "Vui lòng nhập họ và tên" },
                  ]}
                >
                  <Input className="formInput" placeholder="Nhập họ và tên" />
                </Form.Item>

                <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                  Ngày sinh<span style={{ color: "red" }}>*</span>
                </div>
                <Form.Item
                  className="formItem"
                  name="birthday"
                  rules={[
                    { required: true, message: "Vui lòng nhập ngày sinh" },
                  ]}
                >
                  <Input type="date" className="formInput" />
                </Form.Item>
                <Form.Item
                  className="formItem"
                  name="position"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn vị trí ứng tuyển",
                    },
                  ]}
                >
                  <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                    Chọn vị trí ứng tuyển{" "}
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <Select
                    className="formInput"
                    placeholder="Option 1"
                    suffixIcon={
                      <CaretDownOutlined
                        style={{ color: "#f26d21", fontWeight: "bold" }}
                      />
                    }
                  >
                    <Select.Option value="option1">Option 1</Select.Option>
                    <Select.Option value="option2">Option 2</Select.Option>
                  </Select>
                </Form.Item>
                <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                  Địa chỉ email<span style={{ color: "red" }}>*</span>
                </div>
                <Form.Item
                  className="formItem"
                  name="email"
                  rules={[
                    { required: true, message: "Vui lòng nhập địa chỉ email" },
                  ]}
                >
                  <Input className="formInput" placeholder="Nhập email" />
                </Form.Item>

                <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                  Điện thoại<span style={{ color: "red" }}>*</span>
                </div>
                <Form.Item
                  name="phone"
                  rules={[
                    { required: true, message: "Vui lòng nhập số điện thoại" },
                  ]}
                >
                  <Input
                    className="formInput"
                    placeholder="Nhập số điện thoại"
                  />
                </Form.Item>
              </Col>

              <Col span={9}>
                <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                  Trường đang học<span style={{ color: "red" }}>*</span>
                </div>
                <Form.Item
                  className="formItem"
                  name="School"
                  rules={[{ required: true, message: "Nhập trường đang học" }]}
                >
                  <Input
                    className="formInput"
                    placeholder="Nhập trường đang học"
                  />
                </Form.Item>
                <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                  Chuyên ngành<span style={{ color: "red" }}>*</span>
                </div>
                <Form.Item
                  name="majors"
                  rules={[{ required: true, message: "Nhập chuyên ngành" }]}
                >
                  <Input
                    className="formInput"
                    placeholder="Nhập chuyên ngành"
                  />
                </Form.Item>
                <Form.Item
                  className="formItem"
                  name="position"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn Hình thức đăng ký",
                    },
                  ]}
                >
                  <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                    Hình thức đăng ký <span style={{ color: "red" }}>*</span>
                  </div>
                  <Select
                    className="formInput"
                    placeholder="Option 1"
                    suffixIcon={
                      <CaretDownOutlined
                        style={{ color: "#f26d21", fontWeight: "bold" }}
                      />
                    } // Đặt màu cho mũi tên và làm dày nét
                  >
                    <Select.Option value="option1">Option 1</Select.Option>
                    <Select.Option value="option2">Option 2</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="formItem"
                  name="position"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn Hình thức thực hiện",
                    },
                  ]}
                >
                  <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                    Hình thức thực hiện <span style={{ color: "red" }}>*</span>
                  </div>
                  <Select
                    className="formInput"
                    placeholder="Option 1"
                    suffixIcon={
                      <CaretDownOutlined
                        style={{ color: "#f26d21", fontWeight: "bold" }}
                      />
                    } // Đặt màu cho mũi tên và làm dày nét
                  >
                    <Select.Option value="option1">Option 1</Select.Option>
                    <Select.Option value="option2">Option 2</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  className="formItem"
                  name="position"
                  rules={[
                    { required: true, message: "Vui lòng chọn hình thức" },
                  ]}
                >
                  <div style={{ marginBottom: "5px", fontWeight: "bold" }}>
                    Bạn biết Alta Group từ đâu{" "}
                    <span style={{ color: "red" }}>*</span>
                  </div>
                  <Select
                    className="formInput"
                    placeholder="Option 1"
                    suffixIcon={
                      <CaretDownOutlined
                        style={{ color: "#f26d21", fontWeight: "bold" }}
                      />
                    } // Đặt màu cho mũi tên và làm dày nét
                  >
                    <Select.Option value="option1">Option 1</Select.Option>
                    <Select.Option value="option2">Option 2</Select.Option>
                  </Select>
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
      </div>

      <Footer />
    </Stylebody>
  );
};

export default Registeronline;
