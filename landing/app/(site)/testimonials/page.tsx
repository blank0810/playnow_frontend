import React from "react";
import { Metadata } from "next";
import Testimony from "@/components/Pages/Testimonials";


export const metadata: Metadata = {
  title: "Testimonials | PlayNow",

  // other metadata
  description: "testimonials from our satisfied customers",
};

const TestimonialPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Testimony />
    </div>
  );
};

export default TestimonialPage;
