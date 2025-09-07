import Navigation from "../components/Navigation";
import ProfileSection from "../components/ProfileSection";
import Footer from "../components/Footer";

export default function Profile() {
  return (
    <div className="gradient-bg text-white font-inter min-h-screen">
      <Navigation activeSection="profile" />
      <main className="section-content">
        <ProfileSection />
      </main>
      <Footer />
    </div>
  );
}
