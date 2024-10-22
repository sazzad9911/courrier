import React from 'react';

const Banner = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="absolute ">
        <img 
          src="/images/banner.png" // Path to your image
          alt="Courier Rider" 
          className="w-full h-full object-cover" // This makes the image cover the entire section
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 h-full flex flex-col justify-center  items-end max-w-7xl mx-auto lg:pt-12 pt-2 pl-24">
        <div className="max-w-sm lg:max-w-md">
          <h1 className="text-white text-md md:text-3xl font-semibold md:font-normal md:mb-2 lg:mb-4">
            We Deliver Parcel With <br className='hidden md:block'/> Live Tracking
          </h1>
          <p className="text-white text-xs md:text-base lg:mb-6 md:mb-3 mb-2">
            Experience fast, secure, and reliable parcel delivery with live tracking! 
            Our service ensures your package is always on the move, and you can track its journey in real-time.
          </p>
          <a
            href="#join"
            className="bg-green-600 text-white py-1 md:py-2 md:px-6 px-2 rounded-md hover:bg-green-700"
          >
            Join as Merchant
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
