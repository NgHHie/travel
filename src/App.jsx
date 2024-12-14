import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Destination from "./pages/Destination";

const App = () => {
  return (
    <Router basename="/travel">
      {" "}
      {/* Thêm basename */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Cập nhật đường dẫn */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destination/:id" element={<Destination />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
