import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Lock } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface PropertyCardProps {
  image?: string;
  price?: number;
  address?: string;
  bedrooms?: number;
  bathrooms?: number;
  sqft?: number;
  propertyType?: string;
  isPremium?: boolean;
  isLocked?: boolean;
}

const PropertyCard = ({
  image = "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
  price = 599000,
  address = "123 Main Street, Anytown, USA",
  bedrooms = 3,
  bathrooms = 2,
  sqft = 2000,
  propertyType = "Single Family Home",
  isPremium = false,
  isLocked = true,
}: PropertyCardProps) => {
  return (
    <Card className="w-[380px] bg-white overflow-hidden relative">
      <CardHeader className="p-0">
        <div className="relative h-[240px] w-full">
          <img
            src={image}
            alt="Property"
            className={`w-full h-full object-cover ${isLocked ? "blur-sm" : ""}`}
          />
          {isPremium && (
            <Badge
              className="absolute top-4 right-4 bg-yellow-500 text-white"
              variant="secondary"
            >
              Premium
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className={`p-6 ${isLocked ? "blur-sm" : ""}}`}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold">${price.toLocaleString()}</h3>
          <Badge variant="outline">{propertyType}</Badge>
        </div>
        <p className="text-gray-600 mb-4">{address}</p>
        <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
          <div>
            <span className="font-semibold">{bedrooms}</span> Beds
          </div>
          <div>
            <span className="font-semibold">{bathrooms}</span> Baths
          </div>
          <div>
            <span className="font-semibold">{sqft.toLocaleString()}</span> sqft
          </div>
        </div>
      </CardContent>
      {isLocked && (
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px] flex items-center justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary" className="gap-2">
                  <Lock className="h-4 w-4" />
                  Unlock Premium Content
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Subscribe to view full property details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      )}
    </Card>
  );
};

export default PropertyCard;
