"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo.png"
                    alt="Logo"
                    className="dark:hidden"
                  />
                </a>

                <p className="mb-10 mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                  contact
                </p>
                <a
                  href="#"
                  className="text-itemtitle font-medium text-black dark:text-white"
                >
                  enan@solid.com
                </a>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                {/* Quick Links */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Quick Links
                  </h4>
                  <ul>
                    {["Home", "Coupons", "Merchants", "Pricing"].map((item) => (
                      <li key={item}>
                        <a href="#" className="mb-3 inline-block hover:text-primary">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Support */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Support
                  </h4>
                  <ul>
                    {["Company", "Admins", "Our Blog", "Contact Us"].map((item) => (
                      <li key={item}>
                        <a href="#" className="mb-3 inline-block hover:text-primary">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Newsletter */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Newsletter
                  </h4>
                  <p className="mb-4 w-[90%]">Subscribe to receive future updates</p>
                  <form action="#">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Email address"
                        className="w-full rounded-full border border-stroke px-6 py-3 shadow-solid-11 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                      />
                      <button
                        aria-label="signup to newsletter"
                        className="absolute right-0 p-4"
                      >
                        <svg
                          className="fill-[#757693] hover:fill-primary dark:fill-white"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M3.1175 1.17318L18.5025 9.63484..." />
                        </svg>
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
            <motion.div
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li><a href="#" className="hover:text-primary">English</a></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Support</a></li>
              </ul>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>&copy; {new Date().getFullYear()} Enan. All rights reserved</p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61567354175981"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/logo/fb.png"
                      alt="Facebook"
                      width={24}
                      height={24}
                      className="transition-transform duration-300 hover:scale-110"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/playnow.ae/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/logo/ig.png"
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="transition-transform duration-300 hover:scale-110"
                    />
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
