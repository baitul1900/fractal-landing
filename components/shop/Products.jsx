"use client";

import React, { useState } from "react";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import Image from "next/image";
import Link from "next/link";
import shopData from "@/data/shop.json";
import { ChevronRight } from "lucide-react";

/**
 * ProductCard Component
 * Renders an individual product item.
 */
const ProductCard = ({ product, bgColor }) => (
    <Link href={`/shop/${product.id}`} className={`${bgColor} rounded-2xl overflow-hidden group border border-transparent hover:border-gray-100 transition-all duration-300 block`}>
        {/* Mockup Image */}
        <div className="aspect-4/5 relative overflow-hidden rounded-2xl bg-[#f8f7fc]">
            <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
        </div>

        {/* Details */}
        <div className="py-4 px-4">
            <h3 className="text-lg font-bold text-[#0F0D14] mb-2">{product.title}</h3>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="rounded-full flex items-center justify-center text-[10px] text-white overflow-hidden">
                        <Image src="/images/shop/ideatedlab.webp" alt="logo" width={24} height={24} className="opacity-80" />
                    </div>
                    <p className="text-xs text-[#5F587A] font-medium">
                        {product.author} <span className="mx-1 font-light opacity-50 font-inter ">{">"}</span> {product.category}
                    </p>
                </div>
                <p className="text-lg font-bold text-[#0F0D14]">{product.price}</p>
            </div>
        </div>
    </Link>
);

/**
 * Pagination Component
 */
const Pagination = () => (
    <div className="flex items-center justify-center gap-2 mt-16 pb-20">
        <button className="w-10 h-10 rounded-full bg-[#5D2BE9] text-white flex items-center justify-center text-sm font-medium">1</button>
        <button className="w-10 h-10 rounded-full border border-gray-200 text-[#5F587A] flex items-center justify-center text-sm font-medium hover:border-[#5D2BE9] transition-colors">2</button>
        <button className="w-10 h-10 rounded-full border border-gray-200 text-[#5F587A] flex items-center justify-center text-sm font-medium hover:border-[#5D2BE9] transition-colors">6</button>
        <button className="ml-2 px-6 py-2 rounded-full border border-gray-200 text-[#5F587A] flex items-center gap-2 text-sm font-medium hover:border-[#5D2BE9] transition-colors">
            Next <ChevronRight size={16} />
        </button>
    </div>
);

const Products = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    return (
        <section id="products" className="bg-white">
            <SectionWrapper>
                {/* Categories / Filters */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    {shopData.categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-lg border text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                ? "bg-[#5D2BE9] text-white border-[#5D2BE9] shadow-lg shadow-[#5D2BE9]/20"
                                : "bg-white text-[#5F587A] border-gray-200 hover:border-[#5D2BE9] hover:text-[#5D2BE9]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Bundle Section */}
                <div className="bg-[#E9E4FF]/40 rounded-[32px] p-6 md:p-10 mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0F0D14] mb-8 font-['Bricolage_Grotesque']">
                        {shopData.bundleSection.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {shopData.bundleSection.products.map((product) => (
                            <ProductCard key={product.id} product={product} bgColor="bg-white" />
                        ))}
                    </div>
                </div>

                {/* Featured Templates */}
                <div className="mb-16 px-6 md:px-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#0F0D14] mb-8 font-['Bricolage_Grotesque']">
                        {shopData.featuredSection.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-10">
                        {shopData.featuredSection.products.map((product) => (
                            <ProductCard key={product.id} product={product} bgColor="bg-[#F8F7FC]" />
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <Pagination />
            </SectionWrapper>
        </section>
    );
};

export default Products;
