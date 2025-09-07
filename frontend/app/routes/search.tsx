import Navigation from "../components/Navigation";
import SearchSection from "../components/SearchSection";
import Footer from "../components/Footer";

export default function Search() {
  return (
    <div className="gradient-bg text-white font-inter min-h-screen">
      <Navigation activeSection="search" />
      <main className="section-content">
        <SearchSection />
      </main>
      <Footer />
    </div>
  );
}
