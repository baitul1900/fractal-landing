'use client'
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import BadgeBanner from "@/components/ui/BadgeBanner";
import Star from "@/components/icons/Star";

const testimonialSliderData = [
  {
    id: 1,
    description:
      "Thanks to iDeated Lab's work, the client saw an enhanced UX, increased conversions, optimized performance, and higher customer satisfaction. The team managed the project efficiently, ensuring timely delivery of all design milestones. Moreover, they maintained clear communication and responsiveness.",
    src: "/images/testimonial/user.webp",
    name: "Abdur Rouf",
    ownerOf: "Co-Founder at Eigme",
  },
  {
    id: 2,
    description:
      "Thanks to iDeated Lab's work, the client saw an enhanced UX, increased conversions, optimized performance, and higher customer satisfaction. The team managed the project efficiently, ensuring timely delivery of all design milestones. Moreover, they maintained clear communication and responsiveness.",
    src: "/images/testimonial/user.webp",
    name: "Dr Ghali ",
    ownerOf: "Owner at Galih Dermatologist ",
  },
  {
    id: 3,
    description:
      "Thanks to iDeated Lab's work, the client saw an enhanced UX, increased conversions, optimized performance, and higher customer satisfaction. The team managed the project efficiently, ensuring timely delivery of all design milestones. Moreover, they maintained clear communication and responsiveness.",
    src: "/images/testimonial/user.webp",
    name: "Turag Ahmed ",
    ownerOf: "Co Founder at AI Vido",
  },
  {
    id: 4,
    description:
      "Thanks to iDeated Lab's work, the client saw an enhanced UX, increased conversions, optimized performance, and higher customer satisfaction. The team managed the project efficiently, ensuring timely delivery of all design milestones. Moreover, they maintained clear communication and responsiveness.",
    src: "/images/testimonial/user.webp",
    name: "Professor Sultan ",
    ownerOf: "Co-Founder at KLS360",
  },
  {
    id: 5,
    description:
      "Thanks to iDeated Lab's work, the client saw an enhanced UX, increased conversions, optimized performance, and higher customer satisfaction. The team managed the project efficiently, ensuring timely delivery of all design milestones. Moreover, they maintained clear communication and responsiveness.",
    src: "/images/testimonial/user.webp",
    name: "Abdur Rouf",
    ownerOf: "Co-Founder at Eigme",
  },
  {
    id: 6,
    description:
      "Thanks to iDeated Lab's work, the client saw an enhanced UX, increased conversions, optimized performance, and higher customer satisfaction. The team managed the project efficiently, ensuring timely delivery of all design milestones. Moreover, they maintained clear communication and responsiveness.",
    src: "/images/testimonial/user.webp",
    name: "Dr Ghali ",
    ownerOf: "Owner at Galih Dermatologist ",
  },
];

const pageData = {
  title: "What Our Clients Say",
};

export default function Testimonial() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Calculate the horizontal scroll distance
  // "0%" is the start (items aligned left)
  // "-75%" moves the track left by 75% of its width.
  // We need to ensure we show all items.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#F0EDF8] pt-8 md:pt-[10px]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        {/* Header Section */}
        <div className="container mx-auto px-4 md:px-[74px] mb-12 flex flex-col items-center z-10 relative">
          <div className="text-center">
            <BadgeBanner
              text="Testimonials"
              className="border-[#5D2BE9] text-[#5D2BE9]"
            />
          </div>
          <div className="mt-5 md:mt-4 flex justify-center">
            <h2 className="section-header text-center md:w-[960px] w-full md:mt-0 mt-5">
              {pageData.title}
            </h2>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div className="w-full">
          <motion.div style={{ x }} className="flex pl-4 md:pl-[74px]">
            {testimonialSliderData.map((item) => (
              <div
                key={item.id}
                className="shrink-0 w-[350px] md:w-[450px] sm:p-[30px] p-4 bg-[#ffffff] rounded-3xl border border-[#F2EFFA]"
              >
                <div className="flex items-center gap-1 md:mb-2">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <div className="pb-4 border-b border-[#e6e6e6]">
                  <p className="text-[#0f1225] sm:text-lg text-base font-normal leading-7">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 sm:mt-6 mt-4">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-[#0f1225] sm:text-lg text-base font-semibold sm:leading-[30px] leading-[21px]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#595d79]">{item.ownerOf}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
