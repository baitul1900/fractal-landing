import Image from "next/image";
import aboutHeroOne from "../../public/images/home/about-hero-1.webp";
import aboutHeroTwo from "../../public/images/home/about-hero-2.webp";
import fractal from "../../public/images/home/FRACTAL.webp";
import bigIcon from "../../public/images/home/hero-big-text-logo.webp";
import heroTextImage from "../../public/images/home/hero-text-image.webp";



import { motion } from "framer-motion";
import { useRef } from "react";

import MobileHero from "./MobileHero";

import { pages } from "../../util/route";
import { scrollToId } from "../../util/scroll";

const Hero = () => {



  const handleReservation = (e) => {
    e.preventDefault();
    scrollToId(pages.contactUs);
  };






  return (
    <>
      {/* Mobile Version Rendering */}
      <MobileHero />

      {/* Desktop Version Rendering (untouched) */}
      <div className="hidden lg:block">
        <section
          className="relative min-h-screen w-full home-hero flex flex-col justify-center overflow-hidden"
        >
          {/* Container to restrict content width but allow background to span full width */}
          <div className="relative w-full container mx-auto px-6 md:px-10 lg:px-6 pt-32 pb-20 flex flex-col h-full md:pt-[355px] min-h-screen">
            {/* Top Right Text (Absolute to the container) */}
            <div className="absolute top-32 md:top-70 right-6 md:right-0 text-left">
              <div className="w-full max-w-[310px] h-auto text-peach text-sm md:text-base font-medium font-[var(--font-founders)] leading-5 uppercase">
                TATTOOING IS NOT JUST WHAT WE DO, THIS IS WHO WE ARE — OUR WORK IS
                CRAFTED WITH PASSION AND PURPOSE.
              </div>
            </div>

            {/* Massive Center Text */}
            <div
              className="flex flex-col items-start justify-start w-full py-0  md:pl-[98px] pointer-events-none pr-[123px] mb-[84px]"
            >
              <Image
                src={fractal}
                alt="Fractal Logo"
                className="w-auto h-auto"
                priority
              />
            </div>

            <div className="flex justify-between">
              <div className="absolute top-[43.2%] left-[7%] transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="69"
                  viewBox="0 0 70 69"
                  fill="none"
                >
                  <title>Icon</title>
                  <path
                    d="M0 34.4063L5.61322 28.8996C6.59814 31.0145 8.3548 32.914 10.8192 33.0845H30.5007C31.3939 33.0205 31.8224 32.3618 31.8864 31.524C31.7564 28.9721 32.0612 26.2433 31.8885 23.7107C31.8416 23.0157 31.4217 21.9839 30.5838 21.9839H14.1705L20.1249 16.264C20.2762 18.0633 21.0394 20.3679 23.1543 20.5342C25.4993 20.7175 28.0831 20.3935 30.4538 20.5342C31.1914 20.4297 31.8182 19.9778 31.8864 19.1911C31.7478 16.6393 32.0633 13.9062 31.8864 11.3757C31.8267 10.525 31.3385 9.65951 30.5604 9.28643C29.5733 8.81316 26.7998 8.84727 25.6635 8.95599C25.5995 8.96239 25.5526 9.00076 25.5675 8.90269L34.5107 0L43.4539 8.90269C43.4689 9.00076 43.422 8.96239 43.358 8.95599C42.2452 8.85153 39.6784 8.82168 38.6743 9.20116C37.7384 9.55505 37.2289 10.4504 37.1351 11.4183C37.2694 13.9147 36.9624 16.5881 37.1351 19.0632C37.1969 19.9479 37.7554 20.4212 38.6082 20.5363C40.9724 20.402 43.5243 20.709 45.8672 20.5363C47.9799 20.3807 48.7751 18.0676 48.8966 16.2662L54.8936 21.986H38.4376C37.7938 21.986 37.1884 22.8515 37.1777 23.457V31.7393C37.2502 32.4663 37.7426 33.0056 38.4803 33.0866H58.247C60.398 32.9182 62.0481 31.4238 63.0544 29.6138C63.1631 29.4177 63.2484 29.1512 63.3549 28.9743C63.3784 28.9338 63.3912 28.889 63.4509 28.9018L69.0193 34.4361L63.4509 40.0003C63.3656 40.0174 63.3997 39.9811 63.3784 39.947C63.1887 39.6251 63.0522 39.2691 62.8497 38.9386C61.8648 37.3269 60.3384 36.0521 58.409 35.824C51.9388 35.8773 45.46 35.7323 38.9898 35.8218C38.896 35.8218 38.8086 35.7835 38.7361 35.7856C37.8748 35.809 37.2758 36.2951 37.1777 37.1649V45.4046C37.1756 46.0548 37.7853 46.9182 38.4781 46.9182H54.8914L48.8945 52.638C48.7794 50.8686 47.9906 48.532 45.9077 48.3679C43.5605 48.1846 40.9767 48.5107 38.6061 48.3679C37.7533 48.4638 37.1948 48.9648 37.1329 49.841C36.9603 52.3161 37.2672 54.9895 37.1329 57.4859C37.3013 58.9612 38.137 59.7308 39.5888 59.8949C40.8275 60.0356 42.1066 59.9909 43.3452 59.9376C43.4092 59.9354 43.4689 59.9077 43.4518 60.0015L34.5086 68.9042L25.5654 60.0015C25.5483 59.9098 25.6059 59.9354 25.672 59.9376C26.9788 59.993 28.5543 60.0655 29.8462 59.8416C31.0145 59.6391 31.8033 58.7053 31.8864 57.5285C32.0633 54.998 31.7478 52.265 31.8864 49.7131C31.8203 48.9478 31.2234 48.4766 30.4964 48.37C28.0981 48.5107 25.4844 48.1824 23.1116 48.37C21.048 48.532 20.257 50.8899 20.1249 52.6402L14.1705 46.9203H30.5412C31.3534 46.9203 31.8949 45.9162 31.8885 45.1935C31.7436 42.6481 32.0761 39.9022 31.8864 37.3802C31.816 36.4486 31.3065 35.8154 30.328 35.7877C30.2555 35.7877 30.1681 35.8261 30.0743 35.824C23.6446 35.7302 17.2063 35.89 10.7766 35.8197C8.33348 36.0073 6.58109 37.9004 5.61322 40.0046L0 34.4915V34.4063Z"
                    fill="#FFE6D0"
                  />
                </svg>
              </div>

            </div>

            {/* Bottom Section Layout */}
            <div className="flex flex-col md:flex-row justify-between items-end w-full mt-[84px] mb-10">
              {/* Left Column: Description */}
              <div className="max-w-[320px] text-left mb-10 md:mb-0">
                <div className="w-full max-w-[252px] md:w-[251.06px] justify-start text-[#ffe6d0] text-[22px] md:text-[26px] font-medium font-[var(--font-founders)] uppercase leading-[26px] mb-4">
                  WE CREATE BODY ARCHIVES
                </div>
                <div className="self-stretch h-auto justify-start text-[#ffe6d0] text-sm md:text-base font-medium font-[var(--font-founders)] leading-[18px] uppercase opacity-80">
                  FRACTAL™ IS A TATTOO CONCEPT BASED IN SEVILLE, SPAIN & TRAVELING
                  AROUND THE WORLD
                </div>
              </div>

              {/* Right Column: Rating */}
             
            </div>
          </div>
        </section>

        {/* About Us Section with Black Background */}
        <section
          className="relative bg-black w-full pb-32 overflow-hidden md:mt-[-100px] perspective-1000"
          id="about"
        >
          <div className="relative w-full container mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-[500px] text-left"
            >
              <h1 className="self-stretch justify-center  text-white text-[32px] font-semibold font-[var(--font-founders)] uppercase leading-[38px] tracking-[-1.92px] mb-10">
                About US
              </h1>
              <p className="self-stretch justify-start text-white text-xl font-normal font-[var(--font-founders)] leading-[30px] mb-12">
                FRACTAL is a contemporary tattoo practice blending narrative,
                spirituality, and visual art. Based in Seville, Spain, we create
                unique, story-driven pieces through collaboration and creative
                freedom.
              </p>
              <a
                href={pages.contactUs}
                onClick={handleReservation}
                className="group flex items-center gap-3 text-white font-bold uppercase w-fit"
              >
                <div className="pb-1 border-b border-white flex items-center gap-3 transition-all group-hover:gap-5">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300"
                  >
                    <title>Arrow</title>
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm tracking-[0.2em]">RESERVATION</span>
                </div>
              </a>
            </motion.div>

            <div className="flex gap-6 w-full md:w-auto items-start">
              <div
                className="relative w-1/2 md:w-[320px] lg:w-[400px] aspect-[2/3] overflow-hidden rounded-sm group/img shadow-2xl"
              >
                <Image
                  src={aboutHeroOne}
                  alt="Tattoo Session"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 320px, 800px"
                  className="object-cover transition-transform duration-700 group-hover/img:scale-110 "
                />
                <div className="absolute inset-0 bg-black/10 group-hover/img:bg-transparent transition-colors duration-500"></div>
              </div>
              <div
                className="relative w-1/2 md:w-[320px] lg:w-[400px] aspect-[2/3] overflow-hidden rounded-sm group/img shadow-2xl"
              >
                <Image
                  src={aboutHeroTwo}
                  alt="Tattoo Art"
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 320px, 800px"
                  className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover/img:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
          </div>
        </section>

      </div>


    </>
  );
};

export default Hero;
