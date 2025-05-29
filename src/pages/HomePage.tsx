import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import AboutSection from "../components/home/AboutSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import BlogSection from "../components/home/BlogSection";
import CtaSection from "../components/home/CtaSection";

const HomePage: React.FC = () => {
  useEffect(() => {
    // Update page title
    document.title =
      "A Team Edventures - Building Stronger Teams Through Shared Adventures";

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
