/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { AboutHeader } from "../components/About/AboutHeader";
import { GalleryMasonry } from "../components/About/GalleryMasonry";
import WhyUsSection from "../components/About/WhyUsSection";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <section>
      <AboutHeader />
      <div className="py-4 text-center">
        <h1 className="text-red-500 text-[40px]">-</h1>
      </div>
    <GalleryMasonry />
    <WhyUsSection />
      
    </section>
  );
};

export default AboutPage;
