import React, { useState } from "react";

import room1 from "../assets/room_1.jpg";
import room2 from "../assets/room_2.jpg";
import room3 from "../assets/room_3.jpg";
import room4 from "../assets/room_4.jpg";

import { useNavigate } from "react-router-dom";
import { FaLocationArrow, FaStar } from "react-icons/fa";

function AllHotels() {

  const CheckBox = ({ label, selected = false, onChange }) => (
  <label className="flex gap-3 items-center cursor-pointer text-sm mt-2">
    <input 
      type="checkbox" 
      checked={selected} 
      onChange={(e) => onChange(e.target.checked, label)} // Call the prop!
    />
    <span className="font-light select-none">{label}</span>
  </label>
);
 
  const RadioButton = ({ label, selected = false, onChange }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer text-sm mt-2">
      <input
        type="radio"
        name="sortOption" // Keeps the group synchronized
        checked={selected}
        onChange={() => onChange(label)} // Executes the function passed from parent
      />
      <span className="font-light select-none">{label}</span>
    </label>
  );
};

  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false);

  const roomFilter = [
    "Single Room",
    "Double Room",
    "Swimming Pool",
    "Family Suite",
  ]

  const priceFilter = [
    "0 to 500",
    "500 to 1000",
    "1000 to 2000",
    "2000 to 3000",
  ]

  const sortOption = [
    "Price Low to High",
    "Price High to Low",
    "Newest",
  ]

  const roomsData = [
    {
      _id: "a1f64c7197bs1234abcd9012",
      hotel: "Alpine View Lodge",
      city: "New York",
      roomType: "King Suite",
      pricePerNight: 450,
      amenities: ["Balcony", "Sea View", "High-Speed WiFi"],
      images: room1,
      rating: 5,
      address: "123 Main St, New York, NY 10001",
      isAvailable: true,
      createdAt: "2025-04-12T09:15:00.000Z",
      updatedAt: "2025-04-12T09:15:00.000Z",
      __v: 0,
    },
    {
      _id: "b2e75d8298cd2345bcde0123",
      hotel: "Garden Luxe Hotel",
      city: "Istanbul",
      roomType: "Standard Twin",
      pricePerNight: 280,
      amenities: ["TV", "City View", "Breakfast Included"],
      images: room2,
      rating: 4,
      address: "456 Elm St, Istanbul, Turkey 34000",
      isAvailable: false,
      createdAt: "2025-04-13T11:30:00.000Z",
      updatedAt: "2025-04-13T11:30:00.000Z",
      __v: 0,
    },
    {
      _id: "c3d86e93a9de3456cdef1234",
      hotel: "UrbanStay Central",
      city: "London",
      roomType: "Luxury Single",
      pricePerNight: 320,
      amenities: ["Work Desk", "Garden Access", "Air Conditioning"],
      images: room3,
      rating: 4,
      address: "789 Oak St, London, UK SW1A 1AA",
      isAvailable: true,
      createdAt: "2025-04-14T14:45:00.000Z",
      updatedAt: "2025-04-14T14:45:00.000Z",
      __v: 0,
    },
    {
      _id: "d4f97fa4b0ef4567defa2345",
      hotel: "King Suite",
      city: "Paris",
      roomType: "Deluxe Family Room",
      pricePerNight: 390,
      amenities: ["Mini Bar", "Mountain View", "Free Parking"],
      images: room4,
      rating: 5,
      address: "321 Pine St, Paris, France 75001",
      isAvailable: true,
      createdAt: "2025-06-22T09:00:00.000Z",
      updatedAt: "2025-06-22T09:00:00.000Z",
      __v: 0,
    },
  ];
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between px-40 pt-60 items-start">
      <div>
        <div className="flex flex-col items-center text-left px-40">
          <h1 className="text-[#e89755] text-4xl md:text-2xl">Hotel Rooms</h1>
          <p className="text-gray-500 text-sm max-w-170 mt-2 text-center md:text-base">
            Discovery comfortable and stylish rooms tailored to every traveler's
            needs - from cozy singles to luxurious suites
          </p>
        </div>
        {roomsData.map((roomData, i) => (
          <div className="flex flex-col md:flex-row items-start py-10 gap-6 border-gray-300 border-b">
            <img
              onClick={() => navigate(`/rooms/${roomData._id}`)}
              className="max-h-65 rounded-xl shadow-lg object-cover cursor-pointer"
              src={roomData.images}
              alt="/"
            />
            <div key={i}>
              <p>{roomData.hotel}</p>
              <p>{roomData.city}</p>
              <div className="flex items-center text-yellow-400 mb-2">
                {Array.from({ length: roomData.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <div className="text-gray-500 flex items-center gap-3">
                <FaLocationArrow />
                <p>{roomData.address}</p>
              </div>

              <div className="mt-3">
                {roomData.amenities.map((items, i) => (
                  <small key={i} className="p-2 rounded-lg bg-gray-200 mr-2">
                    {items}
                  </small>
                ))}
              </div>
              <p className="font-bold text-[#e89755] mt-3">
                {roomData.pricePerNight}$/Night
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Filter Section on left side */}
      <div className="w-80 p-4 border border-gray-300 text-gray-600">
        <div
          className={`flex items-center justify-between border-b px-5 border-gray-500 ${openFilter && "border-b"}`}
        >
          <p>FILTERS</p>
          <div>
            <span
              className="lg:hidden"
              onClick={() => setOpenFilter(!openFilter)}
            >
              {openFilter ? "Hide" : "Show"}
            </span>
            <span className="hidden lg:block">Clear</span>
          </div>
        </div>
        <div
          className={`${openFilter ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transition-all duration-700`}
        >
          <div className="px-5 pt-6">
            <p className="text-gray-500 pb-2">Popular Filters</p>
            {roomFilter.map((room, i)=> (
              <CheckBox key={i} label={room}/>
            ))}
          </div>
          <div className="px-5 pt-6">
            <p className="text-gray-500 pb-2">Price Range</p>
            {priceFilter.map((price, i)=> (
              <CheckBox key={i} label={price}/>
            ))}
          </div>
            <div className="px-5 pt-6">
            <p className="text-gray-500 pb-2">Sort By</p>
            {sortOption.map((sort, i)=> (
              <RadioButton key={i} label={sort}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllHotels;

// Old Code:-

  // const CheckBox = ({label, selected = false, onChange=()=>{}}) => {
  //   return (
  //     <label className="flex gap-3 items-center cursor-pointer text-sm mt-2">
  //       <input type="checkbox" checked={selected} onChange={(e)=> (e.target.checked, label)}/>
  //       <span className="font-light select-none">{label}</span>
  //     </label>
  //   )
  // }
  
  //  const RadioButton = ({label, selected = false, onChange=()=>{}}) => {
  //   return (
  //     <label className="flex gap-3 items-center cursor-pointer text-sm mt-2">
  //       <input type="radio" name="sortOption" checked={selected} onChange={()=> (label)}/>
  //       <span className="font-light select-none">{label}</span>
  //     </label>
  //   )
  // }