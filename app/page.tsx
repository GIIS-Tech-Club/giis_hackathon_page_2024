import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Partners from "@/components/partnerships";
import SectionDivider from "@/components/section-divider";
import FAQ from "@/components/faq";
import Timeline from "@/components/timeline";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React from "react";

export default function Hackathon() {
  const images = [
    "/hackathon.jpg",
  ];
  return (

      <main className="flex flex-col items-center antialiased px-4 w-full">
        <Intro />
        <SectionDivider />
        <Partners/>
        <Timeline/>
        <FAQ/>
        <Contact />
      </main>

  );
}