"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LinkPreview } from "./ui/link-preview";
import { Button } from "@/components/ui/moving-border";

export default function Intro() {



  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/hackathon.jpg"
              alt="GIIS TECH CLUB"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-44 w-44 rounded-full object-cover border-[0.35rem] shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 font-medium !leading-[1.5] text-white  sm:text-4xl md:text-6xl lg:text-8xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        HACKATHON X
      </motion.h1>

      <motion.h1
        className="mb-10 mt-4 px-4 font-medium !leading-[1.5] text-white  sm:text-xl md:text-2xl lg:text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>Date : 26/27 JULY 2K24</div>
        <LinkPreview
          url="https://www.google.com/maps/place/Global+Indian+International+School+SMART+Campus+-+Punggol,+Singapore/@1.3904431,103.9117753,15z/data=!4m6!3m5!1s0x31da17bc6f1b5fe7:0x230a6bb5f639557f!8m2!3d1.3904431!4d103.9117753!16s%2Fg%2F11f5htrc2l?entry=ttu"
        >
        <div className="text-white">Venue : Global Indian International School SMART Campus,Singapore</div>
        </LinkPreview>
        <div>Registration Fees : $0 or free</div>       
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >

        <Link href="https://googleforms.com">
          <Button
            style={{ borderRadius: "1.75rem", width: "200px", height: "60px" }} // Increased width and height
            className="bg-gradient-to-br from-[#3A0CA3] via-[#3A0CA3] to-[#3A0CA3] flex items-center justify-center text-white rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          >
            {"Register-->"}
          </Button>
          </Link>

      </motion.div>
    </section>
  );
}
