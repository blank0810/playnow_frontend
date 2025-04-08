import { Metadata } from "next";
import Hero from "@/components/Hero";
import Coupon from "@/components/couponListing";
import FunFact from "@/components/FunFact";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";
import Merchant from "@/components/Merchants";

export const metadata: Metadata = {
  title: "PlayNow",

  // other metadata
  description: "This is Home for discounts"
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Coupon />
      <Merchant />
      <FunFact />
      <FAQ />
      <CTA />
      <Testimonial />
      <Pricing />
      <Contact />
    </main>
  );
}
