import React from "react";
import OfferSection from "@/components/service-components/OfferSection";
import ServiceDemand from "@/components/service-components/ServiceDemand";
import ServiceFeature from "@/components/service-components/ServiceFeature";
import ServiceHero from "@/components/service-components/ServiceHero";
import ServiceOurExpertise from "@/components/service-components/ServiceOurExpertise";
import ServiceProbSection from "@/components/service-components/ServiceProbSection";
import WhoWeServe from "@/components/service-components/WhoWeServe";
import ServiceProcess from "@/components/service-components/ServiceProcess";
import ServiceStruggle from "@/components/service-components/ServiceStruggle";
import ServiceTeam from "@/components/service-components/ServiceTeam";
import ServiceWeOffer from "@/components/service-components/ServiceWeOffer";
import Testimonial from "@/app/home-components/testimonial/Testimonial";
import ServicePlan from "@/components/service-components/ServicePlan";
import SupportCollaboration from "@/components/service-components/SupportCollaboration";
import WhyPartnerWithUs from "@/components/service-components/WhyPartnerWithUs";
import ServiceCapabilities from "@/components/service-components/ServiceCapabilities";
import BusinessOutcomes from "@/components/service-components/BusinessOutcomes";
import ArchitecturalProblems from "@/components/service-components/ArchitecturalProblems";
import Faq from "@/app/home-components/faq/Faq";
import LeadCollection from "@/app/home-components/lead-collection/LeadCollection";
import FooterLayoutWrapper from "@/app/home-components/footer-layout/FooterLayoutWrapper";
import ScrollToTop from "@/components/ui/ScrollToTop";


// Import images that need to be passed as objects
import iconOne from "../../public/images/service-ux/fluent.webp";
import iconTwo from "../../public/images/service-ux/github-project.webp";
import mishuImage from "../../public/images/about-us/mishu.webp";
import cardOneImg from "../../public/images/service-ux/card-one.webp";
import cardTwoImg from "../../public/images/service-ux/card-2.webp";
import cardThreeImg from "../../public/images/service-ux/card-3.webp";
import cardFourImg from "../../public/images/service-ux/card-4.webp";
import cardFiveImg from "../../public/images/service-ux/card-5.webp";
import teamImage from "../../public/images/service-ux/team.webp";
import ledImg from "../../public/images/service-ux/expert-led.webp";
import highImpactImg from "../../public/images/service-ux/high-impact.svg";
import frictionlessImg from "../../public/images/service-ux/friction-less.svg";
import seamlessImg from "../../public/images/service-ux/seamless.svg";

/**
 * ServiceLayout Component
 * 
 * Reusable layout component for all service pages.
 * Receives service data as props and renders all service components.
 * 
 * @param {Object} serviceData - Complete service data object from JSON
 * @param {Object} options - Optional configuration for showing/hiding components
 */
