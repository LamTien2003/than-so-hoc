import { MissionNumberData } from "@/data/MissionNumberData";
import { OuterNumberData } from "@/data/OuterNumberData";
import { SoulNumberData } from "@/data/SoulNumberData";
import { getYear } from "date-fns";

const LetterToNumber = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  O: 6,
  P: 7,
  Q: 8,
  R: 9,
  S: 1,
  T: 2,
  U: 3,
  V: 4,
  W: 5,
  X: 6,
  Y: 7,
  Z: 8,
};
const vowelCase = ["U", "E", "O", "A", "I"];

const isMasterNumber = (num: string) => {
  return num == "10" || num == "11" || num == "22";
};

const calculateLifeNumber = (birthDate: string) => {
  const plus = "+";
  let cleanBirthDate = birthDate.replace(/-/g, "");

  while (cleanBirthDate.length > 1 && !isMasterNumber(cleanBirthDate)) {
    cleanBirthDate = "" + eval(("" + cleanBirthDate).split("").join(plus));
  }

  return +cleanBirthDate;
};

const calculateMissionNumber = (fullName: string) => {
  let missionNumber = fullName
    .toUpperCase()
    .split("")
    .filter(item => !!item && item !== " ")
    .reduce(
      (prev, current) =>
        Number(prev) +
        Number(LetterToNumber[current as keyof typeof LetterToNumber]),
      0
    )
    .toString();

  while (
    missionNumber.length > 1 &&
    +missionNumber !== 11 &&
    +missionNumber !== 22
  ) {
    missionNumber = missionNumber
      .split("")
      .filter(item => !!item && item !== " ")
      .reduce((prev, current) => {
        return Number(prev) + Number(current);
      }, 0)
      .toString();
  }

  return missionNumber as unknown as keyof typeof MissionNumberData;
};

const calculateSoulNumber = (fullName: string) => {
  let soulNumber = fullName
    .toUpperCase()
    .split("")
    .filter(item => !!item && item !== " " && vowelCase.includes(item))
    .reduce(
      (prev, current) =>
        Number(prev) +
        Number(LetterToNumber[current as keyof typeof LetterToNumber]),
      0
    )
    .toString();

  while (soulNumber.length > 1 && +soulNumber !== 10 && +soulNumber !== 11) {
    soulNumber = soulNumber
      .split("")
      .filter(item => !!item && item !== " ")
      .reduce((prev, current) => {
        return Number(prev) + Number(current);
      }, 0)
      .toString();
  }

  return soulNumber as unknown as keyof typeof SoulNumberData;
};

const calculateOuterNumber = (fullName: string) => {
  let outerNumber = fullName
    .toUpperCase()
    .split("")
    .filter(item => !!item && item !== " " && !vowelCase.includes(item))
    .reduce(
      (prev, current) =>
        Number(prev) +
        Number(LetterToNumber[current as keyof typeof LetterToNumber]),
      0
    )
    .toString();

  while (
    outerNumber.length > 1 &&
    +outerNumber !== 10 &&
    +outerNumber !== 11 &&
    +outerNumber !== 22
  ) {
    outerNumber = outerNumber
      .split("")
      .filter(item => !!item && item !== " ")
      .reduce((prev, current) => {
        return Number(prev) + Number(current);
      }, 0)
      .toString();
  }

  return outerNumber as unknown as keyof typeof OuterNumberData;
};

