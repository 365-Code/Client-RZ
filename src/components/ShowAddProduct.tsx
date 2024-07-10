"use client";
import { usePathname } from "next/navigation";
import React from "react";
import AddProduct from "./AddProduct";

const ShowAddProduct = () => {
  const pathname = usePathname();
  if( !pathname.includes("/auth/products") ) return null
  return <div>{pathname.includes("/auth/products") && <AddProduct />}</div>;
};

export default ShowAddProduct;
