"use client";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import mongoose from "mongoose";
import { deleteProduct, fetchProduct } from "@/lib/api";
import { Loader2 } from "lucide-react";

export default function DeleteProductDialog({
  productId,
  onProductDeleted,
  onClose,
}: {
  productId: string;
  onProductDeleted: () => void;
  onClose: () => void;
}) {
  const [name, setName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function getProduct() {
    setLoading(true);
    try {
      const product = await fetchProduct(
        new mongoose.Types.ObjectId(productId)
      );
      setName(product.name);
    } catch (error) {
      console.error("Error fetching categories:", error);
      toast.error("Failed to load categories");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    productId && getProduct();
  }, [productId]);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const data = await deleteProduct(new mongoose.Types.ObjectId(productId));

      if (!data) throw Error("Failed to delete product");
      toast.success("Product deleted successfully!");
      onProductDeleted();
      onClose();
    } catch (error) {
      toast.error("Error deleting product. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {name ? (
        <p className="text-red-600 mt-2">
          Are you sure you want to delete <strong>{name}</strong>? This action{" "}
          <strong>cannot be undone!</strong>
        </p>
      ) : (
        <div className="space-y-2">
          <div className="w-full animate-pulse h-4 bg-black/10" />
          <div className="w-1/2 animate-pulse h-4 bg-black/10" />
        </div>
      )}

      <div className="mt-4 flex justify-end gap-2">
        <Button variant="ghost" onClick={onClose} disabled={loading}>
          Cancel
        </Button>
        <Button variant="destructive" onClick={handleDelete} disabled={loading}>
          {loading ? "Deleting..." : "Delete"}
        </Button>
      </div>
    </div>
  );
}
