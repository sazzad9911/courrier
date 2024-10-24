import React from "react";
import { FaBusAlt, FaDribbble, FaDolly,  FaHeadset } from "react-icons/fa";

const Facilities = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-8">
      <h2 className="text-white text-xl font-semibold mb-4">Facilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Facility 1 */}
        <div className="flex items-center bg-green-900 text-white p-4 rounded-lg shadow-md">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-200  rounded-full w-8 h-8 flex justify-center items-center mr-4">
          <FaBusAlt className="w-4 h-4 text-black" />
          </div>
          <p>Daily Pick up, No limitations</p>
        </div>

        {/* Facility 2 */}
        <div className="flex items-center bg-green-900 text-white p-4 rounded-lg shadow-md">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-200  rounded-full w-8 h-8 flex justify-center items-center mr-4">
          <FaDribbble className="w-4 h-4 text-black" />
          </div>
          <p>Online Management</p>
        </div>

        {/* Facility 3 */}
        <div className="flex items-center bg-green-900 text-white p-4 rounded-lg shadow-md">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-200  rounded-full w-8 h-8 flex justify-center items-center mr-4">
          <FaDolly className="w-4 h-4 text-black" />
          </div>
          <p>Cash on Delivery</p>
        </div>

        {/* Facility 4 */}
        <div className="flex items-center bg-green-900 text-white p-4 rounded-lg shadow-md">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-200  rounded-full w-8 h-8 flex justify-center items-center mr-4">
          <FaHeadset className="w-4 h-4 text-black" />
          </div>
          <p>24/h Customer Service</p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
