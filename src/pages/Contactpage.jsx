/* eslint-disable no-unused-vars */
import  { useEffect } from 'react';
import { ContactHeader } from "../components/Contact/ContactHeader";
import SalesContact from "../components/Contact/SalesContact";
import EcommersContact from "../components/Contact/EcommersContact";
import PurchaseContact from "../components/Contact/PurchaseContact";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <section>
      <ContactHeader />
      <div className="py-4 text-center">
        <h1 className="text-red-500 text-[40px]">-</h1>
      </div>
     
        <SalesContact />
      
      <div className="py-4 text-center">
        <h1 className="text-red-500 text-[40px]">-</h1>
      </div>
     
        <EcommersContact />
      
      <div className="py-4 text-center">
        <h1 className="text-red-500 text-[40px]">-</h1>
      </div>
     
        <PurchaseContact />
      
    </section>
  );
};

export default ContactPage;
