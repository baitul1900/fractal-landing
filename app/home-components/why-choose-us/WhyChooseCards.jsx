import React from "react";
import clsx from "clsx";

const styles = {
  card: "bg-[#f0f1fa] shadow-lg rounded-2xl md:p-8 w-full p-2.5 mx-auto border border-[#e1e1dd] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
  container: "flex flex-col items-center text-center",
  iconWrapper: "p-4 rounded-full",
  icon: "w-8 h-8",
  title:
    " text-[#0f0d14] md:text-xl text-base font-semibold md:leading-[30px] md:mt-6 mt-4",
  description:
    "text-center text-[#595d79] md:text-lg text-sm font-normal md:leading-7",
};

export default function WhyChooseCards({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={clsx(styles.iconWrapper)}>
          <div className={clsx(styles.icon)}>{icon}</div>
        </div>

        <h1 className={styles.title}>{title}</h1>

        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
