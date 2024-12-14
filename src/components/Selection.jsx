import React from "react";
import { Link } from "react-router-dom";

const Selection = ({ figure, caption, id = "hanoi" }) => {
  return (
    <figure className="relative">
      <Link to={`/destination/${id}`}>
        <img
          src={figure}
          alt={caption}
          className="w-full h-full object-cover"
        />
        <figcaption className="absolute z-10 bottom-2 left-2 text-white text-2xl font-bold">
          {caption}
        </figcaption>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </Link>
    </figure>
  );
};

export default Selection;
