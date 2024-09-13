import Link from "next/link";
import Image from "next/image";

import AstroImage from "@/assets/images/bg-content-section-astro.png";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const listNumber = {
  "1": "Người thủ lĩnh, dẫn đầu, cá tính mạnh",
  "2": "Người có trực giác tốt cảm xúc, nhạy cảm",
  "3": "Người nhiệt tình hài hước, học sâu",
  "4": "Người nguyên tắc, thực tế, luôn kaizen",
  "5": "Người kết nối, tự do đa tài",
  "6": "Người quan tâm,  chăm sóc, yêu thương mọi người",
  "7": "Người tâm linh, nghị lực, vượt khổ đế để trưởng thành",
  "8": "Người dẫn dắt, thủ lĩnh kinh doanh, cân bằng mưu sinh và tâm thức",
  "9": "Người đáng tin cậy, từ bi, trí tuệ, cầu toàn",
  "11": "Bậc thầy về lãnh đạo, tài ba, trực giác tâm linh cao",
  "22": "Bậc thầy kiến tạo có bộ óc thiên tài, cân bằng được cảm xúc và thực tế",
  "33": "Bậc thầy chữa lành, lạc quan, giàu tình yêu và lòng trắc ẩn",
};
const MeaningSection = () => {
  return (
    <div className="relative px-20 py-6 border-t border-gray-800 md:px-6">
      <Image
        src={AstroImage}
        alt=""
        layout="fill"
        className="image-overlay opacity-20"
      />
      <h2 className="my-6 text-3xl text-center font-bold tracking-tight md:text-lg">
        Ý Nghĩa Các Con Số Chủ Đạo
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-0">
        {Object.entries(listNumber).map(([key, value]) => {
          return (
            <Card key={key} className="w-1/6 md:w-1/2">
              <CardHeader className="text-center pb-2">
                <p className="text-6xl text-neon animate-pulse md:text-4xl">
                  {key}
                </p>
              </CardHeader>
              <CardContent className="p-6 flex flex-col items-center">
                <h3 className="mb-2 text-xl font-semibold text-center md:text-sm">
                  Số Chủ Đạo {key}
                </h3>

                <p className="text-muted-foreground text-sm text-center md:text-xs">
                  {value}
                </p>
                <Button className="mt-4 w-full" variant={"secondary"}>
                  Chi tiết
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default MeaningSection;
