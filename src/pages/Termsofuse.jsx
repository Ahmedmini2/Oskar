import TermsHeader from "../components/TermsOfUse/TermsHeader"
import  { useEffect } from 'react';

const Termsofuse = () => {
   useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <TermsHeader/>
  )
}

export default Termsofuse