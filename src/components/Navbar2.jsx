import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const [navIsShown, setnavIsShown] = useState(false);
  const [dropdownIsShown, setDropdownIsShown] = useState(false);

  const toggleNavIsShown = () => {
    setnavIsShown((prev) => !prev);
  };

  const destinations = {
    Northern: ["Ha Noi", "Ha Long", "Sapa"],
    Central: ["Da Nang", "Hoi An", "Hue"],
    Southern: ["HCMC", "Can Tho", "Binh Thuan"],
    // Island: ["Phu Quoc", "Cat Ba", "Ly Son"],
  };
  return (
    <nav
      style={{ color: "black" }}
      className="flex justify-between items-center h-20 px-4 fixed top-0 left-0 z-50 w-full text-white bg-gray-300 backdrop-blur-md"
    >
      <h1>VietnamTravel.</h1>
      <ul className="hidden md:flex space-x-6 pr-0 sm:pr-0 md:pr-0 lg:pr-20 xl:pr-40">
        {/* Các phần tử trong ul */}
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li
          className="relative group"
          onMouseEnter={() => setDropdownIsShown(true)}
          onMouseLeave={() => setDropdownIsShown(false)}
        >
          <span className="cursor-pointer">Destination</span>
          {dropdownIsShown && (
            <div className="absolute top-full left-1/2 transform -translate-x-[55%] z-40 bg-gray-200 text-black shadow-lg rounded-md w-screen max-w-xl px-4 py-4">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                {Object.entries(destinations).map(([region, places]) => (
                  <div key={region}>
                    <h3 className="font-semibold text-lg">{region}</h3>
                    <ul>
                      {places.map((place) => (
                        <li key={place} className="">
                          <Link
                            to={`/destination/${place
                              .toLowerCase()
                              .replace(/\s+/g, "")}`}
                            className="block hover:underline whitespace-nowrap"
                          >
                            {place}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </li>

        <li>
          <Link to="/about">About us</Link>
        </li>
      </ul>

      <div className="hidden md:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        {/* <svg
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
              </svg> */}
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
          <ul className="mb-4 space-y-4">
            <li className="border-b-2 border-b-gray-600 flex justify-center">
              <Link to="/home">Home</Link>
            </li>
            <li
              className="relative group border-b-2 border-b-gray-600 flex justify-center"
              onClick={() => setDropdownIsShown(!dropdownIsShown)} // Sử dụng onClick thay vì onMouseEnter/Leave
            >
              <span className="cursor-pointer">Destination</span>
              {dropdownIsShown && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 z-40 bg-gray-200 text-black shadow-lg rounded-md w-screen max-w-2xl px-4 py-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
                    {Object.entries(destinations).map(([region, places]) => (
                      <div key={region}>
                        <h3 className="font-semibold text-lg">{region}</h3>
                        <ul>
                          {places.map((place) => (
                            <li key={place} className="">
                              <Link
                                to={`/destination/${place
                                  .toLowerCase()
                                  .replace(/\s+/g, "")}`}
                                className="block hover:underline whitespace-nowrap"
                              >
                                {place}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li className="border-b-2 border-b-gray-600 flex justify-center">
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
