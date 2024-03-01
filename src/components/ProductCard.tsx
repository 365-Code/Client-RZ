import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  name,
  material,
  image,
  price
}: {
  name: string;
  material: string;
  image: string;
  price?: string;
}) => {
  return (
    <div className="uppercase">
      <div className="w-[300px] h-[400px]">
        {/* <Image */}
        {/* <Link href={'/product/' + name}> */}
        <img
          width={600}
          height={600}
          src={image}
          alt="product1"
          // className="w-full h-full object-fill"
          className="w-full h-full object-cover object-center"
          />
          {/* </Link> */}
      </div>
      <h3 className="text-2xl tracking-wider">{name}</h3>
      <p className="text-base">{material}</p>
      {
        price &&
        <p className="text-sm">{price}</p>
      }
    </div>
  );
};

export default ProductCard;
