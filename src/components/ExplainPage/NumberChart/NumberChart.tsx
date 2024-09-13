import { cn } from "@/lib/utils";
import React from "react";

const classNames = [
  "border-t-0 border-l-0 border-r-0",
  "border-t-0",
  "border-t-0 border-r-0 border-l-0",
  "border-l-0 border-t-0 border-b-0",
  "border-none",
  "border-r-0 border-t-0",
  "border-b-0 border-l-0 border-r-0",
  "border-b-0",
  "border-b-0 border-right 0",
];

const NumberChart = ({ birthDateChart }: { birthDateChart: string[] }) => {
  return (
    <div className="w-[350px] grid grid-cols-3">
      {birthDateChart.map((item, index) => (
        <div
          key={index}
          className={cn(
            "border border-gray-100 text-center p-4",
            classNames[index]
          )}
        >
          <span className="text-xl text-neon">{item}</span>
          {!item && (
            <span className="text-lg text-gray-700 cursor-not-allowed">
              {index + 1}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default NumberChart;
