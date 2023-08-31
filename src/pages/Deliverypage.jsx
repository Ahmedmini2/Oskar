import DeliveryHeader from "../components/DeliveryTerms/DeliveryHeader"
import  { useEffect } from 'react';

const Deliverypage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <DeliveryHeader/>
  )
}

export default Deliverypage