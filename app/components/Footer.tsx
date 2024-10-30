"use client";
import Link from "next/link";
import React from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { usePathname } from "next/navigation";
export default function Footer() {
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
        <div className="border-t border-gray-400 mt-10 pt-6 text-center lg:text-left">
          <div className="lg:flex justify-between">
            <p className="text-sm">©2024 All Right Reserved</p>
            <div className="mt-4 lg:mt-0 flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-1">
                <span className="material-icons">schedule</span>
                <p>Mon - Sat 9.00 - 18.00</p>
              </div>
              <p className="text-yellow-500">Sunday Closed</p>
            </div>
            <div className="mt-4 lg:mt-0 flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-1">
                <span className="material-icons">mail</span>
                <p>contact@logistics.com</p>
              </div>
              <div className="flex items-center space-x-1">
                <span className="material-icons">call</span>
                <p>(00) 112 365 489</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
