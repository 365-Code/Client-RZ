"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ProductType } from "@/lib/types";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fetchProducts } from "@/lib/api";
import MasonryLayout from "./masonry-layout";

export default function Products({
  initialProducts,
  categoryId: ctg,
  productCount,
}: {
  categoryId: string;
  initialProducts: ProductType[];
  productCount: number;
}) {
  const [products, setProducts] = useState<ProductType[]>(initialProducts);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);

  // Fetch more products when scrolling down
  const fetchMoreProducts = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const { products } = await fetchProducts(ctg, page + 1);
      setProducts((prev) => [...prev, ...products]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching more products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Infinite Scroll with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !isLoading &&
          products.length < productCount
        ) {
          fetchMoreProducts();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [isLoading]);

  return (
    <div className="max-w-7xl w-full mx-auto px-6 mt-[80px]">
      <h1 className="text-3xl font-bold text-center text-charcoalBlack dark:text-marbleWhite mb-8">
        Our Premium Marble Products
      </h1>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center p-10">
          <Image
            unoptimized={true}
            src="/empty-box.svg"
            alt="No products"
            width={200}
            height={200}
            className="mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            No products in this category yet!
          </h2>
          <p className="text-gray-500 mt-2">
            Check back later or explore other categories.
          </p>
          <Button
            className="mt-4"
            variant="outline"
            onClick={() => window.location.reload()}
          >
            Refresh
          </Button>
        </div>
      ) : (
        <>
          {/* Masonry Grid Layout */}
          <MasonryLayout>
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </MasonryLayout>

          {/* Infinite Scroll Trigger */}
          <div ref={observerRef} className="h-10 w-full mt-4"></div>

          {/* Loading Indicator */}
          {isLoading && (
            <p className="text-center text-gray-600 mt-4">
              Loading more products...
            </p>
          )}
        </>
      )}
    </div>
  );
}

export const ProductCard = ({ product }: { product: ProductType }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <>
      <Card
        key={product.id}
        className="overflow-hidden shadow-none border-none transition-all duration-300 transform hover:scale-105 rounded-none p-0 h-fit max-w-2xs"
      >
        <Image
          unoptimized={true}
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={500}
          className="cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() => setSelectedImage(product.imageUrl)}
        />
        <CardHeader className="m-0 p-0">
          <CardTitle className="capitalize">{product.name}</CardTitle>
          <CardDescription className="capitalize">
            {product.categoryId.name}
          </CardDescription>
        </CardHeader>
      </Card>

      
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/40 bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl w-full px-4">
            <Image
              unoptimized={true}
              src={selectedImage}
              alt="Zoomed Product"
              width={800}
              height={800}
              className="w-auto h-[90vh] object-contain mx-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};
