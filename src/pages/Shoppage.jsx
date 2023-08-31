/* eslint-disable no-unused-vars */
import { React } from "react";
import HeroSection from "../components/Shop/HeroSection";
import BestSeller from "../components/Shop/BestSeller";

const Shoppage = () => {
  return (
    <section className="">
      <div>
        <HeroSection />
      </div>
      <div className="py-28">
        <BestSeller />
      </div>
      <div className="">
        <BestSeller />
      </div>
    </section>
  );
};

export default Shoppage;
