import React from "react";
import NavBar from "./components/NavBar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import AllHotels from "./Pages/AllHotels";
import RoomDetails from "./Pages/RoomDetails";
import MyBookings from "./Pages/MyBookings";
import Layout from "./Pages/dashboardHotel/Layout";
import Dashboard from "./Pages/dashboardHotel/Dashboard";
import AddHotel from "./Pages/dashboardHotel/AddHotel";
import HotelList from "./Pages/dashboardHotel/HotelList";

function App() {
  const isDashboard = useLocation().pathname.includes("dashboard");

  return (
    <>
      {!isDashboard && <NavBar />}

      <div className="min-h-[70vh] ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<AllHotels />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard/add-hotel" element={<AddHotel />} />
            <Route path="/dashboard/hotel-list" element={<HotelList />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
