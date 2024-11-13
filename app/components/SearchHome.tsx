'use client'
import { useContext } from "react";
import Search from "./Search";
import { LanguageContext } from "./Providers/LanguageProvider";


const SearchHome = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className=" ">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-white text-xl md:text-2xl mb-1 md:mb-4">{language === 'en' ? 'Track Parcel' : 'ট্র্যাক পার্সেল'}</h2>
        <Search></Search>
      </div>
    </section>
  );
};

export default SearchHome;
