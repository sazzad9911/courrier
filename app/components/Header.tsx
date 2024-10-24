"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaClock,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

const Header = () => {
  const params=usePathname()
  if(params.includes("/dashboard")||params.includes("/auth")) return null
  return (
    <header className=" text-white">
      <div className="container mx-auto lg:flex flex-col md:flex-row items-center justify-between py-4 px-4 md:px-8 hidden ">
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
            <li className="hover:text-yellow-400">
              <a href="#home">HOME</a>
            </li>
            <li className="hover:text-yellow-400">
              <a href="#coverage">COVERAGE</a>
            </li>
            <li className="hover:text-yellow-400">
              <a href="#about">ABOUT US</a>
            </li>
            <li className="hover:text-yellow-400">
              <a href="#contact">CONTACT US</a>
            </li>
          </ul>
          <div className="hidden lg:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <a
              href="#track"
              className="flex items-center space-x-2 hover:text-yellow-500 text-yellow-400"
            >
              <FaMapMarkerAlt />
              <span>Track Parcel</span>
            </a>
            <a
              href="#lang"
              className="flex items-center space-x-2 hover:text-yellow-500 text-yellow-400"
            >
              <FaGlobe />
              <span>EN</span>
            </a>
            <Link
              href="/auth/signup"
              className="border border-white px-4 py-2 rounded-md hover:bg-yellow-500 hover:border-transparent"
            >
              Register
            </Link>
            <Link
              href="/auth/signin"
              className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
