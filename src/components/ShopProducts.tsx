import React from "react";
import ProductCard from "./ProductCard";

const ShopProducts = () => {
  return (
    <section className="container-y container1 space-y-2">
      <h3 className="text-center text-3xl">Browse Our Product</h3>
      <hr className="w-[100px] mx-auto bg-slate-900 h-[2px] rounded-lg" />
      <div className="grid grid-cols-1 min-[678px]:grid-cols-2 min-[1100px]:grid-cols-3 min-[1400px]:grid-cols-4 gap-8 justify-center justify-items-center py-4">
        <ProductCard
          // name="Marble Evolution"
          // material="Living Room"
          // image="https://img.freepik.com/free-photo/grey-marble-texture-background_24837-263.jpg?size=626&ext=jpg&ga=GA1.1.751509348.1705399346&semt=ais"
          product={{
            type: "handicraft",
            name: "",
            material: "",
            image:
              "https://res.cloudinary.com/dhji69hny/image/upload/v1711795256/ppqwtijyodffd0sxypjb.jpg",
          }}
        />
        <ProductCard
          // name="Marble Evolution"
          // material="Living Room"
          // image="https://img.freepik.com/free-photo/black-marbled-surface_53876-90798.jpg?size=626&ext=jpg&ga=GA1.1.751509348.1705399346&semt=ais"
          product={{
            type: "slab",
            name: "",
            material: "",
            image:
              "https://res.cloudinary.com/dhji69hny/image/upload/v1711795444/jc1bkgl32qfqra9rw1vi.jpg",
          }}
        />
        <ProductCard
          // name="Marble Evolution"
          // material="Living Room"
          // image="https://img.freepik.com/free-photo/closeup-marble-textured-background_53876-31896.jpg?size=626&ext=jpg&ga=GA1.1.751509348.1705399346&semt=ais"
          product={{
            type: "handicraft",
            name: "",
            material: "",
            image:
              "https://res.cloudinary.com/dhji69hny/image/upload/v1711793811/yvuh1dawepyr7lyl8qez.jpg",
          }}
        />
        <ProductCard
          // name="Marble Evolution"
          // material="Living Room"
          product={{
            type: "slab",
            name: "",
            material: "",
            image:
              "https://res.cloudinary.com/dhji69hny/image/upload/v1711795369/vq5lwwupmn0ea47imf3r.jpg",
          }}
        />
      </div>
    </section>
  );
};

export default ShopProducts;
