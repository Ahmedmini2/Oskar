/* eslint-disable no-unused-vars */
import React from 'react'
import { footerLogo } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import { footerBotLinks, navLinks } from "../../constants";
import { useTranslation } from 'react-i18next';


export const Footer = () => {

  const {t} = useTranslation();
 const location = useLocation();
 const isHomeTwoPage = true;
 return (
    <section className="pt-4">
      <div className="w-full bg-[#364255]">
        <div className="max-w-5xl mx-auto py-10 lg:px-0 px-4">
          <div className="flex items-center justify-between">
            <div>
              <Link to="/">
                <img src={footerLogo} className="w-24" />
              </Link>
            </div>
            {/* it show in home 2 */}
            {isHomeTwoPage && (
              <div className="">
                <div className="flex items-center gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your email to get the latest news..."
                      className="py-1 px-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <button className="py-1 px-4 bg-[#47B0E4] text-white">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            )}
            {/* it should be hide if in homepagetwo */}
            {!isHomeTwoPage && (
              <div className="">
                <div className="flex items-center gap-4 text-white">
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            )}
          </div>
          {/* Its need to show in home 2 */}
          {isHomeTwoPage && (
            <div className="pt-6">
              <div className="border-t">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 py-6 text-white">
                  <div>
                    <h1 className="text-lg pb-2">{t('support')}</h1>
                    <Link to="/privacy policy" className="text-sm pb-2"><p className='py-1'>{t('privacy_policy')}</p></Link>
                    <Link to="/Delivery Terms" className="text-sm pb-1"><p className='py-1'>{t('delivery_term')}</p></Link>
                    <Link to="/Terms of Use" className="text-sm pb-1"><p className='py-1'>{t('terms_of_use')}</p></Link>
                    <Link to="/Warranty Terms" className="text-sm pb-1"><p className='py-1'>{t('warranty_terms')}</p></Link>
                  </div>
                  <div>
                    <h1 className="text-lg pb-2">Column One</h1>
                    <p className="text-sm pb-1">Twenty One</p>
                    <p className="text-sm pb-1">Twenty One</p>
                    <p className="text-sm pb-1">Twenty One</p>
                    <p className="text-sm pb-1">Twenty One</p>
                  </div>
                  <div>
                    <h1 className="text-lg pb-2">Column One</h1>
                    <p className="text-sm pb-1">Twenty One</p>
                    <p className="text-sm pb-1">Twenty One</p>
                    <p className="text-sm pb-1">Twenty One</p>
                    <p className="text-sm pb-1">Twenty One</p>
                  </div>
                  <div>
                    <h1 className="text-lg pb-2">Call - Center</h1>
                    <p className="text-sm pb-1 text-[#48B0E4]">
                      +971 56 208 68 93
                    </p>
                    <p className="text-sm pb-1 text-[#48B0E4]">
                      +971 56 208 68 93
                    </p>
                    <h1 className="text-lg pb-2 capitalize">join us</h1>
                    <div className="flex items-center gap-4 text-white">
                      <a href="#">
                        <i className="fab fa-youtube-play"></i>
                      </a>
                      <a href="#">
                      <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="	fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="	fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/*  */}
          <div className="py-6">
            <div className="border-t">
              <div className="flex md:flex-row flex-col gap-6 items-center justify-between text-white pt-8">
                <div className="">
                  <p className="text-xs">
                    Oskar Phone L.L.C @ 1999. All rights reserved.
                  </p>
                </div>
                <div className="">
                  <div className="flex items-center gap-4 text-white">
                  {footerBotLinks.map((nav, index) => (
                    <Link key={nav.id} to={nav.id} className="capitalize">
                     {nav.title}
                    </Link>
                  ))}
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

