import React from "react";
import Card from "./Card";

const Latest = () => {
  return (
    <section className="container1 container-y space-y-2">
      <h3 className="text-center text-3xl">Latest Products</h3>
      <hr className="w-[100px] mx-auto bg-slate-900 h-[2px] rounded-lg" />
      <div className="flex justify-center items-start gap-8 py-8 flex-wrap">
        <Card
          name=""
          material=""
          image="https://res.cloudinary.com/dhji69hny/image/upload/v1709269438/img_7_leqmpw.jpg"
        />
        <Card
          name=""
          material=""
          image="https://res.cloudinary.com/dhji69hny/image/upload/v1709271302/img_8_l51uyr_c_crop_w_500_h_500_uihjbi.jpg"
        />
        <Card
          name=""
          material=""
          image="https://res.cloudinary.com/dhji69hny/image/upload/v1711869073/fegd6jovjhkzqratxrd0.jpg"
        />
      </div>
    </section>
  );
};

export default Latest;
