/* eslint-disable no-unused-vars */
import  { useEffect } from 'react';
import { BrandHeader } from "../components/Portfolio/BrandHeader";
import OurProducts from "../components/Portfolio/OurProducts";
import OurBrands from "../components/Portfolio/OurBrands";

const PortfolioPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <section>
      <BrandHeader />
      <div className="py-4 text-center">
        <h1 className="text-red-500 text-[40px]">-</h1>
      </div>
      <OurProducts />
      <OurBrands />
    </section>
  );
};

export default PortfolioPage;
