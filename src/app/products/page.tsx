import DisplayProducts from "@/components/DisplayProducts";
import React from "react";

const page = () => {
  return (
    <main className="container-y container1">
      <div className="grid grid-cols-1 min-[678px]:grid-cols-2 min-[1100px]:grid-cols-3 min-[1400px]:grid-cols-4 gap-8">
        <DisplayProducts type="handicraft" />
      </div>
    </main>
  );
};

export default page;
