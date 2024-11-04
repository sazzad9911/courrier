import React from "react";
import Search from "../../components/Search";
import {
  FaBoxOpen,
  FaBusinessTime,
  FaCheckDouble,
  FaTruck,
} from "react-icons/fa";

export default function page() {
  return (
    <div className=" container mx-auto px-4 md:px-8 py-8">
      <div className="pt-8 text-center text-white">
        <h1 className="text-xl mb-2 md:text-4xl">Track Your Consignment</h1>
        <p>Now you can easily track your consignment</p>
      </div>
      <div className="py-6 md:py-12">
        <Search></Search>
      </div>
      <div className="md:px-6 text-white">
        <div className="border-b-2 border-white pb-4">
          <p className="">E63434885</p>
          <p className="text-lg my-4 font-semibold">
            Apple Mac-book pro 128 GB RC
          </p>
          <div className="md:flex justify-between">
            <p>11 Jan 2024</p>
            <p>Estimate Time of Delivery: 27 Jan 2024</p>
          </div>
        </div>
        <div className="flex justify-evenly gap-1 py-4 md:py-12">
          <div className="flex flex-col items-center">
            <div className="w-7 h-7 flex justify-center items-center bg-white rounded-full">
              <FaBusinessTime className="text-black"></FaBusinessTime>
            </div>
            <p>Processing</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-7 h-7 flex justify-center items-center bg-white rounded-full">
              <FaBoxOpen className="text-black"></FaBoxOpen>
            </div>
            <p>Packaging</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-7 h-7 flex justify-center items-center bg-white rounded-full">
              <FaTruck className="text-black"></FaTruck>
            </div>
            <p>Shifting</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-7 h-7 flex justify-center items-center bg-white rounded-full">
              <FaCheckDouble className="text-black"></FaCheckDouble>
            </div>
            <p>Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
}
