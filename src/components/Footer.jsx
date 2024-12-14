import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8 border-t border-gray-300 mt-10">
      <div className="container px-4 sm:flex justify-between items-center">
        <h1 className="px-2">VietnamTravel.</h1>
        <ul className="flex flex-wrap">
          <li className="p-0 px-2">
            <a href="">Home</a>
          </li>
          <li className="p-0 px-2">
            <a href="">Destinations</a>
          </li>
          <li className="p-0 px-2">
            <a href="">About me</a>
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
