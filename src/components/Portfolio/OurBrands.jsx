/* eslint-disable no-unused-vars */
import React from "react";
import { levelobrand, porodo } from "../../assets";
import { useTranslation } from "react-i18next";
import { useQuery } from '@tanstack/react-query';
import { fetchAllBrands, useBrandProductsDataByType } from '../../services/fetchers/brands/brands';
import { Link } from "react-router-dom";

const OurBrands = () => {

  const {t} = useTranslation();

  const { isLoading , isSuccess , isError , data, error } = useQuery(
    ["allblogs"],
    fetchAllBrands,
    { staleTimeout: 6000}
    )

    const changeType = (type) =>{
      const {data} = useBrandProductsDataByType(type);
    }

  return (
    <section className="bg-white max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto pt-16">
        <div className="pb-12">
          <h2 className="text-3xl xl:text-5xl font-extrabold text-gray-800 mx-auto text-center xl:text-center pb-4">
            40
          </h2>
          <h2 className="text-3xl xl:text-4xl font-extrabold text-gray-800 mx-auto text-center xl:text-center">
          {t('brands_associated')}
          </h2>
          
        </div>
        <div className="flex flex-row items-center justify-center py-2 pb-8 gap-4">
        <button className="primary_btn"> {t('all')} </button>
        <button className="primary_btn" onClick={changeType('Exclusive Brands')} value={t('execlusive')}> {t('execlusive')} </button>
        <button className="primary_btn" value={t('execlusive')}> {t('authorized')} </button>
        </div>
       </div>



       <div className=" max-w-full grid  md:grid-cols-3 lg:grid-cols-4 ss:grid-col-1 sm:grid-cols-2 gap-4">
       {data?.map((brand) => (
        <div key={brand.brand_id} className=" bg-white drop-shadow-md p-4 w-full border-2 rounded-md border-gray-200 hover:border-transparent hover:-translate-y-2 transition duration-500 ">
          <Link to={`../brand/${brand.brand_id}`} >
          <div className="flex flex-col justify-center items-center">
            <img src={brand.brand_logo} alt={brand.brand_name} className="transition hover:-translate-y-2 w-1/2" />
            
            <h2 className=" font-bold uppercase py-2 text-xl ">{brand.brand_name}</h2>
            <h2 className=" py-2 font-semibold">{brand.product_catogry}</h2>
            <h3 className=" py-2 bg-slate-100 px-4 rounded-xl">{brand.brand_category}</h3>
          </div>
          </Link>
        </div>
         ))}
        
       </div>
    </section>
  );
};

export default OurBrands;
