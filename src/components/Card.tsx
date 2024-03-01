import Image from "next/image";
import React from "react";

const Card = ({
  name,
  material,
  image,
}: {
  name: string;
  material: string;
  image: string;
}) => {
  return (
    <div className="uppercase">
      <div className="w-[320px] h-[400px]">
        <img
          width={500}
          height={700}
          src={image}
          alt="product1"
          // className="w-full h-full object-fill"
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl tracking-wider">{name}</h3>
      <p className="text-base">{material}</p>
    </div>
  );
};

export default Card;
