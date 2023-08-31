/* eslint-disable no-unused-vars */
import  { useEffect } from 'react';
import { FAQHeader } from "../components/FAQ/FAQHeader";
import FaqQuestion from "../components/FAQ/FaqQuestions";
import DownloadSection from "../components/FAQ/DownloadSection";

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <section>
      <FAQHeader />
      <div className="py-4 text-center">
        <h1 className="text-red-500 text-[40px]">-</h1>
      </div>
      <FaqQuestion />
      <div className="py-4 text-center">
        <h1 className="text-red-500 text-[40px]">-</h1>
      </div>
      <DownloadSection />
     
      
    </section>
  );
};

export default FAQPage;
