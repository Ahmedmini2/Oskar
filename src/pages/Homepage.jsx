/* eslint-disable no-unused-vars */
import  { useEffect } from 'react';
import HeroSection from "../components/Home/HeroSection";
import AppealSection from "../components/Home/AppealSection";
import OurBrand from "../components/Home/OurBrand";
import NewsBlog from "../components/Home/NewsBlog";
import QuestionSection from "../components/Home/QuestionSection";
import IconBlock from "../components/Home/IconBlock";
import CountryCard from "../components/Home/CountryCard";
import OurParteners from "../components/Home/OurParteners";
import OurBrandsImages from "../components/Home/OurBrandsImages";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <section className="">
      <div>
        <HeroSection />
      </div>
      <div className="py-12">
        <AppealSection />
      </div>
      <div className="py-12">
        <OurBrand />
      </div>
      <div className="py-18">
        <IconBlock />
      </div>
      <div className="py-18">
        <OurBrandsImages />
      </div>
      <div className=" py-18">
        <CountryCard />
      </div>
      <div className="py-18">
        <OurParteners />
      </div>
      <div className="py-18">
        <NewsBlog />
      </div>
      
      
    </section>
  );
};

export default HomePage;
