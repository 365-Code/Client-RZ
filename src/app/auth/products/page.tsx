import AddCategory from "@/components/AddCategory";
import AddProduct from "@/components/AddProduct";
import DisplayProducts from "@/components/DisplayProducts";
import React from "react";

const Page = () => {
  return (
    <main className="container-y container1">
      <AddCategory />
      {/* <AddProduct /> */}
      {/* <div className="cards gap-8"> */}
        <DisplayProducts type="all"/>
      {/* </div> */}
    </main>
  );
};

export default Page;
