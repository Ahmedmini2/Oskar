/* eslint-disable no-unused-vars */
import { logo } from "../../assets";
import { navLinks } from "../../constants";
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link, useLocation } from "react-router-dom";
import i18next from '../../services/i18next'
import { useTranslation } from "react-i18next";




export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation();


  const [t] = useTranslation()

  const ChangeLang = () => {
    if (i18next.language == "en") {
    i18next.changeLanguage("ar")
    } else {
      i18next.changeLanguage("en")
    }
  }

  return (
    
      
    <header className="bg-white">
      <nav className="mx-auto flex  max-w-7xl items-center justify-between p-2 lg:px-4" aria-label="Global">

        {/* Oskar Language */}
        <div className="flex lg:flex-1 mb-12">
        <button href="#" onClick={ChangeLang} className="text-sm font-normal font-heebo leading-6 text-gray-900 tracking-widest">
           {t("lang")}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={"flex lg:hidden " + (mobileMenuOpen ? "hidden" : "flex")}>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div
            className={
              "lg:flex flex-grow items-center" +
              (mobileMenuOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
            style={{ flexDirection: "column" }}  // added flex direction
          >
        {/* Oskar Logo */}
        <div className={"flex lg:flex-1 mb-8 " + (mobileMenuOpen ? "hidden" : "flex")} >
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{t('title')}</span>
            <img className="h-70 w-140" src={logo} alt="Oskar Phone L.L.C" />
          </Link>
        </div>
    
        <Popover.Group className="hidden lg:flex lg:gap-x-20  ">
          {/* <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-normal tracking-widest font-heebo leading-6 text-gray-900">
              Product
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white  shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 heebo text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-normal text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-normal leading-6  heebo text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400 heebo" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover> */}
            {navLinks.map((nav, index) => (
          <Link key={nav.id} to={nav.id} className={` text-sm uppercase tracking-widest active:border-cyan-500 heebo font-normal leading-6 border-transparent hover:border-cyan-300 border-b-2 text-gray-900 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300  hover:border-b-1 hover:border-spacing-y-4 border-cyan-300`}>
            {t(nav.title)}         
          </Link>
            ))}         
        </Popover.Group>

        </div>
        {/* log in button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end mb-12">
          <Link to="#" className="text-white uppercase bg-cyan-300 hover:bg-white hover:text-cyan-300 hover:border-cyan-300 hover:border-2 py-2 px-4 rounded-full transition duration-300">
            {t('signup_button')}
          </Link>
        </div>
      </nav>

      {/* Mobile Logo */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{t('title')}</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt="Oskar Phone L.L.C"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      {/* <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-normal heebo leading-7 text-gray-900 tracking-widest hover:bg-gray-50">
                        Product
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 heebo text-gray-900 tracking-widest hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel> */}
                    </>
                  )}
                </Disclosure>
                {navLinks.map((nav, index) => (
                <a key={nav.id}
                  href={nav.id}
                  className="-mx-3 uppercase block rounded-lg px-3 py-2 text-base font-semibold heebo leading-7 text-gray-900 hover:bg-gray-50 tracking-widest "
                >
                  {t(nav.title)}
                </a>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold heebo leading-7 text-gray-900 hover:bg-gray-50 tracking-widest"
                >
                   {t('signup_button')}
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    
  );
}
