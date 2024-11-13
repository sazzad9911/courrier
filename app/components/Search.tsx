'use client'
import React, { useContext, useState } from 'react'
import { LanguageContext } from './Providers/LanguageProvider';

export default function Search() {
    const [trackingCode, setTrackingCode] = useState("");
    const { language } = useContext(LanguageContext);
    const handleSearch = () => {
      if (trackingCode.trim() === "") {
        alert("Please enter a tracking code");
        return;
      }
      // Here you can add your search functionality (API call or other logic)
      console.log("Tracking code:", trackingCode);
    };
  return (
    <div>
      <div className="bg-yellow-500 p-4 md:px-10 rounded-lg flex items-center space-x-2 md:space-x-4">
          {/* Input Field */}
          <input
            type="text"
            placeholder={language === 'en' ? "Enter your tracking code" : 'ট্র্যাকিং কোড দিন'}
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            className="w-full py-2 md:py-3 px-4 text-base rounded-full border border-green-400 focus:outline-none focus:ring-1 focus:ring-green-500"
          />

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="flex items-center justify-center w-12 md:w-15 h-10 md:h-14 bg-white rounded-full text-green-600 hover:bg-gray-100"
          >
            <svg
              className="md:h-10 md:w-10 h-6 w-6"
              viewBox="0 0 39 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.0663 24.6469L36 31.5637L28.0663 24.6469ZM32.3333 15.695C32.3333 22.7063 25.7669 28.39 17.6667 28.39C9.56649 28.39 3 22.7063 3 15.695C3 8.68374 9.56649 3 17.6667 3C25.7669 3 32.3333 8.68374 32.3333 15.695Z"
                fill="white"
              />
              <path
                d="M28.0663 24.6469L36 31.5637M32.3333 15.695C32.3333 22.7063 25.7669 28.39 17.6667 28.39C9.56649 28.39 3 22.7063 3 15.695C3 8.68374 9.56649 3 17.6667 3C25.7669 3 32.3333 8.68374 32.3333 15.695Z"
                stroke="#3EB94A"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
    </div>
  )
}
