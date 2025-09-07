import Navigation from "../components/Navigation";
import ChatSection from "../components/ChatSection";
import Footer from "../components/Footer";

export default function Chat() {
  return (
    <div className="gradient-bg text-white font-inter min-h-screen">
      <Navigation activeSection="chat" />
      <main className="section-content">
        <ChatSection />
      </main>
      <Footer />
    </div>
  );
}
