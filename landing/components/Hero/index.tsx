"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Level up your game with unbeatable discounts!
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Level up your game{" "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  <span className="text-white dark:text-white">
                    <span className="text-black dark:text-orange-500">Play</span>
                    <span className="text-orange-500 dark:text-white">Now</span>
                  </span>
                </span>
              </h1>
              <p className="text-black dark:text-white">
                Unlock premium experiences at unbeatable prices—from everyday
                essentials to special treats. PlayNow connects you to top
                merchants and curated discounts designed to elevate your
                lifestyle.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-orange-500 px-7.5 py-2.5 text-white ease-in-out hover:bg-orange-600 dark:bg-orange-500 dark:hover:bg-orange-700 transform transition-transform duration-200 hover:scale-105"
                    >
                      Get Started
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-black dark:text-white">
                  Subscribe us now by entering your email
                </p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />

                <div className="relative aspect-[1000/900] w-full">
                  <Image
                    className="dark:hidden"
                    src="/images/hero/bg.png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="dark:block"
                    src="/images/hero/bg.png"
                    alt="Hero"
                    fill
                  />

                  {/* Rating Card */}
                  <div className="absolute bottom-4 left-4 rounded-lg bg-white p-3 shadow-md dark:bg-black">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.115 3.424a1 1 0 00.95.69h3.6c.969 0 1.371 1.24.588 1.81l-2.915 2.12a1 1 0 00-.364 1.118l1.115 3.424c.3.921-.755 1.688-1.54 1.118l-2.915-2.12a1 1 0 00-1.176 0l-2.915 2.12c-.785.57-1.84-.197-1.54-1.118l1.115-3.424a1 1 0 00-.364-1.118l-2.915-2.12c-.783-.57-.38-1.81.588-1.81h3.6a1 1 0 00.95-.69l1.115-3.424z" />
                      </svg>
                      <span className="text-sm font-semibold text-black dark:text-white">
                        Rating: 4/5
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Based on 100k+ reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
