"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Subscription = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30 bg-gradient-to-b from-white via-orange-50 to-white dark:from-black dark:via-gray-900 dark:to-black">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `SUBSCRIPTION PLANS`,
                subtitle: `Simple Pricing`,
                description: `From basic access to exclusive benefits, find the right plan for you. Start with our free option or level up to enjoy even more perks and discounts.`,
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full opacity-30">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7 lg:flex-nowrap xl:gap-12.5">
            {[ 
              {
                title: "FREE",
                price: "/lifetime",
                label: "Small Pack",
                description: "Perfect for individuals who want access to basic deals without commitment.",
                features: [
                  "Access to standard deals",
                  "Save up to 30% on select offers",
                  "Email notifications for new deals",
                  "Standard customer support"
                ],
                cta: "Sign up free"
              },
              {
                title: "AED 49",
                price: "/month",
                label: "MOST POPULAR", // This is the new label
                description: "Unlock all benefits including exclusive deals, early access, and priority support.",
                features: [
                  "All Free plan benefits",
                  "Exclusive premium deals",
                  "Save up to 50% on select offers",
                  "Early access to limited-time offers",
                  "No service fees",
                  "Priority customer support"
                ],
                cta: "Get Premium",
                highlight: true
              },
              {
                title: "AED 399 ",
                price: "/year",
                label: "Premium Annual",
                description: "Enjoy the full premium experience with added savings and VIP support.",
                features: [
                  "All Premium monthly benefits",
                  "Save 32% compared to monthly",
                  "Exclusive annual member offers",
                  "Dedicated account manager",
                  "VIP customer support"
                ],
                cta: "Get Annual Plan"
              }
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative flex flex-col rounded-xl border border-stroke bg-white p-7 shadow-lg transition-all transform hover:scale-105 hover:shadow-xl dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5 ${plan.highlight ? 'border-4 border-orange-500' : ''} transition-all duration-300`}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-0 w-full p-1 text-center bg-orange-500 text-white text-lg font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-5.5 text-3xl font-extrabold text-black dark:text-white xl:text-sectiontitle3 transition-all duration-300">
                  {plan.title}
                  <span className="text-xl font-medium text-orange-400 dark:text-manatee ml-1">
                    {plan.price}
                  </span>
                </div>
                <h4 className="mb-2.5 text-lg font-semibold text-black dark:text-white transition-all duration-300">
                  {plan.label}
                </h4>
                <p className="text-base text-body-color dark:text-body-color-dark mb-6 transition-all duration-300">
                  {plan.description}
                </p>
                <div className="flex-1 border-t border-stroke pt-6 dark:border-strokedark">
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-black dark:text-manatee transition-all duration-300"
                      >
                        <svg
                          className="mt-1 h-5 w-5 text-green-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8.25 8.25a1 1 0 01-1.414 0l-4.25-4.25a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <button
                    aria-label="Get the Plan button"
                    className="group/btn inline-flex items-center justify-center gap-2.5 rounded-full border border-orange-400 px-6 py-2 font-medium text-orange-500 transition-all duration-300 hover:bg-orange-400 hover:text-white dark:text-white dark:hover:bg-orange-400"
                  >
                    <span className="duration-300 group-hover/btn:pr-2">
                      {plan.cta}
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
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default Subscription;
