import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";

type SectionHeadingProps = {
  children: React.ReactNode;
  mt?: string | number;
};

export default function SectionHeading({ children, mt }: SectionHeadingProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`text-white text-3xl font-medium capitalize mb-8 text-center ${mt ? `mt-${mt}` : ""}`}
    >
      {children}
    </motion.h2>
  );
}