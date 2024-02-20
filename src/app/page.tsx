import Companies from "@/components/Companies";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import NewSection from "@/components/NewSection";
import ShopProducts from "@/components/ShopProducts";
import React from "react";

const Home = () => {
  return (
    <div className="relative">
      <Hero/>
      <Latest />
      <Companies/>
      <NewSection/>
      <ShopProducts />
    </div>
  );
};

export default Home;
