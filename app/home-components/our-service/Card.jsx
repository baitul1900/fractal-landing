import React from "react";

const styles = {
  card: "bg-white rounded-2xl md:py-6 py-4.5 md:px-5 px-4",
  icon: "",
  title:
    " text-[#0e121d] md:text-2xl text-[22px] font-bold leading-7 md:leading-[34px]",
  titleWrapper: "mt-6 md:mt-7",
  description:
    "text-[#53496d] text-base font-normal leading-5 md:leading-6 mt-2 md:mt-5",
};

export default function Card({ icon, title, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>

      <div className={styles.titleWrapper}>
        <h6 className={styles.title}>{title}</h6>
      </div>

      <div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
