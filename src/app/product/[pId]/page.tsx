import { products } from "@/utils";
import React from "react";

const Page = () => {
  const product = products[0];
  return (
    <main className="containery container1">
      <section className="flex md:flex-row flex-col gap-8 items-center container1">
        <div className="max-w-full max-h-full md:max-w-[550px] md:min-w-[550px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="container1 flex-1">
          <h3 className="text-slate-400">{product.material}</h3>
          <h1 className="text-5xl">{product.name}</h1>
          <h3 className="text-slate-600 text-2xl">Rs. {product.price}</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            odit ipsam dignissimos voluptatibus veritatis. Sunt animi sequi quod
            totam? Unde ea, blanditiis culpa excepturi veritatis alias ipsa
            laborum esse officia.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;
