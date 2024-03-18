import React, { useState, useEffect } from "react";
import Headerquiz from "../../Headerquiz/Headerquiz";
import {
  ClockCircleOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Textquiz, Stylbodyquiz, Stylecheckbox } from "./Style";
import { Modal, Button } from "antd"; // Import Modal and Button from antd
import Footer from "../Footer/Footer";

const formatTime = (timeInSeconds: number): string => {
  const hours: number = Math.floor(timeInSeconds / 3600);
  const minutes: number = Math.floor((timeInSeconds % 3600) / 60);
  const seconds: number = timeInSeconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

const Quiz = () => {
  const [remainingTime, setRemainingTime] = useState<number>(300);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false); // State để kiểm soát hiển thị của Modal

  const questions = [
    {
      question: "Sum = 24 + 56 + 73 + 82  Trong trường hợp này là: ",
      options: ["A. Letter.", "B. Integer.", "C. Number.", "D. Character."],
      correctAnswer: "D. Character.",
    },
    {
      question:
        "Đối với ngôn ngữ lập trình backend, các loại dữ liệu cơ bản bao gồm:",
      options: ["A. String.", "B. Integer.", "C. Boolean.", "D. Object."],
      correctAnswer: "D. Object.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(interval);
          alert("End of quiz!");
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const checkAnswer = (selectedAnswer: string) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedAnswer === correctAnswer) {
      alert("Correct answer!");
    } else {
      alert("Wrong answer!");
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("End of quiz!");
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Xử lý khi nhấn nút "Nộp bài"
  const handleFinishQuiz = () => {
    setIsModalVisible(true); // Hiển thị Modal
  };

  // Xử lý khi nhấn nút "Có" trong Modal
  const handleOk = () => {
    setIsModalVisible(false); // Ẩn Modal
    // Thực hiện các công việc cần thiết khi nộp bài, ví dụ: gửi dữ liệu đến server, đánh giá kết quả, ...
  };

  // Xử lý khi nhấn nút "Không" trong Modal
  const handleCancel = () => {
    setIsModalVisible(false); // Ẩn Modal
  };

  return (
    <div style={{ backgroundColor: "#f1f3f5" }}>
      <Headerquiz />
      <Stylbodyquiz>
        <div>
          <h4>Đề thi môn </h4>
          <h1>Lập trình Back-end (Ngôn ngữ CSharp .Net, làm API)</h1>
          <div>
            <Textquiz>
              <div>
                {" "}
                Tổng câu hỏi:
                <span
                  style={{
                    marginLeft: "10px",
                    color: "#F26D21",
                    fontWeight: "bold",
                  }}
                >
                  {questions.length}
                </span>
              </div>
              <div style={{ marginLeft: "30%" }}>
                {" "}
                Hoàn thành:
                <span
                  style={{
                    marginLeft: "10px",
                    color: "#F26D21",
                    fontWeight: "bold",
                  }}
                >
                  {currentQuestion + 1} / {questions.length}
                </span>
              </div>
              <div style={{ marginLeft: "20%", marginRight: "10%" }}>
                {" "}
                <i>
                  <ClockCircleOutlined style={{ color: "#F26D21" }} />
                </i>
                <span
                  style={{
                    marginLeft: "10px",
                    color: "#F26D21",
                    fontWeight: "bold",
                  }}
                >
                  {formatTime(remainingTime)}
                </span>
              </div>{" "}
              <button
                style={{
                  marginLeft: "40px",
                  height: "30px",
                  width: "70px",
                  marginTop: "10px",
                  color: "#ffffff",
                  backgroundColor: "#F26D21",
                  borderStyle: "none",
                  borderRadius: "5px",
                }}
                onClick={handleFinishQuiz} // Gọi hàm handleFinishQuiz khi nhấn nút "Nộp bài"
              >
                {" "}
                Nộp bài
              </button>
            </Textquiz>
          </div>

          <div id="quiz" style={{ marginBottom: "20px" }}>
            {" "}
            {/* Đặt margin-bottom để tạo khoảng cách dưới */}
            <p id="question" style={{ marginBottom: "10px" }}>
              {`Câu hỏi ${currentQuestion + 1}:`}
              <br />
              {questions[currentQuestion].question}
            </p>
            <div id="options">
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <Stylecheckbox>
                    <input
                      style={{
                        marginLeft: "5%",
                        marginTop: "2%",
                        backgroundColor: "#fff", // Màu cam cho nền
                        border: "2px solid #F26D21", // Viền đỏ
                        borderRadius: "50%", // Đảm bảo ô tròn
                        width: "20px",
                        height: "20px",
                      }}
                      type="radio"
                      id={`option-${index}`}
                      name={`question-${currentQuestion}`}
                      value={option}
                      onChange={(e) => {}}
                    />

                    <label
                      htmlFor={`option-${index}`}
                      style={{
                        height: "30px",
                        marginLeft: "2%",
                      }}
                    >
                      {option}
                    </label>
                  </Stylecheckbox>
                </div>
              ))}
            </div>
            <div style={{ display: "flex" }}>
              <button
                style={{
                  marginLeft: "80%",
                  backgroundColor: "#F1F3F5",
                  borderStyle: "none",
                }}
                id="previousButton"
                onClick={previousQuestion}
                disabled={currentQuestion === 0}
              >
                <LeftOutlined
                  style={{
                    color: "#F26D21",
                  }}
                />
              </button>
              <button
                style={{
                  marginLeft: "10px",
                  backgroundColor: "#F1F3F5",
                  borderStyle: "none",
                }}
                id="nextButton"
                onClick={nextQuestion}
                disabled={currentQuestion === questions.length - 1}
              >
                <RightOutlined style={{ color: "#F26D21" }} />
              </button>
            </div>
          </div>
        </div>
      </Stylbodyquiz>
      {/* Hiển thị Modal khi state isModalVisible là true */}
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            key="cancel"
            onClick={handleCancel}
            style={{
              backgroundColor: "#f1f3f5",
              color: "black",
              height: "40px",
              width: "100px",
            }}
          >
            Đóng
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleOk}
            style={{
              backgroundColor: "#F26D21",
              marginRight: "27%",
              height: "40px",
              width: "100px",
            }}
          >
            Xác nhận
          </Button>,
        ]}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Nộp bài thi</h1>
          <p>Bạn có chắc chắn muốn nộp bài thi không?</p>
        </div>
      </Modal>
      <div style={{ marginTop: "-3%" }}>
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default Quiz;
