/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { levelobrand, porodo, rectangle1 } from "../../assets";

const DownloadSection = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <div className="lg:w-full lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
      <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold uppercase mb-10">
        Downloads
      </h1>

      <div className="lg:w-7xl max-w-7xl mx-auto ">
        {/* <!-- Question 1 --> */}

        <div className="w-full md:px-6 border-l-4  bg-neutral-50 p-6 ">
          <div
            id="mainHeading"
            className="flex justify-between items-center w-full"
          >
            <div className=" ">
              <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                {" "}
                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                  Download Video
                </span>
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen(!open)}
            >
              <svg
                className={"transform " + (open ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div id="menu"className={"mt-6 w-full " + (open ? "block" : "hidden")}>
            <div className="grid grid-cols-2 w-full">
                {/* Item */}
              <div className="grid grid-cols-2 w-fit">
                <div className="justify-self-center">
                  <img src={rectangle1}></img>
                </div>
                <div className=" text-sm">
                    <p><span className="text-xl font-semibold"> Porodo Catologue</span> - English (pdf,4mb)</p>
                    <p><span className="text-xl font-semibold"> Porodo Catologue</span> - English (pdf,4mb)</p>
                </div>
              </div>

              <div className="grid grid-cols-2 w-fit">
                <div className="justify-self-center">
                  <img src={rectangle1}></img>
                </div>
                <div className=" text-sm">
                    <p><span className="text-xl font-semibold"> Porodo Catologue </span>- English (pdf,4mb)</p>
                    <p><span className="text-xl font-semibold"> Porodo Catologue</span> - English (pdf,4mb)</p>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        {/* <!-- Question 2 --> */}

        <br className=" w-full lg:mt-10 my-8" />

        <div className="w-full md:px-6 border-l-4  bg-neutral-50 p-6 ">
          <div
            id="mainHeading"
            className=" flex justify-between items-center w-full"
          >
            <div className="">
              <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                {" "}
                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                  Download Booklets
                </span>
              </p>
            </div>
            <button
              aria-label="toggler"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              onClick={() => setOpen2(!open2)}
            >
              <svg
                className={"transform " + (open2 ? "rotate-180" : "rotate-0")}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="black"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={"mt-6 w-full " + (open2 ? "block" : "hidden")}
          >
           <div className="grid grid-cols-2 w-full">
                {/* Item */}
              <div className="grid grid-cols-2 w-fit">
                <div className="justify-self-center">
                  <img src={rectangle1}></img>
                </div>
                <div className=" text-sm">
                    <p><span className="text-xl font-semibold"> Porodo Catologue</span> - English (pdf,4mb)</p>
                    <p><span className="text-xl font-semibold"> Porodo Catologue</span> - English (pdf,4mb)</p>
                </div>
              </div>

              <div className="grid grid-cols-2 w-fit">
                <div className="justify-self-center">
                  <img src={rectangle1}></img>
                </div>
                <div className=" text-sm">
                    <p><span className="text-xl font-semibold"> Porodo Catologue </span>- English (pdf,4mb)</p>
                    <p><span className="text-xl font-semibold"> Porodo Catologue</span> - English (pdf,4mb)</p>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default DownloadSection;
