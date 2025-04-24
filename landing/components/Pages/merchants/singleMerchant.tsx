"use client";

import React from "react";
import { Merchant } from "@/types/merchant"; // Assuming you have a Merchant type
import Image from "next/image";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa"; // For "View Store" and location icons

const SingleMerchant = ({ merchant }: { merchant: Merchant }) => {
  const {
    image,
    name,
    rating,
    description,
    address,
    numberOfCoupons,
    isFeatured,
  } = merchant;

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
      {/* Conditionally render Featured Badge */}
      {isFeatured && (
        <div className="absolute top-2 right-2">
          <span className="text-xs py-1 px-3 rounded-full bg-orange-500 text-white">
            Featured
          </span>
        </div>
      )}

      {/* Left Column: Image */}
      <div className="w-full flex justify-center items-center">
        <Image
          src={image}
          width={200}
          height={200}
          alt={name}
          className="rounded-lg object-cover" // Ensure the image fits properly
        />
      </div>

      {/* Middle Column: Store Details */}
      <div className="w-full pl-4 mt-4">
        <h3 className="text-lg font-semibold text-black dark:text-white">{name}</h3>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-sm text-gray-600 dark:text-white">{rating} ⭐</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-white mt-2">{description}</p>

        <div className="flex items-center text-sm text-gray-600 dark:text-white mt-2 space-x-2">
          <FaMapMarkerAlt />
          <span>{address}</span>
        </div>
      </div>

      {/* Bottom Row: Coupons and View Store */}
      <div className="mt-4 flex justify-between items-center">
        <span className="bg-green-500 text-white text-xs py-1 px-3 rounded-full">
          {numberOfCoupons} Coupons Available
        </span>

        <div className="flex items-center space-x-2 text-sm font-medium text-blue-600">
          <a
            href="#"
            className="group inline-flex items-center gap-2.5 text-black hover:text-orange-500 dark:text-white dark:hover:text-orange-500"
          >
            <span className="duration-300 group-hover:pr-2">View Profile</span>
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
      </div>
    </motion.div>
  );
};

export default SingleMerchant;
