import React from "react";
import Image from "next/image";

import Mysterious1 from "@/assets/images/mysterious-1.png";
import Mysterious2 from "@/assets/images/mysterious-2.png";
import AstroImage from "@/assets/images/bg-content-section-astro.png";
import StarImage from "@/assets/images/stars.png";
import FormInput from "@/components/Home/FormInput/FormInput";

const Banner = () => {
  return (
    <div className="relative w-full min-h-[500px] h-auto px-5 py-20">
      <div className="flex flex-col justify-center items-center w-1/2 m-auto md:w-full">
        <h3 className="text-gray-300 text-center text-lg mb-5 font-semibold md:text-base sm:text-sm ">
          Hiểu rõ về hành trình của bản thân qua những con số
        </h3>
        <h1 className="text-center text-3xl mb-4 font-semibold md:text-lg sm:text-lg">
          Công Cụ Xem Bói Thần Số Học Miễn Phí
        </h1>
        <h4 className="text-gray-300 text-center text-sm sm:text-xs">
          Đăng ký ngay để nhận ngay 1 lượt xem chi tiết toàn bộ bản tra cứu hoàn
          toàn miễn phí
        </h4>

        <FormInput />

        <p className="my-2 text-left text-gray-300 text-sm sm:text-xs">
          Nếu ngày sinh trên giấy tờ (chứng minh thư, bằng lái, khai sinh…) của
          bạn khác với ngày sinh dương lịch thật thì cuộc đời bạn sẽ có sự xáo
          trộn từ cả 2 ngày sinh này. Bạn nên tra cứu cả 2 để biết thêm chi
          tiết, tuy nhiên kết quả sẽ thiên về ngày sinh dương lịch thật!
        </p>

        <p className="my-2 text-left text-gray-300 text-sm sm:text-xs">
          Số chủ đạo tuy rất quan trọng nhưng không thể hiện hết thông tin thần
          số học của bạn. Để xem kết quả tra cứu chính xác, hãy kết hợp tất cả
          các chỉ số mà chúng tôi tính toán!
        </p>
      </div>

      <div className="absolute left-0 right-0 top-0 bottom-0 -z-50 ">
        <Image
          src={Mysterious1}
          alt=""
          className="absolute w-1/6 h-[450px] object-cover left-4 top-[15%]  opacity-40 animate-float md:hidden"
        />
        <Image
          src={Mysterious2}
          alt=""
          className="absolute w-1/6 h-[450px] object-cover right-4 top-[15%] opacity-40  animate-float md:hidden"
        />
        <Image
          src={AstroImage}
          alt=""
          layout="fill"
          className=" -z-50 object-cover opacity-20"
        />
        <Image
          src={StarImage}
          alt=""
          layout="fill"
          className="-scale-x-[1] -scale-y-[1] animate-pulse opacity-30"
        />
      </div>
    </div>
  );
};

export default Banner;
