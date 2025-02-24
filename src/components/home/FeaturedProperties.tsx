import React from "react";
import { Button } from "../ui/button";
import PropertyCard from "../property/PropertyCard";

const FeaturedProperties = () => {
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

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Properties</h2>
          <Button variant="outline">View All Listings</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
              onSave={(id) => console.log("Save property", id)}
              onSelect={(id) => console.log("Select property", id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
