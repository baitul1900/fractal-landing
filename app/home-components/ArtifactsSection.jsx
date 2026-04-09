import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import { pages } from "../../util/route";
import { scrollToId } from "../../util/scroll";

const ArtifactsSection = () => {
  const handleReservation = (e) => {
    e.preventDefault();
    scrollToId(pages.contactUs);
  };
  const artifacts = [
    {
      title: "Archive 01",
      description: "Linear studies on human anatomy and geometry.",
      image: "/images/home/random-tatto-images.webp",
    },
    {
      title: "Archive 02",
      description: "Spiritual narratives through contemporary ink.",
      image: "/images/home/tatto-image.webp",
    },
    {
      title: "Archive 03",
      description: "Experimental alignment and visual poetry.",
      image: "/images/home/random-tatto-images.webp",
    },
    {
      title: "Archive 04",
      description: "Ancestral patterns meeting modern form.",
      image: "/images/home/tatto-image.webp",
    },
    {
      title: "Archive 05",
      description: "The intersection of shadow and substance.",
      image: "/images/home/random-tatto-images.webp",
    },
    {
      title: "Archive 06",
      description: "Mythological echoes in permanent ink.",
      image: "/images/home/tatto-image.webp",
    },
  ];

  const repeatedArtifacts = [
    ...artifacts,
    ...artifacts,
    ...artifacts,
    ...artifacts,
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <>
      <SectionWrapper
        id="artifacts"
        className="bg-black pt-24 md:pt-40 overflow-visible"
      >
        <div className="flex flex-col gap-16 md:gap-32">
          {/* Header stays in container */}
          <div className="container mx-auto px-0 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-12 lg:col-span-7">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-[#FAFAFA] md:text-white text-[32px] font-semibold font-[var(--font-founders)] uppercase leading-[52px] md:leading-[38px] tracking-[-1.92px]"
                >
                  The artifacts
                </motion.h2>
              </div>
              <div className="md:col-span-12 lg:col-span-5 flex flex-col items-start gap-8">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-[#FFE6D0] text-sm md:text-base font-medium font-[var(--font-founders)] uppercase opacity-60 leading-tight"
                >
                  Each piece you see here was not designed to decorate, but to
                  represent.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-[#FFE6D0] text-sm md:text-base font-medium font-[var(--font-founders)] uppercase opacity-60 leading-tight"
                >
                  These works are fragments of personal journeys — moments of
                  transformation, remembrance, rebellion, or awakening
                  translated into visual language.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="pt-4"
                >
                  <a
                    href={pages.contactUs}
                    onClick={handleReservation}
                    className="group flex items-center gap-2 text-[#FFE3C9] text-base font-normal font-[var(--font-founders)] leading-6 hover:text-[#ffe6d0] transition-colors duration-200 uppercase tracking-[0.2em]"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    RESERVATION
                  </a>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Fluid Horizontal Scroll Section */}
        </div>
      </SectionWrapper>

      {/* Fluid Horizontal Scroll Section */}
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-[87vh] flex items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-0 h-[50vh] md:h-[60vh] items-stretch"
          >
            {repeatedArtifacts.map((artifact, index) => {
              const pattern = index % 4;
              let heightClass = "h-[100%]";
              let alignClass = "self-center";

              if (pattern === 1) {
                heightClass = "h-[95%]";
                alignClass = "self-center";
              } else if (pattern === 2) {
                heightClass = "h-[70%]";
                alignClass = "self-end";
              } else if (pattern === 0 || pattern === 3) {
                heightClass = "h-[65%]";
                alignClass = "self-center";
              }

              return (
                <div
                  key={index}
                  className={`relative flex-shrink-0 w-[70vw] md:w-[45vw] lg:w-[25vw] border-r border-black/50 ${heightClass} ${alignClass}`}
                >
                  <Image
                    src={artifact.image}
                    alt={artifact.title}
                    fill
                    className="object-cover opacity-80 transition-opacity duration-500 hover:opacity-100"
                    sizes="(max-width: 768px) 80vw, 33vw"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="w-full overflow-hidden bg-[#FFE6D0] py-3 md:py-4">
        <motion.div
          className="flex whitespace-nowrap w-fit"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {/* We repeat the array sufficiently to always fill the screen and seamlessly loop */}
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex items-center whitespace-nowrap shrink-0"
            >
              {[
                "Munich",
                "Amsterdam",
                "Paris",
                "Zurich",
                "Barcelona",
                "Stuttgart",
              ].map((city, idx) => (
                <span
                  key={`${i}-${idx}`}
                  className="px-6 md:px-12 text-black uppercase font-[var(--font-founders)] text-sm md:text-base font-semibold tracking-widest"
                >
                  {city}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default ArtifactsSection;
