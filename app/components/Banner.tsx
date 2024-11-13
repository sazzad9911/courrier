'use client'
import Link from 'next/link';
import React, { useContext } from 'react';
import { LanguageContext } from './Providers/LanguageProvider';

const Banner = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className='max-w-[2400px] mx-auto'>
      <section className="relative">
        {/* Background Image */}
        <div className="absolute h-40 w-full md:h-auto">
          <img 
            src="/images/banner.png" 
            alt={language === 'en' ? "Courier Rider" : "কুরিয়ার রাইডার"} 
            className="w-full h-full md:object-cover" 
          />
        </div>

        {/* Text content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-end lg:pt-12 pt-2 pl-24 container mx-auto">
          <div className="max-w-sm lg:max-w-md">
            <h1 className="text-white text-md md:text-3xl font-semibold md:font-normal md:mb-2 lg:mb-4">
              {language === 'en' 
                ? 'We Deliver Parcel With \n Live Tracking' 
                : 'আমরা পার্সেল সরবরাহ করি \n লাইভ ট্র্যাকিং সহ'}
            </h1>
            <p className="text-white text-xs md:text-base lg:mb-6 md:mb-3 mb-2 line-clamp-3">
              {language === 'en'
                ? 'Experience fast, secure, and reliable parcel delivery with live tracking! Our service ensures your package is always on the move, and you can track its journey in real-time.'
                : 'লাইভ ট্র্যাকিং সহ দ্রুত, নিরাপদ এবং নির্ভরযোগ্য পার্সেল ডেলিভারি অভিজ্ঞতা নিন! আমাদের সেবা নিশ্চিত করে যে আপনার প্যাকেজ সবসময় চলমান থাকে এবং আপনি রিয়েল-টাইমে এর যাত্রা ট্র্যাক করতে পারেন।'}
            </p>
            <Link
              href="/auth/signup"
              className="bg-green-600 text-white py-1 md:py-2 md:px-6 px-2 rounded-md hover:bg-green-700"
            >
              {language === 'en' ? 'Join as Merchant' : 'মার্চেন্ট হিসেবে যোগ দিন'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
