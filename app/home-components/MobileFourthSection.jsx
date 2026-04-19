"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import artistImage from "../../public/images/home/photo_fractal-dua.webp";

const MobileFourthSection = () => {
  return (
    <section className="lg:hidden w-full bg-[#DDD2C4] py-16 px-6 flex flex-col items-center">
      {/* Eliezer Costa Section */}
      <div className="w-full flex flex-col mb-12">
        <h2 className="text-[32px] font-medium font-[var(--font-founders)] uppercase  text-black flex flex-col ">
          <span className="text-end leading-[0px]">ELIEZER COSTA</span>
          <span className="font-light text-end -mt-1 opacity-70">MANAGER & DESIGNER</span>
        </h2>

        <p className="mt-6 text-black text-[20px] font-normal font-[var(--font-founders)] leading-[24px]">
          With a background in graphic design and photography, Eliezer leads
          the creative direction of the project. He shapes the visual language,
          refines the narrative structure, and guides the conceptual development
          behind each piece.
          <br /><br />
          His focus lies in communication — understanding people, listening
          carefully, and translating inner processes into coherent symbolic
          compositions. He oversees the brand, the dialogue, and the strategic
          framework that sustains the project.
        </p>

        <a
          href="https://instagram.com/elicostart"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 self-center w-full max-w-[320px] bg-[#FFE6D0] text-black rounded-full py-[11px] flex items-center justify-center gap-2 text-base font-normal uppercase tracking-wide"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          @ELICOSTART
        </a>
      </div>

      {/* Center Image */}
      <div className="w-full aspect-[4/5] relative mb-12 rounded-sm overflow-hidden">
        <Image
          src={artistImage}
          alt="Artists"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Nanook Section */}
      <div className="w-full flex flex-col">
        <h2 className="text-[32px] font-medium font-[var(--font-founders)] uppercase text-black flex flex-col">
          <span className="leading-[0px]">NANOOK</span>
          <span className="font-light -mt-1 opacity-70">TATTOO ARTIST</span>
        </h2>

        <p className="mt-6 text-black text-[20px] font-normal font-[var(--font-founders)] leading-[24px]">
          With more than a decade of experience, Nanook explored multiple styles
          before refining his own language within the craft. His journey through
          design, drawing, music, and sculpture informs his technical sensitivity
          and artistic precision.
          <br /><br />
          He is responsible for refining and perfecting the execution of each
          piece — ensuring that concept and craftsmanship remain inseparable.
        </p>

        <a
          href="https://instagram.com/nanook.ttt"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 self-center w-full max-w-[320px] bg-[#FFE6D0] text-black rounded-full py-[11px] flex items-center justify-center gap-2 text-base font-normal uppercase tracking-wide"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          @NANOOK.TTT
        </a>
      </div>
    </section>
  );
};

export default MobileFourthSection;
