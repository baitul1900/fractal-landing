"use client";
import SectionWrapper from "@/components/layouts/SectionWrapper";
import BadgeBanner from "@/components/ui/BadgeBanner";

const pageData = {
  title: "Innovation Backed by the Best in Tech",
  subText:
    "We collaborate with the world’s leading technology providers to ensure every solution is scalable, secure, and future-ready.",
};

const techStack = [
  { id: 1, name: "Node.js", category: "Backend / Runtime" },
  { id: 2, name: "AWS", category: "Cloud Platform" },
  { id: 3, name: "Google Cloud", category: "Cloud Platform" },
  { id: 4, name: "React.js", category: "Frontend Framework" },
  { id: 5, name: "Next.js", category: "Frontend Framework" },
  { id: 6, name: "Vue.js", category: "Frontend Framework" },
  { id: 7, name: "Microsoft Azure", category: "Cloud Platform" },
  { id: 8, name: "Firebase", category: "Backend / BaaS" },
  { id: 9, name: "PHP", category: "Backend Language" },
  { id: 10, name: ".NET Core", category: "Backend Framework" },
  { id: 11, name: "Angular", category: "Frontend Framework" },
  { id: 12, name: "Tailwind CSS", category: "Styling / Utility" },
  { id: 13, name: "Flutter", category: "Mobile Framework" },
  { id: 14, name: "Swift", category: "Mobile Language" },
];

// Component to render tech items
const TechStackItems = () => (
  <>
    {techStack.map((tech) => (
      <div
        key={tech.id}
        className="
          flex-shrink-0
          px-6 py-3
          border border-[#534A6D]
          rounded-full
          text-base md:text-lg font-medium
          text-[#0E121D]
          bg-white
          shadow-md
          mx-4
          transition duration-300 ease-in-out hover:shadow-xl hover:scale-[1.01]
        "
      >
        {tech.name}
      </div>
    ))}
  </>
);

export default function TechPartner() {
  return (
    <>
      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .marquee-container {
          display: flex;
          width: max-content; /* Important for seamless loop */
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }
      `}</style>

      <SectionWrapper className="bg-[#E3DDF4] md:pb-[100px] pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-1.5">
          <div className="md:col-span-4 col-span-1">
            <BadgeBanner
              text="Industries We Empower"
              className="border-[#0E121D] text-[#0E121D]"
            />
          </div>

          <div className="md:col-span-8 col-span-1">
            <h2 className="section-header md:w-[960px] w-full md:mt-0 mt-5">
              {pageData.title}
            </h2>
            <p className="text-[#534A6D] md:text-2xl text-base font-normal leading-normal md:leading-[34px] mt-[11px]">
              {pageData.subText}
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Seamless Infinite Marquee Section */}
      <div className="bg-[#E3DDF4] overflow-hidden pb-8 md:pb-[100px]">
        {/* Right → Left */}
        <div className="flex overflow-hidden">
          <div className="flex marquee-container animate-marquee">
            <TechStackItems />
            <TechStackItems /> {/* Duplicate for seamless loop */}
          </div>
        </div>

        {/* Left → Right */}
        <div className="flex overflow-hidden mt-8">
          <div className="flex marquee-container animate-marquee-reverse">
            <TechStackItems />
            <TechStackItems /> {/* Duplicate again */}
          </div>
        </div>
      </div>
    </>
  );
}
