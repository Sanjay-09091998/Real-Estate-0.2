import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { TrendingUp, MapPin, BarChart } from "lucide-react";

const MarketInsights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Market Insights & Trends</h2>
          <Button variant="outline">View More Trends</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Price Trends</h3>
                  <p className="text-gray-600">
                    Homes in California are up 4.5% this quarter!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Popular Locations
                  </h3>
                  <p className="text-gray-600">
                    Most searched zip codes: 90210, 10001, 77005
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <BarChart className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Market Analysis
                  </h3>
                  <p className="text-gray-600">
                    Luxury market showing strong growth in Q1 2024
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketInsights;
