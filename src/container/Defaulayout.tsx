import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router từ react-router-dom
import Home from "./pages/Homes/Home";

import Login from "./pages/Login/Login";
import Forgotpass from "./pages/Forgotpass/Forgotpass";

import Regenerate from "./pages/Regenerate/Regenerate";

const Defaultlayout = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path="/regenerate" element={<Regenerate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Defaultlayout;
