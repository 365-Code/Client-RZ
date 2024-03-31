"use client";
import { CategoryType, ProductType } from "@/utils";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

type AdminContextType = {
  products: ProductType[];
  setProducts: Dispatch<SetStateAction<ProductType[]>>;
  categories: CategoryType[];
  setCategories: Dispatch<SetStateAction<CategoryType[]>>;
  admin: boolean;
  setAdmin: Dispatch<SetStateAction<boolean>>;
  addProduct: (prodDet: ProductType) => Promise<void>;
  deleteProduct: (pId: string) => Promise<void>;
  updateProduct: (pId: string, prod: ProductType) => Promise<void>;
  addCategory: (ctg: string) => Promise<void>;
};

const AdminContext = createContext<AdminContextType | null>(null);

export const AdminState = ({ children }: { children: React.ReactNode }) => {
  const [admin, setAdmin] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  // PRODUCTS API
  const fetchAllProducts = async () => {
    try {
      const result = await fetch("/api/product/fetchAllProducts");
      const res = await result.json();
      if (res.success) {
        setProducts(res.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addProduct = async (prodDet: ProductType) => {
    try {
      const result = await fetch("/api/product/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prodDet),
      });

      const res = await result.json();
      if (res.success) {
        setProducts((preProd) => [res.product, ...preProd]);
        toast.success(res.msg);
      } else {
        toast.error(res.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (pId: string) => {
    try {
      const result = await fetch("/api/product/deleteProduct?pId=" + pId, {
        method: "DELETE",
      });

      const res = await result.json();
      if (res.success) {
        setProducts((preProd) => preProd.filter((p) => p._id != pId));
        toast.success(res.msg);
      } else {
        toast.error(res.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (pId: string, prod: ProductType) => {
    try {
      const result = await fetch("/api/product/updateProduct?pId=" + pId, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(prod),
      });
      const res = await result.json();

      if (res.success) {
        let index = products.findIndex((p) => p._id == pId);
        let items = products;
        items[index] = { ...items[index], ...prod };
        setProducts(items);
        toast.success(res.msg);
      } else {
        toast.error(res.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Categories API
  const fetchAllCategories = async () => {
    try {
      const result = await fetch("/api/category/fetchAllCategories");
      const res = await result.json();
      if (res.success) {
        setCategories(res.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addCategory = async (ctg: string) => {
    try {
      const result = await fetch("/api/category/addCategory", {
        method: "POST",
        headers: {
          "Content-Type": " application/json",
        },
        body: JSON.stringify({ name: ctg }),
      });
      const res = await result.json();
      if (res.success) {
        setCategories((preCtg) => [res.category, ...preCtg]);
        toast.success(res.msg);
      } else {
        toast.error(res.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setAdmin(false);
    fetchAllProducts();
    fetchAllCategories();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        admin,
        setAdmin,
        addProduct,
        deleteProduct,
        updateProduct,
        addCategory,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext) as AdminContextType;
