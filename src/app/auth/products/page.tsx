import AddCategory from "@/components/AddCategory";
import AddProduct from "@/components/AddProduct";
import DisplayProducts from "@/components/DisplayProducts";
import React from "react";

const Page = () => {
  return (
    <main className="container-y container1">
      <AddCategory />
      <div className="cards gap-8">
        <AddProduct />
        <DisplayProducts />
      </div>
    </main>
  );
};

export default Page;
