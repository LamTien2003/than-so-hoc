"use client";
import { useMemo } from "react";

import { LifePathNumber } from "@/data/LifePathNumber";
import { SoulNumberData } from "@/data/SoulNumberData";
import { OuterNumberData } from "@/data/OuterNumberData";
import { MissionNumberData } from "@/data/MissionNumberData";
import useNumerology from "@/hooks/useNumerology";
import Banner from "@/components/Home/Banner/Banner";
import BlogSection from "@/components/Home/BlogSection/BlogSection";
import MeaningSection from "@/components/Home/MeaningSection/MeaningSection";
import AboutSection from "@/components/Home/AboutSection/AboutSection";

export default function Home() {
  const { number } = useNumerology(
    localStorage.getItem("userName") || "Lam Thanh Tien",
    localStorage.getItem("birthDate") || "04-04-2003"
  );

  const lifePathInformation = useMemo(() => {
    const arrayInfo = LifePathNumber[number.indexLifePath];
    return arrayInfo[number.lifePath as keyof typeof arrayInfo];
  }, [number]);

  return (
    <main>
      <Banner />
      <AboutSection />
      <MeaningSection />
      <BlogSection />
      {/* <div>Home</div>
      <div>{number.lifePath}</div>
      {lifePathInformation?.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.describe}</p>
        </div>
      ))}
      <br />
      <div>Số linh hồn - {number.soul}</div>
      <div>{SoulNumberData[number.soul].title}</div>
      <div>{SoulNumberData[number.soul].describe}</div>
      <br />
      <div>Số biểu đạt - {number.outer}</div>
      <div>{OuterNumberData[number.outer].title}</div>
      <div>{OuterNumberData[number.outer].describe}</div>
      <br />
      <div>Số sứ mệnh - {number.mission}</div>
      <div>{MissionNumberData[number.mission]}</div> */}
    </main>
  );
}
