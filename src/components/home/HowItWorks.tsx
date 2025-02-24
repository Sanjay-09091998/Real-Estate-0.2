import React from "react";
import { Search, Heart, FileText } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-12 w-12" />,
    title: "Search Properties",
    description:
      "Search for properties with advanced filters and real-time data.",
  },
  {
    icon: <Heart className="h-12 w-12" />,
    title: "Save Favorites",
    description:
      "Save your favorite properties and subscribe for premium insights.",
  },
  {
    icon: <FileText className="h-12 w-12" />,
    title: "Export & Contact",
    description: "Export property data or contact sellers directly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="mb-4 text-primary">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
