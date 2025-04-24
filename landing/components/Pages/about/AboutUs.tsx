"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const AboutUs = () => {
  const categories = ["Our Story", "Mission & Vision", "Our Team"];
  const [activeCategory, setActiveCategory] = useState("Our Story");

  const getCategoryLink = (category: string) => {
    switch (category) {
      case "Mission & Vision":
        return "/mission-vision";
      case "Our Team":
        return "/ourTeam";
      default:
        return null;
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 py-20">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="animate_top mx-auto text-center"
        >
          <SectionHeader
            headerInfo={{
              title: `ABOUT US`,
              subtitle: `Discover PlayNow`,
              description: `We believe in building real value—for both users and merchants. Discover our story, mission, and the team behind PlayNow — your destination for amazing deals and experiences.`,
            }}
          />
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {categories.map((category) => {
            const link = getCategoryLink(category);
            const button = (
              <button
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-orange-500 text-white"
                    : "border-gray-300 text-gray-400 hover:border-orange-500 hover:text-orange-500"
                }`}
              >
                {category}
              </button>
            );

            return link ? (
              <Link key={category} href={link}>{button}</Link>
            ) : (
              <span key={category}>{button}</span>
            );
          })}
        </motion.div>

        {/* Our Journey Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-1 items-center"
        >
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl font-semibold text-gray-800 dark:text-white mb-8"
            >
              Our Journey
            </motion.h3>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              PlayNow was founded in 2020 with a simple mission: to connect consumers with amazing deals while helping local businesses thrive.
              What started as a small platform with just a handful of merchant partners has grown into a thriving marketplace with hundreds of businesses and thousands of satisfied customers.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-4">
              Our founders, experienced entrepreneurs with backgrounds in e-commerce and local business development, recognized a gap in the market for a platform that could provide genuine value to both consumers and merchants alike.
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mt-4">
              Today, PlayNow is one of the fastest-growing coupon and deal platforms in the region, with plans to expand to new markets and continue innovating in the digital deals space.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <Image
              src="/images/shape/funFact.png"
              alt="Our Journey"
              width={500}
              height={500}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Timeline Section */}
        <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
    className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#ffffff] to-[#ffecbc] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5"
  >
    <div className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3"
      >
        Our Growth Timeline
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mx-auto lg:w-11/12"
      >
        We’re more than a platform—we’re a trusted partner. Thousands of merchants choose Playnow to expand their reach and maximize their impact.
      </motion.p>
    </div>

    {/* 4-column grid layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-4 lg:mx-8 xl:mx-16">
      {["2020", "2021", "2022", "2023"].map((year, index) => (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          key={year}
          className="animate_top text-center"
        >
          <h3 className="mb-2.5 text-xl font-bold text-orange-500 dark:text-orange-500 xl:text-2xl">
            {year}
          </h3>
          <p className="text-base lg:text-lg">{`${year} milestones`}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>


        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-3xl font-semibold text-gray-800 dark:text-white mb-5"
          >
            Ready to experience PlayNow?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-6"
          >
            Whether you're a consumer looking for your next great deal or a business ready to grow, PlayNow is here to help.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/sign-up"
              className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg hover:bg-orange-600 transform transition-transform duration-200 hover:scale-105"
            >
              I'm a Consumer
            </a>
            <a
              href="/become-partner"
              className="bg-gray-800 text-white py-2 px-6 rounded-full text-lg hover:bg-gray-900 transform transition-transform duration-200 hover:scale-105"
            >
              I'm a Merchant
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
