import React from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function PosAndBillingSystem({
  title,
  subtitle,
  features,
  buttonText,
  imageUrl,
  onClick,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2.5 gap-2 pos-and-billing-system-wrapper md:pt-14 pt-8 md:px-9 px-6 h-full">
      <div>
        <h3 className=" text-[#0f0d14] md:text-[32px] text-2xl font-bold">
          {title}
        </h3>

        <p className="text-[#595d79] md:text-lg text-sm font-normal md:leading-7 md:mt-3 mt-2">
          {subtitle}
        </p>

        <ul className=" md:text-lg text-base text-gray-700 md:mb-14 mb-6 md:mt-6 mt-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start text-[#595d79]  font-normal"
            >
              {/* Custom Checkmark/Bullet Icon */}
              <span className="text-[#595d79] mr-2">&bull;</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="">
          <Button variant="fill" className="w-full md:w-auto" onClick={onClick}>
            {buttonText}
          </Button>
        </div>
      </div>

      <div className="flex justify-end">
        <Image src={imageUrl} alt="Section Image" className="" />
      </div>
    </div>
  );
}
