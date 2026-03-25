import SectionWrapper from "@/components/layouts/SectionWrapper";
import Image from "next/image";
import { motion } from "framer-motion";

const ArtifactsSection = () => {
  const artifacts = [
    {
      title: "Archive 01",
      description: "Linear studies on human anatomy and geometry.",
      image: "/images/home/random-tatto-images.png", // Using existing placeholder
    },
    {
      title: "Archive 02",
      description: "Spiritual narratives through contemporary ink.",
      image: "/images/home/random-tatto-images.png", // Using existing placeholder
    },
    {
      title: "Archive 03",
      description: "Experimental alignment and visual poetry.",
      image: "/images/home/random-tatto-images.png", // Using existing placeholder
    },
  ];

  return (
    <SectionWrapper id="artifacts" className="bg-black py-24 md:py-40">
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-[32px] font-semibold font-[var(--font-founders)] uppercase leading-[38px] tracking-[-1.92px]"
            >
              The artifacts
            </motion.h2>
          </div>
          <div className="md:col-span-12 lg:col-span-5 flex flex-col items-start gap-8 ">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#FFE6D0] text-sm md:text-base font-medium font-[var(--font-founders)] uppercase opacity-60 leading-tight"
            >
              Each piece you see here was not designed to decorate, but to represent.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#FFE6D0] text-sm md:text-base font-medium font-[var(--font-founders)] uppercase opacity-60 leading-tight"
            >
              These works are fragments of personal journeys — moments of transformation, remembrance, rebellion, or awakening translated into visual language.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="#reservation"
                className="group flex items-center gap-2 text-[#FFE3C9] text-base font-normal font-[var(--font-founders)] leading-6 hover:text-[#ffe6d0] transition-colors duration-200 uppercase tracking-[0.2em]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                RESERVATION
              </a>
            </motion.div>
          </div>
        </div>

        {/* Artifact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artifacts.map((artifact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col gap-6"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-[#1A1A1A]">
                <Image
                  src={artifact.image}
                  alt={artifact.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#FFE6D0] text-xl font-medium uppercase tracking-wider">
                  {artifact.title}
                </h3>
                <p className="text-[#FFE6D0] text-sm opacity-50 uppercase leading-relaxed">
                  {artifact.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <a href="#contact" className="group flex items-center gap-4 text-white font-bold uppercase w-fit border-b border-white/20 pb-2 hover:border-white transition-colors">
            <span className="text-sm tracking-[0.2em]">Explore Full Archive</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ArtifactsSection;
