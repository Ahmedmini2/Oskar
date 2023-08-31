// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useParams } from 'react-router-dom';
import parse from "react-html-parser";
import { useBrandProductsData } from '../../services/fetchers/brands/brands';

const BrandProducts = () => {

    
    const { id } = useParams() ;

    const {data} = useBrandProductsData(id);

  return (
    <div className=" my-5 " >
    <h2 className="text-4xl font-semibold"> Feature Products </h2>

    <div className="grid lg:grid-cols-4 lg:gap-x-2 xl:gap-x-4 lg:items-center mt-9 gap-y-4">
        {data?.data.map((product) => ( 
      <div key={product.prosuct_id} className="bg-white shadow-md rounded-md border-black px-3 py-8 ">
        <div className="flex flex-col justify-start">
          <img className="w-full rounded-xl" src={product.product_image} alt={product.product_name} />
          <h2 className="text-lg font-semibold my-2"> {product.product_name}</h2>
          
          <p className='pt-2 mb-4'>{parse(product.short_description)}</p>
        
        </div>
      </div>
        ))}
     

    </div>

  </div>
  )
}

export default BrandProducts