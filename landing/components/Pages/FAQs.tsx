'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiEnvelope, BiPhone, BiChat, BiSearch } from 'react-icons/bi';
import faqData from '../FAQ/faqData';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gray-300 dark:border-gray-700 py-4 cursor-pointer transition-all duration-300"
      initial={false}
      animate={{ backgroundColor: isOpen ? '#fef3c7' : 'transparent' }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h4 className="text-lg font-semibold text-black dark:text-white mb-2 transition-all duration-300">
        {question}
      </h4>
      {isOpen && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gray-600 dark:text-gray-300 transition-all duration-300 text-sm"
        >
          {answer}
        </motion.p>
      )}
    </motion.div>
  );
};

const ContactFAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqData.filter((faq) =>
    faq.quest.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-black dark:text-white mb-3"
      >
        Contact & FAQs
      </motion.h2>
      <p className="text-base text-gray-600 dark:text-gray-300 mb-8">
        Got a question or need support? We're here to help!
      </p>

      {/* Search Input */}
{/* Search Input */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
  className="mb-10"
>
  <div className="relative w-full max-w-md mx-auto">
    <input
      type="text"
      placeholder="Search FAQs..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full rounded-md border border-gray-300 px-4 py-2 pr-12 text-black dark:bg-blacksection dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300"
    />
    <span className="absolute inset-y-0 right-3 flex items-center justify-center">
      <BiSearch size={20} className="text-gray-400" />
    </span>
  </div>
</motion.div>


      {/* FAQ + Contact Section */}
      <div className="max-w-5xl mx-auto text-left space-y-16">
        
        {/* FAQs */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <FAQItem key={index} question={faq.quest} answer={faq.ans} />
          ))}
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {[
            {
              icon: <BiEnvelope size={48} className="text-orange-500" />,
              title: 'Email Us',
              description: "Send us an email and we'll get back to you within 24 hours.",
              contact: 'support@playnow.ae',
              button: 'Send Email',
            },
            {
              icon: <BiPhone size={48} className="text-orange-500" />,
              title: 'Call Us',
              description: 'Speak directly with our support team.',
              contact: '+971 4 123 4567',
              button: 'Call Now',
            },
            {
              icon: <BiChat size={48} className="text-orange-500" />,
              title: 'Live Chat',
              description: 'Chat with our support team during business hours.',
              contact: null,
              button: 'Start Chat',
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              className="flex flex-col items-center text-center rounded-xl bg-white p-8 shadow-lg dark:bg-blacksection dark:border dark:border-strokedark hover:scale-105 transform transition-all duration-300 hover:shadow-2xl min-h-[360px]"
            >
              <div className="mb-6">{card.icon}</div>
              <h4 className="text-lg font-bold text-black dark:text-white mb-3">
                {card.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-base mb-3">
                {card.description}
              </p>
              {card.contact && (
                <p className="text-black dark:text-white font-medium text-base mb-6">
                  {card.contact}
                </p>
              )}
              <button className="mt-auto px-5 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300 w-full text-base">
                {card.button}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ContactFAQ;
