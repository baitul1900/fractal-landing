import Image from "next/image";
import React from "react";
import lastSegmentImage from "../../public/images/logo/ideatedlab-image.webp";
import bdImage from "../../public/images/logo/bd.webp";
import ukImage from "../../public/images/logo/uk.webp";

const cardData = [
  {
    id: 1,
    icon: bdImage, // Add icon path or component
    title: "Bangladesh",
    address: "V93C+5C6, Shantahar Rd, Bogra, Bangladesh",
    phone: "+ 88 01712 271138",
  },
  {
    id: 2,
    icon: ukImage, // Add icon path or component
    title: "United Kingdom ",
    address: "124-128 City road London England EC1V 2NX",
    phone: "+44 7723 783857",
  },
];

const styles = {
  wrapper: "md:px-20 px-4 md:py-10 py-6 bg-[#27242e]/50 backdrop-blur-[50px]",
  cardWrapper: "grid grid-cols-1 md:grid-cols-2 gap-6",
};

export default function LastSegmentedFooter() {
  return (
    <div>
      <Image src={lastSegmentImage} alt="Ideatedlab Last Segment Footer" />

      <div className={styles.wrapper}>
        <Card />
      </div>
    </div>
  );
}

const Card = ({ icon, title, address, phone }) => (
  <div className={styles.cardWrapper}>
    {cardData.map((card) => (
      <div key={card.id} className="flex items-start gap-4">
        <div>
          <Image src={card.icon} alt={`${card.title} Icon`} />
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg mb-2">
            {card.title}
          </h3>
          <p className="text-[#BAB3CE] text-sm mb-1">{card.address}</p>
          <p className="text-[#BAB3CE] text-sm">{card.phone}</p>
        </div>
      </div>
    ))}
  </div>
);
