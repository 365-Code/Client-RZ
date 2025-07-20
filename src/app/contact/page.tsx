// app/contact/page.tsx

import ContactUs from "@/components/contact-us";
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach out to RK Marble & Accessories for inquiries, directions, or business opportunities. We're here to help you.",
  keywords: ["Contact MakranaPremium Marble", "Makrana Marble Shop", "RK Marble Makrana", "Makrana Premium Mobile", "Phone", "Address", "Email", "Support"],
  openGraph: {
    title: "Contact Us | RK Marble & Accessories",
    description: "Reach out to us for inquiries or directions. We're located opposite Modi Masjid, Makrana.",
    url: "https://makranapremium.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="">
      <section className="py-20 text-center bg-primary text-white">
        <div className="container max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl opacity-90">
            We&apos;re here to answer your questions and guide you in the right direction.
          </p>
          <div className="mt-6">
            <Link href="/">
              <Button variant="secondary">Back to Home</Button>
            </Link>
          </div>
        </div>
      </section>

      <ContactUs />
    </main>
  );
}
