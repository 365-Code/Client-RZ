"use client";
import { useAdmin } from "@/context/AdminSlice";
import { ProductType } from "@/utils";
import { useParams, useRouter } from "next/navigation";
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

const NewFilter = ({ type }: { type?: "slab" | "handicraft" | "all" }) => {
  const { products: items, categories, materials } = useAdmin();
  const nav = useRouter();
  const handleCtgFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const ctg = e.target.value;
    nav.push("/products/" + ctg);
  };

  const handleMtrlFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const mtrl = e.target.value;
    nav.push("/collections/" + mtrl);

    // if (mtrl == "all") {
    //   setProducts(items.filter((i) => type && i.type == type));
    // } else {
    //   setProducts(items.filter((i) => i.material == mtrl));
    // }
  };

  const ctgs = [{ _id: "all", name: "All Categories" }, ...categories];
  const mtrls = ["all", ...materials];

  const params = useParams();
  const { ctg, filter } = params;

  return (
    <>
      <h1 className="text-3xl md:text-5xl capitalize">
        {ctg == "all" ? "Our Catalogue" : ctg}
      </h1>
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
                <option key={c._id} value={c.name}>
                  {c.name}
                </option>
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
              {mtrls.map((m, i) => (
                <option
                  defaultValue={filter}
                  selected={filter == m}
                  key={i}
                  value={m}
                >
                  {m == "all" ? "All Materials" : m}
                </option>
              ))}
            </select>
          ))}
      </div>
    </>
  );
};

export default NewFilter;
