"use client";

import React, { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import SingleCoupon from "./SingleCoupon";
import couponData from "./couponData";


const categories = ["All", "Featured", "Hottest", "New"];

const CouponList = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredData =
    activeCategory === "All"
      ? couponData
      : couponData.filter((coupon) => coupon.category === activeCategory);

  return (
    <section className="pt-24 pb-12">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "Coupons",
            subtitle: "Coupons Listings",
            description: "Browse the best deals from our store partners.",
          }}
        />

        {/* Filters + See More */}
        <div className="mb-8 mt-10 flex flex-wrap items-center justify-between gap-4">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-orange-500 text-white"
                    : "border-gray-300 text-gray-400 hover:border-orange-500 hover:text-orange-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* See More */}
          <a
            href="#"
            className="group inline-flex items-center gap-2.5 text-black hover:text-orange-500 dark:text-white dark:hover:text-orange-500"
          >
            <span className="duration-300 group-hover:pr-2">See more</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        {/* Coupon Cards */}
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.slice(0, 6).map((coupon) => (
            <SingleCoupon key={coupon.id} coupon={coupon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CouponList;
