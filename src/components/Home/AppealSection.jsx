/* eslint-disable no-unused-vars */
import React, { useState, } from "react";
import { Link } from "react-router-dom";
import i18next from "../../services/i18next";
import { useTranslation } from "react-i18next";

const AppealSection = () => {
  const [t] = useTranslation()

  const [currentIndex, setCurrentIndex] = useState(0);
  const contentData = [
    {
      name: "Marry",
      role: "Sales Contact",
      phone: "+971 56 208 68 93",
      email: "anar@anargmail.com",
      hours: "Monday-Sunday 9am-8am",
    },
    {
      name: "John Doe",
      role: "Purchase Contact",
      phone: "+971 56 208 68 93",
      email: "anar@anargmail.com",
      hours: "Monday-Sunday 9am-8am",
    },
    {
      name: "John Doe",
      role: "Ecommers Contact",
      phone: "+971 56 208 68 93",
      email: "anar@anargmail.com",
      hours: "Monday-Sunday 9am-8am",
    },

    // Add more content sets as needed
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? contentData.length - 1 : prevIndex - 1
    );
  };

  const { name, role, phone, email, hours } = contentData[currentIndex];
  return (
    <section className="max-w-7xl mx-auto">
      <div className="bg-gray-50 px-6 py-8">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
          <div>
            <h1 className=" text-2xl pb-3">{t('appeal_title')}</h1>
            <p className=" text-sm">
            {t("appeal_description")}
            </p>
          </div>
          <div className="px-6">
            <div className="bg-white p-4 shadow-md text-center rounded-lg">
              <h1 className="capitalize text-xl pb-2">{name}</h1>
              <p className="uppercase text-xs pb-4">{role}</p>
              <div className="py-1 text-gray-500">
                <i className="fa fa-phone">
                  
                </i>
                <span className="ml-4">{phone}</span>
              </div>
              <div className="py-1 text-gray-500">
                <i className="fa fa-envelope">
                  
                </i>
                <span className="ml-4">{email}</span>
              </div>
              <div className="pt-1 pb-4 text-gray-500">
                <i className="fa fa-clock">
                  
                </i>
                <span className="ml-4">{phone}</span>
              </div>
              <div className="flex items-center justify-between">
                <i
                  onClick={handlePrevious}
                  className="fa fa-angle-left cursor-pointer text-xl "
                ></i>
                <Link className="uppercase text-[#015DD3] text-xs">
                {t('appeal_see_more')}
                </Link>
                <i
                  onClick={handleNext}
                  className="fa fa-angle-right cursor-pointer text-xl "
                ></i>
              </div>
              {/* Add the "See more" link here if needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppealSection;
