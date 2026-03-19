"use client";

import React, { useState } from "react";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import PortfolioCard from "./PortfolioCard";
import { ChevronRight } from "lucide-react";

/**
 * Pagination Component
 */
const Pagination = () => (
    <div className="flex items-center justify-center gap-3 mt-16 md:mt-24">
        <button className="w-10 h-10 rounded-full bg-[#5D2BE9] text-white flex items-center justify-center text-sm font-medium">1</button>
        <button className="w-10 h-10 rounded-full border border-[#EBEAED] text-[#867D9E] flex items-center justify-center text-sm font-medium hover:border-[#5D2BE9] transition-colors">2</button>
        <button className="w-10 h-10 rounded-full border border-[#EBEAED] text-[#867D9E] flex items-center justify-center text-sm font-medium hover:border-[#5D2BE9] transition-colors">6</button>
        <button className="ml-2 px-6 py-2 rounded-full border border-[#EBEAED] text-[#867D9E] flex items-center gap-2 text-sm font-medium hover:border-[#5D2BE9] transition-colors">
            Next <ChevronRight size={16} />
        </button>
    </div>
);

const PortfolioSection = ({ data }) => {
    const [activeCategory, setActiveCategory] = useState("All Industries");

    const filteredProjects = activeCategory === "All Industries"
        ? data.projects
        : data.projects.filter(p => p.category === activeCategory);

    return (
        <section className="bg-white py-16 md:py-24">
            <SectionWrapper>
                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12 md:mb-16">
                    {data.categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-lg border text-base font-medium transition-all duration-300 ${activeCategory === cat
                                ? "bg-[#0E121D] text-white border-[#0E121D]"
                                : "bg-white text-[#0E121D] border-[#EBEAED] hover:border-[#0E121D]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {filteredProjects.map((project) => (
                        <PortfolioCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Pagination */}
                <Pagination />
            </SectionWrapper>
        </section>
    );
};

export default PortfolioSection;
