/* eslint-disable no-unused-vars */
import React from "react";

const WhyUsSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto pt-16">
        <div className="pb-12">
          <h1 className="text-3xl xl:text-5xl font-extrabold text-gray-800 mx-auto text-center xl:text-center pb-4">
            Why Us
          </h1>
        </div>
        <section id="carousel">
          <figure className="visible xl:px-20">
            <div className="flex flex-wrap justify-between md:flex md:justify-around">
              <div className="xl:w-1/2 lg:w-5/12 w-11/12 sm:w-2/5 md:w-5/12 xl:pb-0 pb-12 gap-2">
                <div className="shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded bg-slate-50">
                  <div className="pl-6 pr-6 pt-10 relative h-auto">
                    <div className="drop-shadow-xl h-16 w-16 rounded-full bg-gray-100 absolute top-0 left-0 -mt-8 mr-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className=" px-3 py-3 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>

                    <h1 className="text-base text-gray-600 tracking-widest uppercase leading-10 mt-10">
                      {" "}
                      This is title of the travel package that is being featured
                      here.{" "}
                    </h1>

                    <p className="text-base text-gray-600 leading-8 mt-10 mb-10">
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring which I enjoy
                      with my whole heart. I am alone, and feel the charm of
                      existence in this spot, which was created for the bliss of
                      souls like mine. I am so happy, my dear friend, so
                      absorbed in the exquisite sense of mere tranquil
                      existence. I should be incapable of drawing a single
                      stroke at the present moment; and yet I feel that I never
                      was a .
                    </p>
                    <div className="flex justify-end mt-2"></div>
                  </div>
                </div>
              </div>
              <div className="xl:w-1/2 lg:w-5/12 w-11/12 sm:w-2/5 md:w-5/12 xl:pb-0 pb-12 gap-2">
                <div className="shadow-lg mx-3 xl:mx-3 sm:mx-0 lg:mx-0 rounded bg-slate-50">
                  <div className="pl-6 pr-6 pt-10 relative h-auto">
                    <div className="drop-shadow-xl h-16 w-16 rounded-full  bg-gray-100 absolute top-0 left-0 -mt-8 mr-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className=" px-3 py-3 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>

                    <h1 className="text-base text-gray-600 tracking-widest uppercase leading-10 mt-10">
                      {" "}
                      This is title of the travel package that is being featured
                      here.{" "}
                    </h1>

                    <p className="text-base text-gray-600 leading-8 mt-10 mb-10">
                      A wonderful serenity has taken possession of my entire
                      soul, like these sweet mornings of spring which I enjoy
                      with my whole heart. I am alone, and feel the charm of
                      existence in this spot, which was created for the bliss of
                      souls like mine. I am so happy, my dear friend, so
                      absorbed in the exquisite sense of mere tranquil
                      existence. I should be incapable of drawing a single
                      stroke at the present moment; and yet I feel that I never
                      was a .
                    </p>
                    <div className="flex justify-end mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </section>
      </div>
    </section>
  );
};

export default WhyUsSection;
