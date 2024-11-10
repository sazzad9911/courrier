"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { LanguageContext } from "./Providers/LanguageProvider";
export default function Footer() {
  const { language } = useContext(LanguageContext);
  const pathname = usePathname();
  return (
    <footer className="bg-[#172557] text-white pb-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Large screen */}
        <div className="hidden lg:flex justify-between items-start">
          {/* Left Section */}
          <div className="flex-1 mr-10">
            <Link href="/">
              <h2 className="text-xl font-bold mb-4 pt-4 pb-4">
                GreenBangla Courier Service
              </h2>
            </Link>
            <p className="text-sm leading-relaxed pt-4">
              GreenBangla Courier Service is a leading logistics provider in
              Bangladesh, renowned for its efficient and reliable delivery
              solutions. With a strong commitment to customer satisfaction,
              GreenBangla offers a comprehensive range of courier services
              tailored to meet the diverse needs of businesses and individuals
              across the country.
            </p>
          </div>
          {/* Pages Links */}
          <div className="flex-1">
            <h3 className="font-medium mb-4 bg-[#ffffff1b] p-4">Pages</h3>
            <ul className="space-y-2 p-4">
              <li>
                <Link
                  href="/pages/about-us"
                  className={`${
                    pathname === "/pages/about-us"
                      ? "underline text-yellow-400"
                      : ""
                  } hover:text-yellow-400`}
                >
                  About Us
                </Link>
              </li>
              <li>Our Team</li>
              <li>Our Project</li>
              <li>Pricing</li>
              <li>
                <Link
                  href="/pages/contact-us"
                  className={`${
                    pathname === "/pages/contact-us"
                      ? "underline text-yellow-400"
                      : ""
                  } hover:text-yellow-400`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Utility Links */}
          <div className="flex-1">
            <h3 className="font-medium mb-4 bg-[#ffffff1b] p-4">Utility</h3>
            <ul className="space-y-2 p-4">
              <li>Style Guide</li>
              <li>Changelog</li>
              <li>Licenses</li>
              <li>Protected</li>
            </ul>
          </div>
          {/* Subscribe Form */}
          <div className="flex-1">
            <h3 className="font-medium mb-4 bg-[#ffffff1b] p-4">Subscribe</h3>
            <form className="space-y-4 p-4">
              <input
                type="email"
                placeholder="Email here*"
                className="px-4 py-2 w-full bg-transparent border border-gray-400 rounded-sm text-sm"
              />
              <div className="flex gap-4 items-center">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-200 px-6 py-2 text-sm font-semibold text-black rounded-sm">
                  Send Now
                </button>
                <a href="https://www.linkedin.com/" target="blank">
                  <FaLinkedin />
                </a>
                <a href="https://www.twiter.com/" target="blank">
                  <FaTwitterSquare />
                </a>
                <a href="https://www.facebook.com/" target="blank">
                  <FaFacebookSquare />
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Small screen */}
        <div className="lg:hidden space-y-6">
          {/* Top Section */}
          <div>
            <Link href="/">
              <h2 className="text-xl font-medium mb-4 pt-4">
                GreenBangla <br /> Courier Service
              </h2>
            </Link>
            <p className="text-sm leading-relaxed">
              GreenBangla Courier Service is a leading logistics provider in
              Bangladesh, renowned for its efficient and reliable delivery
              solutions. With a strong commitment to customer satisfaction,
              GreenBangla offers a comprehensive range of courier services
              tailored to meet the diverse needs of businesses and individuals
              across the country.
            </p>
          </div>
          {/* Pages and Utility Links */}
          <div className="grid grid-cols-2 ">
            <div>
              <h3 className="font-semibold mb-4 bg-[#ffffff1b] p-4">Pages</h3>
              <ul className="space-y-2 pl-4">
                <li>
                  <Link
                    href="/pages/about-us"
                    className={`${
                      pathname === "/pages/about-us"
                        ? "underline text-yellow-400"
                        : ""
                    } hover:text-yellow-400`}
                  >
                    About Us
                  </Link>
                </li>
                <li>Our Team</li>
                <li>Our Project</li>
                <li>Pricing</li>
                <li>
                  <Link
                    href="/pages/contact-us"
                    className={`${
                      pathname === "/pages/contact-us"
                        ? "underline text-yellow-400"
                        : ""
                    } hover:text-yellow-400`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 bg-[#ffffff1b] p-4">Utility</h3>
              <ul className="space-y-2 pl-4">
                <li>Style Guide</li>
                <li>Changelog</li>
                <li>Licenses</li>
                <li>Protected</li>
              </ul>
            </div>
          </div>
          {/* Subscribe Form */}
          <div>
            <h3 className="text-center font-light mb-4 p-4 bg-[#ffffff1b]">
              Subscribe
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email here*"
                className="px-4 py-2 w-full bg-transparent border border-gray-400 rounded-md text-sm"
              />
              <div className="flex gap-4 items-center">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-200 px-6 py-2 text-sm font-semibold text-black rounded-sm">
                  Send Now
                </button>
                <a href="https://www.linkedin.com/" target="blank">
                  <FaLinkedin />
                </a>
                <a href="https://www.twiter.com/" target="blank">
                  <FaTwitterSquare />
                </a>
                <a href="https://www.facebook.com/" target="blank">
                  <FaFacebookSquare />
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400 mt-10 pt-6">
          <div className="flex flex-col-reverse lg:flex-row justify-between gap-4">
            <p className="text-sm">©2024 All Right Reserved</p>
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-7 text-sm">
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
                  <p>{language === 'en'?'Mon - Sat 9.00 - 18.00':'সোম - শনি ৯.০০ - ১৮.০০'}</p>
                  <p className=" text-yellow-500">{language === 'en'?'Sunday Closed':'রবিবার বন্ধ'}</p>
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
                  <p>{language === 'en'?'Email':'ইমেইল'}</p>
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
                  <p>{language === 'en'?'Call Us':'কল করুন'}</p>
                  <p>(00) 112 365 489</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
