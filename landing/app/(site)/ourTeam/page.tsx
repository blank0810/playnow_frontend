import React from "react";
import { Metadata } from "next";
import OurTeam from "@/components/Pages/about/ourTeam";


export const metadata: Metadata = {
  title: "Mission & Vision | PlayNow",

  // other metadata
  description: "about us and our mission",
};

const Teams = () => {
  return (
    <div className="pb-20 pt-40">
      <OurTeam />
    </div>
  );
};

export default Teams;
