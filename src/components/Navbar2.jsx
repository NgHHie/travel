import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };
  return (
    <nav
      style={{ color: "black" }}
      className="flex justify-between items-center h-20 px-4 fixed top-0 left-0 z-50 w-full text-white bg-gray-300 backdrop-blur-md"
    >
      <h1>VietnamTravel.</h1>
      <ul className="hidden md:flex">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/destination">Destinations</Link>
        </li>
        <li>
          <Link to="/tips">Tips</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        {/* <li>
          <a href="">Views</a>
        </li>
        <li>
          <a href="">Book</a>
        </li> */}
      </ul>
      <div className="hidden md:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
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
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </div>
      {!navIsShown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 md:hidden"
          onClick={toggleNavIsShown}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      )}
      {navIsShown && (
        <div className="md:hidden absolute z-10 top-0 left-0 w-full bg-gray-100/90 text-black px-4 py-6">
          <div className="flex justify-between">
            <h1>VietnamTravel.</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={toggleNavIsShown}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className=" mb-4">
            <li className="border-b-2 border-b-gray-600 flex justify-center">
              <Link to="/home">Home</Link>
            </li>
            <li className="border-b-2 border-b-gray-600 flex justify-center">
              <Link to="/destination">Destinations</Link>
            </li>
            <li className="border-b-2 border-b-gray-600 flex justify-center">
              <Link to="/tips">Tips</Link>
            </li>
            <li className="border-b-2 border-b-gray-600 flex justify-center">
              <Link to="/about">About us</Link>
            </li>
            {/* <li className="border-b-2 border-b-gray-600">
              <a href="">Views</a>
            </li>
            <li className="border-b-2 border-b-gray-600">
              <a href="">Book</a>
            </li> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
