import React from "react";
import room2 from "../assets/room_2.jpg";
import room3 from "../assets/room_3.jpg";
import { format } from "date-fns";

function MyBookings() {
  const userBookingsData = [
    {
      _id: "bkg_01xa9c2e1f2g3h4i5j6k7l8m9n0",
      user: "Frank",
      image: room3,
      hotel: "UrbanStay Central",
      checkInData: "2024-05-09T15:00:00Z",
      checkOutData: "2024-05-13T15:00:00Z",
      totalPrice: 620,
      guests: 2,
      status: "Confirmed",
      paymentMethod: "PayPal",
      isPaid: true,
      createdAt: "2024-06-01T10:00:00Z",
      updatedAt: "2024-06-01T10:00:00Z",
      __v: 0,
    },
    {
      _id: "bkg_02xa9c2e1f2g3h4i5j6k7l8m9n0",
      user: "Mike",
      image: room2,
      hotel: "Garden Luxe Hotel",
      checkInData: "2024-07-01T15:00:00Z",
      checkOutData: "2024-07-05T11:00:00Z",
      totalPrice: 790,
      guests: 3,
      status: "Canceled",
      paymentMethod: "Cash",
      isPaid: false,
      createdAt: "2024-06-01T10:00:00Z",
      updatedAt: "2024-06-01T10:00:00Z",
      __v: 0,
    },
  ];

  return (
    <div className="p-8 pt-60">
      <h1 className="text-3xl font-bold mb-6 text-center">My Bookings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-x overflow-hidden">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-600 uppercase text-sm">
              <th className="py-3 px-4">User</th>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Hotel</th>
              <th className="py-3 px-4">Guests</th>
              <th className="py-3 px-4">Check-in</th>
              <th className="py-3 px-4">Check-out</th>
              <th className="py-3 px-4">Total Price</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Payment</th>
            </tr>
          </thead>
          <tbody>
            {userBookingsData.map((booking) => (
              <tr key={booking._id}>
                <td className="py-2 px-4 border-b">{booking.user}</td>
                <td className="py-2 px-4 border-b">
                  <img
                    className="w-20 h-16 object-cover rounded"
                    src={booking.image}
                    alt={booking.hotel}
                  />
                </td>
                <td className="py-2 px-4 border-b">{booking.hotel}</td>
                <td className="py-2 px-4 border-b">{booking.guests}</td>
                <td className="py-2 px-4 border-b">
                  {format(new Date(booking.checkInData), "d-MMM-yyyy")}
                </td> 
                <td className="py-2 px-4 border-b">
                  {format(new Date(booking.checkOutData), "d-MMM-yyyy")}
                </td>
                <td className="py-2 px-4 border-b">
                  {booking.totalPrice} $
                </td>

                <td className="py-2 px-4 border-b">
                    <span className={`px-2 py-1 rounded-full text-s ${
                      booking.status === "Confirmed" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {booking.status}
                    </span>
                </td>
                <td className="py-2 px-4 border-b">
                    <span className={`text-sm ${booking.isPaid ? "text-green-600" : "text-red-600"}`}>
                     {booking.paymentMethod} ( {booking.isPaid ? "Paid" : "Not Paid"} )
                    </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBookings;
