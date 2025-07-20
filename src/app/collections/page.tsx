import MasonryLayout from "@/components/masonry-layout"
import { getCategories } from "@/lib/actions"
import type { CategoryType } from "@/lib/types"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Award, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Marble Handicraft Collections",
  description:
    "Explore the exquisite collections of marble handicrafts at Makrana Premium. Discover unique and beautifully crafted marble art pieces, sculptures, decor, and more.",
  keywords: [
    "white marble",
    "Makrana marble",
    "marble handicrafts",
    "premium marble",
    "marble design collection",
    "marble artistry",
    "marble traditional crafts",
    "marble souvenirs",
    "unique marble items",
    "marble collections",
    "premium marble items",
    "handcrafted marble",
    "marble design collections",
    "marble slabs collection",
    "marble slabs",
    "white marble slabs",
  ],
  openGraph: {
    title: "Makrana Premium - Marble Handicraft Collections",
    description:
      "Explore the exquisite collections of marble handicrafts at Makrana Premium. Discover unique and beautifully crafted marble art pieces, sculptures, decor, and more.",
    images: {
      url: "/ogImage.png",
    },
    url: "https://www.makranapremium.com/collections",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makrana Premium - Marble Handicrafts Collections",
    description:
      "Explore the exquisite collections of marble handicrafts at Makrana Premium. Discover unique and beautifully crafted marble art pieces, sculptures, decor, and more.",
    images: {
      url: "/ogImage.png",
    },
  },
}

export const dynamic = "auto"

const Page = async () => {
  const { categories } = await getCategories()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mt-4">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium">Premium Collections</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Discover Marble
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Elegance
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our exquisite collections of handcrafted marble masterpieces. Each piece tells a story of
              traditional craftsmanship and timeless beauty from the heart of Makrana.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">{categories.length}+</div>
                <div className="text-blue-200 text-sm">Collections</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-200 text-sm">Unique Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-blue-200 text-sm">Years Crafting</div>
              </div>
            </div>

            {/* <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <ArrowRight className="w-5 h-5 mr-2" />
              Explore Collections
            </Button> */}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Handpicked marble from the finest quarries of Makrana, ensuring exceptional quality and durability.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Skilled artisans with generations of experience create each piece with meticulous attention to detail.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Designs</h3>
              <p className="text-gray-600">Bespoke marble creations tailored to your vision and space requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Collections</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse through our carefully curated collections, each representing the pinnacle of marble artistry.
            </p>
          </div>

          <MasonryLayout breakpoints={{ 1500: 4, 1200: 3, 768: 2, 500: 1 }}>
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </MasonryLayout>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Something Beautiful?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our master craftsmen bring your vision to life with premium Makrana marble. Contact us for custom
            designs and consultations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Get Custom Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page

function CategoryCard({ category, index }: { category: CategoryType; index: number }) {
  const isNew = index < 2 // Mark first 2 categories as "New" for demo

  return (
    <Link href={"/collections/" + category.id} className="block group">
      <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl bg-white">
        <div className="relative overflow-hidden">
          <Image
            unoptimized={true}
            src={category.imageUrl || "/placeholder.svg"}
            alt={category.name}
            width={600}
            height={400}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            {isNew && (
              <Badge className="bg-green-500 hover:bg-green-600">
                <Sparkles className="w-3 h-3 mr-1" />
                New
              </Badge>
            )}
            {/* <Badge className="bg-blue-500 hover:bg-blue-600">Premium</Badge> */}
          </div>

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-white text-xl font-bold capitalize mb-2 group-hover:text-yellow-300 transition-colors">
              {category.name}
            </h3>
            <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Discover exquisite {category.name.toLowerCase()} pieces crafted with precision and artistry.
            </p>

            {/* View Collection Button */}
            <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <span className="text-sm font-medium mr-2">View Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="p-4 bg-white">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">Premium Collection</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-500">Available</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}


// import MasonryLayout from "@/components/masonry-layout";
// import { getCategories } from "@/lib/actions";
// import { CategoryType } from "@/lib/types";
// import { Metadata } from "next";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export const metadata: Metadata = {
//   title: "Marble Handicraft Collections",
//   description:
//     "Explore the exquisite collections of marble handicrafts at Makrana Premium. Discover unique and beautifully crafted marble art pieces, sculptures, decor, and more.",
//   keywords: [
//     "white marble",
//     "Makrana marble",
//     "marble handicrafts",
//     "premium marble",
//     "marble design collection",
//     "marble artistry",
//     "marble traditional crafts",
//     "marble souvenirs",
//     "unique marble items",
//     "marble collections",
//     "premium marble items",
//     "handcrafted marble",
//     "marble design collections",
//     "marble slabs collection",
//     "marble slabs",
//     "white marble slabs",
//   ],
//   openGraph: {
//     title: "Makrana Premium - Marble Handicraft Collections",
//     description:
//       "Explore the exquisite collections of marble handicrafts at Makrana Premium. Discover unique and beautifully crafted marble art pieces, sculptures, decor, and more.",
//     images: {
//       url: "/ogImage.png",
//     },
//     url: "https://www.makranapremium.com/collections",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Makrana Premium - Marble Handicrafts Collections",
//     description:
//       "Explore the exquisite collections of marble handicrafts at Makrana Premium. Discover unique and beautifully crafted marble art pieces, sculptures, decor, and more.",
//     images: {
//       url: "/ogImage.png",
//     },
//   },
// };

// export const dynamic = 'auto'

// const Page = async () => {
//   const { categories } = await getCategories();

//   return (
//     <div className="py-20 container mx-auto px-6">
//       <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-charcoalBlack dark:text-champagneGold mb-10">
//         Discover Marble Elegance
//       </h1>
//       <MasonryLayout breakpoints={{ 1500: 4, 500: 2 }}>
//         {categories.map((category) => (
//           <CategoryCard key={category.id} category={category} />
//         ))}
//       </MasonryLayout>
//     </div>
//   );
// };

// export default Page;

// function CategoryCard({ category }: { category: CategoryType }) {
//   return (
//     <Link
//       href={"/collections/" + category.id}
//       key={category.id}
//       className="block"
//     >
//       <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
//         <Image
//           unoptimized={true}
//           src={category.imageUrl || ""}
//           alt={category.name}
//           width={600}
//           height={400}
//           className="w-full object-cover rounded-lg"
//           style={{ filter: "none" }} // Prevents inversion in dark mode
//         />
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <h3 className="text-white text-lg sm:text-xl md:text-2xl text-softBeige font-bold capitalize">
//             {category.name}
//           </h3>
//         </div>
//       </div>
//     </Link>
//   );
// }
