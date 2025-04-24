"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FaHandshake, FaShieldAlt, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const MissionVision = () => {
  const categories = ["Our Story", "Mission & Vision", "Our Team"];
  const [activeCategory, setActiveCategory] = useState("Mission & Vision");

  const linkMap: { [key: string]: string } = {
    "Our Story": "/aboutUs",
    "Mission & Vision": "/mission-vision",
    "Our Team": "/ourTeam",
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 py-16 md:py-20 transition-all">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 space-y-10 lg:space-y-10">
        {/* Header */}
        <div className="animate_top text-center">
          <SectionHeader
            headerInfo={{
              title: "MISSION & VISION",
              subtitle: "PlayNow's Mission and Vision",
              description:
                "Our mission is to create a win-win ecosystem, and our vision is to make great deals a seamless part of everyday life. Discover how PlayNow helps both consumers and businesses thrive.",
            }}
          />
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-6">
          {categories.map((category) => (
            <Link key={category} href={linkMap[category]}>
              <button
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-orange-500 text-white shadow-lg"
                    : "border-gray-300 text-gray-400 hover:border-orange-500 hover:text-orange-500"
                }`}
              >
                {category}
              </button>
            </Link>
          ))}
        </div>

        {/* Mission Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            {/* Mission Section */}
            <div>
              <h3 className="text-4xl font-semibold text-gray-800 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                At PlayNow, our mission is to create a win-win ecosystem where consumers discover exceptional experiences at great prices, while helping businesses grow their customer base and increase revenue.
              </p>
            </div>

            {/* Vision Section */}
            <div>
              <h3 className="text-4xl font-semibold text-gray-800 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We envision a world where finding and enjoying great deals becomes a seamless part of everyday life, where businesses thrive through smart customer acquisition, and where communities are strengthened through local commerce.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/shape/funFact.png"
              alt="Our Mission and Vision"
              width={500}
              height={500}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Our Values */}
        <section className="px-4 py-16 md:px-8 lg:py-20 2xl:px-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#ffffff] to-[#ffecbc] py-16 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-22.5"
          >
            <div className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3"
              >
                Our Values
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mx-auto lg:w-11/12"
              >
                At PlayNow, we adhere to values that guide us in creating meaningful and lasting partnerships.
              </motion.p>
            </div>

            {/* Centered Icons with 3-column layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mx-4 lg:mx-8 xl:mx-16">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center flex flex-col items-center"
              >
                <FaHandshake className="text-6xl text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-orange-500">Customer First</h3>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  We prioritize customer satisfaction in everything we do.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-center flex flex-col items-center"
              >
                <FaShieldAlt className="text-6xl text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-orange-500">Quality Over Quantity</h3>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  We curate only the best deals and experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-center flex flex-col items-center"
              >
                <FaUsers className="text-6xl text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold text-orange-500">Integrity</h3>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  We operate with honesty and transparency.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Ready to experience PlayNow?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Whether you're a consumer looking for your next great deal or a business ready to grow, PlayNow is here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a
              href="/sign-up"
              className="bg-orange-500 text-white py-2 px-6 rounded-full text-lg hover:bg-orange-600 transform transition duration-200 hover:scale-105"
            >
              I'm a Consumer
            </a>
            <a
              href="/become-partner"
              className="bg-gray-800 text-white py-2 px-6 rounded-full text-lg hover:bg-gray-900 transform transition duration-200 hover:scale-105"
            >
              I'm a Merchant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
