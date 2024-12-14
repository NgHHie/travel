import React from "react";

import Selection from "./Selection";

import hanoi from "../assets/hanoi.jpg";
import halong from "../assets/halong.jpg";
import sapa from "../assets/sapa.jpg";
import danang from "../assets/danang.jpg";
import hoian from "../assets/hoian.jpg";
import hue from "../assets/hue.jpg";
import hcmc from "../assets/hcmc.jpg";
import cantho from "../assets/cantho.jpg";
import binhthuan from "../assets/binhthuan.jpg";
import phuquoc from "../assets/phuquoc.jpg";
import catba from "../assets/catba.jpg";
import lyson from "../assets/lyson.jpg";

const Selections = () => {
  return (
    <section className="container px-4 grid gap-4 sm:grid-cols-3 sm:grid-rows-auto">
      {/* Dòng tiêu đề */}
      <div className="sm:col-span-3 border-b border-gray-300 pt-2">
        <h2 className="text-center font-bold text-lg">NORTHERN VIETNAM</h2>
        <p className="text-center text-gray-600">
          The north of Vietnam makes a statement with majestic mountain ranges,
          centuries-old rice terraces, and fascinating ethnic groups.
        </p>
      </div>

      {/* Các hình ảnh */}
      <Selection figure={hanoi} caption="Ha Noi" />
      <Selection figure={halong} caption="Ha Long" />
      <Selection figure={sapa} caption="Sapa" />

      {/* Dòng tiêu đề tiếp theo */}
      <div className="sm:col-span-3 border-b border-gray-300 pt-2">
        <h2 className="text-center font-bold text-lg">CENTRAL VIETNAM</h2>
        <p className="text-center text-gray-600">
          Central Vietnam is known for its well-preserved historical sites,
          smiling locals, and soothing natural beauty.
        </p>
      </div>

      {/* Các hình ảnh */}
      <Selection figure={danang} caption="Da Nang" />
      <Selection figure={hoian} caption="Hoi An" />
      <Selection figure={hue} caption="Hue" />

      {/* Dòng tiêu đề tiếp theo */}
      <div className="sm:col-span-3 border-b border-gray-300 pt-2">
        <h2 className="text-center font-bold text-lg">SOUTHERN VIETNAM</h2>
        <p className="text-center text-gray-600">
          From island escapes to non-stop action, southern Vietnam offers both
          vibrant urban energy and mellow countryside.
        </p>
      </div>

      {/* Các hình ảnh */}
      <Selection figure={hcmc} caption="Ho Chi Minh City" />
      <Selection figure={cantho} caption="Can Tho" />
      <Selection figure={binhthuan} caption="Binh Thuan" />

      {/* Dòng tiêu đề tiếp theo */}
      <div className="sm:col-span-3 border-b border-gray-300 pt-2">
        <h2 className="text-center font-bold text-lg">ISLANDS VIETNAM</h2>
        <p className="text-center text-gray-600">
          Vietnam’s islands are a paradise of white sandy beaches, crystal-clear
          waters, and vibrant coral reefs.
        </p>
      </div>

      {/* Các hình ảnh */}
      <Selection figure={phuquoc} caption="Phu Quoc" />
      <Selection figure={catba} caption="Cat Ba" />
      <Selection figure={lyson} caption="Ly Son" />
    </section>
  );
};

export default Selections;
