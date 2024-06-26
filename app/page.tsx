import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Sponsors from "@/components/sponsorships";
import SectionDivider from "@/components/section-divider";
import FAQ from "@/components/faq";
import EventFlow from "@/components/event-flow";
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
        <Sponsors/>
        <EventFlow/>
        <FAQ/>
        <Contact />
      </main>

  );
}