"use client";
import { useAdmin } from "@/context/AdminSlice";
import { ProductType } from "@/utils";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const Filter = ({
  products,
  setProducts,
  type,
}: {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
  type?: string;
}) => {
    
  const { products: items, categories, materials } = useAdmin();
  
  const handleCtgFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const ctg = e.target.value;
    if (ctg == "all") {
      setProducts(items.filter((i) => type && i.type == type));
    } else {
      setProducts(items.filter((i) => i.category?._id == ctg));
    }
  };

  const handleMtrlFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const mtrl = e.target.value;
    if (mtrl == "all") {
      setProducts(items.filter((i) => type && i.type == type));
    } else {
      setProducts(items.filter((i) => i.material == mtrl));
    }
  };

  const ctgs = [{ _id: "all", name: "All Categories" }, ...categories];

  const mtrls = ["all", ...materials];

  return (
    <div className="py-4 flex items-center flex-wrap gap-2">
      {type == "all" ||
        (type == "handicraft" && (
          <select
            onChange={handleCtgFilter}
            name=""
            id=""
            className="p-2 rounded-xl outline-none border border-pink-500"
          >
            {ctgs.map((c) => (
              <option value={c._id}>{c.name}</option>
            ))}
          </select>
        ))}
      {type == "all" ||
        (type == "slab" && (
          <select
            onChange={handleMtrlFilter}
            name=""
            id=""
            className="p-2 rounded-xl outline-none border border-pink-500"
          >
            {mtrls.map((m) => (
              <option value={m}>{m == "all" ? "All Materials" : m}</option>
            ))}
          </select>
        ))}
    </div>
  );
};

export default Filter;
