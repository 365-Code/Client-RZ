import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

type CardParams = {
  product: {
    type?: string;
    name?: string;
    material?: string;
    image:
      | string
      | "https://res.cloudinary.com/dhji69hny/image/upload/v1711795256/ppqwtijyodffd0sxypjb.jpg";
  };
};

const ProductCard = ({ product }: CardParams) => {
  return (
    <Card className="p-0 rounded-none max-w-2xs aspect-square">
      <Image
        width={400}
        height={400}
        unoptimized={true}
        src={product.image}
        alt="product"
        className="w-full h-full object-cover object-center"
      />
    </Card>
  );
};

export default ProductCard;
