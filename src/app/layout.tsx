import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminState } from "@/context/AdminSlice";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: {
    default: "Makrana Premium",
    template: "Makrana Premium - %s"
  },
  description: "Makrana Premium offers an exquisite collection of marble handicrafts and Makrana marble, renowned for their quality and craftsmanship.",
  keywords: ["white marble", "Makrana marble", "marble handicrafts", "premium marble", "marble sculptures", "marble decor", "marble art", "Makrana marble products", "marble art pieces", "custom marble designs", "luxury marble items", "handcrafted marble artifacts", "marble home accents", "marble sculptures for home", "exclusive marble creations", "artistic marble works", "marble carvings", "marble vases and bowls", "marble tabletops", "marble figurines", "marble kitchen decor", "marble wall art", "marble gifts", "marble centerpieces", "Indian marble handicrafts", "marble heritage crafts", "marble statues", "decorative marble items", "marble furniture pieces", "marble interior decor", "high-quality marble products", "marble design collection", "marble artistry", "marble traditional crafts", "marble souvenirs", "unique marble items"],
  robots: "index, follow",
  openGraph: {
    title: "Makrana Premium - Marble Handicrafts and Makrana Marble",
    description: "Discover the finest selection of marble handicrafts and Makrana marble at Makrana Premium. Perfect for home decor and artistic installations.",
    images: {
      url: "/logo.png"
    },
    url: "https://www.makranapremium.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makrana Premium - Marble Handicrafts and Makrana Marble",
    description: "Discover the finest selection of marble handicrafts and Makrana marble at Makrana Premium. Perfect for home decor and artistic installations.",
    images: {
      url: "/ogImage.png",
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AdminState>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AdminState>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </body>
    </html>
  );
}
