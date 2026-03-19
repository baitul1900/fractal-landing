import googleRatingBadge from "../../public/images/home/google-rating-badge.webp";
import blackStar from "../../public/images/home/star-image.svg";
import Image from "next/image";
import Button from "@/components/ui/Button";

export const BadgeBanner = ({
  className = "flex items-center gap-2 mx-auto md:pt-14 pt-16",
}) => (
  <div className={`${className}`}>
    <div>
      <Image
        src={googleRatingBadge}
        alt="Google Rating Badge"
        className="md:w-auto w-auto md:h-auto h-8 object-cover"
      />
    </div>
    <div>
      <p className="text-center text-[#534a6d] text-sm md:text-lg font-medium leading-normal md:leading-[27px]">
        4.9
      </p>
    </div>
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <Image key={index} src={blackStar} alt="Google Rating Badge" />
      ))}
    </div>
  </div>
);

const Hero = () => {
  return (
    <header className="md:pt-[100px] pt-14 home-hero md:pb-[179px] pb-[65px] overflow-hidden h-full">
      <div className="container mx-auto px-4 md:px-[74px] flex flex-col items-center text-center">
        <BadgeBanner />

        <p className="text-center text-[#0e121d] text-sm md:text-lg font-normal md:leading-6 md:py-3 py-2">
          We don’t just build systems — we build impact.
        </p>
        <h1 className="header-text md:w-[900px] w-full">
          Designing the systems behind tomorrow’s intelligence
        </h1>

        <p className=" text-[#534a6d] md:text-[22px] text-sm font-medium md:w-[900px] w-full md:leading-7 leading-normal md:mt-3 mt-2">
          Transform your enterprise with AI, automation, and smart industry
          solutions that drive measurable growth.
        </p>

        {/* 5. Feature Metrics (The new addition) */}
        <div className=" mt-10 w-full">
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center gap-2 md:gap-4">
            <Button variant="outline">View Case Studies</Button>
            <Button variant="fill">Get free consultation </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
