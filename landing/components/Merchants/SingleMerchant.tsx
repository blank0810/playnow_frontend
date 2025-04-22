import React from "react";
import Image from "next/image";
import { Merchant } from "@/types/merchant";

const SingleMerchant = ({ merchant }: { merchant: Merchant }) => {
  const { image, href, name, imageLight, id } = merchant;

  return (
    <a
      href={href}
      className="relative block h-10 w-[100px] flex-shrink-0"
    >
      <Image
        className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
        src={image}
        alt={name}
        fill
      />
      <Image
        className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
        src={imageLight}
        alt={name}
        fill
      />
    </a>
  );
};

export default SingleMerchant;
