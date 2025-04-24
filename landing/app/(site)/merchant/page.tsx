import React from "react";
import { Metadata } from "next";
import MerchantPage from "@/components/Pages/merchants/merchants";



export const metadata: Metadata = {
  title: "Merchants | PlayNow",

  // other metadata
  description: "merchants and partners of PlayNow",
};

const AllMerchants = () => {
  return (
    <div className="pb-20 pt-40">
      <MerchantPage />
    </div>
  );
};

export default AllMerchants;
