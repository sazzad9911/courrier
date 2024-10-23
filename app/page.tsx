import Banner from "./components/Banner";
import ReportCards from "./components/HomeCards/ReportCards";
import SearchHome from "./components/SearchHome";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <ReportCards></ReportCards>
      <SearchHome></SearchHome>
    </div>
  );
}
