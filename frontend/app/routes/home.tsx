import { useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

export default function Home() {
  // Add smooth scrolling and animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = "1";
          target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe all cards for animation
    const cards = document.querySelectorAll(".card-hover");
    cards.forEach((card) => {
      const cardElement = card as HTMLElement;
      cardElement.style.opacity = "0";
      cardElement.style.transform = "translateY(20px)";
      cardElement.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Add interactive features
  useEffect(() => {
    const handleButtonClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "BUTTON" && !target.hasAttribute("disabled")) {
        target.style.transform = "scale(0.95)";
        setTimeout(() => {
          target.style.transform = "";
        }, 150);
      }
    };

    document.addEventListener("click", handleButtonClick);
    return () => document.removeEventListener("click", handleButtonClick);
  }, []);

  return (
    <div className="gradient-bg text-white font-inter min-h-screen">
      <Navigation activeSection="home" />

      <main className="section-content">
        <HeroSection />
        <WhyChooseUs />
      </main>

      <Footer />
    </div>
  );
}
