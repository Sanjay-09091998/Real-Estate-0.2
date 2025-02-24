import React, { useState } from "react";
import SearchFilters from "./search/SearchFilters";
import PropertyCard from "./property/PropertyCard";
import { Button } from "./ui/button";

interface HomeProps {
  initialView?: "grid" | "list";
}

const Home = ({ initialView = "grid" }: HomeProps) => {
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);
  const [savedProperties, setSavedProperties] = useState<string[]>([]);

  // Sample properties data
  const properties = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      price: 750000,
      address: "123 Luxury Lane, Beverly Hills, CA 90210",
      propertyType: "Villa",
      bedrooms: 4,
      bathrooms: 3,
      squareFeet: 3200,
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      price: 425000,
      address: "456 Condo Court, Marina Del Rey, CA 90292",
      propertyType: "Condo",
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 1500,
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      price: 1250000,
      address: "789 Estate Drive, Pacific Palisades, CA 90272",
      propertyType: "House",
      bedrooms: 5,
      bathrooms: 4,
      squareFeet: 4500,
    },
  ];

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const handleFilterChange = (filters: any) => {
    console.log("Filter change:", filters);
  };

  const handleSaveProperty = (id: string) => {
    setSavedProperties((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  };

  const handleSelectProperty = (id: string) => {
    setSelectedProperties((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4">
      <SearchFilters
        onSearch={handleSearch}
        onFilterChange={handleFilterChange}
      />

      {selectedProperties.length > 0 && (
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
          <span>{selectedProperties.length} properties selected</span>
          <Button>Compare Selected</Button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            {...property}
            isSaved={savedProperties.includes(property.id)}
            isSelected={selectedProperties.includes(property.id)}
            onSave={handleSaveProperty}
            onSelect={handleSelectProperty}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
