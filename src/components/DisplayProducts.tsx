"use client";
import { useAdmin } from "@/context/AdminSlice";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import AddProduct from "./AddProduct";
import { usePathname } from "next/navigation";
import Filter from "./Filter";
import { ProductType } from "@/utils";

const DisplayProducts = ({
  type,
  ctg,
  mtrl,
}: {
  type?: string;
  ctg?: string;
  mtrl?: string;
}) => {
  const { products: items } = useAdmin();
  const pathname = usePathname();

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setProducts(items);
  }, [items]);

  return (
    <>
      <Filter type={type} products={products} setProducts={setProducts} />
      <div
        className={`grid grid-cols-1  ${
          type == "handicraft"
            ? "min-[700px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1600px]:grid-cols-4"
            : "min-[678px]:grid-cols-2 min-[1100px]:grid-cols-3 min-[1400px]:grid-cols-4"
        } gap-8 justify-center justify-items-center`}
      >
        {pathname.includes("/auth/products") && <AddProduct />}
        {products.map((v, i) =>
          type && type !== "all" ? (
            v.type == type && <ProductCard key={i} product={v} />
          ) : (
            <ProductCard key={i} product={v} />
          )
        )}
      </div>
    </>
  );
};

export default DisplayProducts;
