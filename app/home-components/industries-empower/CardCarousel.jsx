"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useMeasure from "react-use-measure";
import goverment from "../../../public/images/home/goverment.webp";
import healthTeach from "../../../public/images/home/health.webp";
import ecommerce from "../../../public/images/home/ecommerce.webp";
import enterprise from "../../../public/images/home/enterprise.webp";
import edtech from "../../../public/images/home/edTech.webp";
import realEstate from "../../../public/images/home/real-istate.webp";
import logistic from "../../../public/images/home/logistic.webp";
import greenEnergy from "../../../public/images/home/green-energy.webp";
import business from "../../../public/images/home/business.webp";
import software from "../../../public/images/home/software.webp";
import agriculture from "../../../public/images/home/agriculture.webp";
import fashionApparel from "../../../public/images/home/fashion.webp";
import automotive from "../../../public/images/home/automotive.webp";
import sportsFitness from "../../../public/images/home/sports-.webp";
import sustainability from "../../../public/images/home/sustianlibility.webp";
import legalServices from "../../../public/images/home/legal-service.webp";
import greenEnergyAlt from "../../../public/images/home/green-energy.webp";
import wasteManagement from "../../../public/images/home/waste.webp";
import nonProfit from "../../../public/images/home/non-profit.webp";
import Image from "next/image";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 286;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const NUM_PAGES = items.length - CARD_BUFFER + 1;
  const CURRENT_PAGE = Math.round(Math.abs(offset) / CARD_SIZE);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  const jumpTo = (index) => {
    setOffset(-index * CARD_SIZE);
  };

  const handleDragEnd = (event, info) => {
    const { offset: dragOffset } = info;
    const threshold = 50; // Minimum drag distance to trigger slide change

    if (Math.abs(dragOffset.x) > threshold) {
      const direction = dragOffset.x > 0 ? 1 : -1;
      const newOffset = offset + direction * CARD_SIZE;

      // Constrain to valid range
      const maxOffset = 0;
      const minOffset = -(CARD_SIZE * (items.length - CARD_BUFFER));

      const constrainedOffset = Math.max(
        minOffset,
        Math.min(maxOffset, newOffset)
      );
      setOffset(constrainedOffset);
    }
  };

  return (
    <section className="bg-[#0F0D14]" ref={ref}>
      <div className="relative overflow-hidden p-4">
        {/* CARDS */}
        <div className="mx-auto max-w-7xl md:pb-[100px] pb-16">
          <motion.div
            animate={{
              x: offset,
            }}
            drag="x"
            dragConstraints={{
              left: -(CARD_SIZE * (items.length - CARD_BUFFER)),
              right: 0,
            }}
            dragElastic={0}
            onDragEnd={handleDragEnd}
            className="flex cursor-grab active:cursor-grabbing"
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[35%] z-30 rounded-r-xl bg-black/60 p-3 pl-2 text-4xl text-gray-100 backdrop-blur-sm transition-[padding] hover:pl-3 shadow-lg border border-white/30"
            onClick={shiftLeft}
          >
            <ChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[35%] z-30 rounded-l-xl bg-black/60 p-3 pr-2 text-4xl text-gray-100 backdrop-blur-sm transition-[padding] hover:pr-3 shadow-lg border border-white/30"
            onClick={shiftRight}
          >
            <ChevronRight />
          </motion.button>
        </>

        {/* PAGINATION DOTS */}
        <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {Array.from({ length: NUM_PAGES }, (_, i) => (
            <button
              key={i}
              onClick={() => jumpTo(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === CURRENT_PAGE
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  card: "flex-shrink-0 flex flex-col justify-center items-center rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 w-[350px] h-[286px] mr-5",
  image: "object-cover rounded-lg mb-4 mx-auto",
  title: "text-xl font-bold text-gray-900 mb-2",
};

const Card = ({ url, category, title, description, bgColor }) => {
  return (
    <div className={`${styles.card} ${bgColor}`}>
      <Image
        src={url}
        height={84}
        width={84}
        alt={category}
        className={styles.image}
      />
      <div className="">
        <h3 className={styles.title}>{title}</h3>
      </div>
    </div>
  );
};

export default CardCarousel;

const items = [
  {
    id: 1,
    url: goverment,
    category: "Government",
    title: "Government",
    bgColor: "bg-[#FFD4EE]",
  },
  {
    id: 2,
    url: healthTeach,
    category: "Healthcare",
    title: "Health Tech",
    bgColor: "bg-[#D3FEE8]",
  },
  {
    id: 3,
    url: ecommerce,
    category: "E-commerce",
    title: "E-Commerce",
    bgColor: "bg-[#C5E8FF]",
  },
  {
    id: 4,
    url: enterprise,
    category: "Enterprise",
    title: "Enterprise Solutions",
    bgColor: "bg-[#D9D3FF]",
  },
  {
    id: 5,
    url: edtech,
    category: "EdTech",
    title: "EdTech",
    bgColor: "bg-[#FFEECF]",
  },
  {
    id: 6,
    url: realEstate,
    category: "Real Estate",
    title: "Real Estate",
    bgColor: "bg-[#D3FEE8]",
  },
  {
    id: 7,
    url: logistic,
    category: "Logistic",
    title: "Logistic",
    bgColor: "bg-[#FFD4EE]",
  },
  {
    id: 8,
    url: greenEnergy,
    category: "Green Energy",
    title: "Green Energy",
    bgColor: "bg-[#FFEECF]",
  },
  {
    id: 9,
    url: business,
    category: "Business",
    title: "Business",
    bgColor: "bg-[#C5E8FF]",
  },
  {
    id: 10,
    url: software,
    category: "Software",
    title: "Software",
    bgColor: "bg-[#D9D3FF]",
  },
  {
    id: 11,
    url: goverment,
    category: "AR/VR",
    title: "AR/VR",
    bgColor: "bg-[#FFD4EE]",
  },
  {
    id: 12,
    url: agriculture,
    category: "Agriculture",
    title: "Agriculture",
    bgColor: "bg-[#D3FEE8]",
  },
  {
    id: 13,
    url: fashionApparel,
    category: "Fashion & Apparel",
    title: "Fashion & Apparel",
    bgColor: "bg-[#D9D3FF]",
  },
  {
    id: 14,
    url: automotive,
    category: "Automotive",
    title: "Automotive",
    bgColor: "bg-[#C5E8FF]",
  },
  {
    id: 15,
    url: sportsFitness,
    category: "Sports & Fitness",
    title: "Sports & Fitness",
    bgColor: "bg-[#FFEECF]",
  },
  {
    id: 16,
    url: sustainability,
    category: "Sustainability",
    title: "Sustainability",
    bgColor: "bg-[#D3FEE8]",
  },
  {
    id: 17,
    url: legalServices,
    category: "Legal Services",
    title: "Legal Services",
    bgColor: "bg-[#FFD4EE]",
  },
  {
    id: 18,
    url: greenEnergyAlt,
    category: "Green Energy",
    title: "Green Energy",
    bgColor: "bg-[#C5E8FF]",
  },
  {
    id: 19,
    url: wasteManagement,
    category: "Waste Management",
    title: "Waste Management",
    bgColor: "bg-[#D9D3FF]",
  },
  {
    id: 20,
    url: nonProfit,
    category: "Non-Profit",
    title: "Non-Profit",
    bgColor: "bg-[#FFEECF]",
  },
];
