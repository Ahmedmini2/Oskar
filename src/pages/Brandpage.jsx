/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import BrandDetails from "../components/Brands/BrandDetails";
import BrandProducts from "../components/Brands/BrandProducts";


const BrandPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <section>
     
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

        <BrandDetails />

        <BrandProducts />
        
      </div>

     
      
    </section>
  );
};

export default BrandPage;
