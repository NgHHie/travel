import React from "react";

const Pattern = () => {
  return (
    <div
      className="bg-gray-200"
      style={{
        position: "fixed", // Đặt vị trí cố định
        width: "100%", // Chiều rộng bao phủ toàn màn hình
        height: "100%", // Chiều cao bao phủ toàn màn hình
        // backgroundImage: `url(${pattern})`, // Đặt hình ảnh làm nền
        // backgroundRepeat: "repeat", // Lặp lại theo cả hai chiều
        // backgroundSize: "auto", // Dùng kích thước tự nhiên của ảnh
        top: 0, // Đặt ở vị trí trên cùng của màn hình
        left: 0,
        zIndex: -10, // Đặt hình nền xuống dưới các phần tử khác
      }}
    ></div>
  );
};

export default Pattern;
