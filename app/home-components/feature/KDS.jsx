import React from "react";
import Image from "next/image";

export default function KDS({ title, subtitle, imageUrl }) {
  return (
    <div className="bg-white rounded-3xl md:px-9 px-6 md:pt-8 pt-4">
      <h4 className=" text-[#0f0d14] text-2xl md:text-[32px] font-bold ">
        {title}
      </h4>

      <p className=" text-[#595d79] md:text-lg font-normal mt-3 leading-7">
        {subtitle}
      </p>

      <div className="md:mt-7 mt-8">
        <Image
          src={imageUrl}
          alt="Section Image"
          className="w-full"
        />
      </div>
    </div>
  );
}
