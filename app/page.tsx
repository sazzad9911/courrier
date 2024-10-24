import Banner from "./components/Banner";
import CityServiceInfo from "./components/CityServiceInfo";
import Facilities from "./components/Facilities";
import ReportCards from "./components/HomeCards/ReportCards";
import PartnersSection from "./components/PartnersSection";
import SearchHome from "./components/SearchHome";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ReportCards></ReportCards>
      <SearchHome></SearchHome>
      <CityServiceInfo></CityServiceInfo>
      <Facilities></Facilities>
      <PartnersSection></PartnersSection>
    </div>
  );
}
