//import React, { useState } from "react";
import { Checkbox, Form, Input, Select } from "antd";
import Header from "../../Header/Header";
import {
  LoginContainer,
  FormContainer,
  ImageContainer,
  CustomButton,
  Text,
  TextPass,
  Image,
  Textdangnhap,
} from "../Login/Style";
import imgmain from "../../../asset/img/imgmain.jpg";
import ReCAPTCHA from "react-google-recaptcha";

const { Option } = Select;

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = () => {}; // Function for ReCAPTCHA onChange event

  return (
    <>
      <Header />

      <LoginContainer>
        <FormContainer>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Textdangnhap>Đăng Nhập</Textdangnhap>
            <Text>Vai Trò</Text>
            <Form.Item
              label=""
              name="select"
              rules={[{ required: true, message: "Please select an option!" }]}
            >
              <Select placeholder="Select an option">
                <Option value="dn">Doanh nghiệp</Option>
                <Option value="gv">Giảng viên</Option>
                <Option value="quantri">Quản trị </Option>
              </Select>
            </Form.Item>
            <Text>Email</Text>
            <Form.Item
              label=""
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Text> Mật Khẩu</Text>
            <Form.Item
              label=""
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            ></Form.Item>
            <div>
              <Checkbox>Ghi nhớ mật khẩu</Checkbox>
              <TextPass>
                <a href="/Regenerate">Quên mật khẩu?</a>
              </TextPass>
            </div>
            {/* Thêm ReCAPTCHA */}
            <ReCAPTCHA
              sitekey="6LevfIkpAAAAAHtj4MP5CUZf1gIT9Dib7qdT_NJz"
              onChange={onChange}
            />
            <a href="/home">
              <CustomButton> Đăng Nhập</CustomButton>
            </a>
          </Form>
        </FormContainer>
        <ImageContainer>
          <Image src={imgmain} alt="Login Image" />
        </ImageContainer>
      </LoginContainer>
    </>
  );
};

export default Login;
