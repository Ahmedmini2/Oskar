/* eslint-disable no-unused-vars */
import React from "react";

const QuestionSection = () => {
  return (
    <section className="max-w-5xl mx-auto lg:px-0 px-2">
      <div className="text-center">
        <h1 className="uppercase text-2xl font-medium pb-6">
          Frequent ask qustions
        </h1>
        <div className="max-w-3xl mx-auto text-start">
          <div className="border-b px-2 py-4 text-[#364255]">
            <div className="flex items-center justify-between pb-2">
              <div className="">
                <h1 className="text-lg">How soon will my order ship?</h1>
              </div>
              <div className="cursor-pointer text-xl">
                <i className="fa fa-angle-up"></i>
              </div>
            </div>
            <p className="text-sm">
              Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc
              mattis leo massa.
            </p>
          </div>
          <div className="border-b px-2 py-4 text-[#364255]">
            <div className="flex items-center justify-between ">
              <div className="">
                <h1 className="text-lg">Is there any warranty exclusions?</h1>
              </div>
              <div className="cursor-pointer text-xl">
                <i className="fa fa-angle-right"></i>
              </div>
            </div>
            <p className="text-sm hidden pt-2">
              Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc
              mattis leo massa.
            </p>
          </div>
          <div className="border-b px-2 py-4 text-[#364255]">
            <div className="flex items-center justify-between ">
              <div className="">
                <h1 className="text-lg">Are there any return exclusions?</h1>
              </div>
              <div className="cursor-pointer text-xl">
                <i className="fa fa-angle-right"></i>
              </div>
            </div>
            <p className="text-sm hidden pt-2">
              Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc
              mattis leo massa.
            </p>
          </div>
          <div className="border-b px-2 py-4 text-[#364255]">
            <div className="flex items-center justify-between ">
              <div className="">
                <h1 className="text-lg">
                  Will I be charged for a replacement item?
                </h1>
              </div>
              <div className="cursor-pointer text-xl">
                <i className="fa fa-angle-right"></i>
              </div>
            </div>
            <p className="text-sm hidden pt-2">
              Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc
              mattis leo massa.
            </p>
          </div>
          <div className="border-b px-2 py-4 text-[#364255]">
            <div className="flex items-center justify-between ">
              <div className="">
                <h1 className="text-lg">
                  How can I track my orders & payment?
                </h1>
              </div>
              <div className="cursor-pointer text-xl">
                <i className="fa fa-angle-right"></i>
              </div>
            </div>
            <p className="text-sm hidden pt-2">
              Elementum ullamcorper felis nulla scelerisque. Nunc enim nunc
              mattis leo massa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
