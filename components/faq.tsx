"use client";

import React, { RefObject } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import SectionHeading from "./section-heading";

interface FAQData {
  question: string;
  answer: string;
}

const faqData: FAQData[] = [
 {
    question: "Can I join if I’m not a GIIS student?",
    answer: "All high school and middle school students (grades 6-12 or equivalent) and of age 18 and below only are welcome to register."
  },
  {
    question: "Do I need a team in order to participate?",
    answer: "No. Although registering as a team is recommended, solo participants are free to join as well."
  },
  {
    question: "Will I need to have prior coding experience?",
    answer: "No. This hackathon is designed for beginners and experienced programmers alike, and will be a valuable learning opportunity for all."
  },
  {
    question: "Will I need to get my own food and drinks?",
    answer: "No. Meals, snacks and beverages will be provided by us throughout the event for free."
  },
  {
    question: "What should I bring on event day?",
    answer: "We recommend that you bring along your own laptop and any hardware components you will need for your project. However, younger students may use the computers at the school IT lab and need not bring their own laptops."
  }
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  const ref: RefObject<HTMLDivElement> = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4 rounded-lg overflow-hidden"
    >
      <motion.div
        initial={false}
        animate={{ backgroundColor: isOpen ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.05)" }}
      >
        <motion.button
          className="w-full p-4 flex justify-between items-center text-left text-white font-medium"
          onClick={onClick}
        >
          {question}
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <FiMinus /> : <FiPlus />}
          </motion.div>
        </motion.button>
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="p-4 text-gray-300">{answer}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = React.useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const containerRef: RefObject<HTMLDivElement> = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="scroll-mt-28 mb-28">
      <SectionHeading>Frequently Asked Questions</SectionHeading>
      <motion.div 
        ref={containerRef}
        className="max-w-3xl mx-auto mt-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItem === index}
            onClick={() => setOpenItem(openItem === index ? null : index)}
            index={index}
          />
        ))}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </section>
  );
}

export default FAQ;
