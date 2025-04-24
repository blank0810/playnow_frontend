import React from "react";
import { Metadata } from "next";
import Subscription from "@/components/Pages/Pricing";

export const metadata: Metadata = {
  title: "Subscription Plans | PlayNow",

  // other metadata
  description: "subscription plans and pricing details",
};

const PricingPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Subscription />
    </div>
  );
};

export default PricingPage;
