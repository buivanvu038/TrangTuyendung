import React from "react";
import Headermain from "./../../Headermain/Headermain";
import Navbar from "./../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  StyleText,
  StyleText2,
  Stylebody,
  Styleimg,
  Stylebodycolor,
} from "./Style";
import logonotfound2 from "../../../asset/img/logonotfound2.png";

const Notfound = () => {
  return (
    <Stylebodycolor>
      <Headermain />
      <div>
        <Stylebody>
          <Navbar />
          <StyleText>
            TÌM <strong style={{ color: "#f26d21" }}>CÔNG VIỆC ƯỚC MƠ </strong>
            CỦA BẠN <br /> TẠI NGÔI NHÀ MỚI{" "}
          </StyleText>
          <StyleText2>
            Khi bạn đang tìm kiếm một công việc, có một số điều bạn có thể làm{" "}
            <br />
            để tận dụng tối đa tìm kiếm của bạn
          </StyleText2>
          <div>
            <Styleimg src={logonotfound2} alt="" />
          </div>
        </Stylebody>
      </div>{" "}
      <Footer />
    </Stylebodycolor>
  );
};

export default Notfound;
