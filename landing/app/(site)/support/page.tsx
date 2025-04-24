import React from "react";
import { Metadata } from "next";
import ContactUs from "@/components/Pages/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us | PlayNow",

  // other metadata
  description: "contact us for any inquiries or support",
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <ContactUs />
    </div>
  );
};

export default SupportPage;
