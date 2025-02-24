import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Heart, X } from "lucide-react";

interface PropertyCardProps {
  id: string;
  image: string;
  price: number;
  address: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  isSaved?: boolean;
  isSelected?: boolean;
  onSave?: (id: string) => void;
  onSelect?: (id: string) => void;
  onRemove?: (id: string) => void;
  showRemoveButton?: boolean;
}

const PropertyCard = ({
  id,
  image = "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  price = 500000,
  address = "123 Main St",
  propertyType = "House",
  bedrooms = 3,
  bathrooms = 2,
  squareFeet = 2000,
  isSaved = false,
  isSelected = false,
  onSave = () => {},
  onSelect = () => {},
  onRemove = () => {},
  showRemoveButton = false,
}: PropertyCardProps) => {
  return (
    <Card
      className={`overflow-hidden ${isSelected ? "ring-2 ring-primary" : ""}`}
    >
      <div className="relative">
        <img src={image} alt={address} className="w-full h-48 object-cover" />
        {showRemoveButton ? (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 hover:bg-red-100 hover:text-red-600"
            onClick={() => onRemove(id)}
          >
            <X className="h-5 w-5" />
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            className={`absolute top-2 right-2 ${isSaved ? "text-red-500" : ""}`}
            onClick={() => onSave(id)}
          >
            <Heart
              className="h-5 w-5"
              fill={isSaved ? "currentColor" : "none"}
            />
          </Button>
        )}
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold">${price.toLocaleString()}</h3>
          <Badge>{propertyType}</Badge>
        </div>

        <p className="text-gray-600 mb-4">{address}</p>

        <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
          <div>{bedrooms} beds</div>
          <div>{bathrooms} baths</div>
          <div>{squareFeet.toLocaleString()} sqft</div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        {!showRemoveButton && (
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => onSelect(id)}
          >
            Compare
          </Button>
        )}
        <Link to={`/property/${id}`} className="flex-1">
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
