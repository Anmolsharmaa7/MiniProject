import { useState } from "react";

function SeatSelection() {

  const totalSeats = 48;

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(
        selectedSeats.filter((s) => s !== seat)
      );
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  return (
    <div className="p-10 text-center">

      <h2 className="text-3xl font-bold mb-6">
        Select Your Seats 🎟️
      </h2>

      {/* SCREEN */}
      <div className="bg-gray-300 py-2 mb-6 rounded">
        SCREEN THIS WAY
      </div>

      {/* SEAT GRID */}
      <div className="grid grid-cols-8 gap-3 justify-center">

        {[...Array(totalSeats)].map((_, index) => {

          const seatNumber = index + 1;

          return (
            <button
              key={seatNumber}
              onClick={() => handleSeatClick(seatNumber)}
              className={`p-3 rounded
              ${
                selectedSeats.includes(seatNumber)
                  ? "bg-green-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {seatNumber}
            </button>
          );
        })}
      </div>

      {/* SELECTION INFO */}
      <div className="mt-6">

        <p className="text-lg">
          Selected Seats: {selectedSeats.join(", ") || "None"}
        </p>

        <p className="text-xl font-bold mt-2">
          Total Price: ₹{selectedSeats.length * 200}
        </p>

      </div>

    </div>
  );
}

export default SeatSelection;