import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Destination from "./pages/Destination";

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
    <Router basename="/travel">
      <ScrollToTop /> {/* Thêm basename */}
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
