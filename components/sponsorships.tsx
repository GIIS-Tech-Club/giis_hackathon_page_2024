"use client";
import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";
import { PinContainer } from "@/components/ui/3d-pin";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Sponsors() {
  return (
    <section id="sponsorships" className="scroll-mt-28 mb-28">
      <SectionHeading>Our Sponsors</SectionHeading>
      <div className="flex flex-col items-center space-y-8">
        <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-4 w-80 h-40 relative">
          <a href="https://dbs.com/">
            <Image
              src="https://asset.brandfetch.io/idvLc1clqp/idyg486QiS.svg"
              alt="DBS"
              height={400}
              width={300}
              style={{
                position: 'absolute',
                top: 30,
                left: 10,
                border: 0,
                zIndex: 999,
              }}
            />
          </a>
        </div>
        <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-4 w-80 h-40 relative">
          <a href="https://hackclub.com/">
            <Image
              src="https://assets.hackclub.com/flag-orpheus-left.svg"
              alt="Hack Club"
              height={256}
              width={256}
              style={{
                position: 'absolute',
                top: 0,
                left: 10,
                border: 0,
                zIndex: 999,
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}