"use client";
import { PlayCircle } from "lucide-react";
import "../../app/globals.css"; // Import global styles

const games = [
  { id: 1, name: "Sweet Bonanza", image: "images/1.jpeg" },
  { id: 2, name: "Coin Up: Lightning", image: "images/2.jpeg" },
  { id: 3, name: "Zeus", image: "images/3.jpeg" },
  { id: 4, name: "Mighty Symbols Jokers", image: "images/4.jpeg" },
  { id: 5, name: "Double Blazing Hot", image: "images/5.jpeg" },
  { id: 6, name: "Mega Win", image: "images/6.jpeg" },
  { id: 7, name: "Lucky Slots", image: "images/6.jpeg" },
  { id: 8, name: "Double Blazing Hot", image: "images/5.jpeg" },


  { id: 9, name: "Sweet Bonanza", image: "images/1.jpeg" },
  { id: 10, name: "Double Blazing Hot", image: "images/5.jpeg" },

  { id: 11, name: "Sweet Bonanza", image: "images/1.jpeg" },
  { id: 12, name: "Double Blazing Hot", image: "images/5.jpeg" },


];

export default function GameCarousel() {
  return (
    <div className="w-full max-w-[1400px] mx-auto mt-6 px-4">
        <h1 className="text-2xl mb-10 text-[#ebbe7d] bg-[#262626] w-[200px] h-[50px] rounded-lg flex items-center justify-center font-bold">Games Section</h1>

      {/* Grid Layout for Responsive Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="relative w-full cursor-pointer h-[180px] sm:h-[200px] bg-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 group"
          >
            {/* Background Image */}
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:opacity-30"
            />

            {/* Play Button on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <PlayCircle size={50} className="text-white" />
            </div>

            {/* Game Name */}
            <p className="absolute bottom-3 text-white font-semibold text-sm sm:text-base md:text-lg opacity-100 group-hover:opacity-80">
              {game.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
