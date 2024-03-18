import React from "react";
import Headerquiz from "../../Headerquiz/Headerquiz";
import { Form, Select, Input, Button, message } from "antd"; // Import Form, Select, Input, Button, and message from antd
import { CaretDownOutlined, SendOutlined } from "@ant-design/icons"; // Import CaretDownOutlined and SendOutlined icons
import Footer from "../Footer/Footer";

const { TextArea } = Input;

const Studyprocess = () => {
  const onchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(e);
  };

  const onFinish = (values: any) => {
    console.log("Received values:", values);
    // Thực hiện xử lý khi nhấn nút Gửi
    // Ở đây bạn có thể thêm logic để gửi dữ liệu đến server hoặc xử lý dữ liệu khác
    message.success("Gửi thành công!"); // Hiển thị thông báo gửi thành công
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    // Hiển thị thông báo lỗi khi không nhập đủ thông tin
    message.error("Vui lòng nhập đầy đủ thông tin!");
  };

  return (
    <div style={{ backgroundColor: "#F1f3f5" }}>
      <Headerquiz />
      <div style={{ marginLeft: "20%" }}>
        <div>
          <div>
            <h1>
              Xin chào <span style={{ color: "#F26D21" }}>BÙI VĂN VŨ</span>{" "}
            </h1>
            <div>
              <p style={{ fontFamily: "roboto" }}>
                Chọn lớp / Chọn nhóm thực tập
              </p>
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{ marginRight: "70%" }}
              >
                <Form.Item
                  className="formItem"
                  name="position"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng chọn Chọn lớp / Chọn nhóm thực tập",
                    },
                  ]}
                >
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
                <p style={{ fontFamily: "roboto" }}>Link file</p>
                <div>
                  <Form.Item
                    className="formItem"
                    name="birthday"
                    rules={[
                      { required: true, message: "Vui lòng nhập trường học" },
                    ]}
                  >
                    <Input
                      type="text"
                      className="formInput"
                      placeholder="Nhập trường học"
                    />
                  </Form.Item>
                </div>
                <p style={{ fontFamily: "roboto" }}>Nội dung báo cáo</p>
                <div>
                  {" "}
                  <Form.Item
                    className="formItem"
                    name="content"
                    rules={[
                      { required: true, message: "Vui lòng nhập nội dung" },
                    ]}
                  >
                    <TextArea
                      showCount
                      maxLength={100}
                      onChange={onchange}
                      placeholder="nhập nội dung"
                      style={{ height: 120, resize: "none" }}
                    />
                  </Form.Item>
                </div>
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
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "17%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Studyprocess;
