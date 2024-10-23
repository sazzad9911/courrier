import React from "react";
import { FaPeopleCarry, FaChild, FaGlobeEurope } from "react-icons/fa";
const ReportCards = () => {
  return (
    <section className="mt-14 md:mt-20 lg:mt-30 xl:mt-40 2xl:mt-80 3xl:mt-[420px] py-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between space-x-1 md:space-x-4">
          {/* Card 1 */}
          <div className="bg-yellow-500 p-6 flex flex-col gap-2 items-center w-full rounded-md text-center">
            <FaChild className="md:text-[40px]" />
            <div className="text-xl lg:text-4xl font-bold text-green-600 mb-2">
              300K+
            </div>
            <div className="text-sm lg:text-base text-black">
              Register Merchant
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-yellow-500 p-6 flex flex-col gap-2 items-center w-full rounded-md text-center">
            <FaPeopleCarry className="md:text-[40px]" />
            <div className="text-xl lg:text-4xl font-bold text-green-600 mb-2">
              10K+
            </div>
            <div className="text-sm lg:text-base text-black">Delivery Man</div>
          </div>

          {/* Card 3 */}
          <div className="bg-yellow-500 p-6 flex flex-col gap-2 items-center w-full rounded-md text-center">
            <FaGlobeEurope className="md:text-[40px]" />
            <div className="text-xl lg:text-4xl font-bold text-green-600 mb-2">
              300+
            </div>
            <div className="text-sm lg:text-base text-black">
              Delivery Point
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportCards;
