import React from "react";
import Headermain from "../../Headermain/Headermain";
import Home from "../Homes/Home";
import Footer from "../../Footer/Footer";
import { BodyStyle2 } from "./Style";

const Studentpage = () => {
  return (
    <BodyStyle2 className="container">
      <Headermain />
      <Home />
      <Footer />
    </BodyStyle2>
  );
};

export default Studentpage;
