import DisplayProducts from "@/components/DisplayProducts";
import { Metadata } from "next";
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
    "white marble slabs"
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
      <DisplayProducts type="slab" />
    </main>
  );
};

export default Page;
