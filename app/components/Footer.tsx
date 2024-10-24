"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="bg-[#172557] text-white pb-10">
      <div className="container mx-auto px-4 md:px-8">
        {/* Large screen */}
        <div className="hidden lg:flex justify-between items-start">
          {/* Left Section */}
          <div className="flex-1 mr-10">
            <h2 className="text-xl font-bold mb-4 p-4">
              GreenBangla Courier Service
            </h2>
            <p className="text-sm leading-relaxed pl-4">
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
              <li>About Us</li>
              <li>Our Team</li>
              <li>Our Project</li>
              <li>Pricing</li>
              <li>Contact</li>
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
              <li>Not Found</li>
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
                <FaLinkedin />
                <FaTwitterSquare />
                <FaFacebookSquare />
              </div>
            </form>
          </div>
        </div>

        {/* Small screen */}
        <div className="lg:hidden space-y-6">
          {/* Top Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              GreenBangla Courier Service
            </h2>
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
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Pages</h3>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Our Project</li>
                <li>Pricing</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Utility</h3>
              <ul className="space-y-2">
                <li>Style Guide</li>
                <li>Changelog</li>
                <li>Licenses</li>
                <li>Protected</li>
                <li>Not Found</li>
              </ul>
            </div>
          </div>
          {/* Subscribe Form */}
          <div>
            <h3 className="font-semibold mb-4">Subscribe</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email here*"
                className="px-4 py-2 w-full bg-transparent border border-gray-400 rounded-md text-sm"
              />
              <button className="bg-[#FFBC02] px-6 py-2 text-sm font-semibold text-white rounded-md">
                Send Now
              </button>
            </form>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-xl">
                LinkedIn
              </a>
              <a href="#" className="text-xl">
                Twitter
              </a>
              <a href="#" className="text-xl">
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-400 mt-10 pt-6 text-center md:text-left">
          <div className="md:flex justify-between">
            <p className="text-sm">©2024 All Right Reserved</p>
            <div className="mt-4 md:mt-0 flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-1">
                <span className="material-icons">schedule</span>
                <p>Mon - Sat 9.00 - 18.00</p>
              </div>
              <p>Sunday Closed</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center justify-center space-x-4">
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
