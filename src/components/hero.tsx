import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="aspect-[5/2.5] h-[80vh] md:h-screen w-full relative"
    >
      <div className="bg-black/30 w-full h-full absolute top-0 left-0 px-6 sm:px-0">
        <div className="container mx-auto h-full justify-center flex flex-col gap-6">
          <h1 className="sm:text-5xl md:text-6xl text-4xl text-white">
            Makrana Premium
          </h1>
          <hr className="w-[100px] h-[2px] bg-white" />
          <p className="text-white max-w-3xl sm:text-lg md:text-xl text-base leading-6">
            The exceptional quality of Makrana marble truly elevates the
            elegance of any home. The Makrana marble is renowned for its
            exceptional quality and is often used to enhance the beauty of
            homes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
