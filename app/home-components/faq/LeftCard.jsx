import React from "react";
import joinedImage from "../../../public/images/home/pill-join-image.webp";
import Image from "next/image";

const styles = {
  card: "left-faq-card md:h-[258px] h-full rounded-2xl mt-4.5 md:mt-10 px-5 py-7 flex flex-col justify-start items-start md:gap-4 gap-2",
  image: "object-cover",
  title:
    " text-[#f8f7fc] text-lg md:text-2xl font-semibold leaidng-normal md:leading-[30px] mt-1",
  button:
    "px-6 py-3 bg-[#b7e92b] rounded-[100px] inline-flex justify-center items-center gap-3 ",
  buttonText: "justify-start text-[#0e121d] text-base font-semibold  leading-6",
};

export default function LeftCard() {
  return (
    <div className={styles.card}>
      <Image src={joinedImage} alt="Pill Join Image" className={styles.image} />

      <h6 className={styles.title}>Find the right solution for you now</h6>

      <button
        data-property-1="fill"
        data-show-icon="false"
        className={styles.button}
      >
        <div className={styles.buttonText}>Book a free call </div>
      </button>
    </div>
  );
}
