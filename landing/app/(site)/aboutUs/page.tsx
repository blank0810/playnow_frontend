import React from "react";
import { Metadata } from "next";
import About from "@/components/Pages/about/AboutUs";


export const metadata: Metadata = {
  title: "About us | PlayNow",

  // other metadata
  description: "about us and our mission",
};

const AboutUs = () => {
  return (
    <div className="pb-20 pt-40">
      <About />
    </div>
  );
};

export default AboutUs;
