'use client'
import React, { useContext } from 'react';
import { LanguageContext } from './Providers/LanguageProvider';

const CityServiceInfo = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="container mx-auto px-4 md:px-8 pt-4">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch w-full gap-4">
        {/* Inside City Section */}
        <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md w-full md:w-[500px]">
          <img
            src="/images/Ellipse 6.png" // Your image path here
            alt={language === 'en' ? "Inside City" : "শহরের ভিতরে"}
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <div>
            <h2 className="text-blue-600 text-lg font-semibold">
              {language === 'en' ? "Inside City" : "শহরের ভিতরে"}
            </h2>
            <p className="text-gray-500 text-sm">
              {language === 'en' ? "Pickup Within Hours, Delivery in Days" : "ঘন্টার মধ্যে পিকআপ, দিনের মধ্যে ডেলিভারি"}
            </p>
          </div>
        </div>

        {/* Inside City Info Box */}
        <div className="w-full bg-green-900 text-white p-4 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-sm md:text-base text-center">
            {language === 'en'
              ? "\"Inter-city\" refers to activities, services, or transportation that occur or operate between different cities or urban areas within a region or country."
              : "\"ইন্টার-সিটি\" বলতে এমন কার্যকলাপ, পরিষেবা, বা পরিবহনকে বোঝায় যা একটি অঞ্চলের বা দেশের মধ্যে বিভিন্ন শহরের মধ্যে ঘটে বা পরিচালিত হয়।"}
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch w-full gap-4 mt-4">
        {/* Out-side City Section */}
        <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md w-full md:w-[500px]">
          <img
            src="/images/Ellipse 7.png" // Your image path here
            alt={language === 'en' ? "Out-side City" : "শহরের বাইরে"}
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <div>
            <h2 className="text-blue-600 text-lg font-semibold">
              {language === 'en' ? "Out-side City" : "শহরের বাইরে"}
            </h2>
            <p className="text-gray-500 text-sm">
              {language === 'en' ? "Pickup Within Hours, Delivery in Days" : "ঘন্টার মধ্যে পিকআপ, দিনের মধ্যে ডেলিভারি"}
            </p>
          </div>
        </div>

        {/* Outside City Info Box */}
        <div className="w-full bg-green-900 text-white p-4 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-sm md:text-base text-center">
            {language === 'en'
              ? "\"Out-side City\" refers to areas situated on the outskirts or periphery of a city, often characterized by suburban development and residential neighborhoods."
              : "\"শহরের বাইরে\" বলতে শহরের উপকণ্ঠ বা প্রান্তে অবস্থিত এলাকাগুলি বোঝায়, যা প্রায়ই শহরতলির উন্নয়ন এবং আবাসিক পাড়ার দ্বারা চিহ্নিত।"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CityServiceInfo;
