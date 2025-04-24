import React from "react";
import { Metadata } from "next";
import FAQsPage from "@/components/Pages/FAQs";

export const metadata: Metadata = {
  title: "FAQs | PlayNow",

  // other metadata
  description: "frequently asked questions and answers",
};

const QuestionAnswer = () => {
  return (
    <div className="pb-20 pt-40">
      <FAQsPage />
    </div>
  );
};

export default QuestionAnswer;
