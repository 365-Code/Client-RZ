import About from "@/components/about";
import Article from "@/components/article";
import ContactUs from "@/components/contact-us";
import { ShopProducts } from "@/components/gallery";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <ShopProducts />
      <Article />
      <ContactUs />
      <WhatsAppContact />
    </>
  );
};

export default page;

const WhatsAppContact = () => {
  return (
    <div className="fixed bottom-4 right-4 w-fit">
      <div className="group/whatsapp w-fit relative">
        <Card className="transition-all opacity-0 group-hover/whatsapp:opacity-100 group-hover/whatsapp:w-2xs max-w-2xs aspect-square w-0 overflow-hidden border-none p-0">
          <CardHeader className="p-4 bg-green-600">
            <div className="flex items-center gap-2 text-white">
              <Image
                unoptimized={true}
                src="/logo.png"
                alt="MakranaPremium"
                width={40}
                height={40}
                color="white"
              />
              <div>
                <CardTitle>Makrana Premium</CardTitle>
                <CardDescription className="text-white">
                  Replies within 1 day
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Card>
              <CardHeader>
                <CardTitle>Makrana Primium</CardTitle>
                <CardDescription>
                  <p>Hi there!</p>
                  <p>How can I help you?</p>
                </CardDescription>
              </CardHeader>
            </Card>
          </CardContent>
          <CardFooter>
            <a
              href="https://wa.me/+917976973338?text=How can I buy these products?"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto"
            >
              <Button className="bg-green-500 cursor-pointer hover:bg-green-600">
                {/* <MessageCircle /> */}
                <Image
                  unoptimized={true}
                  alt="whatsapp"
                  src="/whatsapp.svg"
                  width={20}
                  height={20}
                />
                Start Chat
              </Button>
            </a>
          </CardFooter>
        </Card>
        <div className="absolute bottom-0 right-0 group-hover/whatsapp:opacity-0 opacity-100 transition-all">
          <button
            style={{
              animation: "collapse 7s forwards",
            }}
            className=" bg-green-500 overflow-hidden rounded-full p-2 flex items-center text-center transition-all"
          >
            <Image
              unoptimized={true}
              alt="whatsapp"
              src="/whatsapp.svg"
              width={30}
              height={30}
              className="mx-auto"
            />
            <span
              style={{
                animation: "vanish 7s forwards",
              }}
              className="text-white text-sm font-medium transition-all ml-2"
            >
              Whatsapp
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
