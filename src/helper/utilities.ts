import { BirthChartData } from "@/data/BirthChartData";

const removeVietNameseTone = (str: string) => {
  const AccentsMap = [
    "aàảãáạăằẳẵắặâầẩẫấậ",
    "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
    "dđ",
    "DĐ",
    "eèẻẽéẹêềểễếệ",
    "EÈẺẼÉẸÊỀỂỄẾỆ",
    "iìỉĩíị",
    "IÌỈĨÍỊ",
    "oòỏõóọôồổỗốộơờởỡớợ",
    "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
    "uùủũúụưừửữứự",
    "UÙỦŨÚỤƯỪỬỮỨỰ",
    "yỳỷỹýỵ",
    "YỲỶỸÝỴ",
  ];
  for (let i = 0; i < AccentsMap.length; i++) {
    const re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
    const char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
};

const checkOutOfIndexBirthChartData = (number: string) => {
  if (number == "") return "";
  if (number[0] == "4") {
    return number.length >= 4 ? "4444" : number;
  }
  if (number[0] == "9") {
    return number.length >= 6 ? "999999" : number;
  }
  return number.length >= 5 ? number.slice(0, 5) : number;
};

const isIsolated = (Chart: string[], number: number) => {
  let isolatedTitle = "";
  let isolatedDescribe = "";
  if (
    Chart[4] == "" &&
    (number == 1 || number == 3 || number == 7 || number == 9)
  ) {
    if (number == 1 && Chart[0] != "" && Chart[1] == "" && Chart[3] == "") {
      isolatedTitle = BirthChartData["1CL"].title;
      isolatedDescribe = BirthChartData["1CL"].describe;
    }

    if (number == 3 && Chart[2] != "" && Chart[1] == "" && Chart[5] == "") {
      isolatedTitle = BirthChartData["3CL"].title;
      isolatedDescribe = BirthChartData["3CL"].describe;
    }

    if (number == 7 && Chart[6] != "" && Chart[3] == "" && Chart[7] == "") {
      isolatedTitle = BirthChartData["7CL"].title;
      isolatedDescribe = BirthChartData["7CL"].describe;
    }

    if (number == 9 && Chart[8] != "" && Chart[5] == "" && Chart[7] == "") {
      isolatedTitle = BirthChartData["9CL"].title;
      isolatedDescribe = BirthChartData["9CL"].describe;
    }
  }
  // Chart[6] is present for index 7 off chartResult
  if (Chart[6] == "" && number == 7) {
    isolatedTitle = BirthChartData["Not7"].title;
    isolatedDescribe = BirthChartData["Not7"].describe;
  }
  // the same
  if (Chart[8] == "" && number == 9) {
    isolatedTitle = BirthChartData["Not9"].title;
    isolatedDescribe = BirthChartData["Not9"].describe;
  }
  return { isolatedTitle, isolatedDescribe };
};

export { removeVietNameseTone, checkOutOfIndexBirthChartData, isIsolated };
