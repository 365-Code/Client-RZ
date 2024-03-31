import Companies from "@/components/Companies";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import NewSection from "@/components/VideoSection";
import ShopProducts from "@/components/ShopProducts";
import Subscribe from "@/components/Subscribe";
import React from "react";

const Home = () => {
  return (
    <main className="relative">
      <Hero/>
      <Latest />
      {/* <Companies/> */}
      <NewSection/>
      <ShopProducts />
      <Subscribe/>
    </main>
  );
};

export default Home;
