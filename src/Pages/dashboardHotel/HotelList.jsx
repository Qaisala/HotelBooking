import React from "react";
import room1 from "../../assets/room_1.jpg";
import room2 from "../../assets/room_2.jpg";
import room3 from "../../assets/room_3.jpg";
import room4 from "../../assets/room_4.jpg";

function HotelList() {
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
    <div
      style={{
        maxWidth: "900px",
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        padding: "10px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Available Hotels
      </h1>
      {roomsData.map((room) => (
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "25px",
            padding: "15px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            backgroundColor: room.isAvailable ? "#e0ffe0" : "#ffe0e0",
            alignItems: "center",
          }}
        >
          <img
            src={room.images}
            alt={room.hotel}
            style={{
              width: "150px",
              height: "100px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
          <div style={{flexGrow:'1'}}>
            <h2 style={{ margin: "0 0 8px 0" }}>{room.hotel}</h2>
            <p style={{ margin: "4px 0" }}><strong>City:</strong> {room.city}</p>
            <p style={{ margin: "4px 0" }}><strong>Room Type:</strong> {room.roomType}</p>
            <p style={{ margin: "4px 0" }}><strong>Price per Night:</strong> ${room.pricePerNight}</p> 
            <p style={{ margin: "4px 0" }}><strong>Rating:</strong> {room.rating}</p> 
          </div>
        </div>
      ))}
    </div>
  );
}

export default HotelList;
