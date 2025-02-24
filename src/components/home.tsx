import React from "react";
import HeroSection from "./home/HeroSection";
import HowItWorks from "./home/HowItWorks";
import FeaturedProperties from "./home/FeaturedProperties";
import MarketInsights from "./home/MarketInsights";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <FeaturedProperties />
      <MarketInsights />
    </div>
  );
};

export default Home;
