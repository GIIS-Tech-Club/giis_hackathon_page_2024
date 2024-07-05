"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FiCircle } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./section-heading";

const events = [
  { id: 1, title: "Registration Opens", description: "11:59 PM, 8th July" },
  { id: 2, title: "Registrations Close", description: "11:59 PM, 15th July" },
  { id: 3, title: "Opening Ceremony", description: "2:00 PM, 26th July" },
  { id: 4, title: "Closing Ceremony", description: "5:00 PM, 27th July" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.5,
    },
  },
};

const boxVariants = {
  hover: {
    scale: 1.05,
    backgroundColor: "#e0f7fa",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    transition: {
      duration: 0.3,
    },
  },
};

export default function Timeline() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="timeline" className="scroll-mt-28 mb-28">
      <SectionHeading>Timeline</SectionHeading>
      <motion.div
        ref={ref}
        className="max-w-3xl mx-auto mt-8 relative"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 "></div>
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="flex items-center mb-8 relative"
            variants={itemVariants}
          >
            <motion.div
              className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-full relative z-10"
              variants={iconVariants}
              whileHover="hover"
            >
              <FiCircle className="text-white" size={24} />
            </motion.div>
            <motion.div
              className="ml-3 p-4 bg-white shadow-lg rounded-lg"
              variants={boxVariants}
              style={{ width: '300px', height: '100px' }}
              whileHover="hover"
            >
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
