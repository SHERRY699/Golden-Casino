"use client";

import { useState } from "react";
import { SideNav } from "@/components/side-nav/SideNav";
import { Header } from "@/components/header/Header";
import { Coins, Menu, Spade, Volleyball } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [showSideNav, setShowSideNav] = useState(false);

  // Function to close SideNav
  const closeSideNav = () => setShowSideNav(false);

  return (
    <main className="flex flex-col min-h-screen w-full bg-black relative">
      <div>
        <Header />
      </div>
      <div className="w-full flex flex-row">
        {/* Sidebar - Hidden on small screens */}
        <div
          className={`lg:w-[18%] lg:block fixed top-25 left-0 h-full bg-[#262626] z-40 transition-transform duration-300 ${
            showSideNav ? "translate-x-0 w-64" : "-translate-x-full"
          } lg:translate-x-0 lg:w-[18%]`}
        >
          <SideNav />
        </div>

        {/* Main Content */}
        <div className="flex-1">{children}</div>
      </div>

      {/* Bottom Tab Navigation (Mobile) - Always on Top of SideNav */}
      <div
        className={`fixed bottom-0 w-full bg-[#262626] lg:hidden p-4 flex items-center justify-evenly z-50 transition-all duration-300 ${
          showSideNav ? "translate-y-0" : "translate-y-0"
        }`}
      >
        <button
          onClick={() => setShowSideNav(!showSideNav)}
          className="p-2 rounded-full flex flex-col gap-2 items-center"
        >
          <Menu className="text-white w-6 h-6" />
          <p className="text-white">Menu</p>
        </button>
        <button
          onClick={closeSideNav}
          className="p-2 rounded-full flex flex-col gap-2 items-center"
        >
          <Spade className="text-white w-6 h-6" />
          <p className="text-white">Casino</p>
        </button>
        <button
          onClick={closeSideNav}
          className="p-2 rounded-full flex flex-col gap-2 items-center"
        >
          <Volleyball className="text-white w-6 h-6" />
          <p className="text-white">Sports</p>
        </button>
        <button
          onClick={closeSideNav}
          className="p-2 rounded-full flex flex-col gap-2 items-center"
        >
          <Coins className="text-white w-6 h-6" />
          <p className="text-white">TFS</p>
        </button>
        
      </div>
    </main>
  );
}
