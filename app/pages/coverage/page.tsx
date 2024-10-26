import React from "react";
import Search from "../../components/Search";

export default function page() {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#447500] to-[#616101]">
        <h1 className="lg:text-4xl text-xl text-center py-4 md:py-10 text-white">
          We are available in 64 districts
        </h1>
      </div>
      <div className=" container mx-auto px-4 md:px-8 ">
        <div className="pt-8 text-center text-white">
          <h1 className="text-xl mb-2 md:text-4xl">Search your area</h1>
          <p>Now you can easily search your area here</p>
        </div>
        <div className="pt-8 ">
          <Search></Search>
        </div>
          <div className="pb-4 md:pb-20">
            <img
              src="/images/OBJECTS.png"
              alt="Courier Rider"
              className="w-full  h-full  md:object-cover "
            />
          </div>
      </div>
    </div>
  );
}
