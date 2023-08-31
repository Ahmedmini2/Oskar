/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import { fetchAllBrands } from '../../services/fetchers/brands/brands';



const BrandLogo = () => {
    const { isLoading , isSuccess , isError , data, error } = useQuery(
        ["allblogs"],
        fetchAllBrands,
        { staleTimeout: 6000}
        )

  return (
    <div className="max-w-[85rem] px-2 py-10 sm:px-2 lg:px-4 lg:py-8 mx-auto">
      
            <div className="sm:w-full xl:w-full  mx-auto text-center mb-6">
                <h2 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800 dark:text-gray-200">40+ Brands Over the years</h2>
            </div>

            <div className="my-2 md:my-4 grid grid-cols-5 sm:justify-center gap-4 sm:gap-x-4 lg:gap-x-4">      
                {data?.map((brand) => (
                    <Link key={brand.brand_id} className="flex-shrink-0 transition hover:-translate-y-1" to={`brand/${brand.brand_id}`}>
                        <img className=" w-[220px] h-[80px]" src={brand.brand_logo} alt={brand.brand_name} />
                    
                    </Link>
                ))}
            </div>
        </div>
  )
}

export default BrandLogo