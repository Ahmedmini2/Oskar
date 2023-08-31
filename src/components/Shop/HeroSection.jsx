/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import cableschargers from "../../assets/images/Catogaries/cablesChargers.jpg";
import cars from "../../assets/images/Catogaries/cars.jpg";
import cases from "../../assets/images/Catogaries/cases.jpg";
import gaming from "../../assets/images/Catogaries/gaming.jpg";
import speakers from "../../assets/images/Catogaries/speakers.jpg";
import homeautomation from "../../assets/images/Catogaries/homeautomation.jpg";
import kidelectronics from "../../assets/images/Catogaries/kid.jpg";
import powerbanks from "../../assets/images/Catogaries/powerbank.jpg";
import smartwatches from "../../assets/images/Catogaries/smartwatch.jpg";
import travels from "../../assets/images/Catogaries/travel.jpg";

const HeroSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Cables &Xhargers");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categoryImages = {
    "Cables &Xhargers": cableschargers,
    "Car mobile Accessories": cars,
    "Cases & Covers": cases,
    "Gaming Accessories": gaming,
    "Speakers & Headsets": speakers,
    "Home Automation": homeautomation,
    "Kids Electronics": kidelectronics,
    "Power Banks": powerbanks,
    "Smartwatches & Accessoties": smartwatches,
    "Travel Essentials": travels,
  };
  return (
    <section className="">
      <div className="">
        <div className="grid md:grid-cols-3 grids-cols-2">
          {/*  */}
          <div className=" col-span-2 ">
            <img
              src={categoryImages[selectedCategory]}
              alt={selectedCategory}
              className="w-full"
            />
          </div>
          {/*  */}
          <div className="">
            <h1
              className={`py-2 px-20 text-center cursor-pointer ${
                selectedCategory === "Cables &Xhargers"
                  ? "bg-blue-300 text-white"
                  : "hover:bg-blue-300 hover:text-white"
              }`}
              onClick={() => handleCategoryClick("Cables &Xhargers")}
            >
              Cables &Xhargers
            </h1>
            <h1
              className={`py-2.5 px-20 text-center cursor-pointer ${
                selectedCategory === "Car mobile Accessories"
                  ? "bg-blue-300 text-white"
                  : "hover:bg-blue-300 hover:text-white"
              }`}
              onClick={() => handleCategoryClick("Car mobile Accessories")}
            >
              Car mobile Accessories
            </h1>
            <h1
              className={`py-2.5 px-20 text-center cursor-pointer ${
                selectedCategory === "Cases & Covers"
                  ? "bg-blue-300 text-white"
                  : "hover:bg-blue-300 hover:text-white"
              }`}
              onClick={() => handleCategoryClick("Cases & Covers")}
            >
              Cases & Covers
            </h1>
            <h1
              className={`py-2.5 px-20 text-center cursor-pointer ${
                selectedCategory === "Gaming Accessories"
                  ? "bg-blue-300 text-white"
                  : "hover:bg-blue-300 hover:text-white"
              }`}
              onClick={() => handleCategoryClick("Gaming Accessories")}
            >
              Gaming Accessories
            </h1>
            <h1
              className={`py-2.5 px-20 text-center cursor-pointer ${
                selectedCategory === "Speakers & Headsets"
                  ? "bg-blue-300 text-white"
                  : "hover:bg-blue-300 hover:text-white"
              }`}
              onClick={() => handleCategoryClick("Speakers & Headsets")}
            >
              Speakers & Headsets
            </h1>
            <h1
              className={`py-2 px-20 text-center cursor-pointer ${
                selectedCategory === "Home Automation"
                  ? "bg-blue-300 text-white"
                  : "hover:bg-blue-300 hover:text-white"
              }`}
              onClick={() => handleCategoryClick("Home Automation")}
            >
              Home Automation
            </h1>
            <h1
              className={`py-2 px-20 text-center cursor-pointer ${
                selectedCategory === "Kids Electronics"
                  ? "bg-blue-300 text-white"
                  : "hover:bg-blue-300 hover:text-white"
              }`}
              onClick={() => handleCategoryClick("Kids Electronics")}
            >
              Kids Electronics
            </h1>
            <h1
              className={`py-2 px-20 text-center cursor-pointer ${
                selectedCategory === "Power Banks"
                  ? "bg-blue-300 text-white"
                  : "hover:bg-blue-300 hover:text-white"
              }`}
              onClick={() => handleCategoryClick("Power Banks")}
            >
              Power Banks
            </h1>
            <h1
              className={`py-2 px-20 text-center cursor-pointer ${
                selectedCategory === "Smartwatches & Accessoties"
                  ? "bg-blue-300 text-white"
                  : "hover:bg-blue-300 hover:text-white"
              }`}
              onClick={() => handleCategoryClick("Smartwatches & Accessoties")}
            >
              Smartwatches & Accessoties
            </h1>
            <h1
              className={`py-2 px-20 text-center cursor-pointer ${
                selectedCategory === "Travel Essentials"
                  ? "bg-blue-300 text-white"
                  : "hover:bg-blue-300 hover:text-white"
              }`}
              onClick={() => handleCategoryClick("Travel Essentials")}
            >
              Travel Essentials
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
