import React from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Form, Input, Select } from "antd";
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
import { getDatabase, ref, push, set } from "firebase/database";

const { Option } = Select;

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      // Khởi tạo đối tượng cơ sở dữ liệu
      const database = getDatabase();

      // Tạo một tham chiếu mới cho mỗi người dùng sử dụng push để tự động tạo ID duy nhất
      const userRef = push(ref(database, "users"));

      // Ghi dữ liệu vào Firebase
      await set(userRef, {
        id: 1,
        name: values.username,
        password: values.password,
      });

      // Điều hướng đến trang phù hợp dựa trên vai trò
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
      console.error("Error adding document: ", error);
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
