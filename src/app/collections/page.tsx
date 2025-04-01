// import DisplayProducts from "@/components/DisplayProducts";
// import { Metadata } from "next";
// import React from "react";

// import MasonryLayout from "@/components/masonry-layout";
// import { getCategories } from "@/lib/actions";
// import { CategoryType } from "@/lib/types";
// import Image from "next/image";
// import Link from "next/link";

// const Page = async () => {
//   const { categories } = await getCategories();

//   return (
//     <div className="py-20 container mx-auto px-6">
//       <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-charcoalBlack dark:text-champagneGold mb-10">
//       Discover Marble Elegance
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
//       href={"/categories/" + category.id}
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
//           <h3 className="text-lg sm:text-xl md:text-2xl text-softBeige font-bold capitalize">
//             {category.name}
//           </h3>
//         </div>
//       </div>
//     </Link>
//   );
// }

import MasonryLayout from "@/components/masonry-layout";
import { getCategories } from "@/lib/actions";
import { CategoryType } from "@/lib/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
};

const Page = async () => {
  const { categories } = await getCategories();

  return (
    <div className="py-20 container mx-auto px-6">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-charcoalBlack dark:text-champagneGold mb-10">
        Discover Marble Elegance
      </h1>
      <MasonryLayout breakpoints={{ 1500: 4, 500: 2 }}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </MasonryLayout>
    </div>
  );
};

export default Page;

function CategoryCard({ category }: { category: CategoryType }) {
  return (
    <Link
      href={"/collections/" + category.id}
      key={category.id}
      className="block"
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
        <Image
          unoptimized={true}
          src={category.imageUrl || ""}
          alt={category.name}
          width={600}
          height={400}
          className="w-full object-cover rounded-lg"
          style={{ filter: "none" }} // Prevents inversion in dark mode
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h3 className="text-white text-lg sm:text-xl md:text-2xl text-softBeige font-bold capitalize">
            {category.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
