import React from "react";
import Image from "next/image";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import { CheckCircle2, Facebook, Linkedin, Twitter, MessageSquare } from "lucide-react";

/**
 * ProductContent Component
 * 
 * Detailed section for product previews, details, and engagement.
 */
export default function ProductContent({ product }) {
    // Mock data for images and features based on the design
    const previewImages = [
        "/images/shop/placeholder.webp",
        "/images/shop/placeholder.webp",
        "/images/shop/placeholder.webp",
        "/images/shop/placeholder.webp",
        "/images/shop/placeholder.webp",
        "/images/shop/placeholder.webp",
    ];

    const features = [
        "Pixel Perfect",
        "Simple & Clean Modern Design",
        "Components Design System",
        "Easy Customization",
        "Organic Layer"
    ];

    const comments = [
        {
            user: "idexpixel",
            role: "Author",
            text: "@Emon Thank You",
            time: "1 days ago",
            avatar: "/images/shop/placeholder1.webp"
        },
        {
            user: "Emon",
            role: "",
            text: "Fantastic Design",
            time: "1 days ago",
            avatar: "/images/shop/placeholder1.webp"
        }
    ];

    return (
        <section className="bg-white py-16 md:pb-24">
            <SectionWrapper className="pt-0!">
                {/* 1. Image Preview Grid - 2 per row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {previewImages.map((src, idx) => (
                        <div key={idx} className="aspect-[1.5/1] relative rounded-3xl overflow-hidden bg-[#F2F1FC]/50">
                            <Image
                                src={src}
                                alt={`Preview ${idx + 1}`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-20">
                    {/* Row 1: Overview (Left) & Features (Right) */}
                    <div className="md:col-span-8 mb-12 md:mb-16">
                        <h2 className="text-2xl font-bold text-[#0F0D14] mb-6 font-['Bricolage_Grotesque']">Overview</h2>
                        <div className="space-y-6 text-[#5F587A] text-lg leading-relaxed">
                            <p>
                                Ecom-mart is eCommerce Website UI Kit with 45++ high-quality screens and is easy to use with
                                clean, neat, and modern design. Available in Figma file. Ready responsive in Tablet & Mobile Preview.
                            </p>
                            <p>
                                This UI Kit is easy to use and free to customize for your needs in any kind of related project. Lenny
                                supports you with free font, pixel-perfect design, support organized layer, global style guide,
                                consistent design with dynamic components.
                            </p>
                            <p>Thank you for purchasing our UI Kit! 😍</p>
                        </div>
                    </div>

                    <div className="md:col-span-4 mb-12 md:mb-16">
                        <h2 className="text-2xl font-bold text-[#0F0D14] mb-6 font-['Bricolage_Grotesque']">Features</h2>
                        <ul className="space-y-4">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-[#5F587A]">
                                    <CheckCircle2 size={18} className="text-[#22C55E]" />
                                    <span className="text-sm md:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Row 2: Share With (Left) & Format (Right) */}
                    <div className="md:col-span-8 mb-12 md:mb-16">
                        <h2 className="text-xl font-bold text-[#0F0D14] mb-6 font-['Bricolage_Grotesque']">Share with</h2>
                        <div className="flex gap-4">
                            {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                                <button key={i} className="w-10 h-10 rounded-full bg-[#F8F7FC] border border-[#BAB3CE] flex items-center justify-center text-[#5F587A] hover:bg-[#F2F1FC] hover:text-[#5D2BE9] transition-all">
                                    <Icon size={18} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-4 mb-12 md:mb-16">
                        <h2 className="text-xl font-bold text-[#0F0D14] mb-4 font-['Bricolage_Grotesque']">Format</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <Image src="/images/shop/figma.webp" alt="Figma" width={48} height={48} className="object-contain" />
                            </div>
                            <p className="text-sm text-[#5F587A] font-medium flex items-center gap-2">
                                <span className="opacity-50">📂</span> Size 28 MB in One file
                            </p>
                        </div>
                    </div>

                    {/* Separator Line - Spans All Columns */}
                    <div className="col-span-full border-t border-[#BAB3CE] mb-16"></div>

                    {/* Row 3: Comments Section (Left Aligned on desktop, full on mobile) */}
                    <div className="md:col-span-8 mb-12">
                        <h2 className="text-2xl font-bold text-[#0F0D14] mb-10 font-['Bricolage_Grotesque']">Comments</h2>

                        <div className="space-y-8">
                            {comments.map((comment, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-gray-100 relative">
                                        <Image src={comment.avatar} alt={comment.user} fill className="object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-center gap-2">
                                            <span className="font-bold text-[#0F0D14]">{comment.user}</span>
                                            {comment.role && (
                                                <span className="px-3 py-0.5 rounded-full border border-[#D8D2FB] text-[#5D2BE9] text-[10px] font-bold">
                                                    {comment.role}
                                                </span>
                                            )}
                                            <span className="text-xs text-[#5F587A] ml-2">{comment.time}</span>
                                        </div>
                                        <p className="text-[#5F587A]">{comment.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 4: Comment Input (Full Width) */}
                    <div className="col-span-full mt-4">
                        <div className="flex flex-col gap-4 md:gap-0 md:relative">
                            <textarea
                                placeholder="Leave a comment, be nice"
                                className="w-full px-6 py-6 rounded-3xl bg-[#F2F1FC]/50 border border-[#D8D2FB]/50 focus:outline-none focus:border-[#5D2BE9] transition-colors min-h-[80px] md:min-h-0 md:h-[72px] shadow-[0px_4px_12px_rgba(93,43,233,0.05)] text-lg placeholder:text-[#BAB3CE] resize-none overflow-hidden"
                            />
                            <button className="md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 px-10 py-3 bg-[#0F0D14] text-white rounded-2xl font-bold text-lg hover:bg-[#1C1C1C] transition-all active:scale-95 shadow-lg w-full md:w-auto">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
}
