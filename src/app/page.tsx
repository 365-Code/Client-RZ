import Hero from "@/components/landing/hero";
import About from "@/components/landing/about";
import { ShopProducts } from "@/components/landing/gallery";
import Article from "@/components/landing/article";
import ContactUs from "@/components/landing/contact-us";
import WhatsAppContact from "@/components/utils/whatsapp";
import Stats from "@/components/landing/stats";
import Testimonials from "@/components/landing/testimonials";
import Process from "@/components/landing/process";

const page = () => {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <ShopProducts />
      <Process />
      {/* <Article /> */}
      <Testimonials />
      <ContactUs />
      <WhatsAppContact />
    </>
  );
};

export default page;
