import React from "react";
import Image from "next/image";
import Link from "next/link";

const PortfolioCard = ({ project }) => {
    return (
        <Link
            href={`/portfolio/${project.id}`}
            className="group block overflow-hidden transition-all duration-300"
        >
            {/* Project Image */}
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-[20px] bg-[#F4F1FF]">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Project Info */}
            <div className="mt-4 px-1">
                <p className="text-sm font-normal text-[#867D9E] mb-1">
                    {project.industry}
                </p>
                <h3 className="text-lg md:text-xl font-bold text-[#0E121D] leading-tight group-hover:text-[#5D2BE9] transition-colors line-clamp-2">
                    {project.title}
                </h3>
            </div>
        </Link>
    );
};

export default PortfolioCard;
