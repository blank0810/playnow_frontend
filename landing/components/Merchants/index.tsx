"use client";

import React from "react";
import SingleMerchant from "./SingleMerchant";
import merchantData from "./merchantData";
import { motion } from "framer-motion";

const Merchants = () => {
  const repeatedMerchants = [
    ...merchantData,
    ...merchantData,
    ...merchantData,
    ...merchantData,
  ];

  return (
    <section className="overflow-hidden border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
      <div
        className="relative w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 10%, black 40%, black 60%, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 10%, black 40%, black 60%, transparent 90%)",
        }}
      >
        <motion.div
          className="flex gap-5 whitespace-nowrap"
          initial={{ x: 0 }}
          animate={{ x: "-150%" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {repeatedMerchants.map((merchant, key) => (
            <SingleMerchant merchant={merchant} key={`${merchant.id}-${key}`} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Merchants;
