"use client";

import { Button } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LinkPreview } from "./ui/link-preview";

export default function Intro() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="flex items-center justify-center"
        variants={itemVariants}
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6,
            }}
          >
            <Image
              src="/hackathon_center.jpg"
              alt="GIIS TECH CLUB"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-44 w-44 rounded-full object-cover border-[0.35rem] border-purple-500 shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.h1
        className="mb-10 mt-4 px-4 font-bold !leading-[1.5] text-white sm:text-4xl md:text-6xl lg:text-8xl"
        variants={itemVariants}
      >
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">HACKATHON X</span>
      </motion.h1>

      <motion.div
        className="mb-10 mt-4 px-4 font-medium !leading-[1.5] text-white sm:text-xl md:text-2xl lg:text-xl"
        variants={itemVariants}
      >
        <motion.div 
          className="mb-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Date: <span className="text-purple-400">26/27 JULY 2K24</span>
        </motion.div>
        <LinkPreview url="https://www.google.com/maps/place/Global+Indian+International+School+SMART+Campus+-+Punggol,+Singapore/@1.3904431,103.9117753,15z/data=!4m6!3m5!1s0x31da17bc6f1b5fe7:0x230a6bb5f639557f!8m2!3d1.3904431!4d103.9117753!16s%2Fg%2F11f5htrc2l?entry=ttu">
          <motion.div 
            className="text-white mb-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Venue: <span className="text-purple-400">Global Indian International School SMART Campus, Singapore</span>
          </motion.div>
        </LinkPreview>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Registration Fees: <span className="text-green-400">$0 (Free)</span>
        </motion.div>       
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        variants={itemVariants}
      >
        <Link href="https://forms.gle/DGP9nh2EgdDDR6uv5">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              style={{ borderRadius: "1.75rem", width: "200px", height: "60px" }}
              className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center text-white rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer shadow-lg hover:shadow-purple-500/50"
            >
              Register Now →
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </motion.section>
  );
}