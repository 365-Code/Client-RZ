"use client";
import { useAdmin } from "@/context/AdminSlice";
import React, { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

const AddCategory = () => {
  const [edit, setEdit] = useState(false);
  const [categ, setCateg] = useState("");

  const { addCategory } = useAdmin();

  const handleAddCategory = async () => {
    if (!categ) {
      toast.error("Enter Category");
      return;
    }
    try {
      await addCategory(categ);
      setCateg("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center gap-2 mb-2 max-w-[400px]">
      <input
        type="text"
        value={categ}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setCateg(e.target.value)
        }
        className="w-full text-base p-2 border-black border-b outline-none"
        placeholder="Add Category"
      />
      <button
        onClick={handleAddCategory}
        className="btn bg-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center p-4"
      >
        <span className="hidden sm:inline-block">Add</span>
        <span className="sm:hidden block">
          <i className="fi fi-sr-plus" />
        </span>
      </button>
      <button
        onClick={() => setCateg("")}
        className="btn bg-red-400 hover:bg-red-600 hover:text-white flex items-center justify-center p-4"
      >
        <span className="hidden sm:inline-block">Clear</span>
        <span className="sm:hidden block">
          <i className="fi fi-sr-cross" />
        </span>
      </button>
    </div>
  );
};

export default AddCategory;
