import NewFilter from "@/components/NewFilter";
import ProductCard from "@/components/ProductCard";
import ShowAddProduct from "@/components/ShowAddProduct";
import { CategoryType, ProductType } from "@/utils";
import { Metadata } from "next";
import React from "react";


interface PagaParams {
  params: {
    ctg: string;
  };
}

const getProductsByCtg = async (filter: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/fetchAllProducts`
    );
    const data = await response.json();
    if (response.status == 200) {
      if (!data.products) return [];
      if (filter.toLowerCase() == "all") {
        return data.products.filter(
          (item: ProductType) => item.type == "handicraft"
        );
      }
      return data.products.filter((itm: ProductType) => {
        if (itm.type == "handicraft") {
          return itm.category?.name == filter.replaceAll("%20", " ");
        }
      });
    }
    return [];
  } catch (error) {
    throw error;
  }
};

export async function generateMetadata({
  params: { ctg: filter },
}: PagaParams): Promise<Metadata> {
  const products = await getProductsByCtg(filter);
  const cResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/category/fetchAllCategories`
  );

  const mResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/fetchAllMaterials`
  );

  const ctgs: CategoryType[] = (await cResponse.json()).categories;
  const mtrls: string[] = (await mResponse.json()).materials;
  let keywords: string[] = [];
  ctgs.forEach((ctg) => {
    keywords.push(ctg.name);
  });
  mtrls.forEach((mtrl) => {
    keywords.push(mtrl);
  });
  return {
    title: filter.replaceAll("%20", " "),
    keywords: keywords,
    openGraph: {
      images: {
        url: products[0].image
      }
    }
  };
}

const Page = async ({ params: { ctg } }: PagaParams) => {
  const products = await getProductsByCtg(ctg);
  // const product = products[0];
  return (
    <main className="container-y container1">
      <NewFilter type="handicraft" />
      <div
        className={`grid grid-cols-1  ${"min-[700px]:grid-cols-2 min-[1200px]:grid-cols-3 min-[1600px]:grid-cols-4"} gap-8 justify-center justify-items-center`}
      >
        {/* {pathname.includes("/auth/products") && <AddProduct />} */}
        <ShowAddProduct />
        {products.map((v: ProductType, i: number) => (
          <ProductCard key={i} product={v} />
        ))}
      </div>
    </main>
  );
};

export default Page;
