import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams từ react-router-dom
import Selection2 from "./Selection2";
import dataFile from "../json/hanoi.json";

const Search2 = () => {
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
    <section className="container px-4 flex flex-col  my-16">
      {!data ? (
        "Loading..."
      ) : (
        <>
          <p className="text-xl mb-8 text-gray-600 text-justify border-b border-gray-300 pb-4">
            {data.content}
          </p>
          <h2
            style={{
              color: "#a5190e",
            }}
          >
            {data.topthings.title}
          </h2>
          {data.topthings.details.map((detail, index) => (
            <div
              key={index}
              className="my-4" // Căn margin trên dưới
            >
              <h3 className="text-xl font-bold">{detail.name}</h3>
              <p className="text-xl text-gray-600 text-justify ">
                {detail.content}
              </p>
            </div>
          ))}
          <h2
            style={{
              color: "#a5190e",
            }}
          >
            {data.weather.title}
          </h2>
          <p className="my-4 text-xl text-gray-600 text-justify ">
            {data.weather.content}
          </p>
          <h2
            style={{
              color: "#a5190e",
            }}
          >
            {data.transport.title}
          </h2>
          <p className=" my-4 text-xl text-gray-600 text-justify ">
            {data.transport.content}
          </p>

          <h2
            className="text-center"
            style={{
              color: "#b2910e",
            }}
          >
            {data.also.title}
          </h2>
          <section className="container mt-4 grid gap-4 sm:grid-cols-3 sm:grid-rows-auto">
            {data.also.details.map((detail, index) => (
              <Selection2
                figure={detail.image}
                caption={detail.title}
                id={detail.id}
              ></Selection2>
            ))}
          </section>
        </>
      )}
    </section>
  );
};

export default Search2;
