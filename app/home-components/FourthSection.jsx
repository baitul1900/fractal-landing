"use client";
import React, { useRef } from "react";
import Image from "next/image";
import artistImage from "../../public/images/home/photo_fractal-dua.webp";
import { motion, useScroll, useTransform } from "framer-motion";

const TattooHeading = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      <div 
        className="absolute inset-0 text-transparent pointer-events-none" 
        style={{ WebkitTextStroke: "1px rgba(0,0,0,0.4)" }}
      >
        {children}
      </div>
      <motion.div
        className="text-black"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const TattooText = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.2, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const FourthSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yLeftText = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yImage = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yRightText = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      id="artist-team"
      ref={containerRef}
      className="w-full h-auto bg-[#ABA59F] flex justify-center items-center  md:pt-[98px] overflow-hidden"
    >
      <div 
        className="container mx-auto px-6 md:px-10 lg:px-16 h-full pb-10 md:pb-20 pb-safe grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        <motion.div 
          style={{ y: yLeftText }}
          className="col-span-12 md:col-span-4 pt-20"
        >
          <TattooHeading className="text-4xl font-(--font-founders-grotesk) uppercase leading-0 text-end font-medium">
            Eliezer Costa
          </TattooHeading>
          <TattooHeading className="text-4xl font-(--font-founders-grotesk) uppercase leading-[52px] text-end font-light">
            MANAGER & DESIGNER
          </TattooHeading>
          <div className="w-[485px] md:mt-1.5 text-end ml-auto">
            <TattooText className="text-black text-xl font-normal font-(--font-founders-grotesk) leading-7">
              With a background in graphic design and photography, Eliezer leads
              the creative direction of the project. He shapes the visual
              language, refines the narrative structure, and guides the
              conceptual development behind each piece.
              <br />
              <br />
              His focus lies in communication — understanding people, listening
              carefully, and translating inner processes into coherent symbolic
              compositions. He oversees the brand, the dialogue, and the
              strategic framework that sustains the project.
            </TattooText>
          </div>

          <div className="flex justify-end">
            <TattooText className="w-[110px] mt-[74.84px] h-4 justify-start text-black text-xl font-normal font-(--font-founders-grotesk) leading-6 underline">
              @ELICOSTART
            </TattooText>
          </div>
        </motion.div>
        <motion.div 
          style={{ y: yImage }}
          className="col-span-12 md:col-span-4"
        >
          <Image
            src={artistImage}
            alt="Artist"
            width={400}
            height={500}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <motion.div 
          style={{ y: yRightText }}
          className="col-span-12 md:col-span-4 self-end pb-10 md:pb-20"
        >
          <TattooHeading className="text-4xl font-(--font-founders-grotesk) uppercase leading-0 text-start font-medium">
            NANOOK
          </TattooHeading>
          <TattooHeading className="text-4xl font-(--font-founders-grotesk) uppercase leading-[52px] text-start font-light">
            TATTOO ARTIST
          </TattooHeading>
          <div className="md:mt-1.5 text-start">
            <TattooText className="text-black text-xl font-normal font-(--font-founders-grotesk) leading-7">
              With more than a decade of experience, Nanook explored multiple
              styles before refining his own language within the craft. His
              journey through design, drawing, music, and sculpture informs his
              technical sensitivity and artistic precision.
              <br />
              <br />
              He is responsible for refining and perfecting the execution of
              each piece — ensuring that concept and craftsmanship remain
              inseparable.
            </TattooText>
          </div>

          <div className="flex justify-start">
            <TattooText className="mt-[74.84px] text-black text-xl font-normal font-(--font-founders-grotesk) leading-6 underline">
              @NANOOK.TTT
            </TattooText>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FourthSection;
