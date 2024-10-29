import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className=" text-white py-12">
      <div className="container mx-auto px-4 md:px-8 ">
        {/* About Section */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-[#FFB82B] mb-4">
            About Green Bangla Courier
          </h1>
          <p className="leading-relaxed">
            Welcome to Green Bangla Courier, where we redefine the delivery experience with
            speed, safety, and a commitment to sustainable practices. Established with a
            mission to offer reliable, eco-friendly delivery solutions, we provide seamless
            logistics services across Bangladesh. From local businesses to individual clients,
            we are dedicated to connecting communities by delivering parcels with care and
            precision.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FFB82B] mb-4">Our Mission</h2>
          <p className="leading-relaxed">
            At Green Bangla Courier, we believe that logistics should be both efficient and
            environmentally conscious. Our goal is to provide a trustworthy, customer-centric
            service while minimizing our carbon footprint. Every delivery, from the bustling
            cities to the most remote villages, reflects our promise to bring you dependable
            service with a positive environmental impact.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FFB82B] mb-4">
            Why Choose Green Bangla Courier?
          </h2>
          <ul className="list-disc list-inside leading-relaxed space-y-2">
            <li>
              <span className="font-semibold">Convenient Doorstep Pickup:</span> Enjoy the
              ease of having your parcels picked up right from your door, saving you time and
              hassle.
            </li>
            <li>
              <span className="font-semibold">Fast & Secure Deliveries:</span> With optimized
              routes and professional handling, we ensure quick and secure deliveries across
              the country.
            </li>
            <li>
              <span className="font-semibold">Real-Time Tracking:</span> Stay updated every
              step of the way with our real-time tracking system, allowing you and your
              recipients to monitor your parcel’s journey.
            </li>
            <li>
              <span className="font-semibold">Eco-Friendly Commitment:</span> We are devoted
              to sustainable practices, using green solutions whenever possible to reduce our
              environmental footprint.
            </li>
            <li>
              <span className="font-semibold">Dedicated Support:</span> Our customer support
              team is here to assist you, ensuring your experience with Green Bangla Courier
              is smooth from start to finish.
            </li>
          </ul>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FFB82B] mb-4">Our Services</h2>
          <p className="leading-relaxed">
            From individual deliveries to bulk shipments, Green Bangla Courier offers a range
            of services tailored to meet the unique needs of our clients. Whether you&apos;re a
            small business owner or someone sending a personal package, we provide reliable,
            customized solutions that you can count on.
          </p>
        </section>

        {/* Join Us Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#FFB82B] mb-4">
            Join Us on the Journey
          </h2>
          <p className="leading-relaxed">
            Green Bangla Courier is more than just a delivery service—it&apos;s a step towards a
            greener, connected Bangladesh. We invite you to join us on this journey and
            experience delivery with care, commitment, and a vision for a sustainable future.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
