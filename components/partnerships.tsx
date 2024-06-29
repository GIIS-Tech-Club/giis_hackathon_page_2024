'use client';

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";

export default function Partners() {
  const partners = [
    // {
    //   name: "DBS",
    //   logo: "https://asset.brandfetch.io/idvLc1clqp/idyg486QiS.svg",
    //   url: "https://dbs.com/",
    // },
    {
      name: "Hack Club",
      logo: "https://assets.hackclub.com/flag-orpheus-left.svg",
      url: "https://hackclub.com/",
    },
  ];

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px" });

  return (
    <section id="partnerships" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>Our Partners</SectionHeading>
      <div className="flex flex-wrap justify-center gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
            className="bg-white rounded-lg shadow-lg p-6 w-80 h-40 flex items-center justify-center hover:shadow-xl transition-shadow duration-300"
          >
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-full flex items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={100}
                objectFit="contain"
              />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
