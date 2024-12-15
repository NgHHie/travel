import React from "react";

import borabora1 from "../assets/borabora1.jpg";
import borabora2 from "../assets/borabora2.jpg";
import maldives1 from "../assets/maldives1.jpg";
import maldives2 from "../assets/maldives2.jpg";
import maldives3 from "../assets/maldives3.jpg";
import vietnam1 from "../assets/vietnam1.jpg";
import vietnam2 from "../assets/vietnam2.jpg";
import vietnam3 from "../assets/vietnam3.webp";
import vietnam4 from "../assets/vietnam4.jpg";
import vietnam5 from "../assets/vietnam5.jpg";

const Destinations = () => {
  return (
    <section className="container px-4 flex flex-col items-center my-16">
      <h2 className="text-3xl font-bold mb-4 text-center">PLACES</h2>
      <p className="text-xl mb-8 text-gray-600 text-center">
        Each destination in Vietnam offers its own unique charm. Discover the
        fascinating variety of Vietnam’s landscapes and culture through these
        interactive tours.
      </p>

      <div className="group grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="col-span-2 md:col-span-3 md:row-span-2 overflow-hidden">
          <img
            src={vietnam3}
            alt="vietnam1"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 max-w-full max-h-full"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={vietnam4}
            alt="vietnam4"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 max-w-full max-h-full"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={vietnam2}
            alt="vietnam2"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 max-w-full max-h-full"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={vietnam1}
            alt="vietnam1"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 max-w-full max-h-full"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={vietnam5}
            alt="vietnam5"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 max-w-full max-h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Destinations;
