// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/Homepage";
import ContactPage from "./pages/Contactpage";
import Shoppage from "./pages/Shoppage";
import { Navbar } from "./components/Navbars/Navbar";
import { Footer } from "./components/Footers/Footer";
import AboutPage from "./pages/Aboutpage";
import ExportPage from "./pages/Exportpage";
import FAQPage from "./pages/FAQpage";
import BlogPost from "./pages/BlogPost";
import Blogs from "./pages/Blogs";
import PortfolioPage from "./pages/Portfoliopage";
import BrandPage from "./pages/Brandpage";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Privacypolicy from "./pages/Privacypolicy";
import Termsofuse from "./pages/Termsofuse";
import Warrantypage from "./pages/Warrantypage";
import Deliverypage from "./pages/Deliverypage";
import { OurStory } from "./pages/OurStory";


const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<Shoppage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/export" element={<ExportPage />} />
        <Route path="/our story" element={<OurStory />} />
        <Route path="/brands" element={<PortfolioPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/Blog/:id" element={<BlogPost />} />
        <Route path="/Brand/:id" element={<BrandPage />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Privacy Policy" element={<Privacypolicy />} />
        <Route path="/Terms of Use" element={<Termsofuse />} />
        <Route path="/Warranty Terms" element={<Warrantypage />} />
        <Route path="/Delivery Terms" element={<Deliverypage />} />
      </Routes>
      <Footer />
    </Router>
    </QueryClientProvider>
  );
};

export default App;
