import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import AllHotels from "./Pages/AllHotels";

function App() {
  const isDashboard = useLocation().pathname.includes("dashboard");

  return (
    <>
      {!isDashboard && <NavBar />}

      <div className="min-h-[70vh] ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<AllHotels />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
