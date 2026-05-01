"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import fractal from "../../public/images/home/FRACTAL.webp";
import aboutHeroOne from "../../public/images/home/about-hero-1.webp";
import aboutHeroTwo from "../../public/images/home/about-hero-2.webp";



import { pages } from "../../util/route";
import { scrollToId } from "../../util/scroll";

const MobileHero = () => {
  const handleReservation = (e) => {
    e.preventDefault();
    scrollToId(pages.contactUs);
  };

  return (
    <section className="lg:hidden text-white w-full overflow-hidden">
      {/* Top Hero Section using original .home-hero class */}
      <div className="relative w-full px-6 pt-32 pb-[43px] flex flex-col home-hero !h-auto min-h-[500px] !bg-top">
        {/* Content starts here - index above background */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Top Floating Text */}
          <div className="w-full max-w-[320px] text-[16px] leading-[20px] text-peach uppercase font-medium mb-3 font-[var(--font-founders)]">
            TATTOOING IS NOT JUST WHAT WE DO, THIS IS WHO WE ARE — OUR WORK IS
            CRAFTED WITH PASSION AND PURPOSE.
          </div>

          {/* Big Fractal Logo */}
          <div className="relative mb-4">
            <Image
              src={fractal}
              alt="Fractal Logo"
              className="w-full h-auto"
              priority
            />
            {/* The Cross Icon strictly below the 'F' as per mockup */}
            <div className="absolute -bottom-11 -left-4 w-10 h-10 opacity-90">
              <svg
                viewBox="0 0 70 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M0 34.4063L5.61322 28.8996C6.59814 31.0145 8.3548 32.914 10.8192 33.0845H30.5007C31.3939 33.0205 31.8224 32.3618 31.8864 31.524C31.7564 28.9721 32.0612 26.2433 31.8885 23.7107C31.8416 23.0157 31.4217 21.9839 30.5838 21.9839H14.1705L20.1249 16.264C20.2762 18.0633 21.0394 20.3679 23.1543 20.5342C25.4993 20.7175 28.0831 20.3935 30.4538 20.5342C31.1914 20.4297 31.8182 19.9778 31.8864 19.1911C31.7478 16.6393 32.0633 13.9062 31.8864 11.3757C31.8267 10.525 31.3385 9.65951 30.5604 9.28643C29.5733 8.81316 26.7998 8.84727 25.6635 8.95599C25.5995 8.96239 25.5526 9.00076 25.5675 8.90269L34.5107 0L43.4539 8.90269C43.4689 9.00076 43.422 8.96239 43.358 8.95599C42.2452 8.85153 39.6784 8.82168 38.6743 9.20116C37.7384 9.55505 37.2289 10.4504 37.1351 11.4183C37.2694 13.9147 36.9624 16.5881 37.1351 19.0632C37.1969 19.9479 37.7554 20.4212 38.6082 20.5363C40.9724 20.402 43.5243 20.709 45.8672 20.5363C47.9799 20.3807 48.7751 18.0676 48.8966 16.2662L54.8936 21.986H38.4376C37.7938 21.986 37.1884 22.8515 37.1777 23.457V31.7393C37.2502 32.4663 37.7426 33.0056 38.4803 33.0866H58.247C60.398 32.9182 62.0481 31.4238 63.0544 29.6138C63.1631 29.4177 63.2484 29.1512 63.3549 28.9743C63.3784 28.9338 63.3912 28.889 63.4509 28.9018L69.0193 34.4361L63.4509 40.0003C63.3656 40.0174 63.3997 39.9811 63.3784 39.947C63.1887 39.6251 63.0522 39.2691 62.8497 38.9386C61.8648 37.3269 60.3384 36.0521 58.409 35.824C51.9388 35.8773 45.46 35.7323 38.9898 35.8218C38.896 35.8218 38.8086 35.7835 38.7361 35.7856C37.8748 35.809 37.2758 36.2951 37.1777 37.1649V45.4046C37.1756 46.0548 37.7853 46.9182 38.4781 46.9182H54.8914L48.8945 52.638C48.7794 50.8686 47.9906 48.532 45.9077 48.3679C43.5605 48.1846 40.9767 48.5107 38.6061 48.3679C37.7533 48.4638 37.1948 48.9648 37.1329 49.841C36.9603 52.3161 37.2672 54.9895 37.1329 57.4859C37.3013 58.9612 38.137 59.7308 39.5888 59.8949C40.8275 60.0356 42.1066 59.9909 43.3452 59.9376C43.4092 59.9354 43.4689 59.9077 43.4518 60.0015L34.5086 68.9042L25.5654 60.0015C25.5483 59.9098 25.6059 59.9354 25.672 59.9376C26.9788 59.993 28.5543 60.0655 29.8462 59.8416C31.0145 59.6391 31.8033 58.7053 31.8864 57.5285C32.0633 54.998 31.7478 52.265 31.8864 49.7131C31.8203 48.9478 31.2234 48.4766 30.4964 48.37C28.0981 48.5107 25.4844 48.1824 23.1116 48.37C21.048 48.532 20.257 50.8899 20.1249 52.6402L14.1705 46.9203H30.5412C31.3534 46.9203 31.8949 45.9162 31.8885 45.1935C31.7436 42.6481 32.0761 39.9022 31.8864 37.3802C31.816 36.4486 31.3065 35.8154 30.328 35.7877C30.2555 35.7877 30.1681 35.8261 30.0743 35.824C23.6446 35.7302 17.2063 35.89 10.7766 35.8197C8.33348 36.0073 6.58109 37.9004 5.61322 40.0046L0 34.4915V34.4063Z"
                  fill="#FFE6D0"
                />
              </svg>
            </div>
          </div>

          {/* Heading Section */}
          <div className="mt-16 mb-12">
            <h2 className="text-[22px] font-medium leading-[24px] uppercase text-peach mb-4 font-[var(--font-founders)]">
              WE CREATE BODY <br /> ARCHIVES
            </h2>
            <p className="text-[16px] leading-[18px] text-peach uppercase font-medium max-w-[280px] font-[var(--font-founders)]">
              FRACTAL™ IS A TATTOO CONCEPT BASED IN SEVILLE, SPAIN & TRAVELING
              AROUND THE WORLD
            </p>
          </div>

        </div>
      </div>

      {/* About Us & Reservation Section */}
      <div className="px-6 pb-1 flex flex-col gap-10">
        <div>
          <h3 className="text-[26px] font-medium uppercase mb-2 tracking-[-1.92px] leading-[30px] text-white font-[var(--font-founders)]">
            ABOUT US
          </h3>
          <p className="text-[16px] leading-[20px] font-normal text-white mb-3 font-[var(--font-founders)]">
            FRACTAL is a contemporary tattoo practice blending narrative,
            spirituality, and visual art. Based in Seville, Spain, we create
            unique, story-driven pieces through collaboration and creative
            freedom.
          </p>

          <a
            href={pages.contactUs}
            onClick={handleReservation}
            className="w-full bg-[#FFE6D0] text-black rounded-full py-2 flex items-center justify-center gap-3 font-normal uppercase text-[16px] leading-[24px] tracking-wide font-[var(--font-founders)]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5795 3.22123L4.11651 8.71023C4.0491 8.73264 3.99011 8.77504 3.94737 8.83178C3.90464 8.88853 3.88018 8.95693 3.87725 9.02791C3.87432 9.09888 3.89306 9.16907 3.93097 9.22914C3.96888 9.28922 4.02418 9.33633 4.08951 9.36423L10.1395 11.9572C10.1712 11.971 10.2059 11.9762 10.2403 11.9726C10.2746 11.9689 10.3074 11.9564 10.3355 11.9362L16.2665 7.69823C16.4505 7.56823 16.6765 7.79423 16.5465 7.97823L12.3085 13.9092C12.2887 13.9373 12.2765 13.97 12.273 14.0041C12.2695 14.0383 12.2748 14.0727 12.2885 14.1042L14.8805 20.1542C14.9083 20.2196 14.9553 20.2749 15.0154 20.3129C15.0754 20.3509 15.1455 20.3698 15.2165 20.3669C15.2875 20.3641 15.3559 20.3398 15.4127 20.2971C15.4695 20.2545 15.512 20.1956 15.5345 20.1282L21.0235 3.66423C21.0442 3.60252 21.0472 3.53627 21.0323 3.47293C21.0174 3.40958 20.9851 3.35165 20.9391 3.30564C20.8931 3.25962 20.8351 3.22735 20.7718 3.21244C20.7085 3.19753 20.6412 3.20057 20.5795 3.22123Z"
                fill="black"
              />
            </svg>
            RESERVATION
          </a>
        </div>

        {/* Images List */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full aspect-[2/3] rounded-sm overflow-hidden">
            <Image
              src={aboutHeroOne}
              alt="Tattoo Session"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[2/3] rounded-sm overflow-hidden">
            <Image
              src={aboutHeroTwo}
              alt="Tattoo Art"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHero;
