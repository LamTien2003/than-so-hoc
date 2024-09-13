import { useEffect, useState } from "react";

import { MissionNumberData } from "@/data/MissionNumberData";
import { SoulNumberData } from "@/data/SoulNumberData";
import { OuterNumberData } from "@/data/OuterNumberData";
import {
  calculateArrow,
  calculateBirthChartByDate,
  calculateLifeNumber,
  calculateNameNumber,
  calculateCycleFortune,
} from "@/helper/calculator";
import pyramidCalculator from "@/helper/pyramidCalculator";
import { removeVietNameseTone } from "@/helper/utilities";

interface NumerologyValue {
  age: number;
  number: {
    lifePath: number;
    indexLifePath: number;
    soul: keyof typeof SoulNumberData;
    outer: keyof typeof OuterNumberData;
    mission: keyof typeof MissionNumberData;
  };
  peak: {
    first: number;
    second: number;
    third: number;
    fourth: number;
  };
  birthChart: string[];
  emptyArrow: string[];
  existArrow: string[];
  cycleFortune: string[];
}

const useNumerology = (fullName: string, birthDate: string) => {
  const [data, setData] = useState<NumerologyValue>({
    age: 0,
    number: {
      lifePath: 0,
      indexLifePath: 0,
      soul: 1,
      outer: 1,
      mission: 1,
    },
    peak: {
      first: 1,
      second: 1,
      third: 1,
      fourth: 1,
    },
    birthChart: [],
    emptyArrow: [],
    existArrow: [],
    cycleFortune: [],
  });

  useEffect(() => {
    if (!fullName || !birthDate) {
      return;
    }
    // Get LifePathNumber
    const lifePathNumber = calculateLifeNumber(birthDate);
    // Get Name Number - Soul and Outer
    const { outer, soul, mission } = calculateNameNumber(
      removeVietNameseTone(fullName)
    );

    //  Get BirthChart - La` 1 array tu 1-9
    // birthChart with both name and birthDate

    // const birthChart = !birthDate
    //   ? calculator.filterBirthChart(birthDate)
    //   : calculator.filterFullBirthChart(
    //       birthDate,
    //       utilitise.removeVietNameseTone(fullName)
    //     );

    // birthChart with only birthDate
    const birthChart = calculateBirthChartByDate(birthDate);
    const { emptyArrow, existArrow } = calculateArrow(birthChart);

    // Get Peak
    const { firstTop, secondTop, thirdTop, fourthTop } =
      pyramidCalculator.calNumberPyramid(birthDate);

    const cycleFortune = calculateCycleFortune(birthDate);

    setData(prev => ({
      ...prev,
      age: lifePathNumber == 22 ? 32 : 36 - lifePathNumber,
      number: {
        ...prev.number,
        lifePath: lifePathNumber,
        indexLifePath: lifePathNumber == 22 ? 10 : lifePathNumber - 2,
        soul,
        outer,
        mission,
      },
      peak: {
        first: +firstTop,
        second: +secondTop,
        third: +thirdTop,
        fourth: +fourthTop,
      },
      birthChart,
      emptyArrow,
      existArrow,
      cycleFortune,
    }));
  }, [fullName, birthDate]);

  return data;
};

export default useNumerology;
