import React from "react";
import clsx from "clsx";

const styles = {
  card: "bg-[#F7FAFF] shadow-lg rounded-3xl md:p-8 w-full p-2.5 mx-auto transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
  container: "flex flex-col items-center text-center",
  iconWrapper: "p-4 rounded-full mb-6",
  icon: "w-8 h-8",
  title: "md:text-2xl text-base font-bold text-gray-900 mb-3",
  description: "text-sm md:text-base text-gray-600 md:leading-relaxed",
};

export default function Card({
  icon,
  title,
  description,
  iconBgColor = "bg-[#E0F5FF]",
  iconColor = "text-[#00A5FF]",
}) {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={clsx(styles.iconWrapper, iconBgColor)}>
          <div className={clsx(styles.icon, iconColor)}>{icon}</div>
        </div>

        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
