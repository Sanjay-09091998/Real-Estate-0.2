import React, { useState } from "react";
import SearchSection from "./SearchSection";
import PropertyGrid from "./PropertyGrid";

interface DashboardProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (filters: any) => void;
  initialView?: "grid" | "list";
}

const Dashboard = ({
  onSearch = () => {},
  onFilterChange = () => {},
  initialView = "grid",
}: DashboardProps) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">(initialView);

  // Sample properties data with default values
  const defaultProperties = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      price: 599000,
      address: "123 Main Street, Anytown, USA",
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2000,
      propertyType: "Single Family Home",
      isPremium: true,
      isLocked: true,
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      price: 425000,
      address: "456 Oak Avenue, Somewhere, USA",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1500,
      propertyType: "Condo",
      isPremium: false,
      isLocked: false,
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      price: 789000,
      address: "789 Pine Road, Elsewhere, USA",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      propertyType: "Luxury Home",
      isPremium: true,
      isLocked: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        <SearchSection
          onSearch={onSearch}
          onFilterChange={onFilterChange}
          onViewChange={setViewMode}
          currentView={viewMode}
        />
        <PropertyGrid
          properties={defaultProperties}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      </div>
    </div>
  );
};

export default Dashboard;
