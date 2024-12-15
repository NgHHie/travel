import React from "react";
import vietnammap from "../assets/vietnammap.png";
import cauvang from "../assets/cauvang.webp";

const Search = () => {
  return (
    <section
      className="container" // Thêm grid-cols-1 cho màn hình nhỏ
    >
      <div
        className="flex flex-col px-4 my-16 grid gap-8 mx-auto md:grid-cols-3 grid-cols-1 group"
        style={{
          backgroundImage: `url(${cauvang})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          marginRight: "1rem",
          marginLeft: "1rem",

          // height: "100vh", // Chiều cao của section là chiều cao của viewport
          justifyContent: "center", // Căn giữa theo chiều ngang
          alignItems: "center", // Căn giữa theo chiều dọc
        }}
      >
        {/* Div chứa ảnh */}
        <div className="md:col-span-1 p-8 mx-auto">
          <img
            src={vietnammap}
            alt="vietnammap"
            height="400px"
            width="400px"
            className=" transition-transform duration-300 ease-in-out hover:scale-110 max-w-full max-h-full"
          />
        </div>

        {/* Div chứa văn bản */}
        <div className="md:col-span-2 bg-white bg-opacity-70 p-8 max-w-[600px] mx-auto">
          <h3 className="uppercase text-center font-extrabold mb-4">
            The diversity of natural beauty and landscapes
          </h3>
          <p className="mb-10 text-gray-600 text-justify">
            The capital of Hanoi is your gateway to the treasures of the north:
            spectacular mountains, valleys and bays studded with limestone
            karsts. Smack in the centre, up-and-coming Danang is one of
            Vietnam’s most progressive cities. From here you have easy access to
            photogenic riverside towns, national parks and long, sandy beaches.
            The southern metropolis of Ho Chi Minh City will entice you with its
            cool culture and captivating streets (just watch out for those
            motorcycles.) Nearby, the Mekong Delta runs to the sea, passing
            on-the-water villages and mangrove forests along the way. And all
            down Vietnam's S-shaped coast, you’ll find islands big and small,
            just waiting to be explored.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Search;
