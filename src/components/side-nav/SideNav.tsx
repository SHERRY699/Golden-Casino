"use client";

import { useState } from "react";

export const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="bg-[#131313] min-h-screen flex flex-col gap-4 items-center">
      {/* Casino Bar - Clickable */}
      <div
        className={`w-[90%] relative bg-[#262626] mt-[100px] flex flex-col px-4 transition-all duration-300 ${
          isOpen ? "h-max mb-4" : "h-[40px]"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Top Section (Clickable) */}
        <div className="flex items-center justify-between h-[40px] cursor-pointer">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              className="text-[#ebbe7d]"
            >
              <path
                fill="currentColor"
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18m0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6S9 6.67 9 7.5S8.33 9 7.5 9m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9"
              ></path>
            </svg>
            <h1 className="text-[#ebbe7d] font-semibold">Casino</h1>
          </div>
          {/* Arrow Icon (Flips on Click) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            className={`text-[#ebbe7d] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              fill="currentColor"
              d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"
            ></path>
          </svg>
        </div>

        {/* Dropdown Content (Only visible when open) */}
        {isOpen && (
          <div className="flex flex-col gap-2 mt-2">
            <div className="px-4 py-2 text-white hover:bg-[#3a3a3a] cursor-pointer">
              All Games
            </div>
            <div className="px-4 py-2 text-white hover:bg-[#3a3a3a] cursor-pointer">
             Play with Bonus
            </div>
            <div className="px-4 py-2 text-white  hover:bg-[#3a3a3a] cursor-pointer">
              Slots
            </div>
            <div className="px-4 py-2 text-white  hover:bg-[#3a3a3a] cursor-pointer">
             Table Games
            </div> <div className="px-4 py-2 text-white  hover:bg-[#3a3a3a] cursor-pointer">
              New Games
            </div> <div className="px-4 py-2 text-white  hover:bg-[#3a3a3a] cursor-pointer">
              Jackpot
            </div>
          </div>
        )}
      </div>

      <div
        className={`w-[90%] relative bg-[#262626]  flex flex-col px-4 transition-all duration-300 ${
          isOpen ? "h-max mb-4" : "h-[40px]"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Top Section (Clickable) */}
        <div className="flex items-center justify-between h-[40px] cursor-pointer">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              className="text-[#ebbe7d]"
            >
              <path
                fill="currentColor"
                d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18m0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6S9 6.67 9 7.5S8.33 9 7.5 9m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9"
              ></path>
            </svg>
            <h1 className="text-[#ebbe7d] font-semibold">Live Casino</h1>
          </div>
          {/* Arrow Icon (Flips on Click) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            className={`text-[#ebbe7d] transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              fill="currentColor"
              d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"
            ></path>
          </svg>
        </div>

        {/* Dropdown Content (Only visible when open) */}
        {isOpen && (
          <div className="flex flex-col gap-2 mt-2">
            <div className="px-4 py-2 text-white hover:bg-[#3a3a3a] cursor-pointer">
              All Games
            </div>
            <div className="px-4 py-2 text-white hover:bg-[#3a3a3a] cursor-pointer">
             Play with Bonus
            </div>
            <div className="px-4 py-2 text-white  hover:bg-[#3a3a3a] cursor-pointer">
              Slots
            </div>
            <div className="px-4 py-2 text-white  hover:bg-[#3a3a3a] cursor-pointer">
             Table Games
            </div> <div className="px-4 py-2 text-white  hover:bg-[#3a3a3a] cursor-pointer">
              New Games
            </div> <div className="px-4 py-2 text-white  hover:bg-[#3a3a3a] cursor-pointer">
              Jackpot
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
