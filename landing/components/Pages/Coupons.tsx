"use client";

import React, { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import SingleCoupon from "../couponListing/SingleCoupon";
import couponData from "../couponListing/couponData";

const categories = ["All", "Featured", "Hottest", "New"];
const ITEMS_PER_PAGE = 12;

const Coupon = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = couponData.filter((coupon) => {
    const matchesCategory =
      activeCategory === "All" || coupon.category === activeCategory;
    const matchesSearch = coupon.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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

        {/* Filters and Search (Swapped Position) */}
        <div className="mb-8 mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Category Buttons (left) */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentPage(1); // reset to page 1
                }}
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

          {/* Search Bar (right) */}
          <input
  type="text"
  placeholder="Search coupons..."
  value={searchQuery}
  onChange={(e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // reset to page 1
  }}
  className="w-full md:w-60 px-4 py-2 border border-gray-300 rounded-full text-sm dark:bg-gray-800 dark:text-white hover:outline hover:outline-2 hover:outline-orange-500 focus:outline focus:outline-2 focus:outline-orange-500 transition-all duration-200"
/>

        </div>

        {/* Coupon Cards */}
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedData.map((coupon, index) => (
            <SingleCoupon key={index} coupon={coupon} />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center gap-2 mt-10 mb-20">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm rounded bg-gray-100 hover:bg-orange-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-4 py-2 text-sm rounded ${
                currentPage === i + 1
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 dark:bg-gray-600 dark:text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm rounded bg-gray-100 hover:bg-orange-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Coupon;
