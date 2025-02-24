import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Slider } from "../ui/slider";
import { Badge } from "../ui/badge";

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: any) => void;
}

const SearchFilters = ({ onSearch, onFilterChange }: SearchFiltersProps) => {
  const homeTypes = ["Apartment", "Villa", "Condo", "Commercial"];
  const priceRanges = ["$100K-$500K", "$500K-$1M", "$1M+"];

  return (
    <div className="space-y-4 max-w-7xl mx-auto px-4">
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Input
            placeholder="Search by zip code, city, or address"
            className="pl-10"
            onChange={(e) => onSearch(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">Price Range</label>
                <Slider
                  defaultValue={[0, 1000000]}
                  max={2000000}
                  step={50000}
                  className="mt-2"
                  onValueChange={(value) =>
                    onFilterChange({ priceRange: value })
                  }
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>$0</span>
                  <span>$2M+</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Property Type</label>
                <Select
                  onValueChange={(value) =>
                    onFilterChange({ propertyType: value })
                  }
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {homeTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex gap-2 flex-wrap">
        <div className="flex gap-2">
          {homeTypes.map((type) => (
            <Badge
              key={type}
              variant="outline"
              className="cursor-pointer"
              onClick={() =>
                onFilterChange({ propertyType: type.toLowerCase() })
              }
            >
              {type}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          {priceRanges.map((range) => (
            <Badge
              key={range}
              variant="outline"
              className="cursor-pointer"
              onClick={() => onFilterChange({ priceRange: range })}
            >
              {range}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
