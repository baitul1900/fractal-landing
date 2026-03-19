import React from "react";
import defaultThumbnail from "../../../public/images/blog/blog-thumbnail-one.webp";
import Image from "next/image";

const styles = {
  image: "w-full",
  textBox: "mt-4",
  title:
    "text-[#0f0d14] text-[22px] md:text-[28px] font-semibold leading-7 md:leading-[34px]",
  button:
    "text-[#5d2be9] text-base md:text-lg leading-6 md:leading-[27px] font-semibold mt-2.5 cursor-pointer",
};

export default function BlogCard({ title, thumbnail, ...props }) {
  return (
    <div {...props}>
      <Image
        src={thumbnail || defaultThumbnail}
        alt="Blog Thumbnail"
        className={styles.image}
      />

      <div className={styles.textBox}>
        <h1 className={styles.title}>
          {title || "Top Flutter App Development 2025"}
        </h1>

        <button className={styles.button}>Read More</button>
      </div>
    </div>
  );
}
