"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Article = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideo = function () {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setPlaying(true);
      } else {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  };

  return (
    <article id="about" className="h-[80vh] my-20 relative">
      {/* <div className='w-full h-full'> */}
      <Image
        unoptimized={true}
        width={2000}
        height={2000}
        alt="image1"
        src={
          "https://img.freepik.com/free-photo/sink_74190-3600.jpg?t=st=1711877641~exp=1711881241~hmac=2ed96b4efc12b2da05021549605501b5884d18b8d4b9cc1bb38ae0fa2fbd0d82&w=1060"
        }
        className="w-full h-full object-fill"
      />
      <div className="flex text-white items-center justify-center absolute top-0 left-0 h-full w-full bg-black/30">
        <div className="group/video container1 flex flex-col md:flex-row max-h-fit min-h-fit h-[350px] items-center justify-center max-w-full">
          <div className="h-full relative">
            <video
              id="video"
              ref={videoRef}
              className="block flex-1 object-fill h-full"
              controlsList="nodownload"
              loop={true}
              // src="https://videocdn.cdnpk.net/joy/content/video/free/video0471/large_preview/_import_619b8d5a8738b1.89221968.mp4?filename=1111713_cleaning_rag_personnel_3840x2160.mp4"
              src="https://res.cloudinary.com/dhji69hny/video/upload/v1709269440/vid_vntot9.mp4"
            />
            <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
              <button onClick={handleVideo} className={playing ? "hidden" : ""}>
                <i
                  className={`fi fi-sr-play-circle text-5xl cursor-pointer group-hover/video:visible invisible transition-all ${
                    playing && "hidden"
                  }`}
                />
              </button>
              <button
                onClick={handleVideo}
                className={!playing ? "hidden" : ""}
              >
                <i className="fi fi-sr-pause-circle text-5xl cursor-pointer group-hover/video:visible invisible transition-all" />
              </button>
              {/* <button>
            </button> */}
            </div>
          </div>

          <div className="md:basis-1/2 md:h-[95%] bg-black/30 shadow-md shadow-black/30 space-y-2 flex flex-col justify-center p-4">
            <h2 className="text-3xl">Makrana Marble</h2>
            <hr className="w-[100px] bg-white h-[2px]" />
            <p>
              The timeless beauty and durability of Makrana marble have made it
              a symbol of sophistication and refinement in architectural design.
              Makrana marble is renowned for its pristine white color and
              exquisite veining, making it a popular choice for luxurious
              interiors.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </article>
  );
};

export default Article;
