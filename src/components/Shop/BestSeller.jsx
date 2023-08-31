/* eslint-disable no-unused-vars */
import React from "react";
import Slider from "../Sliders/Slider";

const BestSeller = () => {
  return (
    <section className="max-w-6xl mx-auto px-2">
      <div className="">
        <h1 className="uppercase font-medium text-3xl pb-4">best sellers</h1>
        <div className="">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
