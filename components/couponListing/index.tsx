"use client";

import React, { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import SingleCoupon from "./SingleCoupon";

const couponData = [
  { id: 1, category: "Featured", icon: "/path/to/icon1.png", title: "Featured Coupon 1", description: "This is a featured coupon.", price: "₱100.00" },
  { id: 2, category: "Featured", icon: "/path/to/icon2.png", title: "Featured Coupon 2", description: "This is another featured coupon.", price: "₱150.00" },
  { id: 3, category: "Hottest", icon: "/path/to/icon3.png", title: "Hottest Coupon 1", description: "This is a hottest coupon.", price: "₱200.00" },
  { id: 4, category: "Hottest", icon: "/path/to/icon4.png", title: "Hottest Coupon 2", description: "This is another hottest coupon.", price: "₱250.00" },
  { id: 5, category: "New", icon: "/path/to/icon5.png", title: "New Coupon 1", description: "This is a new coupon.", price: "₱300.00" },
  { id: 6, category: "New", icon: "/path/to/icon6.png", title: "New Coupon 2", description: "This is another new coupon.", price: "₱350.00" },
  { id: 7, category: "All", icon: "/path/to/icon7.png", title: "All Coupon 1", description: "This is a general coupon.", price: "₱400.00" },
  { id: 8, category: "All", icon: "/path/to/icon8.png", title: "All Coupon 2", description: "This is another general coupon.", price: "₱450.00" },
  { id: 9, category: "Featured", icon: "/path/to/icon9.png", title: "Featured Coupon 3", description: "This is a third featured coupon.", price: "₱120.00" },
  { id: 10, category: "Hottest", icon: "/path/to/icon10.png", title: "Hottest Coupon 3", description: "This is a third hottest coupon.", price: "₱220.00" },
  { id: 11, category: "New", icon: "/path/to/icon11.png", title: "New Coupon 3", description: "This is a third new coupon.", price: "₱330.00" },
];

const categories = ["All", "Featured", "Hottest", "New"];

const Coupon = () => {
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
                    ? "bg-primary text-white"
                    : "border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* See More */}
          <a
            href="#"
            className="group inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
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
          {filteredData.slice(0, 6).map((coupon, index) => (
            <SingleCoupon key={index} coupon={coupon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coupon;
