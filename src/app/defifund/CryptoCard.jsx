// src/components/CryptoCard.jsx
"use client";

import Link from "next/link";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { price: 1600 },
  { price: 1620 },
  { price: 1615 },
  { price: 1650 },
  { price: 1700 },
  { price: 1800 },
  { price: 1850 },
  { price: 1830 },
  { price: 1870 },
  { price: 1860 },
];

const CryptoCard = () => {
  return (
    <div className="bg-[#616774] rounded-xl shadow-md text-white w-full max-w-sm">
      <div className=" px-4 pt-4">
        <div className="flex items-center mb-4">
          {/* Logo */}
          <div className="w-6 h-6 bg-green-400 rounded-full mr-2"></div>
          {/* Title */}
          <h2 className="font-semibold text-sm">ETHx Hyperloop by Stader Labs</h2>
        </div>

        <div className="text-xs text-gray-400 mb-4">
          <div className="flex justify-between">
            <span>AUM</span>
            <span className="text-white font-medium">$3.54M</span>
          </div>
          <div className="flex justify-between">
            <span>Depositors</span>
            <span className="text-white font-medium">41</span>
          </div>
        </div>

        {/* Chart */}
        <div className="h-10">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line type="monotone" dataKey="price" stroke="#00FFB2" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Price and change */}
      <div className="mt-4 bg-[#424549] px-4 py-3 rounded-xl">
        <Link
          href='https://app.enzyme.finance/vault/0x1ce8aafb51e79f6bdc0ef2ebd6fd34b00620f6db'
          className='flex justify-between items-center'
        >
          <div>
            <div className="text-sm font-semibold">$1,877.40 <span className="text-xs text-gray-400">/ share</span></div>
            <div className="text-xs text-red-400">-3.05% 24h</div>
          </div>
          <div className="text-gray-400 text-2xl">&rarr;</div>
        </Link>
      </div>


    </div >
  );
};

export default CryptoCard;
