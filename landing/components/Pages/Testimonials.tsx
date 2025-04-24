"use client";

import { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion";
import { testimonialData } from "../Testimonial/testimonialData";
import SingleTestimonial from "../Testimonial/SingleTestimonial";

const testimonialsPerPage = 8;

const Testimony = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(testimonialData.length / testimonialsPerPage);

  const startIndex = (currentPage - 1) * testimonialsPerPage;
  const currentTestimonials = testimonialData.slice(
    startIndex,
    startIndex + testimonialsPerPage
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `TESTIMONIALS`,
              subtitle: `Client’s Testimonials`,
              description: `We believe in building real value—for both users and merchants. These testimonials reflect the trust and satisfaction we work hard to earn.`,
            }}
          />
        </div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {currentTestimonials.map((review) => (
            <div key={review.id}>
              <SingleTestimonial review={review} />
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center gap-2 mb-20">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm rounded bg-gray-100 hover:bg-orange-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`px-4 py-2 text-sm rounded ${
                currentPage === i + 1
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 dark:bg-gray-600 dark:text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm rounded bg-gray-100 hover:bg-orange-100 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700"
          >
            Next
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimony;
