import React from "react";
import ProductCard from "./ProductCard";

const ShopProducts = () => {
  return (
    <section className="containery container1 space-y-2">
      <h3 className="text-center text-3xl">Shop Our Product</h3>
      <hr className="w-[100px] mx-auto bg-slate-900 h-[2px] rounded-lg" />
      <div className="flex gap-8 justify-center py-4 flex-wrap">
        <ProductCard
          // name="Marble Evolution"
          // material="Living Room"
          // image="https://img.freepik.com/free-photo/grey-marble-texture-background_24837-263.jpg?size=626&ext=jpg&ga=GA1.1.751509348.1705399346&semt=ais"
          name=""
          material=""
          image="https://res.cloudinary.com/dhji69hny/image/upload/v1709271302/img_8_l51uyr_c_crop_w_500_h_500_uihjbi.jpg"
        />
        <ProductCard
          // name="Marble Evolution"
          // material="Living Room"
          // image="https://img.freepik.com/free-photo/black-marbled-surface_53876-90798.jpg?size=626&ext=jpg&ga=GA1.1.751509348.1705399346&semt=ais"
          name=""
          material=""
          image="https://res.cloudinary.com/dhji69hny/image/upload/v1709271302/img_9_eh30vp_c_crop_w_600_h_600_thuax2.jpg"
        />
        <ProductCard
          // name="Marble Evolution"
          // material="Living Room"
          // image="https://img.freepik.com/free-photo/closeup-marble-textured-background_53876-31896.jpg?size=626&ext=jpg&ga=GA1.1.751509348.1705399346&semt=ais"
          name=""
          material=""
          image="https://res.cloudinary.com/dhji69hny/image/upload/v1709271302/img_11_sb6umx_c_crop_w_600_h_600_rlj2wn.jpg"
        />
        <ProductCard
          // name="Marble Evolution"
          // material="Living Room"
          name=""
          material=""
          image="https://img.freepik.com/free-photo/grey-marble-texture-background_24837-263.jpg?size=626&ext=jpg&ga=GA1.1.751509348.1705399346&semt=ais"
        />
      </div>
    </section>
  );
};

export default ShopProducts;
