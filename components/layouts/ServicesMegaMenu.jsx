"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    ChevronDown,
    Building2,
    Code2,
    Wifi,
    BarChart3,
    LayoutTemplate,
    Sparkles,
    Cloud,
    ShieldCheck,
    MessageSquare,
    Smartphone,
    Network,
    ArrowUpRight
} from "lucide-react";
import serviceRegistry from "@/data/services/index.json";

// --- Service Icons Mapping ---
const serviceIcons = {
    "digital-enterprise": <Building2 size={20} />,
    "custom-software": <Code2 size={20} />,
    "iot-integration": <Wifi size={20} />,
    "data-strategy": <BarChart3 size={20} />,
    "ui-ux": <LayoutTemplate size={20} />,
    "ai-ml": <Sparkles size={20} />,
    "cloud-solutions": <Cloud size={20} />,
    "cybersecurity": <ShieldCheck size={20} />,
    "it-consulting": <MessageSquare size={20} />,
    "app-development": <Smartphone size={20} />,
    "system-architecture": <Network size={20} />,
};

const styles = {
    megaMenuContainer: "absolute top-full left-0 w-full pt-4 z-50 px-4 md:px-8",
    megaMenuContent: "bg-white rounded-2xl shadow-xl border border-gray-100 max-w-5xl mx-auto p-6",
    servicesGrid: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4",

    // Updated Link Style: 
    // - 'group' allows us to control children (like the arrow) on hover
    // - 'hover:bg-[#F3F0FF]' adds the light purple background on hover
    serviceLink: "flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-[#F3F0FF] group",

    // Icon Wrapper: Scales slightly on hover
    iconWrapper: "text-[#5d2be9] group-hover:scale-110 transition-transform duration-200",

    // Text Style
    title: "text-[#0E121D] text-base font-semibold",

    // Arrow Style: Hidden by default (opacity-0), visible on hover (opacity-100)
    arrowIcon: "ml-auto text-[#5d2be9] opacity-0 group-hover:opacity-100 transition-opacity duration-200",
};

export const ServicesMegaMenu = ({ isOpen }) => {
    const enabledServices = Object.entries(serviceRegistry).filter(
        ([_, service]) => service.enabled
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={styles.megaMenuContainer}
                >
                    <div className={styles.megaMenuContent}>
                        <div className={styles.servicesGrid}>
                            {enabledServices.map(([slug, service]) => (
                                <Link
                                    key={slug}
                                    href={`/services/${slug}`}
                                    className={styles.serviceLink}
                                >
                                    <div className={styles.iconWrapper}>
                                        {serviceIcons[slug] || <LayoutTemplate size={20} />}
                                    </div>

                                    <span className={styles.title}>{service.title}</span>

                                    {/* Arrow appears on hover for ALL items now */}
                                    <ArrowUpRight size={18} className={styles.arrowIcon} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const ServicesNavItem = ({ className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className=""
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button
                className={`${className} flex items-center gap-1 cursor-pointer h-full`}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                Services
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <ServicesMegaMenu isOpen={isOpen} />
        </div>
    );
};

// ... Mobile components remain unchanged
export const MobileServicesDropdown = ({ isOpen }) => {
    const enabledServices = Object.entries(serviceRegistry).filter(
        ([_, service]) => service.enabled
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pl-4 mt-2 space-y-3"
                >
                    {enabledServices.map(([slug, service]) => (
                        <Link
                            key={slug}
                            href={`/services/${slug}`}
                            className="flex items-center gap-3 text-white/80 text-lg hover:text-white transition-colors"
                        >
                            <span>{service.title}</span>
                        </Link>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileServicesNavItem = ({ className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${className} flex items-center justify-between w-full`}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <span>Services</span>
                <ChevronDown
                    size={24}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <MobileServicesDropdown isOpen={isOpen} />
        </div>
    );
};