const calculateArrow = (birthChart: string[]) => {
  const emptyArrow: string[] = [];
  const existArrow: string[] = [];
  // Empty
  if (!birthChart[0] && !birthChart[4] && !birthChart[8]) {
    emptyArrow.push("159");
  }
  if (!birthChart[2] && !birthChart[4] && !birthChart[6]) {
    emptyArrow.push("357");
  }
  if (!birthChart[2] && !birthChart[5] && !birthChart[8]) {
    emptyArrow.push("369");
  }
  if (!birthChart[1] && !birthChart[4] && !birthChart[7]) {
    emptyArrow.push("258");
  }
  if (!birthChart[0] && !birthChart[3] && !birthChart[6]) {
    emptyArrow.push("147");
  }
  if (!birthChart[3] && !birthChart[4] && !birthChart[5]) {
    emptyArrow.push("456");
  }
  if (!birthChart[6] && !birthChart[7] && !birthChart[8]) {
    emptyArrow.push("789");
  }

  // Exist
  if (!!birthChart[0] && !!birthChart[1] && !!birthChart[2]) {
    existArrow.push("123");
  }
  if (!!birthChart[0] && !!birthChart[4] && !!birthChart[8]) {
    existArrow.push("159");
  }
  if (!!birthChart[2] && !!birthChart[4] && !!birthChart[6]) {
    existArrow.push("357");
  }
  if (!!birthChart[2] && !!birthChart[5] && !!birthChart[8]) {
    existArrow.push("369");
  }
  if (!!birthChart[1] && !!birthChart[4] && !!birthChart[7]) {
    existArrow.push("258");
  }
  if (!!birthChart[0] && !!birthChart[3] && !!birthChart[6]) {
    existArrow.push("147");
  }
  if (!!birthChart[3] && !!birthChart[4] && !!birthChart[5]) {
    existArrow.push("456");
  }
  if (!!birthChart[6] && !!birthChart[7] && !!birthChart[8]) {
    existArrow.push("789");
  }

  return {
    emptyArrow,
    existArrow,
  };
};

const calculateNameNumber = (name: string) => {
  const soulNumber = calculateSoulNumber(
    name
  ) as unknown as keyof typeof SoulNumberData;
  const outerNumber = calculateOuterNumber(name);
  const missionNumber = calculateMissionNumber(name);
  return {
    soul: soulNumber,
    outer: outerNumber,
    mission: missionNumber,
  };
};

const calculateBirthChartByDate = (birthDate: string) => {
  let result = [];
  for (let i = 0; i < 9; ++i) {
    result[i] = "";
  }

  birthDate = birthDate.replace(/-/g, "");

  // Filter in number
  for (let i = 0; i < birthDate.length; ++i) {
    if (Number(birthDate[i]) == 0) continue;

    let index = parseInt(birthDate[i]);
    result[index - 1] += birthDate[i];
  }

  return result;
};
const calculateBirthChartByDateAndName = (birthDate: string, name: string) => {
  let result = [];
  for (let i = 0; i < 9; ++i) {
    result[i] = "";
  }
  // Loai bo '-' ra khoi birthDate
  birthDate = birthDate.replace(/-/g, "");
  name = name.toUpperCase();

  // Filter in number
  for (let i = 0; i < birthDate.length; ++i) {
    if (Number(birthDate[i]) == 0) continue;

    const index = parseInt(birthDate[i]);
    result[index - 1] += birthDate[i];
  }

  // Filter in name
  for (let i = 0; i < name.length; ++i) {
    if (name[i] == " ") continue;

    const value = LetterToNumber[name[i] as keyof typeof LetterToNumber];
    result[value - 1] += value.toString();
  }

  return result;
};

const calculateCycleFortune = (birthDate: string) => {
  const date = birthDate.split("-");
  const day = date[0];
  const month = date[1];
  const currentYear = getYear(Date.now());
  const lastYear = currentYear + 5;
  const result: string[] = [];

  for (let i = 1; i < 10; i++) {
    const year = lastYear - i;

    let numberOfYear = (+day + +month + +year).toString();
    while (numberOfYear.length > 1) {
      numberOfYear = numberOfYear
        .split("")
        .reduce((prev, current) => {
          return Number(prev) + Number(current);
        }, 0)
        .toString();
    }
    result.unshift(numberOfYear);
  }

  return result;
};

export {
  calculateArrow,
  calculateLifeNumber,
  calculateNameNumber,
  calculateBirthChartByDate,
  calculateBirthChartByDateAndName,
  calculateCycleFortune,
};
