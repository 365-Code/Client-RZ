import Image from "next/image";
import React from "react";

const ProductCard = ({
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
      <div className="w-[300px] h-[400px]">
        <Image
          width={400}
          height={600}
          src={image}
          alt="product1"
          className="w-full h-full object-fill"
        />
      </div>
      <h3 className="text-2xl tracking-wider">{name}</h3>
      <p className="text-base">{material}</p>
    </div>
  );
};

export default ProductCard;
