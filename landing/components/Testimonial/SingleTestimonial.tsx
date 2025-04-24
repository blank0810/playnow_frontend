import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content, rating, date } = review;

  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      {/* Header Section with Name, Designation, Image, and Date */}
      <div className="mb-7.5 flex justify-between items-start border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1 text-xl font-semibold text-black dark:text-white">
            {name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {designation}
          </p>
          <p className="text-xs text-gray-400 mt-1 dark:text-gray-500">{date}</p>
        </div>
        <div className="w-16 h-16 overflow-hidden rounded-full shadow-md">
          <Image
            width={60}
            height={60}
            className="object-cover"
            src={image}
            alt={name}
          />
        </div>
      </div>

      {/* Star Rating */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, index) => (
          <AiFillStar
            key={index}
            className={`text-yellow-400 ${index < rating ? "" : "opacity-50"}`}
            size={20}
          />
        ))}
      </div>

      {/* Testimonial Content */}
      <p>{content}</p>
    </div>
  );
};

export default SingleTestimonial;
