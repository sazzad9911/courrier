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
                {language === 'en' ? 'Green Bangla Courier Service' : 'গ্রীন বাংলা কুরিয়ার সার্ভিস'}
              </h2>
            </Link>
            <p className="text-sm leading-relaxed pt-4">
              {language === 'en'
                ? 'GreenBangla Courier Service is a leading logistics provider in Bangladesh, renowned for its efficient and reliable delivery solutions. With a strong commitment to customer satisfaction, GreenBangla offers a comprehensive range of courier services tailored to meet the diverse needs of businesses and individuals across the country.'
                : 'গ্রিনবাংলা কুরিয়ার সার্ভিস বাংলাদেশে শীর্ষস্থানীয় লজিস্টিক সেবা প্রদানকারী প্রতিষ্ঠান, যা দক্ষ ও নির্ভরযোগ্য ডেলিভারি সমাধানের জন্য পরিচিত। গ্রাহক সন্তুষ্টির প্রতি দৃঢ় অঙ্গীকার নিয়ে, গ্রিনবাংলা বিভিন্ন ব্যবসা ও ব্যক্তির চাহিদা পূরণে উপযোগী বিস্তৃত কুরিয়ার সেবা প্রদান করে থাকে।'}
            </p>
          </div>
          {/* Pages Links */}
          <div className="flex-1">
            <h3 className="font-medium mb-4 bg-[#ffffff1b] p-4">
              {language === 'en' ? 'Pages' : 'পেজ'}
            </h3>
            <ul className="space-y-2 p-4">
              <li>
                <Link
                  href="/pages/about-us"
                  className={`${
                    pathname === "/pages/about-us" ? "underline text-yellow-400" : ""
                  } hover:text-yellow-400`}
                >
                  {language === 'en' ? 'About Us' : 'আমাদের সম্পর্কে'}
                </Link>
              </li>
              <li>{language === 'en' ? 'Our Team' : 'আমাদের দল'}</li>
              <li>{language === 'en' ? 'Our Project' : 'আমাদের প্রকল্প'}</li>
              <li>{language === 'en' ? 'Pricing' : 'মূল্য নির্ধারণ'}</li>
              <li>
                <Link
                  href="/pages/contact-us"
                  className={`${
                    pathname === "/pages/contact-us" ? "underline text-yellow-400" : ""
                  } hover:text-yellow-400`}
                >
                  {language === 'en' ? 'Contact' : 'যোগাযোগ'}
                </Link>
              </li>
            </ul>
          </div>
          {/* Utility Links */}
          <div className="flex-1">
            <h3 className="font-medium mb-4 bg-[#ffffff1b] p-4">
              {language === 'en' ? 'Utility' : 'উপকারী'}
            </h3>
            <ul className="space-y-2 p-4">
              <li>{language === 'en' ? 'Style Guide' : 'স্টাইল গাইড'}</li>
              <li>{language === 'en' ? 'Changelog' : 'পরিবর্তন তালিকা'}</li>
              <li>{language === 'en' ? 'Licenses' : 'লাইসেন্স'}</li>
              <li>{language === 'en' ? 'Protected' : 'সংরক্ষিত'}</li>
            </ul>
          </div>
          {/* Subscribe Form */}
          <div className="flex-1">
            <h3 className="font-medium mb-4 bg-[#ffffff1b] p-4">
              {language === 'en' ? 'Subscribe' : 'সাবস্ক্রাইব'}
            </h3>
            <form className="space-y-4 p-4">
              <input
                type="email"
                placeholder={language === 'en' ? 'Email here*' : 'ইমেইল এখানে*'}
                className="px-4 py-2 w-full bg-transparent border border-gray-400 rounded-sm text-sm"
              />
              <div className="flex gap-4 items-center">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-200 px-6 py-2 text-sm font-semibold text-black rounded-sm">
                  {language === 'en' ? 'Send Now' : 'এখনই পাঠান'}
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
                {language === 'en' ? 'GreenBangla Courier Service' : 'গ্রীনবাংলা কুরিয়ার সার্ভিস'}
              </h2>
            </Link>
            <p className="text-sm leading-relaxed">
              {language === 'en'
                ? 'GreenBangla Courier Service is a leading logistics provider in Bangladesh, renowned for its efficient and reliable delivery solutions. With a strong commitment to customer satisfaction, GreenBangla offers a comprehensive range of courier services tailored to meet the diverse needs of businesses and individuals across the country.'
                : 'গ্রিনবাংলা কুরিয়ার সার্ভিস বাংলাদেশে শীর্ষস্থানীয় লজিস্টিক সেবা প্রদানকারী প্রতিষ্ঠান, যা দক্ষ ও নির্ভরযোগ্য ডেলিভারি সমাধানের জন্য পরিচিত। গ্রাহক সন্তুষ্টির প্রতি দৃঢ় অঙ্গীকার নিয়ে, গ্রিনবাংলা বিভিন্ন ব্যবসা ও ব্যক্তির চাহিদা পূরণে উপযোগী বিস্তৃত কুরিয়ার সেবা প্রদান করে থাকে।'}
            </p>
          </div>
          {/* Pages and Utility Links */}
          <div className="grid grid-cols-2 ">
            <div>
              <h3 className="font-semibold mb-4 bg-[#ffffff1b] p-4">
                {language === 'en' ? 'Pages' : 'পেজ'}
              </h3>
              <ul className="space-y-2 pl-4">
                <li>
                  <Link
                    href="/pages/about-us"
                    className={`${
                      pathname === "/pages/about-us" ? "underline text-yellow-400" : ""
                    } hover:text-yellow-400`}
                  >
                    {language === 'en' ? 'About Us' : 'আমাদের সম্পর্কে'}
                  </Link>
                </li>
                <li>{language === 'en' ? 'Our Team' : 'আমাদের দল'}</li>
                <li>{language === 'en' ? 'Our Project' : 'আমাদের প্রকল্প'}</li>
                <li>{language === 'en' ? 'Pricing' : 'মূল্য নির্ধারণ'}</li>
                <li>
                  <Link
                    href="/pages/contact-us"
                    className={`${
                      pathname === "/pages/contact-us" ? "underline text-yellow-400" : ""
                    } hover:text-yellow-400`}
                  >
                    {language === 'en' ? 'Contact' : 'যোগাযোগ'}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 bg-[#ffffff1b] p-4">
                {language === 'en' ? 'Utility' : 'উপকারী'}
              </h3>
              <ul className="space-y-2 pl-4">
                <li>{language === 'en' ? 'Style Guide' : 'স্টাইল গাইড'}</li>
                <li>{language === 'en' ? 'Changelog' : 'পরিবর্তন তালিকা'}</li>
                <li>{language === 'en' ? 'Licenses' : 'লাইসেন্স'}</li>
                <li>{language === 'en' ? 'Protected' : 'সংরক্ষিত'}</li>
              </ul>
            </div>
          </div>
          {/* Subscribe Form */}
          <div>
            <h3 className="text-center font-light mb-4 p-4 bg-[#ffffff1b]">
              {language === 'en' ? 'Subscribe' : 'সাবস্ক্রাইব'}
            </h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder={language === 'en' ? 'Email here*' : 'ইমেইল এখানে*'}
                className="px-4 py-2 w-full bg-transparent border border-gray-400 rounded-sm text-sm"
              />
              <div className="flex gap-4 items-center justify-center">
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-200 px-6 py-2 text-sm font-semibold text-black rounded-sm">
                  {language === 'en' ? 'Send Now' : 'এখনই পাঠান'}
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
      </div>
    </footer>
  );
}
