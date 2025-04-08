"use client";
import React from "react";
import couponData from "./couponData";
import SectionHeader from "../Common/SectionHeader";
import SingleCoupon from "./SingleCoupon";

const Coupon = () => {
  return (
    <>
      {/* <!-- ===== Coupons Start ===== --> */}
      <section id="coupons" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Latest Coupons",
              subtitle: "Coupons Listing Page",
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
            ante in maximus.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Coupons item Start --> */}

            {couponData.map((Coupon, key) => (
              <SingleCoupon coupon={Coupon} key={key} />
            ))}
            {/* <!-- Coupons item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Coupons End ===== --> */}
    </>
  );
};

export default Coupon;
