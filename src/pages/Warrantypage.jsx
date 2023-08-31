import WarrantyHeader from "../components/WarrantyTerms/WarrantyHeader"
import  { useEffect } from 'react';

const Warrantypage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }, []);
  return (
    <WarrantyHeader/>
  )
}

export default Warrantypage