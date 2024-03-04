import React from "react";
import Headermain from "../../Headermain/Headermain";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const Home = () => {
  return (
    <div className="container">
      <Headermain />
      <Navbar />
      <div className="content">
        <h1>Xin chào, chào mừng bạn đến với trang chủ!</h1>
        <p>Đây là nội dung của trang chủ.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
