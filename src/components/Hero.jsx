import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import bgImage from "../assets/vietnam.jpg";

const Hero = () => {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Dữ liệu mẫu cho gợi ý
  const suggestions = [
    "Ha Noi",
    "Ha Long",
    "Sapa",
    "Da Nang",
    "Hoi An",
    "Hue",
    "HCMC",
    "Can Tho",
    "Binh Thuan",
    "Phu Quoc Island",
    "Cat Ba Island",
    "Ly Son Island",
  ];

  // Lọc gợi ý dựa trên input
  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <header className="w-screen h-screen relative">
      <img src={bgImage} className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center">
        <h1 className="text-white mb-12 playwrite-mx-guides-regular">
          Vietnam
        </h1>
        <h3 className="text-white mb-4">Where do you want to explore?</h3>
        <form
          action=""
          className="flex flex-col border p-3 rounded-md text-gray-500 bg-gray-100/90 max-w-[500px] w-[50%] mx-auto"
        >
          {/* Input */}
          <div className="flex">
            <input
              type="text"
              placeholder="Search Destinations"
              className="grow bg-transparent outline-none p-2"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setShowDropdown(true); // Hiển thị dropdown khi nhập
              }}
            />

            {/* Nút mũi tên quay xuống */}
            <button
              type="button"
              className="w-11 btn--form bg-[#CC680A]"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  showDropdown ? "rotate-180" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16l-6-6h12l-6 6z"
                />
              </svg>
            </button>
          </div>
          {/* Dropdown */}
          {showDropdown && (
            <ul className="bg-white border rounded-md shadow-md mt-2 max-h-48 overflow-y-auto">
              {filteredSuggestions.map((item, index) => (
                <li
                  key={index}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                >
                  {/* Sử dụng Link để điều hướng */}
                  <Link
                    to={`/destination/${item
                      .toLowerCase()
                      .replace(/\s+/g, "")}`}
                    className="w-full block"
                    onClick={() => {
                      setInputValue(item); // Gán giá trị cho input
                      setShowDropdown(false); // Đóng dropdown
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              {filteredSuggestions.length === 0 && (
                <li className="p-2 text-gray-500">No results found</li>
              )}
            </ul>
          )}
        </form>
      </div>
    </header>
  );
};

export default Hero;
