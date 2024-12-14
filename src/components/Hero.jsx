import React from "react";
import { useState } from "react";
import bgImage from "../assets/vietnam.jpg";

const Hero = () => {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Dữ liệu mẫu cho gợi ý
  const suggestions = [
    "Hanoi",
    "Ho Chi Minh City",
    "Halong Bay",
    "Da Nang",
    "Nha Trang",
    "Hue",
    "Hoi An",
    "Sapa",
    "Ha Giang",
    "Ninh Binh",
    "Phan Thiet",
    "Mui Ne",
    "Phu Quoc Island",
    "Con Dao Island",
    "Cat Ba Island",
    "Ly Son Island",
    "Bach Long Vi Island",
    "Ba Ria - Vung Tau",
    "Quang Ninh",
    "Thanh Hoa",
    "Nghe An",
    "Ha Tinh",
    "Quang Binh",
    "Quang Tri",
    "Thua Thien Hue",
    "Binh Dinh",
    "Quang Nam",
    "Khanh Hoa",
    "Binh Thuan",
    "Can Tho",
    "Cai Be",
    "Mekong Delta",
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
          className="flex flex-col border p-3 rounded-md text-black bg-gray-100/90 max-w-[700px] w-[80%] mx-auto"
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
              // onFocus={() => setShowDropdown(true)} // Hiển thị dropdown khi focus
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
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  // d="M19.5 12l-7.5 7.5m0 0L4.5 12m7.5 7.5V4.5"
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
                  onClick={() => {
                    setInputValue(item); // Gán giá trị cho input
                    setShowDropdown(false); // Đóng dropdown
                  }}
                >
                  {item}
                </li>
              ))}
              {filteredSuggestions.length === 0 && (
                <li className="p-2 text-gray-500">No results found</li>
              )}
            </ul>
          )}
          {/*  */}
        </form>
      </div>
    </header>
  );
};

export default Hero;
