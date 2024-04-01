"use server"
import AddCategory from "@/components/AddCategory";
import DisplayProducts from "@/components/DisplayProducts";
import React from "react";

const Page = () => {
  return (
    <main className="container-y container1">
      <AddCategory />
        <DisplayProducts type="all"/>
    </main>
  )
}

export default Page