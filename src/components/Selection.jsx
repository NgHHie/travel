import React from "react";
import { Link } from "react-router-dom";

const Selection = ({ figure, caption, id = "hanoi" }) => {
  return (
    <figure className="relative group overflow-hidden">
      <Link to={`/destination/${id}`}>
        <img
          src={figure}
          alt={caption}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <figcaption className="absolute z-10 bottom-2 left-2 text-white text-2xl font-bold">
          {caption}
        </figcaption>
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div> */}
      </Link>
    </figure>
  );
};

export default Selection;
