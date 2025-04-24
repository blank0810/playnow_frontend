import React from "react";
import { Metadata } from "next";
import Cart from "@/components/Pages/cart";


export const metadata: Metadata = {
  title: "Coupons | PlayNow",

  // other metadata
  description: "coupons and discounts for our users",
};

const ItemPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Cart />
    </div>
  );
};

export default ItemPage;
