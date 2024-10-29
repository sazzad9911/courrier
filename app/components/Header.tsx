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

import React from "react";
import {
  FaClock,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

const Header = () => {
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
        <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8 text-white">
          <ul className="lg:flex items-center gap-6 hidden">
            <li className="hover:text-yellow-400">
              <Link
                className={`${
                  pathname === "/" ? "underline text-yellow-400" : ""
                }`}
                href="/"
              >
                HOME
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
                COVERAGE
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
                ABOUT US
              </Link>
            </li>
            <li className="hover:text-yellow-400">
              <a href="#contact">CONTACT US</a>
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
              <span>Track Parcel</span>
            </Link>
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
          <DrawerHeader textColor="white">Menu</DrawerHeader>
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
                  HOME
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
                  COVERAGE
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
                  ABOUT US
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="hover:text-yellow-400"
                >
                  CONTACT US
                </a>
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
                  <span>Track Parcel</span>
                </Link>
              </li>
              <li>
                <a
                  href="#lang"
                  className="flex items-center space-x-2 hover:text-yellow-500 text-yellow-400"
                >
                  <FaGlobe />
                  <span>EN</span>
                </a>
              </li>
              <li className="space-x-4">
                <Link
                  href="/auth/signup"
                  onClick={onClose}
                  className="border border-white px-4 py-2 rounded-md hover:bg-yellow-500 hover:border-transparent"
                >
                  Register
                </Link>
                <Link
                  href="/auth/signin"
                  onClick={onClose}
                  className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700"
                >
                  Login
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
