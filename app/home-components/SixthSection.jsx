import Image from "next/image";
import React from "react";
import tattooImg from "../../public/images/home/random-tatto-images.webp";

const SixthSection = () => {
  const archives = [
    {
      id: 1,
      name: "Charles Lacasse",
      age: 26,
      quote:
        "Choosing FRACTAL was a turning point. Their attention to detail and deep understanding of my story resulted in a piece that feels truly personal.",
      image: tattooImg,
    },
    {
      id: 2,
      name: "Charles Lacasse",
      age: 26,
      quote:
        "Choosing FRACTAL was a turning point. Their attention to detail and deep understanding of my story resulted in a piece that feels truly personal.",
      image: tattooImg,
    },
    {
      id: 3,
      name: "Charles Lacasse",
      age: 26,
      quote:
        "Choosing FRACTAL was a turning point. Their attention to detail and deep understanding of my story resulted in a piece that feels truly personal.",
      image: tattooImg,
    },
    {
      id: 4,
      name: "Charles Lacasse",
      age: 26,
      quote:
        "Choosing FRACTAL was a turning point. Their attention to detail and deep understanding of my story resulted in a piece that feels truly personal.",
      image: tattooImg,
    },
  ];

  return (
    <section
      id="section-six"
      className="bg-[#050505] text-white w-full pt-[45px] pb-16 md:pb-24 h-auto px-6 md:px-10 lg:px-16"
      style={{ background: "#0a0a0a" }}
    >
      <div className="container mx-auto max-w-[1440px]">
        <h2 className="text-white text-[32px] font-semibold leading-[38px] mb-10 text-left font-[var(--font-founders)]">
          Body Archives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {archives.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl w-full aspect-[4/5] md:aspect-[3/4] lg:h-[450px] cursor-pointer bg-[#18181A]"
            >
              {/* Default Image Background */}
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05]"
              />

              {/* Default Bottom Bar */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:opacity-0 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-[15px] md:text-[16px] font-medium leading-[20px] font-[var(--font-founders)]">
                    {item.name}
                  </span>
                  <span className="text-white/60 text-[13px] md:text-[14px] leading-[18px] font-[var(--font-founders)]">
                    Age: {item.age}
                  </span>
                </div>
              </div>

              {/* Hover Overlay Reveal */}
              <div className="absolute inset-x-0 bottom-0 bg-[#161616] p-6 lg:p-8 flex flex-col justify-start transform translate-y-[101%] transition-transform duration-[1500ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 w-full h-full z-10 border border-[#222] rounded-2xl">
                {/* Author Info Top */}
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 bg-white">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-[15px] md:text-[16px] font-medium leading-[22px] font-[var(--font-founders)]">
                      {item.name}
                    </span>
                    <span className="text-white/50 text-[13px] md:text-[14px] leading-[18px] font-[var(--font-founders)]">
                      Age: {item.age}
                    </span>
                  </div>
                </div>

                {/* Quote details */}
                <p className="text-white/80 text-[15px] md:text-[16px] leading-[24px] font-normal will-change-transform font-[var(--font-founders)]">
                  "{item.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
