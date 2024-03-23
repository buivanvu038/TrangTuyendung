import React, { useState } from "react";
import { Typography, Form, Select, Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { PlusOutlined, CaretDownOutlined } from "@ant-design/icons";
import Headerquiz from "../../Headerquiz/Headerquiz";
import Footer from "../../Footer/Footer";

const { Title } = Typography;
const { Option } = Select;

const Choosetopic = () => {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSelectChange = (value) => {
    setSelectedTopic(value);
  };

  const handleCreateQuiz = () => {
    if (selectedTopic === "backEnd") {
      navigate("/quiz");
    } else if (selectedTopic === "frontEnd") {
      navigate("/enterprise");
    }
  };

  return (
    <div style={{ backgroundColor: "#f1f3f5" }}>
      <Headerquiz />
      <div
        style={{
          display: "flex",
          marginTop: "40px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <Title>
            Xin chào
            <span
              style={{
                color: "#F26D21",
                marginLeft: "5px",
                textTransform: "uppercase",
              }}
            >
              BÙI VĂN VŨ
            </span>
          </Title>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              width: "580px",
              marginBottom: "-25px",
            }}
          >
            <Col span={20}>
              <div>
                <Form.Item name="Subject">
                  <Select
                    className="selectSubject"
                    style={{
                      height: "50px",
                      width: "460px",
                    }}
                    placeholder="Chọn môn thi"
                    suffixIcon={
                      <CaretDownOutlined style={{ color: "#F26D21" }} />
                    }
                    onChange={handleSelectChange}
                  >
                    <Option value="frontEnd">Lập trình Front-end</Option>
                    <Option value="backEnd">Lập trình Back-end</Option>
                    <Option value="vfxArtist">VFX Artist</Option>
                    <Option value="uiUxDesign">UI/UX Design</Option>
                  </Select>
                </Form.Item>
              </div>
            </Col>

            <Col span={4}>
              <div>
                <Form.Item>
                  <Button
                    style={{
                      marginLeft: "-20px",
                      color: "white",
                      width: "120px",
                      height: "45px",
                      fontSize: "16px",
                      backgroundColor: "#F26D21",
                    }}
                    onClick={handleCreateQuiz}
                    disabled={!selectedTopic} // Disable button if no topic selected
                  >
                    <span>
                      <PlusOutlined />
                      Tạo đề thi
                    </span>
                  </Button>
                </Form.Item>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div style={{ marginTop: "35%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Choosetopic;
