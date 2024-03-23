import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Checkbox, Form, Input, Select } from "antd";
import { loginSuccess } from "../../../redux/authSlice";
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
import Header from "../../Header/Header";

const { Option } = Select;

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    try {
      // Simulate API call or any other logic here
      // Dispatch action loginSuccess when login is successful
      dispatch(
        loginSuccess({ email: values.username, password: values.password })
      );

      // Navigate to the appropriate page based on role
      if (values.select === "dn") {
        navigate("/enterprise");
      } else if (values.select === "gv") {
        navigate("/teacher");
      } else if (values.select === "quantri") {
        navigate("/admin");
      } else if (values.select === "sinhvien") {
        navigate("/studentpage");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = () => {};

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
                <Option value="sinhvien">Sinh viên</Option>
              </Select>
            </Form.Item>
            <div className="login">
              <Text>Email</Text>
              <Form.Item
                label=""
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  type="email"
                  required
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Item>
              <Text> Mật Khẩu</Text>
              <Form.Item
                label=""
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input
                  type="password"
                  required
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>
            </div>
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
            <ReCAPTCHA
              sitekey="6LevfIkpAAAAAHtj4MP5CUZf1gIT9Dib7qdT_NJz"
              onChange={onChange}
            />
            <CustomButton type="submit">Đăng Nhập</CustomButton>
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
