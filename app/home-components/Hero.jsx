import Image from "next/image";
import { Play } from "lucide-react";
import heroTextImage from "../../public/images/home/hero-text-image.webp"

// Mockup image placeholders for the 4.9 rating section
const avatar1 = "/images/avatars/avatar1.webp"; // These might not exist yet, I'll use placeholders if needed
const avatar2 = "/images/avatars/avatar2.webp";
import aboutHeroOne from "../../public/images/home/about-hero-1.webp"
import aboutHeroTwo from "../../public/images/home/about-hero-2.webp"
import bgEffect from "../../public/images/home/bg-effect.webp"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });

  const imgY1 = useTransform(aboutScroll, [0, 1], [100, -100]);
  const imgY2 = useTransform(aboutScroll, [0, 1], [150, -150]);
  const aboutRotate = useTransform(aboutScroll, [0, 1], [2, -2]);

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-screen w-full home-hero flex flex-col justify-center overflow-hidden"
      >
        {/* Container to restrict content width but allow background to span full width */}
        <div className="relative w-full container mx-auto px-6 md:px-10 lg:px-6 pt-32 pb-20 flex flex-col h-full md:pt-[355px] min-h-screen">

          {/* Top Right Text (Absolute to the container) */}
          <div className="absolute top-32 md:top-70 right-6 md:right-0 text-right">
            <div className="w-full max-w-[310px] h-auto text-[#ffe6d0] text-sm md:text-base font-medium font-[var(--font-founders)] leading-5 uppercase">
              TATTOOING IS NOT JUST WHAT WE DO,
              THIS IS WHO WE ARE — OUR WORK IS
              CRAFTED WITH PASSION AND PURPOSE.
            </div>
          </div>

          {/* Massive Center Text */}
          <motion.div
            style={{ y: logoY, scale: logoScale, opacity: logoOpacity }}
            className="flex flex-col items-start justify-start w-full py-0  md:pl-[98px] pointer-events-none pr-[123px] mb-[84px]"
          >
            <Image
              src={heroTextImage}
              alt="Fractal Logo"
              className="w-auto h-auto"
              priority
            />
          </motion.div>

          

          {/* Bottom Section Layout */}
          <div className="flex flex-col md:flex-row justify-between items-end w-full mt-10 mb-10">

            {/* Left Column: Description */}
            <div className="max-w-[320px] text-left mb-10 md:mb-0">
              <div className="w-full max-w-[252px] md:w-[251.06px] justify-start text-[#ffe6d0] text-[22px] md:text-[26px] font-medium font-[var(--font-founders)] uppercase leading-[26px] mb-4">
                WE CREATE BODY ARCHIVES
              </div>
              <div className="self-stretch h-auto justify-start text-[#ffe6d0] text-sm md:text-base font-medium font-[var(--font-founders)] leading-[18px] uppercase opacity-80">
                FRACTAL™ IS A TATTOO CONCEPT BASED IN SEVILLE, SPAIN & TRAVELING AROUND THE WORLD
              </div>
            </div>

            {/* Right Column: Rating */}
            <div className="flex flex-col items-end gap-12">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-gray-600 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=A" alt="user" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-gray-500 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=B" alt="user" />
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-[#FFE3C9] text-xl font-bold">4.9</span>
                    <span className="text-yellow-500 text-lg">★</span>
                  </div>
                  <p className="text-[#FFE3C9] text-[10px] font-medium opacity-60 uppercase tracking-tighter">1k+ Satisfied Users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section with Black Background */}
      <section
        ref={aboutRef}
        className="relative bg-black w-full pb-32 overflow-hidden md:mt-[-100px] perspective-1000" id="about"
      >
        <div className="relative w-full container mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-end gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-[500px] text-left"
          >
            <div className="self-stretch justify-center text-white text-[32px] font-semibold font-[var(--font-founders)] uppercase leading-[38px] tracking-[-1.92px] mb-10">
              About US
            </div>
            <div className="self-stretch justify-start text-white text-xl font-normal font-[var(--font-founders)] leading-[30px] mb-12">
              FRACTAL is a contemporary tattoo practice blending narrative, spirituality, and visual art. Based in Seville, Spain, we create unique, story-driven pieces through collaboration and creative freedom.
            </div>
            <a href="/contact" className="group flex items-center gap-3 text-white font-bold uppercase w-fit">
              <div className="pb-1 border-b border-white flex items-center gap-3 transition-all group-hover:gap-5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm tracking-[0.2em]">RESERVATION</span>
              </div>
            </a>
          </motion.div>

          <div className="flex gap-6 w-full md:w-auto">
            <motion.div
              style={{ y: imgY1, rotateZ: aboutRotate }}
              className="relative w-1/2 md:w-[320px] lg:w-[400px] aspect-[4/5] overflow-hidden rounded-sm group/img shadow-2xl"
            >
              <Image
                src={aboutHeroOne}
                alt="Tattoo Session"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 320px, 400px"
                className="object-cover transition-transform duration-700 group-hover/img:scale-110 "
              />
              <div className="absolute inset-0 bg-black/10 group-hover/img:bg-transparent transition-colors duration-500"></div>
            </motion.div>
            <motion.div
              style={{ y: imgY2, rotateZ: aboutRotate }}
              className="relative w-1/2 md:w-[320px] lg:w-[400px] aspect-[4/5] overflow-hidden rounded-sm group/img shadow-2xl"
            >
              <Image
                src={aboutHeroTwo}
                alt="Tattoo Art"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 320px, 400px"
                className="object-cover transition-transform duration-700 group-hover/img:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover/img:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
