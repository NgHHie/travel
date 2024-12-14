import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams từ react-router-dom

import dataFile from "../json/hanoi.json";
import bgImage from "../assets/vietnam.jpg";

const Hero = () => {
  const { id } = useParams(); // Lấy id từ URL
  const [data, setData] = useState(null); // State để lưu dữ liệu

  // UseEffect để fetch dữ liệu khi component được render
  useEffect(() => {
    if (id) {
      try {
        // Kiểm tra id và lấy dữ liệu từ file JSON
        const result = dataFile[id]; // Giả sử JSON là một object với các id làm key
        setData(result); // Set dữ liệu vào state
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }, [id]);

  return (
    <header className="w-screen h-screen relative">
      <img
        src={data.image ? data.image : bgImage}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900/30"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-center">
        <h1 className="text-white mb-12 playwrite-mx-guides-regular">
          {data ? data.destination : "Vietnam"}
        </h1>
      </div>
    </header>
  );
};

export default Hero;
