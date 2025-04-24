import React from "react";
import { Metadata } from "next";
import CouponPage from "@/components/Pages/Coupons";


export const metadata: Metadata = {
  title: "Coupons | PlayNow",

  // other metadata
  description: "coupons and discounts for our users",
};

const AllCoupons = () => {
  return (
    <div className="pb-20 pt-40">
      <CouponPage />
    </div>
  );
};

export default AllCoupons;
