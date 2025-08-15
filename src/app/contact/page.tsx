import type { Metadata } from "next"
import ContactPage from "@/components/contact-page"

export const metadata: Metadata = {
  title: "Contact Makrana Premium - Get Quote for Premium Marble | Makrana, Rajasthan",
  description:
    "Contact Makrana Premium for premium marble consultation, custom quotes, and expert craftsmanship. Located in Makrana, Rajasthan. Call +91 79769 73338 or visit our showroom.",
  keywords: [
    "contact makrana premium",
    "marble consultation makrana",
    "marble quote rajasthan",
    "makrana marble contact",
    "premium marble contact",
    "marble showroom makrana",
    "custom marble design",
    "marble installation contact",
    "makrana marble craftsmen",
    "marble business contact",
    "rajasthan marble supplier",
    "white marble contact",
  ],
  openGraph: {
    title: "Contact Makrana Premium - Premium Marble Consultation & Quotes",
    description:
      "Get in touch with Makrana Premium for expert marble consultation, custom designs, and premium quality marble solutions. Located in the heart of Makrana, Rajasthan.",
    images: {
      url: "/ogImage.png",
    },
    url: "https://www.makranapremium.com/contact",
    type: "website",
    siteName: "Makrana Premium",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Makrana Premium - Premium Marble Experts",
    description: "Expert marble consultation and custom designs from Makrana's finest craftsmen. Get your quote today!",
    images: {
      url: "/ogImage.png",
    },
  },
  alternates: {
    canonical: "https://www.makranapremium.com/contact",
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

export default function Contact() {
  return <ContactPage />
}
