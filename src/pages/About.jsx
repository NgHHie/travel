import React from "react";

import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import Pattern from "../components/Pattern";

const About = () => {
  return (
    <>
      <Pattern />
      <Navbar2 />
      <div className="container2 min-h-screen flex flex-col justify-center items-center">
        <h1
          className="mt-20 pt-5 text-3xl font-semibold"
          style={{ color: "black" }}
        >
          Members
        </h1>
        <div className="flex flex-wrap justify-center my-4 gap-8 grid md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col items-center relative">
            <img
              src="/travel/assets/avt775.jpeg"
              className="w-56 h-56 object-cover rounded-full border-4 border-gray-300"
              alt="Member 1"
            />
            <h3 className="mt-4 text-lg font-semibold">응웬두이안</h3>
            <p className="text-sm text-gray-560">2145775</p>
          </div>
          <div className="flex flex-col items-center relative">
            <img
              src="/travel/assets/avt808.jpeg"
              className="w-56 h-56 object-cover rounded-full border-4 border-gray-300"
              alt="Member 2"
            />
            <h3 className="mt-4 text-lg font-semibold">쩐티호아</h3>
            <p className="text-sm text-gray-560">2145808</p>
          </div>
        </div>
      </div>{" "}
      {/* Khoảng trống chiếm toàn bộ chiều cao màn hình */}
      <Footer />
    </>
  );
};

export default About;
