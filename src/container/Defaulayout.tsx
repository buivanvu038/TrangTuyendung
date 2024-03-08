import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router từ react-router-dom

import Login from "./pages/Login/Login";
import Forgotpass from "./pages/Forgotpass/Forgotpass";

import Regenerate from "./pages/Regenerate/Regenerate";

import Registeronline from "./pages/Registeronline/Registeronline";
import Notfound from "./pages/notfound/Notfound";
import Enterprise from "./pages/Enterprise/Enterprise";
import RegisterEnterprise from "./pages/RegisterEnterprise/RegisterEnterprise";
import Studentpage from "./pages/Studentpage/Studentpage";
import Jobsearch from "./pages/Jobsearch/Jobsearch";
const Defaultlayout = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/forgotpass" element={<Forgotpass />} />
          <Route path="/regenerate" element={<Regenerate />} />
          <Route path="/registeronline" element={<Registeronline />} />
          <Route path="/notfound" element={<Notfound />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/registerEnterprise" element={<RegisterEnterprise />} />
          <Route path="/studentpage" element={<Studentpage />} />

          <Route path="/jobsearch" element={<Jobsearch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Defaultlayout;
