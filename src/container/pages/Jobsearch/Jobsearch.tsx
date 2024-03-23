import React from "react";
import HeaderEnterprise from "../../HeaderEnterprise/HeaderEnterprise";
import Home from "../Homes/Home";
import Footer from "../../Footer/Footer";
import { BodyStyle2 } from "./Style";

const Jobsearch = () => {
  return (
    <BodyStyle2 className="container">
      <HeaderEnterprise />
      <Home />
      <Footer />
    </BodyStyle2>
  );
};

export default Jobsearch;
