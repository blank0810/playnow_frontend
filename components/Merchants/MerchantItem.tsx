"use client";
import { Business, Merchant } from "@/types/merchant";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MerchantItem = ({ merchant }: { merchant: Business }) => {
  const { mainImage, title, metadata, _id } = merchant;

  const imageNumber = (_id % 5) + 1; // Generates 1, 2, 3, 4, 5, 1, 2, ...
  const imageName = `blog-0${imageNumber}.png`; // Assuming .jpg extension

  // Construct the full image URL
  let fullImageUrl;

  // Check if mainImage already contains a filename
  if (mainImage.includes(".png") || mainImage.includes(".jpg")) {
    // If it does, use only the generated imageName
    fullImageUrl = `/images/merchant/${imageName}`;
  } else {
    // If it doesn't, append the generated imageName
    fullImageUrl = `${mainImage}${imageName}`;
  }

  console.log(fullImageUrl);

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/merchant/`} className="relative block aspect-[368/239]">
          <Image src={fullImageUrl} alt={title} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/merchant/merchant-details`}>
              {`${title.slice(0, 40)}...`}
            </Link>
          </h3>
          <p className="line-clamp-3">{metadata}</p>
        </div>
      </motion.div>
    </>
  );
};

export default MerchantItem;