export default function ServiceLayout({ serviceData, options = {} }) {
    const {
        // Common components (footer area)
        showTestimonial = true,
        showFaq = true,
        showLeadCollection = true,
        showFooter = true,
        // Service-specific sections
        showServiceFeature = true,
        showServiceProbSection = true,
        showWhoWeServe = true,
        showServiceWeOffer = true,
        showServiceOurExpertise = true,
        showServiceProcess = true,
        showOfferSection = true,
        showServiceStruggle = true,
        showServiceTeam = true,
        showServiceDemand = true,
        showServicePlan = true,
        showSupportCollaboration = true,
        showWhyPartnerWithUs = true,
        showServiceCapabilities = true,
        showBusinessOutcomes = true,
        showArchitecturalProblems = true,
    } = options;

    return (
        <>
            <ServiceHero
                badgeText={serviceData.serviceHero.badgeText}
                headerText={serviceData.serviceHero.headerText}
                subText={serviceData.serviceHero.subText}
                subText2={serviceData.serviceHero?.subText2}
                buttonText={serviceData.serviceHero.buttonText}
                buttonUrl={serviceData.serviceHero.buttonUrl}
                featureOne={{ ...serviceData.serviceHero.featureOne, icon: iconOne }}
                featureTwo={{ ...serviceData.serviceHero.featureTwo, icon: iconTwo }}
                stats={serviceData.serviceHero.stats || []}
                heroBackgroundClass={
                    serviceData.serviceHero?.headerText?.fullText?.toLowerCase().includes("mobile app")
                        ? "mobile-app-hero"
                        : serviceData.serviceHero?.headerText?.fullText?.toLowerCase().includes("ui/ux")
                            ? "ui-app-hero"
                            : "home-hero"
                }
            />

            {showServiceFeature && serviceData.serviceFeature && (
                <ServiceFeature
                    data={{
                        ...serviceData.serviceFeature,
                        profile: { ...serviceData.serviceFeature?.profile, image: mishuImage },
                        caseCards: serviceData.serviceFeature?.caseCards || []
                    }}
                />
            )}

            {showServiceProbSection && (
                <ServiceProbSection
                    isMobileApp={serviceData.serviceHero?.headerText?.fullText?.toLowerCase().includes("mobile app")}
                    data={{
                        ...serviceData.serviceProbSection,
                        cards: serviceData.serviceProbSection.cards?.map(card => ({
                            ...card,
                            iconImage: card.iconImage
                        }))
                    }}
                />
            )}

            {showWhoWeServe && serviceData.whoWeServe && (
                <WhoWeServe data={serviceData.whoWeServe} />
            )}

            {showServiceWeOffer && (
                <ServiceWeOffer
                    headerText={serviceData.serviceWeOffer?.headerText}
                    subtext={serviceData.serviceWeOffer?.subtext}
                    buttonText={serviceData.serviceWeOffer?.buttonText}
                    services={serviceData.serviceWeOffer?.services}
                />
            )}

            {showServiceOurExpertise && (
                <ServiceOurExpertise
                    headerText={serviceData.serviceOurExpertise?.headerText}
                    accordionItems={serviceData.serviceOurExpertise?.accordionItems}
                />
            )}

            {showServiceProcess && (
                <ServiceProcess
                    headerText={serviceData.serviceProcess?.headerText}
                    steps={serviceData.serviceProcess?.steps}
                    badgeText={serviceData.serviceProcess?.badgeText}
                    subText={serviceData.serviceProcess?.subText}
                    subText2={serviceData.serviceProcess?.subText2}
                    isArchitecture={serviceData.serviceProcess?.isArchitecture}
                />
            )}

            {showServiceCapabilities && serviceData.serviceCapabilities && (
                <ServiceCapabilities
                    badgeText={serviceData.serviceCapabilities.badgeText}
                    headerText={serviceData.serviceCapabilities.headerText}
                    categories={serviceData.serviceCapabilities.categories}
                />
            )}

            {showBusinessOutcomes && serviceData.businessOutcomes && (
                <BusinessOutcomes
                    badgeText={serviceData.businessOutcomes.badgeText}
                    headerText={serviceData.businessOutcomes.headerText}
                    description1={serviceData.businessOutcomes.description1}
                    description2={serviceData.businessOutcomes.description2}
                    outcomes={serviceData.businessOutcomes.outcomes}
                />
            )}

            {showArchitecturalProblems && serviceData.architecturalProblems && (
                <ArchitecturalProblems
                    badgeText={serviceData.architecturalProblems.badgeText}
                    headerText={serviceData.architecturalProblems.headerText}
                    problems={serviceData.architecturalProblems.problems}
                />
            )}

            {showOfferSection && serviceData.offerSection && (
                <OfferSection
                    headerText={serviceData.offerSection.headerText}
                    subText={serviceData.offerSection.subText}
                    buttonText={serviceData.offerSection.buttonText}
                    footerFeatures={serviceData.offerSection.footerFeatures}
                />
            )}

            {showServiceStruggle && serviceData.serviceStruggle && (
                <ServiceStruggle
                    headerText={serviceData.serviceStruggle.headerText}
                    subText={serviceData.serviceStruggle.subText}
                    cards={(serviceData.serviceStruggle.cards || []).map((card, idx) => {
                        const images = [cardOneImg, cardTwoImg, cardThreeImg, cardFourImg, cardFiveImg];
                        return { ...card, image: images[idx] || cardOneImg };
                    })}
                />
            )}

            {showServiceTeam && serviceData.serviceTeam && (
                <ServiceTeam
                    headerText={serviceData.serviceTeam.headerText}
                    teamData={teamImage}
                    problems={serviceData.serviceTeam.problems}
                    solutions={serviceData.serviceTeam.solutions}
                />
            )}

            {showServiceDemand && (
                <ServiceDemand
                    demandData={{
                        ...serviceData.serviceDemand,
                        cards: serviceData.serviceDemand.cards.map(card => ({
                            ...card,
                            iconImage: card.iconImage
                        }))
                    }}
                />
            )}

            {showTestimonial && <Testimonial />}

            {showServicePlan && serviceData.servicePlan && (
                <ServicePlan
                    mainText={serviceData.servicePlan.mainText}
                    profile={{ ...serviceData.servicePlan.profile, image: mishuImage }}
                    steps={serviceData.servicePlan.steps}
                />
            )}

            {showSupportCollaboration && serviceData.supportCollaboration && (
                <SupportCollaboration
                    headerText={serviceData.supportCollaboration.headerText}
                    cards={serviceData.supportCollaboration.cards}
                />
            )}

            {showWhyPartnerWithUs && (
                <WhyPartnerWithUs
                    pageData={{
                        ...serviceData.whyPartnerWithUs,
                        cards: (serviceData.whyPartnerWithUs.cards || []).map((card, idx) => {
                            const icons = [ledImg, highImpactImg, frictionlessImg, seamlessImg];
                            return { ...card, icon: icons[idx] || ledImg };
                        })
                    }}
                />
            )}

            {/* General common components */}
            {showFaq && <Faq faqData={serviceData.faq} />}
            {showLeadCollection && <LeadCollection />}
            {showFooter && <FooterLayoutWrapper />}

            {/* Scroll to top button */}
            <ScrollToTop />
        </>
    );
}
