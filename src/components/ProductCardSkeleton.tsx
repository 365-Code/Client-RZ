import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="uppercase cursor-pointer group/pCard">
      <div className="h-[400px] flex flex-col items-center justify-center group-hover/pCard:bg-black/40 bg-black/10 rounded-xl">
        <i className="fi fi-sr-add-image text-7xl text-slate-800 group-hover/pCard:text-slate-300" />
      </div>
        <h3 className="text-2xl tracking-wider">Add Product</h3>
        <p className="text-base">Type</p>

    </div>
  );
};

export default ProductCardSkeleton;
