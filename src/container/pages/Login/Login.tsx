import React, { useState } from "react";
import { Checkbox, Form, Input, Select } from "antd";
import {
  LoginContainer,
  FormContainer,
  ImageContainer,
  CustomButton,
  Text,
  TextPass,
  Recapcha,
  Image,
  Textdangnhap,
  ImageRecapcha,
} from "../Login/Style";
import imgmain from "../../../asset/img/imgmain.jpg";
import recapcha from "../../../asset/img/recapcha.webp";

const { Option } = Select;

const Login: React.FC = () => {
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const handleCaptchaChange = () => {
    setCaptchaChecked(!captchaChecked);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Text> Mật Khẩu</Text>
          <Form.Item
            label=""
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
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
              <a href="/forgotpass">Quên mật khẩu?</a>
            </TextPass>
          </div>

          <Recapcha>
            <Checkbox checked={captchaChecked} onChange={handleCaptchaChange}>
              Tôi không phải là người máy
            </Checkbox>
            <ImageRecapcha src={recapcha} alt="recapcha" />
          </Recapcha>
          <a href="/home">
            <CustomButton> Đăng Nhập</CustomButton>
          </a>
        </Form>
      </FormContainer>
      <ImageContainer>
        <Image src={imgmain} alt="Login Image" />
      </ImageContainer>
    </LoginContainer>
  );
};

export default Login;
