import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router từ react-router-dom
import Home from "./pages/Home";
import Header from "./Header/Header";
import Footer from "./Footer";
import Login from "./pages/Login/Login";
import Forgotpass from "./pages/Forgotpass/Forgotpass";

const Defaultlayout = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Defaultlayout;
