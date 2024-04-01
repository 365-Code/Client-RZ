"use client";
import { useAdmin } from "@/context/AdminSlice";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Prompt from "./Prompt";
import ProductInput from "./ProductInput";
import { ProductType } from "@/utils";
import ImgPreview from "./ImgPreview";

const ProductCard = ({ product }: { product: ProductType }) => {
  const pathname = usePathname();

  const { admin, deleteProduct } = useAdmin();
  const [showPrompt, setShowPrompt] = useState(false);

  const handleDeleteProduct = async () => {
    try {
      setShowPrompt(false);
      await deleteProduct(product._id || "");
    } catch (error) {
      console.log(error);
    }
  };

  const [update, setUpdate] = useState(false);

  const [view, setView] = useState("");

  return (
    <div className="uppercase">
      <ImgPreview view={view} setView={setView} />
      <Prompt
        show={showPrompt}
        question={"Want to Delete " + product.name + " ?"}
        action={handleDeleteProduct}
        setshow={setShowPrompt}
        type="red"
      />
      {update && (
        <ProductInput setEdit={setUpdate} type="update" product={product} />
      )}
      <div
        className={`md:max-w-full min-w-[var(--card-size)] relative ${
          product.type == "handicraft" ? "sm:h-[400px]" : "h-[400px]"
        } `}
      >
        <Image
          width={600}
          height={600}
          src={product.image || ""}
          alt="product1"
          onClick={() => setView(product.image)}
          className={`cursor-pointer w-full h-full object-center ${
            product.type == "handicraft"
              ? "object-contain sm:object-cover"
              : "object-cover"
          }`}
        />
        {pathname.includes("auth/products") && (
          <div className="absolute right-2 top-2 flex items-center gap-2">
            <button
              onClick={() => setUpdate(true)}
              className="btn bg-white/70 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <i className="fi fi-sr-pencil" />
            </button>
            <button
              onClick={() => setShowPrompt(true)}
              className="btn bg-white/70 text-red-600 hover:bg-red-600 hover:text-white"
            >
              <i className="fi fi-sr-trash" />
            </button>
          </div>
        )}
      </div>
      <h3 className="text-2xl tracking-wider">{product.name}</h3>
      <p className="text-base">{product.material || product.category?.name}</p>
    </div>
  );
};

export default ProductCard;
