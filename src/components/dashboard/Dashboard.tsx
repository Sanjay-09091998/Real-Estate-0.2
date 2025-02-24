import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Clock,
  Upload,
  Bell,
  Settings,
  Trash2,
  ExternalLink,
  X,
} from "lucide-react";
import PropertyCard from "../property/PropertyCard";

const Dashboard = () => {
  // Mock user data
  const user = {
    name: "Mark",
    plan: "Basic",
    remainingViews: 15,
    totalViews: 30,
  };

  // Mock saved properties
  const savedProperties = [
    {
      id: "1",
      title: "Modern 3BHK Apartment",
      location: "Los Angeles, CA",
      price: 750000,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      propertyType: "Apartment",
      zipCode: "90001",
      description:
        "Spacious 3-bedroom apartment in downtown LA with a balcony view, high-end finishes, and access to a rooftop pool.",
    },
    {
      id: "2",
      title: "Luxury Waterfront Villa",
      location: "Miami, FL",
      price: 1500000,
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      propertyType: "Villa",
      zipCode: "33139",
      description:
        "Elegant 5-bedroom villa with private beach access, infinity pool, and a state-of-the-art home automation system.",
    },
    {
      id: "3",
      title: "Cozy 2BHK Condo",
      location: "Austin, TX",
      price: 420000,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      propertyType: "Condo",
      zipCode: "78701",
      description:
        "Newly renovated condo with an open floor plan, modern kitchen, and access to a gym and swimming pool.",
    },
  ];

  // Mock recent searches
  const recentSearches = [
    {
      id: "1",
      zipCode: "90001",
      propertyType: "Apartment",
      priceRange: "$700K-$800K",
      date: "2024-03-20",
    },
    {
      id: "2",
      zipCode: "33139",
      propertyType: "Villa",
      priceRange: "$1M+",
      date: "2024-03-19",
    },
    {
      id: "3",
      zipCode: "78701",
      propertyType: "Condo",
      priceRange: "$400K-$500K",
      date: "2024-03-18",
    },
    {
      id: "4",
      zipCode: "60605",
      propertyType: "Townhouse",
      priceRange: "$600K-$700K",
      date: "2024-03-17",
    },
    {
      id: "5",
      zipCode: "10001",
      propertyType: "Penthouse",
      priceRange: "$2M+",
      date: "2024-03-16",
    },
  ];

  // Mock uploads
  const uploads = [
    {
      id: "1",
      filename: "march_listings.csv",
      date: "2024-03-20",
      status: "Completed",
      records: 150,
    },
    {
      id: "2",
      filename: "new_properties.csv",
      date: "2024-03-19",
      status: "Processing",
      records: 75,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* Welcome Section */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold mb-2">
                Welcome back, {user.name}!
              </h1>
              <p className="text-gray-600">
                You're on the {user.plan} plan with {user.remainingViews} of{" "}
                {user.totalViews} property views remaining this month.
              </p>
            </div>
            <Button>Upgrade Plan</Button>
          </div>
        </CardContent>
      </Card>

      {/* Saved Properties Section */}
      <Card>
        <CardHeader>
          <CardTitle>Saved Properties</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                image={property.image}
                price={property.price}
                address={property.location}
                propertyType={property.propertyType}
                bedrooms={3}
                bathrooms={2}
                squareFeet={1500}
                onRemove={(id) => console.log("Remove property", id)}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Searches Section */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Searches</CardTitle>
          <Button
            variant="outline"
            size="sm"
            onClick={() => console.log("Clear history")}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear History
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentSearches.map((search) => (
              <div
                key={search.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                onClick={() => console.log("Re-run search", search)}
              >
                <div className="flex items-center gap-4">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <div>
                    <div className="flex gap-2">
                      <Badge variant="outline">{search.zipCode}</Badge>
                      <Badge variant="outline">{search.propertyType}</Badge>
                      <Badge variant="outline">{search.priceRange}</Badge>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{search.date}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bulk Upload Status Section */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {uploads.map((upload) => (
              <div
                key={upload.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <Upload className="h-4 w-4 text-gray-500" />
                    <span className="font-medium">{upload.filename}</span>
                    <Badge
                      variant={
                        upload.status === "Completed" ? "default" : "secondary"
                      }
                    >
                      {upload.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {upload.records} records • {upload.date}
                  </p>
                </div>
                {upload.status === "Completed" && (
                  <Button variant="outline" size="sm">
                    Download Report
                  </Button>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="flex gap-4">
        <Button
          className="flex-1"
          variant="outline"
          onClick={() => console.log("Manage account")}
        >
          <Settings className="h-4 w-4 mr-2" />
          Manage Account
        </Button>
        <Button
          className="flex-1"
          variant="outline"
          onClick={() => console.log("View notifications")}
        >
          <Bell className="h-4 w-4 mr-2" />
          Notifications
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
