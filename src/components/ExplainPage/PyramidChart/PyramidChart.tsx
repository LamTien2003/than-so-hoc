"use client";
import React, { useMemo } from "react";
import TrianglePeak from "@/assets/images/triangle peak.png";
import Image from "next/image";
import useNumerology from "@/hooks/useNumerology";
import { getYear } from "date-fns";

const PyramidChart = ({ birthDate }: { birthDate: string }) => {
  const { peak, age } = useNumerology("Lam Thanh Tien", birthDate);
  const { leftFoot, midFoot, rightFoot } = useMemo(() => {
    const date = birthDate.split("-");
    const day = date[0];
    const month = date[1];
    const year = date[2];

    const sumNumber = (number: string) => {
      while (number.length > 1) {
        number = number
          .split("")
          .filter(item => !!item && item !== " ")
          .reduce((prev, current) => {
            return Number(prev) + Number(current);
          }, 0)
          .toString();
      }
      return +number;
    };

    return {
      leftFoot: sumNumber(month),
      midFoot: sumNumber(day),
      rightFoot: sumNumber(year),
    };
  }, [birthDate]);

  return (
    <div className="w-full">
      <div className="relative mx-auto w-[250px] h-[250px] mt-12 pointer-events-none">
        <Image src={TrianglePeak} layout="fill" alt="" className="invert" />
        {/* Peak 4 */}
        <p className="absolute top-[-8%] right-[6%] text-xs">
          {age + 27} tuổi - Năm {getYear(birthDate) + age + 27}
        </p>
        <p className="absolute text-neon text-md top-[8%] left-[48%]">
          {peak.fourth}
        </p>

        {/* Peak 3 */}
        <p className="absolute w-full top-[10%] left-[-4%] text-xs">
          {age + 18} tuổi - Năm {getYear(birthDate) + age + 18}
        </p>

        <p className="absolute text-neon text-md top-[32%] left-[48%]">
          {peak.third}
        </p>

        {/* Peak  2*/}
        <p className="absolute w-full top-[39%] left-[75%] text-xs">
          {age + 9} tuổi - Năm {getYear(birthDate) + age + 9}
        </p>
        <p className="absolute text-neon text-md top-[56%] left-[63%]">
          {peak.second}
        </p>

        {/* Peak 1 */}
        <p className="absolute w-full top-[38%] left-[-16%] text-xs">
          {age} tuổi - Năm {getYear(birthDate) + age}
        </p>
        <p className="absolute text-neon text-md top-[56%] left-[33%]">
          {peak.first}
        </p>

        {/* Foot Number */}
        <p className="absolute text-neon text-md bottom-[9%] left-[78%]">
          {rightFoot}
        </p>
        <p className="absolute text-neon text-md bottom-[9%] left-[48%]">
          {midFoot}
        </p>
        <p className="absolute text-neon text-md bottom-[9%] left-[19%]">
          {leftFoot}
        </p>
      </div>
    </div>
  );
};

export default PyramidChart;
