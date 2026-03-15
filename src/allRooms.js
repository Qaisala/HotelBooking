import room1 from "../src/assets/room_1.jpg";
import room2 from "../src/assets/room_2.jpg";
import room3 from "../src/assets/room_3.jpg";
import room4 from "../src/assets/room_4.jpg";
 
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

  export default roomsData;