import React from "react";
import PropertyCard from "./PropertyCard";
import { Button } from "../ui/button";
import { Grid, List } from "lucide-react";

interface Property {
  id: string;
  image: string;
  price: number;
  address: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  propertyType: string;
  isPremium: boolean;
  isLocked: boolean;
}

interface PropertyGridProps {
  properties?: Property[];
  viewMode?: "grid" | "list";
  onViewModeChange?: (mode: "grid" | "list") => void;
}

const PropertyGrid = ({
  properties = [
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
  ],
  viewMode = "grid",
  onViewModeChange = () => {},
}: PropertyGridProps) => {
  return (
    <div className="w-full bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-6 gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => onViewModeChange("grid")}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => onViewModeChange("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>

        <div
          className={`
            grid gap-6
            ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}
          `}
        >
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              price={property.price}
              address={property.address}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              sqft={property.sqft}
              propertyType={property.propertyType}
              isPremium={property.isPremium}
              isLocked={property.isLocked}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyGrid;
