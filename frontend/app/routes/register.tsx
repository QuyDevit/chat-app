import Navigation from "../components/Navigation";
import RegisterSection from "../components/RegisterSection";
import Footer from "../components/Footer";

export default function Register() {
  return (
    <div className="gradient-bg text-white font-inter min-h-screen">
      <Navigation activeSection="register" />
      <main className="section-content">
        <RegisterSection />
      </main>
      <Footer />
    </div>
  );
}
