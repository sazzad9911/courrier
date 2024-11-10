'use client'
import React, { useContext } from "react";
import { LanguageContext } from "../../components/Providers/LanguageProvider";
const AboutUs: React.FC = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className=" text-white py-12">
      <div className="container mx-auto px-4 md:px-8 ">
        {/* About Section */}
        <section className="mb-12">
          <h1 className="text-3xl font-bold text-[#FFB82B] mb-4">
            {language === "en"
              ? "About Green Bangla Courier"
              : "গ্রিন বাংলা কুরিয়ার সম্পর্কে"}
          </h1>
          <p className="leading-relaxed">
            {language === "en"
              ? "Welcome to Green Bangla Courier, where we redefine the delivery experience with speed, safety, and a commitment to sustainable practices. Established with a mission to offer reliable, eco-friendly delivery solutions, we provide seamless logistics services across Bangladesh. From local businesses to individual clients, we are dedicated to connecting communities by delivering parcels with care and precision."
              : "গ্রিন বাংলা কুরিয়ারে স্বাগতম, যেখানে আমরা দ্রুততা, নিরাপত্তা এবং টেকসই কার্যপ্রণালীর প্রতি অঙ্গীকারের সাথে ডেলিভারি অভিজ্ঞতা নতুনভাবে সংজ্ঞায়িত করি। নির্ভরযোগ্য, পরিবেশবান্ধব ডেলিভারি সমাধানের লক্ষ্য নিয়ে প্রতিষ্ঠিত, আমরা সারা বাংলাদেশে নিরবচ্ছিন্ন লজিস্টিক সেবা প্রদান করি। স্থানীয় ব্যবসা থেকে ব্যক্তিগত গ্রাহকদের জন্য, আমরা যত্ন এবং নিখুঁততার সাথে পার্সেল ডেলিভারি করে সম্প্রদায়গুলিকে সংযুক্ত করতে প্রতিশ্রুতিবদ্ধ।"}
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FFB82B] mb-4">
            {language === "en" ? "Our Mission" : "আমাদের মিশন"}
          </h2>
          <p className="leading-relaxed">
            {language === "en"
              ? "At Green Bangla Courier, we believe that logistics should be both efficient and environmentally conscious. Our goal is to provide a trustworthy, customer-centric service while minimizing our carbon footprint. Every delivery, from the bustling cities to the most remote villages, reflects our promise to bring you dependable service with a positive environmental impact."
              : "গ্রিন বাংলা কুরিয়ারে, আমরা বিশ্বাস করি যে লজিস্টিকস হতে হবে কার্যকর এবং পরিবেশগত সচেতন। আমাদের লক্ষ্য হল বিশ্বাসযোগ্য, গ্রাহক-কেন্দ্রিক সেবা প্রদান করা এবং একই সাথে আমাদের কার্বন ফুটপ্রিন্ট কমানো। প্রতিটি ডেলিভারি, ব্যস্ত শহর থেকে সবচেয়ে দূরবর্তী গ্রাম পর্যন্ত, আমাদের প্রতিশ্রুতি প্রতিফলিত করে—যাতে আপনি পাবেন নির্ভরযোগ্য সেবা এবং পরিবেশগতভাবে ইতিবাচক প্রভাব।"}
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FFB82B] mb-4">
            {language === "en"
              ? "Why Choose Green Bangla Courier?"
              : "কেন গ্রিন বাংলা কুরিয়ার নির্বাচন করবেন?"}
          </h2>
          <ul className="list-disc list-inside leading-relaxed space-y-2">
            <li>
              <span className="font-semibold">
                {language === "en"
                  ? "Convenient Doorstep Pickup:"
                  : "সহজ ডোরস্টেপ পিকআপ:"}
              </span>
              {language === "en"
                ? " Enjoy the ease of having your parcels picked up right from your door, saving you time and hassle."
                : " আপনার দরজা থেকে সরাসরি পার্সেল সংগ্রহের সুবিধা উপভোগ করুন, যা আপনার সময় এবং ঝামেলা বাঁচায়।"}
            </li>
            <li>
              <span className="font-semibold">
                {language === "en"
                  ? "Fast & Secure Deliveries:"
                  : "দ্রুত এবং নিরাপদ ডেলিভারি:"}
              </span>
              {language === "en"
                ? " With optimized routes and professional handling, we ensure quick and secure deliveries across the country."
                : " অপ্টিমাইজড রুট এবং পেশাদার হ্যান্ডলিংয়ের মাধ্যমে, আমরা সারা দেশে দ্রুত এবং নিরাপদ ডেলিভারি নিশ্চিত করি।"}
            </li>
            <li>
              <span className="font-semibold">
                {language === "en"
                  ? "Real-Time Tracking:"
                  : "রিয়েল-টাইম ট্র্যাকিং:"}
              </span>
              {language === "en"
                ? " Stay updated every step of the way with our real-time tracking system, allowing you and your recipients to monitor your parcel’s journey."
                : " আমাদের রিয়েল-টাইম ট্র্যাকিং সিস্টেমের মাধ্যমে প্রতিটি ধাপে আপডেট থাকুন, যা আপনাকে এবং আপনার প্রাপককে পার্সেলের যাত্রা পর্যবেক্ষণ করতে সক্ষম করে।"}
            </li>
            <li>
              <span className="font-semibold">
                {language === "en"
                  ? "Eco-Friendly Commitment:"
                  : "পরিবেশবান্ধব অঙ্গীকার:"}
              </span>
              {language === "en"
                ? " We are devoted to sustainable practices, using green solutions whenever possible to reduce our environmental footprint."
                : " আমরা পরিবেশবান্ধব কার্যপ্রণালীর প্রতি নিবেদিত, এবং আমাদের পরিবেশগত ফুটপ্রিন্ট কমাতে সবসময়ই সবুজ সমাধান ব্যবহার করি।"}
            </li>
            <li>
              <span className="font-semibold">
                {language === "en" ? "Dedicated Support:" : "নিবেদিত সহায়তা:"}
              </span>
              {language === "en"
                ? " Our customer support team is here to assist you, ensuring your experience with Green Bangla Courier is smooth from start to finish."
                : " আমাদের গ্রাহক সহায়তা দল আপনাকে সহায়তা করতে এখানে রয়েছে, যাতে গ্রিন বাংলা কুরিয়ারের সাথে আপনার অভিজ্ঞতা শুরু থেকে শেষ পর্যন্ত মসৃণ হয়।"}
            </li>
          </ul>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#FFB82B] mb-4">
            {language === "en" ? "Our Services" : "আমাদের সেবা"}
          </h2>
          <p className="leading-relaxed">
            {language === "en"
              ? "From individual deliveries to bulk shipments, Green Bangla Courier offers a range of services tailored to meet the unique needs of our clients. Whether you're a small business owner or someone sending a personal package, we provide reliable, customized solutions that you can count on."
              : "ব্যক্তিগত ডেলিভারি থেকে বড় পরিমাণ চালান পর্যন্ত, গ্রিন বাংলা কুরিয়ার আমাদের গ্রাহকদের অনন্য চাহিদা পূরণের জন্য বিভিন্ন ধরনের সেবা প্রদান করে। আপনি যদি একজন ছোট ব্যবসার মালিক হন বা ব্যক্তিগত পার্সেল পাঠাচ্ছেন, আমরা নির্ভরযোগ্য, কাস্টমাইজড সমাধান প্রদান করি যা আপনি নির্ভর করতে পারেন।"}
          </p>
        </section>

        {/* Join Us Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#FFB82B] mb-4">
            {language === "en"
              ? "Join Us on the Journey"
              : "এই যাত্রায় আমাদের সাথে যোগ দিন"}
          </h2>
          <p className="leading-relaxed">
            {language === "en"
              ? "Green Bangla Courier is more than just a delivery service—it's a step towards a greener, connected Bangladesh. We invite you to join us on this journey and experience delivery with care, commitment, and a vision for a sustainable future."
              : "গ্রিন বাংলা কুরিয়ার শুধুমাত্র একটি ডেলিভারি সেবা নয়—এটি একটি সবুজ, সংযুক্ত বাংলাদেশের পথে একটি পদক্ষেপ। আমরা আপনাকে এই যাত্রায় আমাদের সাথে যোগ দিতে এবং যত্ন, প্রতিশ্রুতি এবং একটি টেকসই ভবিষ্যতের জন্য দৃষ্টিভঙ্গির সাথে ডেলিভারি অভিজ্ঞতা পেতে আমন্ত্রণ জানাই।"}
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
