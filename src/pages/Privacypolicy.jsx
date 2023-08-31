import PrivacyHeader from "../components/PrivacyPage/PrivacyHeader"
import  { useEffect } from 'react';

const Privacypolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  
  return (
    <PrivacyHeader/>
  )
}

export default Privacypolicy