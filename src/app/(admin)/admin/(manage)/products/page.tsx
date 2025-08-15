import { getProducts } from "@/lib/actions";
import { getCategories } from "@/lib/actions";
import AdminProducts from "./AdminProducts";
import mongoose from "mongoose";
import { apiDefaults } from "@/lib/constant";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const { page, category, sort, order } = await searchParams;

  const { products, productCount } = await getProducts(
    category ? new mongoose.Types.ObjectId(category) : undefined,
    typeof Number(page) == "number" ? Number(page) : 1,
    sort,
    order
  );
  const { categories } = await getCategories();

  return (
    <AdminProducts
      page={Number(page || 1)}
      selectedCategory={category}
      products={products}
      categories={categories}
      totalPages={Math.floor(
        productCount / apiDefaults.limit + (productCount % apiDefaults.limit) >=
          1
          ? 1
          : 0
      )}
    />
  );
}
