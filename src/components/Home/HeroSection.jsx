/* eslint-disable no-unused-vars */
import React from "react";
import powerbank from "../../assets/images/powerbank.jpg";
import headphone from "../../assets/images/headphone.jpg";
import smartwatch from "../../assets/images/smartwatch.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const HeroSection = () => {
  const [t] = useTranslation()
  return (
    <section className="">
      <div className="grid md:grid-cols-2 grid-cols-1">
        {/*  */}
        <div className="relative">
          <img src={powerbank} className="w-full" />
          <div className="absolute top-5 left-5 text-white transition duration-300">
            <h1 className="capitalize text-xl font-bold">{t("powerbank")}</h1>
          </div>
          <div className="absolute bottom-5 left-5 text-white">
            <p className="pb-3 text-sm max-w-md">
            {t("powerbank_text")}
            </p>
            <Link to="#" className="text-white uppercase  hover:bg-white hover:text-cyan-300 py-2 px-4 rounded-full transition duration-300">
            {t("learn_more")}
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-1">
          <div className="w-max sm:w-screen md:w-full relative">
            <img src={headphone} className="w-full" />
            <div className="absolute top-5 left-5 text-white">
              <h1 className="capitalize text-xl font-bold">{t("headphones")}</h1>
            </div>
            <div className="absolute bottom-5 left-5 text-white">
              <p className="pb-3 text-md max-w-sm">
              {t("headphones_text")}
              </p>
              <Link to="#" className="text-white uppercase  hover:bg-white hover:text-cyan-300 py-2 px-4 rounded-full transition duration-300">
              {t("learn_more")}
              </Link>
            </div>
          </div>
          <div className="w-max sm:w-screen md:w-full relative ">
            <img src={smartwatch} className="w-full" />
            <div className="absolute top-3 left-5 text-white">
              <h1 className="capitalize text-xl  font-bold">{t("smart_watch")}</h1>
            </div>
            <div className="absolute bottom-3 left-5 text-white">
              <p className="pb-3 text-sm max-w-sm ">
              {t("smart_watch_text")}
              </p>
              <Link to="#" className="text-white uppercase  hover:bg-white hover:text-cyan-300 py-2 px-4 rounded-full transition duration-300">
              {t("learn_more")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
