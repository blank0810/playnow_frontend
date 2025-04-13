import { Metadata } from "next";
import Hero from "@/components/Hero";
import Coupon from "@/components/couponListing";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";
import Brands from "@/components/Merchants";

export const metadata: Metadata = {
  title: "PlayNow",
  description: "This is Home for discounts",
  icons: {
    icon: "/images/logo/head-logo.png",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Coupon />
      <FunFact />
      <FAQ />
      <CTA />
      <Testimonial />
      <Pricing />
      <Contact />
    </main>
  );
}
