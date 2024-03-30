import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="uppercase cursor-pointer group/pCard">
      <div className="h-[400px] flex flex-col items-center justify-center bg-black/10 rounded-xl">
      <i className="fi fi-sr-add-image text-7xl text-slate-800 group-hover/pCard:text-slate-600" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
