/* eslint-disable no-unused-vars */
import React from "react";
import travel from "../../assets/images/Travel.jpg";
import porodo from "../../assets/images/porodo.png";
import levelo from "../../assets/images/levelo.jpg";
import { Link } from "react-router-dom";

const OurBrand = () => {
  return (
    <section className="max-w-7xl mx-auto md:-px-0 px-2">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
        <div>
          <h1 className="uppercase text-xl pb-1">our brands</h1>
          <div className="relative w-full">
            <img src={travel} className="w-full" />
            <div className="absolute bottom-8 left-5">
              <Link className="text-sm uppercase text-[#015DD3]">
                read more
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="">
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 items-center gap-4 bg-gray-50">
              <img src={porodo} className="w-full" />
              <div className="py-2">
                <h1 className="capitalize text-xl pb-8">porodo</h1>
                <p className="text-sm pb-8">
                  This is a title to explain the product produced or created by
                  the person on the left.
                </p>
                <Link to="#" className="text-sm uppercase text-[#015DD3]">
                  read more
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="grid grid-cols-2 items-center gap-4 bg-gray-50">
              <img src={levelo} className="w-full" />
              <div className="py-2">
                <h1 className="capitalize text-xl pb-8">levelo</h1>
                <p className="text-sm pb-8">
                  This is a title to explain the product produced or created by
                  the person on the left.
                </p>
                <Link to="#" className="text-sm uppercase text-[#015DD3]">
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBrand;
