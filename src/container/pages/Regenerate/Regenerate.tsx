import React, { useState } from "react";
import { Form, Input, Modal } from "antd";
import imgmain from "../../../asset/img/imgmain.jpg";
import Header from "../../Header/Header";
import {
  ForgotPassContainer,
  FormContainer,
  ImageContainer,
  Image,
  Textdangnhap,
  Text,
  Buttontextpass,
  CustomButtonpass,
  TextTB,
  Cusbt,
  TextTB2,
  StyledLink,
} from "./Style";

const ForgotPass: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    showModal();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Header />
      <ForgotPassContainer>
        <FormContainer>
          <Textdangnhap>Tạo lại mật khẩu </Textdangnhap>
          <br></br>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
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

            <Buttontextpass>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <a href="/forgotpass" onClick={showModal}>
                  <CustomButtonpass>Xác nhận</CustomButtonpass>
                </a>
                <StyledLink>
                  {" "}
                  <a href="/Login">Quay lại đăng nhập </a>
                </StyledLink>
              </Form.Item>
            </Buttontextpass>
          </Form>
        </FormContainer>
        <ImageContainer>
          <Image src={imgmain} alt="" />
        </ImageContainer>

        <Modal
          title="Tạo mật khẩu thành công"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <a href="/home">
              {" "}
              <Cusbt key="submit">Đăng nhập ngay</Cusbt>
            </a>,
          ]}
        >
          <TextTB>Tạo mật khẩu thành công</TextTB>
          <TextTB2>
            Đăng nhập ngay để bắt đầu <br></br> nhận được các cơ hội sự nghiệp
            lý tưởng
          </TextTB2>
        </Modal>
      </ForgotPassContainer>
    </>
  );
};

export default ForgotPass;
