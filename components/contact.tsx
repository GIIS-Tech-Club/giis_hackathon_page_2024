"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "GIIS Tech Club",
    designation: "Organising Team",
    image: "/tech_club.jpg",
    email: "support@giistech.club"
  }
];

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact us</SectionHeading>
      <motion.div 
        className="text-white flex flex-col items-center justify-center mb-10 text-center"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          For any further queries, contact us via our{" "}
          <motion.a
            href="https://www.instagram.com/giistechclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Instagram page
          </motion.a>{" "}
          and for any further clarifications{" "}
          <motion.a
            href="mailto:support@giistech.club"
            className="text-blue-400 hover:text-blue-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            email
          </motion.a>
        </motion.p>
        <motion.span 
          className="mt-6 block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.a
            href="mailto:support@giistech.club"
            className="inline-block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatedTooltip items={people} />
          </motion.a>
        </motion.span>
      </motion.div>
    </motion.section>
  );
}