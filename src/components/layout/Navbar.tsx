import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Heart,
  Home,
  Settings,
  CreditCard,
  LayoutDashboard,
  Menu,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const navItems = [
    { label: "Home", icon: <Home className="h-4 w-4" />, path: "/" },
    {
      label: "Dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />,
      path: "/dashboard",
    },
    { label: "Saved", icon: <Heart className="h-4 w-4" />, path: "/saved" },
    {
      label: "Subscription",
      icon: <CreditCard className="h-4 w-4" />,
      path: "/subscription",
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4" />,
      path: "/settings",
    },
  ];

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold">
              RealEstate
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button variant="ghost" className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-4">
                  {navItems.map((item) => (
                    <Link key={item.path} to={item.path}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start gap-2"
                      >
                        {item.icon}
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
