import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section id="about" className="py-20 bg-softBeige dark:bg-charcoalBlack">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-10">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoalBlack dark:text-champagneGold">
              Elevating Marble Craftsmanship Since 2000
            </h2>
            <p className="mt-4 text-base md:text-lg text-slateGray dark:text-softBeige leading-relaxed">
              At <strong>Makrana Premium</strong>, we specialize in{" "}
              <strong>exquisite marble craftsmanship</strong>, blending{" "}
              <strong>heritage techniques</strong> with{" "}
              <strong>modern precision</strong>. For over two decades, we have
              been the trusted choice for those seeking{" "}
              <strong>luxury, elegance, and durability</strong>.
            </p>
            <p className="mt-4 text-base md:text-lg text-slateGray dark:text-softBeige leading-relaxed">
              From <strong>stunning countertops</strong> to{" "}
              <strong>custom sculptures</strong> and
              <strong>intricate inlays</strong>, our commitment to excellence
              ensures every creation stands the test of time.
            </p>

            <Link href={"/collections"}>
              <Button
                size={"lg"}
                className="mt-6"
              >
                Discover Our Collection
              </Button>
            </Link>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2">
            <Image
              unoptimized={true}
              width={600}
              height={600}
              src="/about.jpg"
              alt="Marble Handicraft"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
