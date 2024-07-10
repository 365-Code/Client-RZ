import DisplayProducts from "@/components/DisplayProducts";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Marble Handicraft Products",
  description:
    "Explore the exquisite collections of marble handicrafts at Makrana Premium. Discover unique and beautifully crafted marble art pieces, sculptures, decor, and more.",
  keywords: [
    "white marble",
    "Makrana marble",
    "marble handicrafts",
    "premium marble",
    "marble sculptures",
    "marble decor",
    "marble art",
    "Makrana marble products",
    "marble art pieces",
    "custom marble designs",
    "luxury marble items",
    "handcrafted marble artifacts",
    "marble home accents",
    "marble sculptures for home",
    "exclusive marble creations",
    "artistic marble works",
    "marble carvings",
    "marble vases and bowls",
    "marble tabletops",
    "marble figurines",
    "marble kitchen decor",
    "marble wall art",
    "marble gifts",
    "marble centerpieces",
    "Indian marble handicrafts",
    "marble heritage crafts",
    "marble statues",
    "decorative marble items",
    "marble furniture pieces",
    "marble interior decor",
    "high-quality marble products",
    "marble design collection",
    "marble artistry",
    "marble traditional crafts",
    "marble souvenirs",
    "unique marble items",
  ],
  openGraph: {
    title: "Makrana Premium - Marble Handicraft Collections",
    description:
      "Explore the exquisite collections of marble handicrafts at Makrana Premium. Discover unique and beautifully crafted marble art pieces, sculptures, decor, and more.",
    images: {
      url: "/static/images/collections-og-image.jpg",
    },
    url: "https://www.makranapremium.com/collections",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makrana Premium - Marble Handicrafts Collections",
    description:
      "Explore the exquisite collections of marble handicrafts at Makrana Premium. Discover unique and beautifully crafted marble art pieces, sculptures, decor, and more.",
    images: {
      url: "/static/images/twitter-image.jpg",
    },
  },
};

const Page = () => {
  return (
    <main className="container-y container1">
      <DisplayProducts type="handicraft" />
    </main>
  );
};

export default Page;
