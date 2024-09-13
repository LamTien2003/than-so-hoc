"use client";
import { PyramidPeakData } from "@/data/PyramidPeakData";
import useNumerology from "@/hooks/useNumerology";

const PyramidPeak = () => {
  const { number, age, peak } = useNumerology(
    localStorage.getItem("userName") || "Lam Thanh Tien",
    localStorage.getItem("birthDate") || "04-04-2003"
  );

  return (
    <div>
      <div>PyramidPeak</div>
      <div>Số chủ đạo: {number.lifePath}</div>
      <br />
      <div>
        <p>
          Năm {age} tuổi - {peak.first}
        </p>
        <p>{PyramidPeakData[peak.first - 1]?.content}</p>
      </div>
      <br />
      <div>
        <p>
          Năm {age + 9} tuổi - {peak.second}
        </p>
        <p>{PyramidPeakData[peak.second - 1]?.content}</p>
      </div>
      <br />
      <div>
        <p>
          Năm {age + 18} tuổi - {peak.third}
        </p>
        <p>{PyramidPeakData[peak.third - 1]?.content}</p>
      </div>
      <br />
      <div>
        <p>
          Năm {age + 27} tuổi - {peak.fourth}
        </p>
        <p>{PyramidPeakData[peak.fourth - 1]?.content}</p>
      </div>
    </div>
  );
};

export default PyramidPeak;
