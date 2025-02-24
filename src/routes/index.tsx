import { createBrowserRouter } from "react-router-dom";
import Home from "@/components/home";
import PropertyDetails from "@/components/property/PropertyDetails";
import Dashboard from "@/components/dashboard/Dashboard";
import Subscription from "@/components/subscription/Subscription";
import BulkUpload from "@/components/admin/BulkUpload";
import SavedProperties from "@/components/saved/SavedProperties";
import CompareProperties from "@/components/compare/CompareProperties";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/property/:id",
    element: <PropertyDetails />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/subscription",
    element: <Subscription />,
  },
  {
    path: "/admin/bulk-upload",
    element: <BulkUpload />,
  },
  {
    path: "/saved",
    element: <SavedProperties />,
  },
  {
    path: "/compare",
    element: <CompareProperties />,
  },
]);
