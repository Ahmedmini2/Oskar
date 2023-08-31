/* eslint-disable no-unused-vars */
import  { useEffect } from 'react';
import { NewsHeader } from "../components/News/NewsHeader";
import { MainBlogs } from "../components/News/MainBlogs";
import MoreSimilarNews from "../components/News/MoreSimilarNews";

const ExportPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <section>
      <NewsHeader />
      <div className="py-4 text-center">
        <h1 className="text-red-500 text-[40px]">-</h1>
      </div>
      <MainBlogs />
      <MoreSimilarNews />
     
      
    </section>
  );
};

export default ExportPage;
