import Navigation from "../components/Navigation";
import LoginSection from "../components/LoginSection";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div className="gradient-bg text-white font-inter min-h-screen">
      <Navigation activeSection="login" />
      <main className="section-content">
        <LoginSection />
      </main>
      <Footer />
    </div>
  );
}
