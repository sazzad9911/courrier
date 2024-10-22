import React from 'react';
import { FaClock, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const Header = () => {
  return (
    <header className=" text-white">
      <div className="container mx-auto lg:flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-8 hidden ">
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-500 p-2 rounded-md">
            <FaMapMarkerAlt size={24} />
          </div>
          <span className="font-light text-xl w-40">Green Bangla Courier Service</span>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <FaClock />
            <span>Mon - Sat 9.00 - 18.00</span>
            <span className="hidden md:block">Sunday Closed</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>contact@logistics.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>(00) 112 365 489</span>
          </div>
        </div>
      </div>
      <nav className="bg-green-900">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-3 px-4 md:px-8 text-white">
          <ul className="flex items-center gap-6">
            <li className="hover:text-yellow-400"><a href="#home">HOME</a></li>
            <li className="hover:text-yellow-400"><a href="#coverage">COVERAGE</a></li>
            <li className="hover:text-yellow-400"><a href="#about">ABOUT US</a></li>
            <li className="hover:text-yellow-400"><a href="#contact">CONTACT US</a></li>
          </ul>
          <div className="hidden lg:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a href="#track" className="flex items-center space-x-2 hover:text-yellow-500 text-yellow-400">
              <FaMapMarkerAlt />
              <span>Track Parcel</span>
            </a>
            <a href="#lang" className="flex items-center space-x-2 hover:text-yellow-500 text-yellow-400">
              <FaGlobe />
              <span>EN</span>
            </a>
            <a href="#register" className="border border-white px-4 py-2 rounded-md hover:bg-yellow-500 hover:border-transparent">Register</a>
            <a href="#login" className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700">Login</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
