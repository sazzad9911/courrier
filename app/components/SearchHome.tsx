import Search from "./Search";


const SearchHome = () => {
 

  return (
    <section className=" ">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-white text-xl md:text-2xl mb-1 md:mb-4">Track Parcel</h2>
        <Search></Search>
      </div>
    </section>
  );
};

export default SearchHome;
