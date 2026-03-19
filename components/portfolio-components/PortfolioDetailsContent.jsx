import React from 'react';
import Image from 'next/image';
import { Copy, Linkedin, Facebook, Link } from 'lucide-react';

const PortfolioDetailsContent = ({ project }) => {
    if (!project) return null;

    const { about, sidebar, problems, solutions, impact } = project;

    const SidebarContent = () => (
        <div className="bg-[#F3F0FF] rounded-[24px] px-5 py-6 space-y-6">
            <div className="space-y-5">
                <div className="space-y-1">
                    <h3 className="text-base font-medium text-[#867D9E] uppercase leading-6">Industry</h3>
                    <p className="text-[#0E121D] text-base font-medium leading-6">{sidebar?.industry}</p>
                </div>

                <div className="space-y-1">
                    <h3 className="text-base font-medium text-[#867D9E] uppercase leading-6">Service</h3>
                    <div className="space-y-1">
                        {sidebar?.service?.map((service, index) => (
                            <p key={index} className="text-[#0E121D] text-base font-medium leading-6">{service}</p>
                        ))}
                    </div>
                </div>

                <div className="space-y-1">
                    <h3 className="text-base font-medium text-[#867D9E] uppercase leading-6">Timelines</h3>
                    <p className="text-[#0E121D] text-base font-medium leading-6">{sidebar?.timeline}</p>
                </div>
            </div>

            <button className="w-full bg-[#0E121D] text-white py-5 rounded-full font-semibold leading-6 text-base hover:bg-black transition-all shadow-md">
                Book a free Call
            </button>

            <div>
                <p className="text-center text-base font-medium leading-6 text-[#0E121D] mb-4">Share this article</p>
                <div className="flex justify-center gap-4">
                    <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#0E121D] border border-[#E2E1E6] hover:bg-gray-50 hover:border-[#5D2BE9] hover:text-[#5D2BE9] transition-all shadow-sm">
                        <Link size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#E2E1E6] hover:bg-gray-50 hover:border-[#5D2BE9] hover:text-[#5D2BE9] transition-all shadow-sm">
                        <Linkedin size={20} className='fill-[#0E121D]' />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-[#E2E1E6] hover:bg-gray-50 hover:border-[#5D2BE9] hover:text-[#5D2BE9] transition-all shadow-sm">
                        <Facebook size={20} className='fill-[#0E121D]' />
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-white py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-[74px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Main Content */}
                    <div className="lg:col-span-9 flex flex-col gap-9 md:gap-12">

                        {/* About The Project */}
                        {about && (
                            <div className="flex flex-col gap-8">
                                <div>
                                    <h2 className="text-[32px] mb-3 leading-[38px] md:leading-[48px] font-bold text-[#0E121D]">About The Project</h2>
                                    <p className="text-[#4F5E71] text-base md:text-2xl leading-6 md:leading-[34px] whitespace-pre-line font-medium">
                                        {about.description}
                                    </p>
                                </div>

                                {/* Sidebar for Mobile */}
                                <div className="lg:hidden">
                                    <SidebarContent />
                                </div>

                                {about.image && (
                                    <div className="relative w-full aspect-video md:aspect-16/8 rounded-[32px] overflow-hidden bg-[#F2F2F2] shadow-sm">
                                        <Image
                                            src={about.image}
                                            alt="About the project"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                            </div>
                        )}

                        {/* The Problems */}
                        {problems && (
                            <div>
                                <h2 className="text-[32px] mb-3 leading-[38px] md:leading-[48px] font-bold text-[#0E121D]">The Problems</h2>
                                <p className="text-[#4F5E71] text-base md:text-2xl leading-6 md:leading-[34px] whitespace-pre-line">
                                    {problems.description}
                                </p>
                            </div>
                        )}

                        {/* Solutions */}
                        {solutions && (
                            <div className="space-y-8">
                                <h2 className="text-[32px] mb-3 leading-[38px] md:leading-[48px] font-bold text-[#0E121D]">Solutions</h2>
                                <div className="">
                                    <p className="text-[#4F5E71] text-base md:text-2xl leading-6 md:leading-[34px]">
                                        {solutions.description}
                                    </p>
                                    <ul className="text-base md:text-2xl leading-6 md:leading-[34px]">
                                        {solutions.points?.map((point, index) => (
                                            <li key={index} className="flex items-start pl-4 gap-3 text-[#4F5E71]">
                                                <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-[#4F5E71] shrink-0" />
                                                <span className=''>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-[#4F5E71] text-base md:text-2xl leading-6 md:leading-[34px]">
                                        {solutions.footerText}
                                    </p>
                                </div>
                                {solutions.images && (
                                    <div className="grid grid-cols-1 gap-8">
                                        {solutions.images.map((img, index) => (
                                            <div key={index} className="relative w-full aspect-video md:aspect-16/8 rounded-[32px] overflow-hidden bg-[#F2F2F2] shadow-sm">
                                                <Image
                                                    src={img}
                                                    alt={`Solution illustration ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Impact & Outcomes */}
                        {impact && (
                            <div className="flex flex-col gap-8 md:gap-12">
                                <div>
                                    <h2 className="text-[32px] mb-3 leading-[38px] md:leading-[48px] font-bold text-[#0E121D]">{impact.title || "Impact & Outcomes"}</h2>
                                    <ul>
                                        {impact.points?.map((point, index) => (
                                            <li key={index} className="flex items-start gap-3 text-[#4F5E71] text-base md:text-2xl leading-6 md:leading-[34px]">
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="grid grid-cols-1 gap-8">
                                    {impact.images?.map((img, index) => (
                                        <div key={index} className="relative w-full aspect-video md:aspect-16/8 rounded-[32px] overflow-hidden bg-[#F2F2F2] shadow-sm">
                                            <Image
                                                src={img}
                                                alt={`Impact ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar for Desktop */}
                    <div className="hidden lg:block lg:col-span-3">
                        <div className="sticky top-28">
                            <SidebarContent />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PortfolioDetailsContent;
