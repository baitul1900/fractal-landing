import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const PortfolioDetailsHero = ({ project }) => {
    if (!project) return null;

    return (
        <section className="bg-[#F9F8FF] pt-32 pb-16 md:pt-44 md:pb-24">
            <div className="container mx-auto px-4 md:px-[74px] flex flex-col items-center text-center">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm font-medium text-[#867D9E] mb-6">
                    <Link href="/portfolio" className="hover:text-[#5D2BE9] transition-colors">
                        All Project
                    </Link>
                    <ChevronRight size={14} />
                    <span className="text-[#0E121D]">{project.category} System</span>
                </nav>

                {/* Title */}
                <h1 className="text-[32px] md:text-[48px] font-bold text-[#0E121D] leading-[38px] md:leading-[56px] max-w-[874px] mb-12">
                    {project.title}
                </h1>

                {/* Featured Image */}
                <div className="relative w-full aspect-video md:aspect-16/8 rounded-[24px] overflow-hidden shadow-sm bg-white">
                    <Image
                        src='/images/shop/placeholder.webp'
                        alt='portfolio'
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default PortfolioDetailsHero;
