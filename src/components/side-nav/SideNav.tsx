"use client";

import { useState } from "react";
import "../../app/globals.css"; // Import CSS for scrollbar styling

export const SideNav = () => {
  const [isCasinoOpen, setIsCasinoOpen] = useState(false);
  const [isLiveCasinoOpen, setIsLiveCasinoOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <main className="bg-[#131313] min-h-screen flex flex-col gap-4 items-center">
      {/* Casino Section */}
      <div className="w-[90%] bg-[#262626] flex flex-col px-4 transition-all duration-300">
        <div
          className="flex items-center justify-between h-[40px] cursor-pointer"
          onClick={() => setIsCasinoOpen(!isCasinoOpen)}
        >
          <div className="flex items-center gap-3">
            🎰
            <h1 className="text-[#ebbe7d] font-semibold">Casino</h1>
          </div>
          <span className={`text-[#ebbe7d] transition-transform duration-300 ${isCasinoOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </div>

        {isCasinoOpen && (
          <div className="scroll-container">
            {["All Games", "Play with Bonus", "Slots", "Table Games", "New Games", "Jackpot", "More Games", "Exclusive Games", "VIP Games"].map((item) => (
              <div key={item} className="menu-item">
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Live Casino Section */}
      <div className="w-[90%] bg-[#262626] flex flex-col px-4 transition-all duration-300">
        <div
          className="flex items-center justify-between h-[40px] cursor-pointer"
          onClick={() => setIsLiveCasinoOpen(!isLiveCasinoOpen)}
        >
          <div className="flex items-center gap-3">
            🎥
            <h1 className="text-[#ebbe7d] font-semibold">Live Casino</h1>
          </div>
          <span className={`text-[#ebbe7d] transition-transform duration-300 ${isLiveCasinoOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </div>

        {isLiveCasinoOpen && (
          <div className="scroll-container">
            {["All Games", "Top Rated", "Game Shows", "Roulette", "Blackjack", "Baccarat", "Poker", "Craps", "Live Dealers"].map((item) => (
              <div key={item} className="menu-item">
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Language Selection */}
      <div className="w-[90%] bg-[#262626] flex flex-col px-4 transition-all duration-300">
        <div
          className="flex items-center justify-between h-[40px] cursor-pointer"
          onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        >
          <div className="flex items-center gap-3">
            🌍
            <h1 className="text-[#ebbe7d] font-semibold">Language</h1>
          </div>
          <span className={`text-[#ebbe7d] transition-transform duration-300 ${isLanguageOpen ? "rotate-180" : ""}`}>
            ▼
          </span>
        </div>

        {isLanguageOpen && (
          <div className="scroll-container">
            {["English", "Español", "Français", "Deutsch", "中文", "Italiano", "Português", "हिन्दी", "日本語"].map((lang) => (
              <div key={lang} className="menu-item">
                {lang}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};
