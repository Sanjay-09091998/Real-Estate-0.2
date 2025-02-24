import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Navbar />
        <main className="min-h-screen bg-gray-50 pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </main>
      </>
    </Suspense>
  );
}

export default App;
