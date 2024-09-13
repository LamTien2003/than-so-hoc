import Image from "next/image";

import Triangle from "@/assets/images/triangle.png";
import SmallStar from "@/assets/images/small star.png";

const AboutSection = () => {
  return (
    <div className="relative">
      <div className=" max-w-[1200px] mx-auto my-10 flex justify-center items-center border-gray-800 md:flex-col">
        <div className="relative w-[500px] flex justify-center">
          <Image
            src={Triangle}
            alt="gioi-thieu-ngan"
            width={400}
            height={400}
            className="filter"
          />
          <Image
            src={SmallStar}
            alt="gioi-thieu-ngan"
            width={400}
            height={400}
            className="image-overlay mx-auto animate-rotated"
          />
        </div>
        <div className="flex flex-col gap-2 flex-1 text-center items-start py-2 px-16 ">
          <h4 className="w-full text-xl text-slate-50 font-bold text-neon">
            What we do{" "}
          </h4>
          <h4 className="text-4xl text-slate-50 font-bold mb-8 text-neon">
            Tarot is a powerful tool for transformation
          </h4>
          <h5 className="text-md text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi
            tellus, pulvinar vel tempus eget, finibus vitae ante. Fusce sit amet
            velit eleifend, iaculis velit quis, malesuada lacus. Vestibulum
            sodales magna a volutpat tempus. Mauris vestibulum id urna viverra
            ultrices. Nullam rhoncus elit eget libero varius dapibus.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
