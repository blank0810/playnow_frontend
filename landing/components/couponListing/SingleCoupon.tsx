"use client";

import React from "react";
import { Coupon } from "@/types/coupon";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";

const SingleCoupon = ({ coupon }: { coupon: Coupon }) => {
  const { image, title, description } = coupon;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
      }}
      transition={{ duration: 0.01 }}
      className="transform transition-transform duration-150 ease-in-out z-40 rounded-lg border border-white bg-white p-4 shadow-md dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-6 mx-4 mb-8"
      style={{
        width: "calc(104% - 2rem)",
        height: "auto",
        position: "relative",
      }}
    >
      {/* Image section */}
      <div className="relative">
        <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-br-lg">
          50% Discount
        </div>
        
        {/* Conditional rendering for image */}
        {image && image !== "" ? (
          <div className="w-full flex justify-center items-center">
            <Image
              src={image}
              width={120}
              height={120}
              alt={title}
              className="rounded-lg object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-[120px] bg-gray-300 rounded-lg flex items-center justify-center">
            <span className="text-gray-600">No Image</span>
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 bg-gray-500 text-white text-xs p-2 rounded-tr-lg font-poppins">
          Merchant Name/Store
        </div>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-white">{description}</p>

      <div className="mt-4 flex justify-between items-center">
        <span className="font-semibold text-black dark:text-white">₱100.00</span>
        
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { type: "spring", stiffness: 300 },
          }}
          whileTap={{ scale: 1 }}
          className="bg-orange-500 text-white p-2 rounded-full cursor-pointer transition-transform duration-200"
        >
          <FaShoppingCart className="text-lg" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SingleCoupon;
