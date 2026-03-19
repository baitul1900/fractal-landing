import SectionWrapper from "@/components/layouts/SectionWrapper";
import BadgeBanner from "@/components/ui/BadgeBanner";
import React from "react";
import thumbnailOne from "../../../public/images/blog/blog-thumbnail-one.webp";
import thumbnailTwo from "../../../public/images/blog/blog-thumbnail-two.webp";
import thumbnailThree from "../../../public/images/blog/blog-thumbnail-three.webp";
import BlogCard from "./BlogCard";
import Button from "@/components/ui/Button";

const styles = {
  sectionWrapper: "bg-[#F0EDF8] md:pb-[100px] pb-8",
  badgeContainer: "text-center",
  badgeBanner: "border-[#5D2BE9] text-[#5D2BE9]",
  titleContainer: "mt-5 md:mt-4 flex justify-center",
  title:
    "text-[#0E121D] font-bold text-3xl xl:text-6xl md:leading-[1.2] leading-normal font-['Bricolage_Grotesque'] text-center md:w-[960px] w-full md:mt-0 mt-5",
  grid: "grid grid-cols-1 md:grid-cols-3 md:gap-4 md:mt-10",
  blogItem: "mb-8 md:mb-12",
  buttonContainer: "flex justify-center",
  button: "mt-8 md:mt-12",
};

const pageData = {
  title: "Latest Blog & News ",
};

const blogData = [
  {
    id: 1,
    title: "Top Flutter App Development 2025",
    thumbnail: thumbnailOne,
  },
  {
    id: 2,
    title: "Top Flutter App Development 2025",
    thumbnail: thumbnailTwo,
  },
  {
    id: 3,
    title: "Top Flutter App Development 2025",
    thumbnail: thumbnailThree,
  },
];

export default function BlogSection() {
  return (
    <SectionWrapper className={styles.sectionWrapper}>
      <div className={styles.badgeContainer}>
        <BadgeBanner text="Blog" className={styles.badgeBanner} />
      </div>

      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{pageData.title}</h2>
      </div>

      <div className={styles.grid}>
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className={blog.id !== blogData.length ? styles.blogItem : ""}
          >
            <BlogCard title={blog.title} thumbnail={blog.thumbnail} />
          </div>
        ))}
      </div>

      <div className={styles.buttonContainer}>
        <Button variant="fill" className={styles.button}>
          View All Blogs
        </Button>
      </div>
    </SectionWrapper>
  );
}
