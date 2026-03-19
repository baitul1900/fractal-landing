
import React from "react";
import Image from "next/image";
import { pages } from "@/util/route";

// Placeholder images for the tattoo work
const tattooImage1 = "/images/portfolio/portfolio.webp"; 
const tattooImage2 = "/images/portfolio/project-mockup.webp";

export default function AboutHome() {
  return (
    <section className="bg-black text-[#FFE3C9] py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* Left Content Side */}
          <div className="flex flex-col pt-10">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 font-[var(--font-founders)] tracking-tight">
              ABOUT US
            </h2>
            
            <div className="max-w-[480px]">
              <p className="text-sm md:text-base font-normal leading-relaxed opacity-90 mb-10 font-[var(--font-founders)] uppercase tracking-wide">
                FRACTAL is a contemporary tattoo practice blending narrative, spirituality, and visual art. 
                Based in Seville, Spain, we create unique, story-driven pieces through collaboration and creative freedom.
              </p>
              
              <a 
                href={pages.contactUs}
                className="inline-flex items-center gap-2 group hover:opacity-80 transition-opacity"
              >
                <svg 
                  width="14" height="14" viewBox="0 0 24 24" fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="transform rotate-[-45deg] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                >
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="#FFE3C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-xs font-bold uppercase tracking-widest border-b border-[#FFE3C9]/30 pb-1">
                  RESERVATION
                </span>
              </a>
            </div>
          </div>

          {/* Right Images Side */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="aspect-[3/4] relative rounded-sm overflow-hidden bg-zinc-900">
               {/* Using standard img for now to handle potential missing files safely */}
               <img 
                 src={tattooImage1} 
                 alt="Tattoo Work 1" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
            <div className="aspect-[3/4] relative rounded-sm overflow-hidden bg-zinc-900 mt-12 md:mt-20">
               <img 
                 src={tattooImage2} 
                 alt="Tattoo Work 2" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
