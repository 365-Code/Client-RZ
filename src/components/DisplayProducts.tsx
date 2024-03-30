"use client";
import { useAdmin } from "@/context/AdminSlice";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

const DisplayProducts = ({
  type,
  ctg,
  mtrl,
}: {
  type?: string;
  ctg?: string;
  mtrl?: string;
}) => {
  const { products } = useAdmin();
  return (
    <>
      {products.map((v, i) =>
        type ? (
          v.type == type && <ProductCard key={i} product={v} />
        ) : (
          <ProductCard key={i} product={v} />
        )
      )}
    </>
  );
};

export default DisplayProducts;
