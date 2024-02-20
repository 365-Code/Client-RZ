import Image from "next/image";
import React from "react";

const NewSection = () => {
  return (
    <div className=" h-[80vh] relative">
      {/* <div className='w-full h-full'> */}
      <Image
        width={2000}
        height={2000}
        alt="image1"
        src={"/img1.jpg"}
        className="w-full h-full object-fill"
      />
      <div className="flex text-white items-center justify-center absolute top-0 left-0 h-full w-full bg-black/30">
        <div className="container1 flex flex-col sm:flex-row max-h-fit min-h-fit h-[350px] items-center justify-center max-w-full">
          <video
            className="hidden sm:block flex-1 object-fill h-full"
            // autoPlay
            // loop
            src="https://videocdn.cdnpk.net/joy/content/video/free/video0471/large_preview/_import_619b8d5a8738b1.89221968.mp4?filename=1111713_cleaning_rag_personnel_3840x2160.mp4"
          />

          <div className="md:basis-1/2 md:h-[95%] bg-black/30 shadow-md shadow-black/30 space-y-2 flex flex-col justify-center p-4">
            <h2 className="text-3xl">
              Lorem ipsum
              <br />
              dolor sit.
            </h2>
            <hr className="w-[100px] bg-white h-[2px]" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              facere eos mollitia recusandae minima iure necessitatibus
              repellendus a doloribus minus.
            </p>
          </div>

        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default NewSection;
