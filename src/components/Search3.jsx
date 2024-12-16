import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams từ react-router-dom
import Selection from "./Selection2";
import dataFile from "../json/tip.json";

const Search3 = () => {
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
    <section className="container2 px-4 flex flex-col  my-16">
      {!data ? (
        "Loading..."
      ) : (
        <>
          <p className="text-xl mb-4 text-gray-600 text-justify border-b border-gray-300 pb-4">
            {data.content}
          </p>

          {data.topthings.details.map((detail, index) => (
            <div
              key={index}
              className="mb-8 border-b border-gray-300 pb-4 mt-4 flex  items-center flex-col"
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{
                  color: "#a5190e",
                }}
              >
                {detail.name}
              </h3>
              <img
                src={detail ? detail.image : null}
                className="w-full h-full object-cover mb-4"
              />

              <p
                className="text-xl text-gray-600 text-justify my-2"
                style={{ whiteSpace: "pre-line" }}
              >
                {detail.content}
              </p>
              {detail.tip ? (
                <p className="text-xl text-justify font-bold m-4">
                  {detail.tip}
                </p>
              ) : null}

              {detail.admission ? (
                <p className="text-xl text-left w-full">
                  <span className="font-bold">Admission: </span>
                  {detail.admission}
                </p>
              ) : null}
              {detail.hours ? (
                <p className="text-xl text-left w-full">
                  <span className="font-bold">Hours: </span>
                  {detail.hours}
                </p>
              ) : null}
              {detail.address ? (
                <p className="text-xl text-left w-full">
                  <span className="font-bold">Address: </span>
                  {detail.address}
                </p>
              ) : null}
            </div>
          ))}

          <h2
            className="text-center"
            style={{
              color: "#b2910e",
            }}
          >
            {data.also.title}
          </h2>
          <section className="mt-4 grid gap-4 sm:grid-cols-3 sm:grid-rows-auto">
            {data.also.details.map((detail, index) => (
              <Selection
                key={index}
                figure={detail.image}
                caption={detail.title}
                id={detail.id}
              ></Selection>
            ))}
          </section>
        </>
      )}
    </section>
  );
};

export default Search3;
