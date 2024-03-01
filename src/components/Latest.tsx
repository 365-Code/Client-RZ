import React from "react";
import Card from "./Card";

const Latest = () => {
  return (
    <section className="container1 containery space-y-2">
      <h3 className="text-center text-3xl">Latest Products</h3>
      <hr className="w-[100px] mx-auto bg-slate-900 h-[2px] rounded-lg" />
      <div className="flex justify-center items-start gap-8 py-8 flex-wrap">
        <Card
          // name="Marble Evolution"
          // material="Living Room"
          // image="https://img.freepik.com/free-photo/grey-marble-texture-background_24837-263.jpg?size=626&ext=jpg&ga=GA1.1.751509348.1705399346&semt=ais"
          name=""
          material=""
          image="https://i.pinimg.com/originals/67/b8/f9/67b8f97fbde65ce7fc0103cb67650f65.jpg"
        />
        <Card
          // name="Granite"
          // material="kitchen"
          // image="https://img.freepik.com/free-photo/black-marbled-surface_53876-90798.jpg?size=626&ext=jpg&ga=GA1.1.751509348.1705399346&semt=ais"
          name=""
          material=""
          image="https://img3.exportersindia.com/product_images/bc-full/2018/7/971788/makrana-white-marble-1531743111-4108388.jpeg"
        />
        <Card
          // name="Doongari Marble"
          // material="floor"
          // image="https://img.freepik.com/free-photo/closeup-marble-textured-background_53876-31896.jpg?size=626&ext=jpg&ga=GA1.1.751509348.1705399346&semt=ais"
          name=""
          material=""
          image="https://spectrumstonedesigns.com/wp-content/uploads/2020/06/Montclair-Danby-marble.jpg"
        />
        {/* <Card />
            <Card /> */}
      </div>
    </section>
  );
};

export default Latest;
