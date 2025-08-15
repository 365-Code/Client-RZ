import type { Metadata } from "next"
import AboutPage from "@/components/about-page"

export const metadata: Metadata = {
  title: "About Makrana Premium - 25+ Years of Marble Craftsmanship Excellence | Rajasthan",
  description:
    "Learn about Makrana Premium's 25+ years of heritage in marble craftsmanship. From traditional techniques to modern precision, we're Rajasthan's trusted marble experts since 2000.",
  keywords: [
    "about makrana premium",
    "marble craftsmanship history",
    "makrana marble heritage",
    "rajasthan marble artisans",
    "marble craftsmen makrana",
    "traditional marble techniques",
    "marble business history",
    "makrana marble legacy",
    "expert marble craftsmen",
    "marble artistry rajasthan",
    "handcrafted marble specialists",
    "premium marble company",
  ],
  openGraph: {
    title: "About Makrana Premium - Heritage of Excellence in Marble Craftsmanship",
    description:
      "Discover the story behind Makrana Premium's 25+ years of marble craftsmanship excellence. From humble beginnings to becoming Rajasthan's premier marble specialists.",
    images: {
      url: "/ogImage.png",
    },
    url: "https://www.makranapremium.com/about",
    type: "website",
    siteName: "Makrana Premium",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Makrana Premium - 25+ Years of Marble Excellence",
    description:
      "The story of Makrana Premium: From traditional craftsmanship to modern marble artistry. Discover our heritage and commitment to excellence.",
    images: {
      url: "/ogImage.png",
    },
  },
  alternates: {
    canonical: "https://www.makranapremium.com/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function About() {
  return <AboutPage />
}