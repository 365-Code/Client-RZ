import React from "react";
import MasonryLayout from "./masonry-layout";
import Link from "next/link";
import Image from "next/image";
import { CategoryType } from "@/lib/types";
import { notFound } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { getCategories } from "@/lib/actions";

export const ShopProducts = async () => {
  const { categories } = await getCategories(undefined, undefined, 6);

  if (!categories) return notFound();

  return (
    <section id="gallery" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Explore Our Collections
        </h2>
        <hr className="w-24 mx-auto h-[3px] bg-primary rounded-lg mb-10" />
        <MasonryLayout breakpoints={{ 500: 2 }}>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </MasonryLayout>
        <Link href="/collections" className="inline-block mt-10">
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary/80"
          >
            View All
            <ChevronDown className="ml-2 transition-transform group-hover:translate-y-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

function CategoryCard({ category }: { category: CategoryType }) {
  return (
    <Link href={"/collections/" + category.id} className="block">
      <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all">
        <Image
          unoptimized
          src={category.imageUrl || ""}
          alt={category.name}
          width={600}
          height={400}
          className="w-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300 hover:bg-black/30">
          <h3 className="text-white text-xl md:text-2xl font-semibold capitalize">
            {category.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
