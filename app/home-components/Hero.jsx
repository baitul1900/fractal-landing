import Image from "next/image";
import { Play } from "lucide-react";
import heroTextImage from "../../public/images/home/hero-text-image.png"

// Mockup image placeholders for the 4.9 rating section
const avatar1 = "/images/avatars/avatar1.webp"; // These might not exist yet, I'll use placeholders if needed
const avatar2 = "/images/avatars/avatar2.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full home-hero flex flex-col justify-center overflow-hidden">
      {/* Container to restrict content width but allow background to span full width */}
      <div className="relative w-full container mx-auto px-4 md:px-2 pt-32 pb-20 flex flex-col h-full justify-between min-h-screen">

        {/* Top Right Text (Absolute to the container) */}
        <div className="absolute top-32 md:top-40 right-6 md:right-0 text-right">
          <div className="w-full max-w-[310px] h-auto text-[#ffe6d0] text-sm md:text-base font-medium font-[var(--font-founders)] leading-5 uppercase">
            TATTOOING IS NOT JUST WHAT WE DO,
            THIS IS WHO WE ARE — OUR WORK IS
            CRAFTED WITH PASSION AND PURPOSE.
          </div>
        </div>

        {/* Massive Center Text */}
        <div className="flex flex-col items-center justify-center w-full py-20 mt-auto md:pl-20">

          <Image
            src={heroTextImage}
            alt="Fractal Logo"
            className="w-auto h-auto"
            priority
          />

        </div>

        {/* Bottom Section Layout */}
        <div className="flex flex-col md:flex-row justify-between items-end w-full mt-auto">

          {/* Left Column: Description */}
          <div className="max-w-[320px] text-left mb-10 md:mb-0">
            <div className="w-full max-w-[252px] md:w-[251.06px] justify-start text-[#ffe6d0] text-[22px] md:text-[26px] font-medium font-[var(--font-founders)] uppercase leading-[26px] mb-4">
              WE CREATE BODY ARCHIVES
            </div>
            <div className="self-stretch h-auto justify-start text-[#ffe6d0] text-sm md:text-base font-medium font-[var(--font-founders)] leading-[18px] uppercase opacity-80">
              FRACTAL™ IS A TATTOO CONCEPT BASED IN SEVILLE, SPAIN & TRAVELING AROUND THE WORLD
            </div>
          </div>

          {/* Right Column: Play Reels and Rating */}
          <div className="flex flex-col items-end gap-12">

            {/* Play Reels Button */}

            {/* Rating Section */}
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
  );
};

export default Hero;
