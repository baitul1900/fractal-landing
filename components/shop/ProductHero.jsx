"use client";
import React from "react";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * ProductHero Component
 * 
 * Featured hero section for a specific product.
 * Based on the design: Two columns, tags on left, desc/buttons on right.
 */
export default function ProductHero({ product }) {
    const router = useRouter();
    // Tags based on product category
    const tags = ["Template", "Admin Dashboard", "UI Kit", "Bundle", "Branding", "Figma"];

    return (
        <section className="bg-[#f2f1fc] pt-24 pb-16 md:pb-24 border-t border-t-[#D8D2FB]/50">
            <SectionWrapper>
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-24 items-start">
                    {/* Title Section - Always First */}
                    <div className="flex flex-col w-full">
                        <h1 className="text-[32px] md:text-[56px] font-extrabold font-['Bricolage_Grotesque'] leading-[40px] md:leading-[64px] text-[#0f0d14] mb-6 md:mb-12">
                            {product.title}
                        </h1>

                        {/* Description - Moves up on mobile */}
                        <p className="text-lg md:text-2xl text-[#1E1B24]/70 leading-relaxed max-w-[540px] mb-8 md:hidden text-left">
                            Find Figma and Html templates for ecommerce, service, medical, legal, and many more.
                        </p>

                        {/* Tags - Wraps nicely on mobile */}
                        <div className="flex flex-wrap gap-2 md:gap-4 mb-10 md:mb-0">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 md:px-8 py-2 md:py-2.5 rounded-full border border-[#D8D2FB] bg-[#F8F7FC] text-[#5F587A] text-[13px] md:text-sm font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Right Column / Mobile Bottom Actions */}
                    <div className="flex flex-col gap-10 md:gap-12 w-full md:pt-2">
                        {/* Desktop Description */}
                        <p className="hidden md:block text-xl md:text-2xl text-[#5F587A] leading-relaxed max-w-[540px]">
                            Find Figma and Html templates for ecommerce, service, medical, legal, and many more.
                        </p>

                        {/* Buttons - Stacked full-width on mobile */}
                        <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full">
                            <button
                                onClick={() => router.push(`/checkout/${product.id}`)}
                                className="order-1 md:order-2 w-full md:w-auto px-10 py-4 bg-[#0F0D14] text-white rounded-full font-bold hover:cursor-pointer hover:bg-[#1C1C1C] transition-all duration-300 shadow-sm text-center"
                            >
                                Buy Now {product.price}
                            </button>
                            <button className="order-0 md:order-1 w-full md:w-auto px-10 py-4 bg-white/50 border border-[#0F0D14]/10 md:border-[#0F0D14] text-[#0F0D14] rounded-full font-bold hover:bg-white transition-all duration-300 text-center">
                                Preview
                            </button>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
}
