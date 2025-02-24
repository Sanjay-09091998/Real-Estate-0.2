import React from "react";
import { Button } from "../ui/button";
import SearchFilters from "../search/SearchFilters";

const HeroSection = () => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-4.0.3)",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Find Your Dream Property with the Most Accurate Data
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          Search through millions of verified listings with detailed insights
          and market analysis
        </p>

        {/* Search Section */}
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-lg p-6">
          <SearchFilters
            onSearch={(query) => console.log(query)}
            onFilterChange={(filters) => console.log(filters)}
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mt-8">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Search Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/20"
          >
            View Market Trends
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
