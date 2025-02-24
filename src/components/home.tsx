import React, { useState } from "react";
import AuthContainer from "./auth/AuthContainer";
import Dashboard from "./dashboard/Dashboard";

interface HomeProps {
  initialAuthView?: "login" | "signup";
  isLoading?: boolean;
}

const Home = ({ initialAuthView = "login", isLoading = false }: HomeProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  const handleFilterChange = (filters: any) => {
    console.log("Filter change:", filters);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {!isAuthenticated ? (
        <div className="min-h-screen flex items-center justify-center p-4">
          <AuthContainer
            onAuthSuccess={handleAuthSuccess}
            defaultView={initialAuthView}
            isLoading={isLoading}
          />
        </div>
      ) : (
        <Dashboard
          onSearch={handleSearch}
          onFilterChange={handleFilterChange}
          initialView="grid"
        />
      )}
    </div>
  );
};

export default Home;
