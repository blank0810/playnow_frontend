import React from "react";
import { Coupon } from "@/types/coupon";
import Image from "next/image";
import { motion } from "framer-motion";

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
        className="animate_top z-40 rounded-lg border border-white bg-white p-6 shadow-md hover:shadow-lg dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-8 mx-4 mb-8"
      >
        <div className="relative flex h-12 w-12 items-center justify-center rounded-[4px] bg-primary">
          <Image src={icon} width={32} height={32} alt={title} />
        </div>
        <h3 className="mb-4 mt-5 text-lg font-semibold text-black dark:text-white xl:text-itemtitle">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-white">{description}</p>
      </motion.div>
    </>
  );
};

export default SingleCoupon;
