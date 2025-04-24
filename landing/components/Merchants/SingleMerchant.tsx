import React from "react";
import Image from "next/image";
import { Merchant } from "@/types/merchant";

const SingleMerchant = ({ merchant }: { merchant: Merchant }) => {
  const { image, imageLight, href, name } = merchant;

  return (
    <a href={href} className="relative block h-25 w-[200px] flex-shrink-0">
      {image && (
        <Image
          className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden object-contain absolute inset-0"
          src={image}
          alt={name}
          layout="fill"
        />
      )}
      {imageLight && (
        <Image
          className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block object-contain absolute inset-0"
          src={imageLight}
          alt={name}
          layout="fill"
        />
      )}
    </a>
  );
};

export default SingleMerchant;
