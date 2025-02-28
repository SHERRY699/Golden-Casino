"use client";
import "../../app/globals.css"; // Import global styles

const data = [
  { user: "player_23256972a0f", title: "Green Chili 2", time: "21:20", bet: "1.00", multiplier: "x0", payout: "-1.00" },
  { user: "Melas08", title: "Sweet Bonanza 1000", time: "21:20", bet: "2.00", multiplier: "x0.8", payout: "-1.60" },
  { user: "player_8b869d062b48", title: "Coin Up: Lightning", time: "21:20", bet: "15.00", multiplier: "x0", payout: "-15.00" },
  { user: "player_89b92504afb", title: "Lion Gems: Hold and Win", time: "21:20", bet: "4.00", multiplier: "x0", payout: "-4.00" },
  { user: "player_0143", title: "Sweet Dream Bonanza", time: "21:20", bet: "19.00", multiplier: "x0.2", payout: "-8.00" },
  { user: "Kyovet", title: "Royal Coins 2: Hold and Win", time: "21:20", bet: "2.00", multiplier: "x0.65", payout: "-0.70" },
];

export default function ResponsiveTable() {
  return (
    <div className="w-full h-[700px] max-w-[1400px] mx-auto mt-20 px-4 ">
        <h1 className="text-2xl mb-10 text-[#ebbe7d] bg-[#262626] w-[200px] h-[50px] rounded-lg flex items-center justify-center font-bold">Casino</h1>

      {/* Scrollable container for small screens */}
      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full min-w-[600px] border-collapse text-left">
          {/* Table Header */}
          <thead className="bg-[#262626] text-white">
            <tr className="border-b border-gray-700">
              <th className="p-3">User</th>
              <th className="p-3">Game Title</th>
              <th className="p-3 hidden md:table-cell">Time</th>
              <th className="p-3">Bet (Amount)</th>
              <th className="p-3 hidden sm:table-cell">Multiplier</th>
              <th className="p-3">Payout</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b bg-[#131313] text-white hover:bg-[#262626] transition">
                <td className="p-3">{item.user}</td>
                <td className="p-3">{item.title}</td>
                <td className="p-3 hidden md:table-cell">{item.time}</td>
                <td className="p-3">{item.bet}</td>
                <td className="p-3 hidden sm:table-cell">{item.multiplier}</td>
                <td className="p-3">{item.payout}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
