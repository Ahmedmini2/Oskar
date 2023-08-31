// eslint-disable-next-line no-unused-vars
import React from 'react'

import { Link } from "react-router-dom";

import { useParams } from 'react-router-dom';
import parse from "react-html-parser";
import { HiDownload } from "react-icons/hi";
import { HiAnnotation } from "react-icons/hi";
import { HiPlay } from "react-icons/hi";
import { useBrandData } from '../../services/fetchers/brands/brands';



const BrandDetails = () => {

    
    const { id } = useParams() ;

    const {data} = useBrandData(id);

  return (
    
    <div  className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">

   
        
    <div className="lg:col-span-4 mt-10 lg:mt-0">
      <img className="w-full rounded-xl" src={data?.data.brand_banner} alt="Image Description"/>
    </div>

    <div className="lg:col-span-3">
      <img className=" w-62 h-24" src={data?.data.brand_logo} alt="Image Description"/>
      
      <div className="grid lg:grid-cols-2 lg:gap-x-4 xl:gap-x-12 lg:items-center">
       { parse(data?.data.brand_key_points)}
      </div>


      <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
       <p> {data?.data.brand_short_description} </p>
      </div>

      <div className="mt-4 lg:mt-6">
        <span className="text-xs font-medium text-gray-800 uppercase dark:text-gray-200">Short Links:</span>

        <div className="mt-4 flex gap-x-4">
        <Link className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-cyan-300 hover:bg-cyan-400 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" to={data?.data.brand_catalogue}>
         <HiDownload /> Download Catalog
        </Link> <Link className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-cyan-300 hover:bg-cyan-400 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" to={data?.data.brand_video}>
         <HiPlay/> Watch Video
        </Link> <Link className="w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-cyan-300 hover:bg-cyan-400 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" to="/contact">
         <HiAnnotation/> Bulk Enquiry
        </Link>
        </div>
      </div>
      
    </div>


  </div>
   
  )
}

export default BrandDetails