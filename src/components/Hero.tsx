import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="w-full h-[90vh] overflow-hidden top-0 left-0">
        <Image
          width={2000}
          height={2000}
          src={"/img1.jpg"}
          alt="image1"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="containery bg-black/30 w-full h-full absolute top-0 left-0">
        <div className="text-white bg-transparent containery container1 flex flex-col gap-6 md:w-[800px]">
          <h3 className="text-5xl">
            Lorem
            <br />
            ipsum dolor.
          </h3>
          <hr className="w-[100px] h-[2px] bg-white" />
          <p className="text-white leading-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
            dolorem! <br /> Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
          <button className="p-4 px-8 w-fit text-white bg-slate-900 hover:bg-slate-950 transition-all">
            DOWNLOAD CATALOG
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
