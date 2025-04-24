"use client";

import SectionHeader from "@/components/Common/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    title: "CEO & Co-Founder",
    bio: "Former e-commerce executive with 15+ years of experience in digital marketplaces.",
    image: "/images/team/sarah.jpg",
  },
  {
    name: "Ahmed Al-Farsi Kim",
    title: "CTO & Co-Founder",
    bio: "Tech innovator with a background in developing scalable platforms for the MENA region.",
    image: "/images/team/d.jpg",
  },
  {
    name: "Priya Sharma",
    title: "Head of Merchant Relations",
    bio: "Expert in business development with strong connections in the local business community.",
    image: "/images/team/a.jpg",
  },
  {
    name: "Michael Chen",
    title: "Marketing Director",
    bio: "Digital marketing specialist with a track record of growing user bases for tech startups.",
    image: "/images/team/j.jpg",
  },
];

const getCategoryLink = (category: string) => {
  switch (category) {
    case "Our Story":
      return "/aboutUs";
    case "Mission & Vision":
      return "/mission-vision";
    case "Our Team":
      return "/ourTeam";
    default:
      return null;
  }
};

const OurTeam = () => {
  const categories = ["Our Story", "Mission & Vision", "Our Team"];
  const [activeCategory, setActiveCategory] = useState("Our Team");

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="animate_top mx-auto text-center mb-12"
      >
        <SectionHeader
          headerInfo={{
            title: `OUR TEAM`,
            subtitle: `Meet Our Team`,
            description:
              "Our diverse team of professionals is passionate about connecting consumers with great deals and helping businesses grow.",
          }}
        />
      </motion.div>

      {/* Category Navigation */}
      <div className="mb-8 mt-10 flex flex-wrap items-center justify-center gap-6">
        {categories.map((category) => {
          const link = getCategoryLink(category);
          return (
            <Link key={category} href={link || "#"}>
              <button
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-6 py-3 text-base font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-orange-500 text-white shadow-lg transform hover:scale-105"
                    : "border-gray-300 text-gray-400 hover:border-orange-500 hover:text-orange-500"
                }`}
              >
                {category}
              </button>
            </Link>
          );
        })}
      </div>

      {/* Our Team Section */}
      <section id="team" className="bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 py-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                <div className="w-28 h-28 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="rounded-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {member.name}
                </h4>
                <p className="text-orange-500 font-medium mt-2">{member.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
