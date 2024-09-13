"use client";
import React, { useMemo } from "react";
import Image from "next/image";

import Triangle from "@/assets/images/triangle.png";
import SmallStar from "@/assets/images/small star.png";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import NumberChart from "@/components/ExplainPage/NumberChart/NumberChart";
import Button from "@/components/custom/Button";
import PyramidChart from "@/components/ExplainPage/PyramidChart/PyramidChart";
import CycleFortune from "@/components/ExplainPage/CycleFortune/CycleFortune";
import { LifePathNumber } from "@/data/LifePathNumber";
import { SoulNumberData } from "@/data/SoulNumberData";
import { OuterNumberData } from "@/data/OuterNumberData";
import { MissionNumberData } from "@/data/MissionNumberData";
import useNumerology from "@/hooks/useNumerology";
import { routeString } from "@/routes";

const ExplainPage = () => {
  const { number, birthChart } = useNumerology("Lam Thanh Tien", "04-04-2003");

  const lifePathInformation = useMemo(() => {
    const arrayInfo = LifePathNumber[number.indexLifePath];
    return arrayInfo[number.lifePath as keyof typeof arrayInfo];
  }, [number]);

  return (
    <>
      <div className="flex flex-col gap-4 text-center">
        <h3 className="text-2xl font-bold md:text-xl">
          Họ và tên: <span>Lâm Thành Tiến</span>
        </h3>
        <h3 className="text-2xl font-bold md:text-xl">
          Ngày sinh: <span>04/04/2003</span>
        </h3>
      </div>

      <div className="w-full flex flex-col gap-8 items-center">
        <h2 className="text-2xl font-bold">Số Chủ Đạo</h2>
        <div className="w-full relative flex items-center justify-center text-neon text-9xl h-[350px]">
          <span className="animate-pulse">{number.lifePath}</span>
          <Image
            src={Triangle}
            alt="gioi-thieu-ngan"
            width={350}
            height={350}
            className="image-overlay mx-auto opacity-20"
          />
          <Image
            src={SmallStar}
            alt="gioi-thieu-ngan"
            width={350}
            height={350}
            className="image-overlay mx-auto animate-rotated opacity-70"
          />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <h3 className="text-center text-2xl font-bold">
                Biểu đồ ngày sinh: 04/04/2003
              </h3>
              <h5 className="text-sm text-gray-400 md:text-xs">
                Biểu đồ ngày sinh là một bảng bao gồm các con số từ 1 đến 9 được
                sắp xếp với trật tự cố định gồm 3 trục ngang: Thể chất (1-4-7),
                Tinh thần (2-5-8) và Trí não (3-6-9). Qua biểu đồ sinh, bạn có
                thể biết được bản thân mình có những khả năng gì, còn khuyết
                những trục số nào; từ đó sẽ lựa cho mình tên gọi hay danh xưng
                bù trừ những năng lượng đó.
              </h5>
            </div>
          </CardHeader>
          <CardContent className="w-full flex flex-col items-center">
            <NumberChart birthDateChart={birthChart} />
            <Button
              className="mt-10"
              href={`${routeString.explain.defaultPath}/${routeString.explain.birthChart}`}
            >
              Xem luận giải chi tiết
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <h3 className="text-center text-2xl font-bold ">
                Kim Tự Tháp Thần Số Học - Các Đỉnh Đường Đời
              </h3>
              <h5 className="text-sm text-gray-400">
                Kim tự tháp trong Thần số học là một biểu đồ hình tam giác gồm
                nhiều đỉnh, mỗi đỉnh tương ứng với một con số cho thấy những
                giai đoạn phát triển chính trong cuộc đời mỗi người. Hình kim tự
                tháp cũng đại diện cho ước mơ, khát vọng, niềm tin mà con người
                muốn hướng tới.
              </h5>
            </div>
          </CardHeader>
          <CardContent className="w-full flex flex-col items-center">
            <PyramidChart birthDate="04-04-2003" />
            <Button
              className="mt-10"
              href={`${routeString.explain.defaultPath}/${routeString.explain.pyramidPeak}`}
            >
              Xem luận giải chi tiết
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <h3 className="text-center text-2xl font-bold ">
                Con Số Chủ Đạo: {number.lifePath}
              </h3>
              <h5 className="text-sm text-gray-400">
                Con số chủ đạo được xem là chỉ số quan trọng nhất trong thần số
                học. Con số này giúp bạn khám phá vận mệnh của bản thân cũng như
                của người khác. Nó còn cho biết tính cách, điểm mạnh, điểm yếu
                của mỗi người. Chỉ số này hé lộ con đường mà bạn sẽ trải qua
                trong cuộc đời này. Nó cho bạn thấy bạn sẽ gặp phải những trải
                nghiệm như thế nào, và bạn học được gì sau những trải nghiệm đó.
                Nó cung cấp nhiều thông tin về con người bạn và cuộc đời mà bạn
                sẽ sống.
              </h5>
            </div>
          </CardHeader>
          <CardContent>
            {lifePathInformation?.map(item => (
              <div className="mb-6" key={item.id}>
                <p className="text-lg mb-2 text-gray-200 font-bold ">
                  {item.title} <br />
                </p>
                <p className="text-sm mb-4 text-gray-300 font-medium">
                  - {item.describe}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <h3 className="text-center text-2xl font-bold ">
                Con Số Linh Hồn: {number.soul}
              </h3>
              <h5 className="text-sm text-gray-400">
                Con số linh hồn là con số thể hiện những khát khao sâu bên
                trong, biểu trưng cho sức mạnh nội tại của mỗi người như độ nhạy
                bén, sự quyết tâm trong tinh thần và sức mạnh tâm linh. Đây là
                những con số nói về những đặc điểm về tính cách, những ưu khuyết
                điểm trong con người bạn.
              </h5>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-lg mb-2 text-gray-200 font-bold ">
                {SoulNumberData[number.soul].title} <br />
              </p>
              <p className="text-sm mb-4 text-gray-300 font-medium">
                - {SoulNumberData[number.soul].describe}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <h3 className="text-center text-2xl font-bold ">
                Con Số Biểu Đạt: {number.outer}
              </h3>
              <h5 className="text-sm text-gray-400">
                Con số biểu hiện là những con số với ý nghĩa những gì bạn thể
                hiện ra bên ngoài trong cuộc sống hàng ngày. Nó giống như một
                tấm gương phản chiếu đặc điểm bên ngoài của một người, mô tả
                cách biểu đạt ra bên ngoài của bản thân như thế nào thông qua
                lối sống, suy nghĩ, cách hành xử hằng ngày.
              </h5>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-lg mb-2 text-gray-200 font-bold ">
                {OuterNumberData[number.outer].title} <br />
              </p>
              <p className="text-sm mb-4 text-gray-300 font-medium">
                - {OuterNumberData[number.outer].describe}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <h3 className="text-center text-2xl font-bold ">
                Con Số Sứ Mệnh: {number.mission}
              </h3>
              <h5 className="text-sm text-gray-400">
                Trong Thần số học, chỉ số sứ mệnh giúp bạn biết cách đạt được
                mục tiêu của bạn, lớn và nhỏ. Chỉ số sứ mệnh là con số nêu lên
                chi tiết những gì bạn cần biết để theo đuổi, đạt được những mục
                tiêu, thành công nhất định trong cuộc sống và có thể đóng góp
                được cho nhân loại.
              </h5>
            </div>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-lg mb-2 text-gray-200 font-bold ">
                Số sứ mệnh {number.mission}
              </p>
              <p className="text-sm mb-4 text-gray-300 font-medium">
                - {MissionNumberData[number.mission]}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4">
              <h3 className="text-center text-2xl font-bold ">Chu kỳ vận số</h3>
              <h5 className="text-sm text-gray-400">
                Trong Thần số học, chỉ số sứ mệnh giúp bạn biết cách đạt được
                mục tiêu của bạn, lớn và nhỏ. Chỉ số sứ mệnh là con số nêu lên
                chi tiết những gì bạn cần biết để theo đuổi, đạt được những mục
                tiêu, thành công nhất định trong cuộc sống và có thể đóng góp
                được cho nhân loại.
              </h5>
            </div>
          </CardHeader>
          <CardContent>
            <CycleFortune />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ExplainPage;
