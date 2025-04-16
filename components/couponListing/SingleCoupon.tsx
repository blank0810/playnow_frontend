"use client";

import React from "react";
import { Coupon } from "@/types/coupon";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon from react-icons

const SingleCoupon = ({ coupon }: { coupon: Coupon }) => {
  const { icon, title, description } = coupon;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-4 shadow-md hover:shadow-lg dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-6 mx-4 mb-8"
        style={{
          width: "calc(104% - 2rem)", // Adjust width of the card
          height: "auto", // Keep height auto
          position: "relative", // Ensure the card's content is in a relative context for absolute elements
        }}
      >
        {/* Image section with banner */}
        <div className="relative">
          <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded-br-lg">
            50% Discount
          </div>
          <Image src={icon} width={120} height={120} alt={title} className="rounded-lg" />
          
          {/* Merchant Name/Store banner with font adjustment */}
          <div className="absolute bottom-0 left-0 bg-gray-500 text-white text-xs p-2 rounded-tr-lg font-poppins">
            Merchant Name/Store
          </div>
        </div>

        <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-white">{description}</p>

        {/* Price and Cart Icon */}
        <div className="mt-4 flex justify-between items-center">
          <span className="font-semibold text-primary">₱100.00</span>
          <div className="bg-primary text-white p-2 rounded-full cursor-pointer">
            <FaShoppingCart className="text-lg" />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SingleCoupon;
