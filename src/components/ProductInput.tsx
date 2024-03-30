"use client";
import { useAdmin } from "@/context/AdminSlice";
import { ProductInputType, ProductType } from "@/utils";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductInput = ({
  setEdit,
  product,
  type,
}: {
  setEdit: any;
  product?: ProductType;
  type: string;
}) => {
  const [prodDet, setProdDet] = useState<ProductInputType>({
    name: "",
    material: "",
    category: "",
    image: "",
    type: "slab",
  });

  useEffect(() => {
    product && setProdDet(product as ProductInputType);
  }, []);

  const { categories, addProduct, updateProduct } = useAdmin();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProdDet({ ...prodDet, [name]: value });
  };

  const handleType = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProdDet({ ...prodDet, material: "", category: "", [name]: value });
  };

  const [image, setImage] = useState<any>();
  const [url, setUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (image: File) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET || "");
    data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUD_NAME || "");
    try {
      const result = await fetch(
        `https://api.cloudinary.com/v1_1/${
          process.env.NEXT_PUBLIC_CLOUD_NAME || ""
        }/image/upload`,
        {
          method: "post",
          body: data,
        }
      );

      const res = await result.json();
      setProdDet({ ...prodDet, image: res.secure_url });
      setUrl(res.secure_url);
      setUploading(false);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      setUploading(true);
      uploadImage(e.target.files[0]);
    }
  };

  const handleValidate = () => {
    if (!prodDet.image || !prodDet.name) {
      return false;
    }
    if (prodDet.type == "slab" && !prodDet.material) {
      return false;
    }
    if (prodDet.type == "handicraft" && !prodDet.category) {
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!handleValidate()) {
      toast.error("Invalid Data");
      return;
    }

    try {
      if (type == "update") {
        await updateProduct(product?._id || "", {
          ...prodDet,
          image: url || prodDet.image,
        } as ProductType);
      } else {
        console.log("working");
        await addProduct({ ...prodDet, image: url || prodDet.image } as ProductType);
      }
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen bg-black/40 z-20">
      <div className="uppercase flex flex-col items-center relative bg-white p-4 w-full max-w-[var(--max-card-size)]">
        <input
          id="thumbnail"
          onChange={handleImage}
          type="file"
          className="hidden"
        />
        <label htmlFor="thumbnail" className="w-full relative">
          <div className="w-full cursor-pointer group/pCard relative flex flex-col justify-center items-center bg-black/10 rounded-xl h-[390px]">
            {url ? (
              <img
                src={url || prodDet.image}
                className="w-full h-full object-cover object-center"
              />
            ) : !uploading ? (
              <i className="fi fi-sr-add-image text-7xl text-slate-800 group-hover/pCard:text-slate-600" />
            ) : (
              <i className="fi fi-sr-spinner animate-spin text-7xl text-slate-800 group-hover/pCard:text-slate-600" />
            )}
          </div>
          <div className="flex items-center gap-2 absolute bottom-0 left-0 p-2">
            <button
              onClick={() => setEdit(false)}
              className="flex items-center gap-1 btn justify-center bg-red-500 hover:bg-red-600 text-white"
            >
              Close
              <i className="fi fi-sr-cross-small" />
            </button>
            <button
              onClick={handleSubmit}
              className="flex items-center gap-1 btn justify-center bg-blue-500 hover:bg-blue-600 text-white"
            >
              Add
              <i className="fi fi-sr-plus-small" />
            </button>
          </div>
        </label>
        <i
          onClick={() => setEdit(false)}
          className="absolute top-4 right-4 fi fi-sr-cross-circle text-xl hover:text-slate-600 cursor-pointer text-black group-hover/pCard:text-slate-600"
        />
        <hr className="mt-2" />
        <div className="w-full flex flex-col gap-1">
          <select
            onChange={handleType}
            name="type"
            className="p-2 outline-none text-lg"
          >
            <option value="slab">Slab</option>
            <option value="handicraft">Handicraft</option>
          </select>
          <input
            placeholder="Enter Product"
            name="name"
            value={prodDet.name}
            onChange={handleChange}
            className="text-base p-2 tracking-wider outline-none border-black border-b"
          />
          {prodDet.type == "slab" ? (
            <input
              placeholder="Enter Material"
              name="material"
              value={prodDet.material}
              onChange={handleChange}
              className="text-base p-2 border-black border-b outline-none"
            />
          ) : (
            <select
              onChange={handleType}
              name="category"
              className="text-lg p-2 border-black border-b outline-none"
            >
              {[{ _id: 0, name: "Enter Category" }, ...categories].map(
                (c, i) => (
                  <option
                    key={c._id}
                    value={c._id}
                    className="border-none outline-none"
                  >
                    {c.name}
                  </option>
                )
              )}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInput;
