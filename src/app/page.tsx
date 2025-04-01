import About from "@/components/about";
import Article from "@/components/article";
import ContactUs from "@/components/contact-us";
import { ShopProducts } from "@/components/gallery";
import Hero from "@/components/hero";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Latest /> */}
      <ShopProducts />
      <Article />
      <ContactUs />
    </>
  );
};

export default page;
