import React from "react";
import { Metadata } from "next";
import MissionVision from "@/components/Pages/about/missionVision";


export const metadata: Metadata = {
  title: "Mission & Vision | PlayNow",

  // other metadata
  description: "about us and our mission",
};

const MissionAndVision = () => {
  return (
    <div className="pb-20 pt-40">
      <MissionVision />
    </div>
  );
};

export default MissionAndVision;
