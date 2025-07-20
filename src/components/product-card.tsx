// import React from "react";
// import { Card } from "./ui/card";
// import Image from "next/image";

// type CardParams = {
//   product: {
//     type?: string;
//     name?: string;
//     material?: string;
//     image:
//       | string
//       | "https://res.cloudinary.com/dhji69hny/image/upload/v1711795256/ppqwtijyodffd0sxypjb.jpg";
//   };
// };

// const ProductCard = ({ product }: CardParams) => {
//   return (
//     <Card className="p-0 rounded-none max-w-2xs aspect-square">
//       <Image
//         width={400}
//         height={400}
//         unoptimized={true}
//         src={product.image}
//         alt="product"
//         className="w-full h-full object-cover object-center"
//       />
//     </Card>
//   );
// };

// export default ProductCard;


"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import type { ProductType } from "@/lib/types"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Eye, X, Calendar, Clock, ExternalLink } from "lucide-react"

export default function ProductCard({
  product,
  listView = false,
}: {
  product: ProductType
  listView?: boolean
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isLiked, setIsLiked] = useState(false)

  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const isNew = () => {
    const createdDate = new Date(product.createdAt)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - createdDate.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays <= 30 // Consider new if created within 30 days
  }

  if (listView) {
    return (
      <>
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
          <div className="flex">
            <div className="relative w-48 h-48 flex-shrink-0">
              <Image
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(product.imageUrl)}
              />
              {isNew() && (
                <Badge className="absolute top-2 left-2 bg-green-500">
                  <Calendar className="w-3 h-3 mr-1" />
                  New
                </Badge>
              )}
            </div>
            <CardContent className="flex-1 p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 capitalize">{product.name}</h3>
                  <p className="text-gray-600 capitalize mb-2">{product.categoryId.name}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      Added {formatDate(product.createdAt)}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Updated {formatDate(product.updatedAt)}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Premium {product.categoryId.name.toLowerCase()} crafted with exceptional attention to detail and
                    quality materials.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Link href={`/products/${product.slug}`} className="flex-1">
                  <Button className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </Link>
                <Button variant="outline" size="sm" onClick={() => setIsLiked(!isLiked)}>
                  <Heart className={`w-4 h-4 ${isLiked ? "fill-current text-red-500" : ""}`} />
                </Button>
                <Button variant="outline" size="sm" onClick={() => setSelectedImage(product.imageUrl)}>
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>

        {selectedImage && (
          <ImageModal
            src={selectedImage || "/placeholder.svg"}
            alt={product.name}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </>
    )
  }

  return (
    <>
      <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white">
        <div className="relative overflow-hidden">
          <Image
            src={product.imageUrl || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={500}
            className="w-full h-64 object-cover cursor-pointer transition-transform duration-500 group-hover:scale-110"
            onClick={() => setSelectedImage(product.imageUrl)}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
            <Button
              size="sm"
              variant="secondary"
              className="backdrop-blur-sm"
              onClick={() => setSelectedImage(product.imageUrl)}
            >
              <Eye className="w-4 h-4 mr-2" />
              View Image
            </Button>
            <Link href={`/products/${product.slug}`}>
              <Button size="sm" className="backdrop-blur-sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </Link>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-2">
            {isNew() && (
              <Badge className="bg-green-500 hover:bg-green-600">
                <Calendar className="w-3 h-3 mr-1" />
                New
              </Badge>
            )}
            <Badge className="bg-blue-500 hover:bg-blue-600">Premium</Badge>
          </div>

          {/* Like Button */}
          <Button
            variant="secondary"
            size="sm"
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`w-4 h-4 ${isLiked ? "fill-current text-red-500" : ""}`} />
          </Button>
        </div>

        <CardContent className="p-4">
          <div className="mb-4">
            <h3 className="font-bold text-lg text-gray-900 mb-2 capitalize line-clamp-2">{product.name}</h3>
            <p className="text-sm text-gray-600 capitalize mb-2">{product.categoryId.name}</p>

            {/* Date Info */}
            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
              <div className="flex items-center">
                <Calendar className="w-3 h-3 mr-1" />
                {formatDate(product.createdAt)}
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                Updated {formatDate(product.updatedAt)}
              </div>
            </div>

            <p className="text-sm text-gray-700 line-clamp-2">
              Premium {product.categoryId.name.toLowerCase()} with exceptional quality and craftsmanship.
            </p>
          </div>

          {/* Actions */}
          <div className="flex space-x-2">
            <Link href={`/products/${product.slug}`} className="flex-1">
              <Button className="w-full" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Details
              </Button>
            </Link>
            <Button variant="outline" size="sm" onClick={() => setSelectedImage(product.imageUrl)}>
              <Eye className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {selectedImage && (
        <ImageModal
          src={selectedImage || "/placeholder.svg"}
          alt={product.name}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  )
}

function ImageModal({
  src,
  alt,
  onClose,
}: {
  src: string
  alt: string
  onClose: () => void
}) {
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full">
        <Button variant="secondary" size="sm" className="absolute -top-12 right-0 z-10" onClick={onClose}>
          <X className="w-4 h-4" />
        </Button>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={800}
          height={800}
          className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
}
