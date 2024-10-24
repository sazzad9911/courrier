import React from 'react';

const PartnersSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 pb-4">
      <h2 className=" text-white text-2xl mb-6">Our Partners</h2>
      <div className="overflow-x-auto scrollbar-hide pb-4">
        <div className="flex space-x-6 justify-center md:justify-between px-4">
          <div className="flex justify-center items-center h-24 w-24 md:h-32 md:w-32 rounded-full bg-white p-4 flex-shrink-0">
            <img
              src="images/1.png"
              alt="Ghorer Bazar"
              className=""
            />
          </div>
          <div className="flex justify-center items-center h-24 w-24 md:h-32 md:w-32 rounded-full bg-white p-4 flex-shrink-0">
            <img
              src="images/2.png"
              alt="Halal Food"
              
            />
          </div>
          <div className="flex justify-center items-center h-24 w-24 md:h-32 md:w-32 rounded-full bg-white p-4 flex-shrink-0">
            <img
              src="images/3.png"
              alt="e-Cab"
              
            />
          </div>
          <div className="flex justify-center items-center h-24 w-24 md:h-32 md:w-32 rounded-full bg-white p-4 flex-shrink-0">
            <img
              src="images/4.png"
              alt="Suchi Shoili"
              
            />
          </div>
          <div className="flex justify-center items-center h-24 w-24 md:h-32 md:w-32 rounded-full bg-white p-4 flex-shrink-0">
            <img
              src="images/5.png"
              alt="Online Tech Academy"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
