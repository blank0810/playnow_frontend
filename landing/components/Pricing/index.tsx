"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `SUBSCRIPTION PLANS`,
                subtitle: `Simple Pricing`,
                description: `From basic access to exclusive benefits, find the right plan for you. Start with our free option or level up to enjoy even more perks and discounts.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7 shadow-lg hover:shadow-xl transition-all duration-300 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5 hover:scale-105">
              <h3 className="mb-5.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                FREE{" "}
                <span className="text-regular text-orange-400 dark:text-manatee">
                  /lifetime
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Small Pack
              </h4>
              <p className="text-base text-body-color dark:text-body-color-dark">
                Perfect for individuals who want access to basic deals without commitment.
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 flex items-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <svg className="mt-1 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8.25 8.25a1 1 0 01-1.414 0l-4.25-4.25a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Access to standard deals
                  </li>
                  <li className="mb-4 flex items-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <svg className="mt-1 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8.25 8.25a1 1 0 01-1.414 0l-4.25-4.25a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Save up to 30% on select offers
                  </li>
                  <li className="mb-4 flex items-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <svg className="mt-1 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8.25 8.25a1 1 0 01-1.414 0l-4.25-4.25a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Email notifications for new deals
                  </li>
                  <li className="mb-4 flex items-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <svg className="mt-1 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8.25 8.25a1 1 0 01-1.414 0l-4.25-4.25a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Standard customer support
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-orange-500 transition-all duration-300 dark:text-white dark:hover:text-orange-500 hover:scale-105"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Sign up free
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7 shadow-lg hover:shadow-xl transition-all duration-300 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5 hover:scale-105">
              <h3 className="mb-5.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                AED 49{" "}
                <span className="text-regular text-orange-400 dark:text-manatee">
                  /month
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Premium
              </h4>
              <p className="text-base text-body-color dark:text-body-color-dark">
                Unlock all benefits including exclusive deals, early access, and priority support.
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  {[
                    "All Free plan benefits",
                    "Exclusive premium deals",
                    "Save up to 50% on select offers",
                    "Early access to limited-time offers",
                    "No service fees",
                    "Priority customer support"
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="mb-4 flex items-start gap-2 text-black last:mb-0 dark:text-manatee"
                    >
                      <svg className="mt-1 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8.25 8.25a1 1 0 01-1.414 0l-4.25-4.25a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-orange-500 transition-all duration-300 dark:text-white dark:hover:text-orange-500 hover:scale-105"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get Premium
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* Additional pricing options can be added here */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7 shadow-lg hover:shadow-xl transition-all duration-300 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5 hover:scale-105">
              <h3 className="mb-5.5 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                AED 399{" "}
                <span className="text-regular text-orange-400 dark:text-manatee">
                  /year
                </span>
              </h3>
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Premium Annual
              </h4>
              <p className="text-base text-body-color dark:text-body-color-dark">
                Unlock all benefits including exclusive deals, early access, and priority support.
              </p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  {[                    
                    "All Premium monthly benefits",
                    "Save 32% compared to monthly",
                    "Exclusive annual member offers",
                    "Dedicated account manager",
                    "VIP customer support",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="mb-4 flex items-start gap-2 text-black last:mb-0 dark:text-manatee"
                    >
                      <svg className="mt-1 h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8.25 8.25a1 1 0 01-1.414 0l-4.25-4.25a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-orange-500 transition-all duration-300 dark:text-white dark:hover:text-orange-500 hover:scale-105"
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Get Started
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
