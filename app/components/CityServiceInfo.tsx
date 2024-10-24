import React from 'react';

const CityServiceInfo = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch w-full gap-4">
        {/* Inside City Section */}
        <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md w-full md:w-[500px]">
          <img
            src="/images/Ellipse 6.png" // Your image path here
            alt="Inside City"
            className="w-16 h-16 md:w-20 md:h-20 "
          />
          <div>
            <h2 className="text-blue-600 text-lg font-semibold">Inside City</h2>
            <p className="text-gray-500 text-sm">Pickup Within Hours, Delivery in Days</p>
          </div>
        </div>

        {/* Inside City Info Box */}
        <div className="w-full  bg-green-900 text-white p-4 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-sm md:text-base text-center">
          &quot;Inter-city&quot; refers to activities, services, or transportation that occur or operate between different cities or urban areas within a region or country.
          </p>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch w-full gap-4 mt-4">
        {/* Out-side City Section */}
        <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md w-full md:w-[500px]">
          <img
            src="/images/Ellipse 7.png" // Your image path here
            alt="Out-side City"
            className="w-16 h-16 md:w-20 md:h-20"
          />
          <div>
            <h2 className="text-blue-600 text-lg font-semibold">Out-side City</h2>
            <p className="text-gray-500 text-sm">Pickup Within Hours, Delivery in Days</p>
          </div>
        </div>

        {/* Outside City Info Box */}
        <div className="w-full bg-green-900 text-white p-4 rounded-lg shadow-md flex items-center justify-center">
          <p className="text-sm md:text-base text-center">
          &quot;Out-side City&quot; refers to areas situated on the outskirts or periphery of a city, often characterized by suburban development and residential neighborhoods.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CityServiceInfo;
