"use client";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useContext } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import LanguageToggleButton from "./LanguageToggleButton";
import { LanguageContext } from "./Providers/LanguageProvider";

const Header = () => {
  const { language } = useContext(LanguageContext);
  const pathname = usePathname();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header className=" text-white">
      <div className="container mx-auto lg:flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-8 hidden ">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className=" p-2 rounded-md">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="3.65143"
                  width="7.30283"
                  height="7.30283"
                  transform="rotate(-30 0 3.65143)"
                  fill="#FFB82B"
                />
                <rect
                  x="3.08374"
                  y="11.1975"
                  width="7.46511"
                  height="7.46511"
                  fill="#FFB82B"
                />
                <rect
                  x="13.5349"
                  y="1.49286"
                  width="7.46511"
                  height="7.46511"
                  fill="#FFB82B"
                />
                <rect
                  x="13.5349"
                  y="11.1975"
                  width="7.46511"
                  height="7.46511"
                  fill="#FFB82B"
                />
              </svg>
            </div>
            <span className="font-light text-xl w-40">
              Green Bangla Courier Service
            </span>
          </div>
        </Link>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-7 text-sm">
          <div className="flex items-center space-x-2">
            <svg
              width="63"
              height="64"
              viewBox="0 0 63 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="31.5"
                cy="32"
                r="31"
                fill="#111C55"
                stroke="#273270"
              />
              <path
                d="M32 42.5C38.0751 42.5 43 37.5751 43 31.5C43 25.4249 38.0751 20.5 32 20.5C25.9249 20.5 21 25.4249 21 31.5C21 37.5751 25.9249 42.5 32 42.5Z"
                stroke="#F6B426"
              />
              <path d="M32 22.5V31.7058L37 35.5" stroke="#F6B426" />
            </svg>

            <div>
              <p>Mon - Sat 9.00 - 18.00</p>
              <p className="hidden md:block text-yellow-500">Sunday Closed</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              width="63"
              height="64"
              viewBox="0 0 63 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="31.5"
                cy="32"
                r="31"
                fill="#111C55"
                stroke="#273270"
              />
              <path
                d="M40.996 23.5H23.004C22.4495 23.5 22 23.8755 22 24.3387V37.6613C22 38.1245 22.4495 38.5 23.004 38.5H40.996C41.5505 38.5 42 38.1245 42 37.6613V24.3387C42 23.8755 41.5505 23.5 40.996 23.5Z"
                stroke="#F6B426"
              />
              <path d="M22 23.5L32.4247 30.5L42 23.7294" stroke="#F6B426" />
            </svg>

            <div>
              <p>Email</p>
              <p>contact@logistics.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              width="63"
              height="63"
              viewBox="0 0 63 63"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="31.5"
                cy="31.5"
                r="31"
                fill="#111C55"
                stroke="#273270"
              />
              <path
                d="M23.9741 22.1408C23.8394 22.1449 23.7071 22.1743 23.5848 22.2272C23.4625 22.28 23.3528 22.3554 23.2622 22.4487C23.1715 22.542 23.1018 22.6514 23.0571 22.7704C23.0124 22.8894 22.9936 23.0156 23.0019 23.1416C23.1364 25.3015 23.7704 30.5716 26.8059 33.8583C30.4409 37.8181 35.1748 39.1824 40.0317 38.9808C40.292 38.9662 40.5368 38.8596 40.7165 38.6826C40.8962 38.5055 40.9975 38.2712 41 38.0268V34.5674C40.997 34.2446 40.8783 33.9322 40.663 33.6802C40.4476 33.4282 40.1482 33.2513 39.8127 33.1779L37.3804 32.6739C37.0796 32.6138 36.7664 32.6397 36.4815 32.7481C36.1965 32.8566 35.9528 33.0427 35.7819 33.2823L35.244 34.0454C35.1946 34.1153 35.1208 34.1668 35.0352 34.1911C34.9496 34.2154 34.8577 34.211 34.7752 34.1786C33.5379 33.6783 28.6081 31.5184 28.0663 27.8753C28.0557 27.805 28.0675 27.7333 28.1003 27.6692C28.1332 27.6051 28.1855 27.5516 28.2507 27.5154L29.2267 26.9574C29.4944 26.802 29.7047 26.5732 29.8291 26.3022C29.9535 26.0311 29.986 25.7308 29.9222 25.4419L29.3881 23.1236C29.31 22.7988 29.1142 22.5093 28.8339 22.3045C28.5537 22.0998 28.2064 21.9923 27.8511 22.0004L23.9741 22.1408Z"
                stroke="#F6B426"
              />
            </svg>
            <div>
              <p>Call Us</p>
              <p>(00) 112 365 489</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-green-900">
        <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8 text-white">
          <ul className="lg:flex items-center gap-6 hidden">
            <li className="hover:text-yellow-400">
              <Link
                className={`${
                  pathname === "/" ? "underline text-yellow-400" : ""
                }`}
                href="/"
              >
                {language === 'en'?'HOME':'হোম'}
              </Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link
                className={`${
                  pathname === "/pages/coverage"
                    ? "underline text-yellow-400"
                    : ""
                }`}
                href="/pages/coverage"
              >
              
                {language === 'en'?'COVERAGE':'কাভারেজ'}
           
              </Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link
                href="/pages/about-us"
                className={`${
                  pathname === "/pages/about-us"
                    ? "underline text-yellow-400"
                    : ""
                }`}
              >
               {language === 'en'?'ABOUT US':'এবাউট উস'}
              </Link>
            </li>
            <li className="hover:text-yellow-400">
              <Link
                href="/pages/contact-us"
                className={`${
                  pathname === "/pages/contact-us"
                    ? "underline text-yellow-400"
                    : ""
                }`}
              >
               {language === 'en'?'CONTACT US':'কন্টাক্ট উস'}
              </Link>
            </li>
          </ul>
          <Link href="/" className="lg:hidden">
            <svg
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="3.65143"
                width="7.30283"
                height="7.30283"
                transform="rotate(-30 0 3.65143)"
                fill="#FFB82B"
              />
              <rect
                x="3.08374"
                y="11.1975"
                width="7.46511"
                height="7.46511"
                fill="#FFB82B"
              />
              <rect
                x="13.5349"
                y="1.49286"
                width="7.46511"
                height="7.46511"
                fill="#FFB82B"
              />
              <rect
                x="13.5349"
                y="11.1975"
                width="7.46511"
                height="7.46511"
                fill="#FFB82B"
              />
            </svg>
          </Link>
          <div className="hidden lg:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <Link
              href="/pages/track-parcel"
              className={`flex items-center space-x-2 hover:text-yellow-500 text-yellow-400 ${
                pathname === "/pages/track-parcel" ? "underline" : ""
              }`}
            >
              <FaMapMarkerAlt />
              <span>{language === 'en'?'Track Parcel':'ট্র্যাক পার্সেল'}</span>
            </Link>
            <LanguageToggleButton></LanguageToggleButton>
            <Link
              href="/auth/signup"
              className="border border-white px-4 py-2 rounded-md hover:bg-yellow-500 hover:border-transparent"
            >
              {language === 'en'?'Register':'রেজিস্টার'}
            </Link>
            <Link
              href="/auth/signin"
              className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700"
            >
              {language === 'en'?'Login':'লগইন'}
            </Link>
          </div>
          <div onClick={onOpen} className="lg:hidden cursor-pointer">
            <svg
              width="30"
              height="27"
              viewBox="0 0 30 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H27M3 13.5H27M3 24H27"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </nav>
      {/* Drawer Component */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="green.900">
          <DrawerCloseButton color="white" />
          <DrawerHeader textColor="white">{language === 'en'?'Menu':'মেনু'}</DrawerHeader>
          <DrawerBody>
            <ul className="space-y-4 text-white">
              <li>
                <Link
                  href="/"
                  onClick={onClose}
                  className={`${
                    pathname === "/" ? "underline text-yellow-400" : ""
                  } hover:text-yellow-400`}
                >
                  {language === 'en'?'HOME':'হোম'}
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/coverage"
                  onClick={onClose}
                  className={`${
                    pathname === "/pages/coverage"
                      ? "underline text-yellow-400"
                      : ""
                  } hover:text-yellow-400`}
                >
                  {language === 'en'?'COVERAGE':'কাভারেজ'}
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/about-us"
                  onClick={onClose}
                  className={`${
                    pathname === "/pages/about-us"
                      ? "underline text-yellow-400"
                      : ""
                  } hover:text-yellow-400`}
                >
                  {language === 'en'?'ABOUT US':'এবাউট উস'}
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/contact-us"
                  onClick={onClose}
                  className={`${
                    pathname === "/pages/contact-us"
                      ? "underline text-yellow-400"
                      : ""
                  } hover:text-yellow-400`}
                >
                 {language === 'en'?'CONTACT US':'কন্টাক্ট উস'}
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/track-parcel"
                  onClick={onClose}
                  className={`flex items-center space-x-2 hover:text-yellow-500 text-yellow-400 ${
                    pathname === "/pages/track-parcel" ? "underline" : ""
                  }`}
                >
                  <FaMapMarkerAlt />
                  <span>{language === 'en'?'Track Parcel':'ট্র্যাক পার্সেল'}</span>
                </Link>
              </li>
              <li>
                <LanguageToggleButton></LanguageToggleButton>
              </li>
              <li className="space-x-4">
                <Link
                  href="/auth/signup"
                  onClick={onClose}
                  className="border border-white px-4 py-2 rounded-md hover:bg-yellow-500 hover:border-transparent"
                >
                  {language === 'en'?'Register':'রেজিস্টার'}
                </Link>
                <Link
                  href="/auth/signin"
                  onClick={onClose}
                  className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700"
                >
                  {language === 'en'?'Login':'লগইন'}
                </Link>
              </li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default Header;
