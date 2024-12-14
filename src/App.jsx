import React, { useEffect } from "react";
import {
  HashRouter as Router, // Thay đổi từ BrowserRouter thành HashRouter
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Destination from "./pages/Destination";

// Component ScrollToTop giúp cuộn trang về đầu khi URL thay đổi
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Cuộn trang về đầu khi URL thay đổi
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Cuộn trang về đầu khi thay đổi URL */}
      <div>
        <Routes>
          {/* Định nghĩa các routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/destination/:id" element={<Destination />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
