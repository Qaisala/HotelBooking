import React from "react";

function Hero() {
  const cities = ["Istanbul", "New York", "Oslo", "London", "Beirut"];

  return (
    <div className='relative flex flex-col items-center justify-center p-10 text-white bg-[url("/src/assets/hotel_3.jpg")] bg-no-repeat bg-cover bg-center h-screen'>
   
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 text-center p-6 mt-50 sm:p-6 sm:mt-20"> {/* Added padding top for the fixed nav */}
        <div className="text-center m-6">
            <h2 className="text-[#e89755] text-4xl mb-3 font-bold">
          Find Your Perfect Stay, Anywhere
        </h2>
        <p className="text-2xl">
          Discover the best hotels and experiences for your next adventure. Book
          with ease and start your journey today.
        </p>
        <button className="mt-5">Book Now</button>
        </div>

        <section className="bg-white py-6 px-6 max-w-xl mx-auto rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Book Your Stay
          </h2>
          <form className="space-y-4 text-gray-800">
            <div>
              <label
                for="destination"
                className="block text-sm font-medium text-gray-700"
              >
                Destination
              </label>
              <input
                list="destinations"
                type="text"
                name="destination"
                placeholder="e.g., Istanbul, Paris..."
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <datalist id="destinations">
                {cities.map((city, i) => (
                  <option key={i} value={city} />
                ))}
              </datalist>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  for="checkin"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-in
                </label>
                <input
                  type="date"
                  id="checkin"
                  name="checkin"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  for="checkout"
                  className="block text-sm font-medium text-gray-700"
                >
                  Check-out
                </label>
                <input
                  type="date"
                  id="checkout"
                  name="checkout"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  for="guests"
                  className="block text-sm font-medium text-gray-700"
                >
                  Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  min="1"
                  max="10"
                  value="1"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  for="rooms"
                  className="block text-sm font-medium text-gray-700"
                >
                  Rooms
                </label>
                <input
                  type="number"
                  id="rooms"
                  name="rooms"
                  min="1"
                  max="5"
                  value="1"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="mt-3">Search Hotels</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Hero;
