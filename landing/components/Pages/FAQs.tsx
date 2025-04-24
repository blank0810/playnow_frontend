'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiEnvelope, BiPhone, BiChat, BiSearch } from 'react-icons/bi';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-300 dark:border-gray-700 py-4 cursor-pointer transition-all duration-300"
      initial={false}
      animate={{ backgroundColor: isOpen ? '#fef3c7' : 'transparent' }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h4 className="text-lg font-medium text-black dark:text-white transition-all duration-300">
        {question}
      </h4>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-gray-600 dark:text-gray-300 transition-all duration-300"
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

const ContactFAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqData = [
    { question: 'What is PlayNow?', answer: 'PlayNow is a platform that connects users to exclusive sports discounts and merchants.' },
    { question: 'How do I redeem a coupon?', answer: 'Simply click on a coupon and follow the instructions to redeem it either online or in-store.' },
    { question: 'Can I use multiple coupons?', answer: 'It depends on the merchant. Please check the terms for each coupon before redeeming.' },
    { question: 'Is PlayNow free to use?', answer: 'Yes, it is completely free for consumers.' },
    { question: 'How do merchants join?', answer: 'Merchants can register via our business portal and submit their deals for approval.' },
  ];

  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-black dark:text-white mb-4"
      >
        Contact & FAQs
      </motion.h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
        Got a question or need support? We're here to help!
      </p>

      {/* Search Input with Framer Motion */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center mb-10"
      >
        <div className="relative mt-6 w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-4 py-2 pr-10 text-black dark:bg-blacksection dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-500 transition-all duration-300"
          />
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full transition-all duration-300"
          >
            <BiSearch size={16} />
          </motion.span>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto text-left">
        {filteredFAQs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      {/* Contact Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {[
          {
            icon: <BiEnvelope size={40} className="text-orange-500 transition-all duration-300" />,
            title: 'Email Us',
            description: "Send us an email and we'll get back to you within 24 hours.",
            contact: 'support@playnow.ae',
            button: 'Send Email',
          },
          {
            icon: <BiPhone size={40} className="text-orange-500 transition-all duration-300" />,
            title: 'Call Us',
            description: 'Speak directly with our customer support team.',
            contact: '+971 4 123 4567',
            button: 'Call Now',
          },
          {
            icon: <BiChat size={40} className="text-orange-500 transition-all duration-300" />,
            title: 'Live Chat',
            description: 'Chat with our support team during business hours.',
            contact: null,
            button: 'Start Chat',
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between items-center text-center rounded-lg bg-white p-8 w-[300px] h-full min-h-[400px] shadow-md dark:bg-blacksection dark:border dark:border-strokedark hover:scale-105 transition-all duration-300 transform hover:shadow-lg"
          >
            <div className="flex flex-col items-center transition-all duration-300">
              <div className="mb-4">{card.icon}</div>
              <h4 className="text-lg font-semibold text-black dark:text-white mb-10 transition-all duration-300">
                {card.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-10 transition-all duration-300">
                {card.description}
              </p>
              {card.contact && (
                <p className="text-black dark:text-white font-medium mb-10 transition-all duration-300">
                  {card.contact}
                </p>
              )}
            </div>
            <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all duration-300 w-full">
              {card.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactFAQ;
