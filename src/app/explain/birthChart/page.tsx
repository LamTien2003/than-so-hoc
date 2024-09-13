"use client";
import { useCallback, useState } from "react";

import { BirthChartData } from "@/data/BirthChartData";
import { OuterNumberData } from "@/data/OuterNumberData";
import { SoulNumberData } from "@/data/SoulNumberData";
import { checkOutOfIndexBirthChartData, isIsolated } from "@/helper/utilities";
import useNumerology from "@/hooks/useNumerology";
import { EmptyArrowData, ExistArrowData } from "@/data/ArrowData";

const BirthChart = () => {
  const [typeName, setTypeName] = useState("Biểu đồ ngày sinh");
  const { number, birthChart, emptyArrow, existArrow } = useNumerology(
    "Lam Thanh Tien",
    "04-04-2003"
  );

  const getDataNumber = useCallback(
    (numberFilled: string, numberCard: number) => {
      const numberValidate = checkOutOfIndexBirthChartData(numberFilled);

      const isolated = isIsolated(birthChart, numberCard);
      const { title, describe } =
        BirthChartData[numberValidate as keyof typeof BirthChartData];

      return {
        title: title + isolated.isolatedTitle,
        description: describe + "\n\n" + isolated.isolatedDescribe,
      };
    },
    [birthChart]
  );

  return (
    <div>
      <div>{typeName}</div>
      {birthChart.length && (
        <>
          {/* 3-6-9 */}
          {!!birthChart[2] && (
            <div>
              <p>Trí não - {birthChart[2]}</p>
              <p>{getDataNumber(birthChart[2], 3).title}</p>
              <p>{getDataNumber(birthChart[2], 3).description}</p>
              <br />
            </div>
          )}
          {!!birthChart[5] && (
            <div>
              <p>Sáng tạo - {birthChart[5]}</p>
              <p>{getDataNumber(birthChart[5], 6).title}</p>
              <p>{getDataNumber(birthChart[5], 6).description}</p>
              <br />
            </div>
          )}
          {!!birthChart[8] && (
            <div>
              <p>Lý tưởng - {birthChart[8]}</p>
              <p>{getDataNumber(birthChart[8], 9).title}</p>
              <p>{getDataNumber(birthChart[8], 9).description}</p>
              <br />
            </div>
          )}

          {/* 2-5-8 */}
          {!!birthChart[1] && (
            <div>
              <p>Trực giác - {birthChart[1]}</p>
              <p>{getDataNumber(birthChart[1], 2).title}</p>
              <p>{getDataNumber(birthChart[1], 2).description}</p>
              <br />
            </div>
          )}
          {!!birthChart[4] && (
            <div>
              <p>Cảm xúc - {birthChart[4]}</p>
              <p>{getDataNumber(birthChart[4], 5).title}</p>
              <p>{getDataNumber(birthChart[4], 5).description}</p>
              <br />
            </div>
          )}
          {!!birthChart[7] && (
            <div>
              <p>Nghĩa vụ - {birthChart[7]}</p>
              <p>{getDataNumber(birthChart[7], 8).title}</p>
              <p>{getDataNumber(birthChart[7], 8).description}</p>
              <br />
            </div>
          )}

          {/* 1-4-7 */}
          {!!birthChart[0] && (
            <div>
              <p>Tính cách - {birthChart[0]}</p>
              <p>{getDataNumber(birthChart[0], 1).title}</p>
              <p>{getDataNumber(birthChart[0], 1).description}</p>
              <br />
            </div>
          )}
          {!!birthChart[3] && (
            <div>
              <p>Thực tế - {birthChart[3]}</p>
              <p>{getDataNumber(birthChart[3], 4).title}</p>
              <p>{getDataNumber(birthChart[3], 4).description}</p>
              <br />
            </div>
          )}
          {!!birthChart[6] && (
            <div>
              <p>Hi sinh - {birthChart[6]}</p>
              <p>{getDataNumber(birthChart[6], 7).title}</p>
              <p>{getDataNumber(birthChart[6], 7).description}</p>
              <br />
            </div>
          )}
          {/* Personal number */}
          <div>
            <p>Số biểu đạt - {number.outer}</p>
            <p>{OuterNumberData[number.outer].title}</p>
            <p>{OuterNumberData[number.outer].describe}</p>
          </div>
          <div>
            <p>Số Linh Hồn- {number.soul}</p>
            <p>{SoulNumberData[number.soul].title}</p>
            <p>{SoulNumberData[number.soul].describe}</p>
          </div>
          <br />
          {!!emptyArrow.length && (
            <div>
              <p>Mũi tên trống</p>
              {emptyArrow.map(arrow => (
                <div key={arrow}>
                  <p>{EmptyArrowData[arrow].title}</p>
                  <p>{EmptyArrowData[arrow].description}</p>
                </div>
              ))}
            </div>
          )}
          <br />
          {!!existArrow.length && (
            <div>
              <p>Mũi tên trống</p>
              {existArrow.map(arrow => (
                <div key={arrow}>
                  <p>{ExistArrowData[arrow].title}</p>
                  <p>{ExistArrowData[arrow].description}</p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BirthChart;
