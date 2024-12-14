import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8 border-t border-gray-300 mt-10">
      <div className="container px-4 sm:flex justify-between items-center">
        <h1 className="px-2">VietnamTravel.</h1>
        <ul className="flex flex-wrap">
          <li className="p-0 px-2">
            <Link to="/home">Home</Link>
          </li>
          <li className="p-0 px-2">
            <Link to="/destination">Destinations</Link>
          </li>
          <li className="p-0 px-2">
            <Link to="/tips">Tips</Link>
          </li>
          <li className="p-0 px-2">
            <Link to="/about">About us</Link>
          </li>
          {/* <li className="p-0 px-2">
            <a href="">Views</a>
          </li>
          <li className="p-0 px-2">
            <a href="">Book</a>
          </li> */}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
