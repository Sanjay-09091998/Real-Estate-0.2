import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search, Grid, List, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Slider } from "../ui/slider";

interface SearchSectionProps {
  onSearch?: (query: string) => void;
  onViewChange?: (view: "grid" | "list") => void;
  onFilterChange?: (filters: SearchFilters) => void;
  currentView?: "grid" | "list";
}

interface SearchFilters {
  zipCode: string;
  homeType: string;
  priceRange: [number, number];
}

const SearchSection = ({
  onSearch = () => {},
  onViewChange = () => {},
  onFilterChange = () => {},
  currentView = "grid",
}: SearchSectionProps) => {
  const homeTypes = [
    "All Types",
    "Single Family",
    "Condo",
    "Townhouse",
    "Multi-Family",
  ];

  return (
    <div className="w-full bg-white p-6 shadow-sm rounded-lg">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <Input
            placeholder="Search by address, city, or ZIP code"
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        {/* Filters Button */}
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">ZIP Code</label>
                <Input placeholder="Enter ZIP code" type="text" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Home Type</label>
                <Select defaultValue={homeTypes[0]}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {homeTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Price Range</label>
                <div className="pt-2">
                  <Slider
                    defaultValue={[200000, 800000]}
                    max={1000000}
                    min={0}
                    step={10000}
                  />
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>$0</span>
                  <span>$1M+</span>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>

        {/* View Toggle */}
        <div className="flex gap-2">
          <Button
            variant={currentView === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => onViewChange("grid")}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={currentView === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => onViewChange("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
