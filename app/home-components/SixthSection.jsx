import React from "react";
import Image from "next/image";
import tattooImg from "../../public/images/home/random-tatto-images.webp";
import MobileSixthSection from "./MobileSixthSection";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Review Images
import andreaReview from "../../public/images/review-images/Andrea.webp";
import borjaReview from "../../public/images/review-images/Borja.webp";
import daniReview from "../../public/images/review-images/Dani.webp";
import daniloReview from "../../public/images/review-images/Danilo.webp";
import elenaReview from "../../public/images/review-images/Elena.webp";
import geraldineReview from "../../public/images/review-images/Geraldine.webp";
import joseReview from "../../public/images/review-images/José.webp";
import martaReview from "../../public/images/review-images/Marta.webp";
import michaelReview from "../../public/images/review-images/Michael.webp";
import robertoReview from "../../public/images/review-images/Roberto.webp";

const SixthSection = () => {
  const archives = [
    {
      id: 1,
      name: "Danilo",
      rating: 5,
      quote: "I was looking for a meticulous and perfectionist tattoo artist. I searched for several months. They get deeply involved in the design and take care of every tiny detail. The precision of the lines is incredible. Throughout the whole process I felt at home—the treatment was unbeatable, and the studio and cleanliness were impeccable. An amazing experience! 100% recommended.",
      image: daniloReview,
      userImage: null,
    },
    {
      id: 2,
      name: "Michael Frank",
      rating: 5,
      quote: `What a brilliant team! I had my calf tattooed when Elicostart & Nanook were in my home town of Stuttgart. The consultations beforehand were absolutely brilliant and inspiring; I was completely blown away by the design based on my thoughts that we discussed in a video call.

The two-day tattoo session was great fun; the tattoo was done with so much love and precision. I’m incredibly proud of my new tattoo and can wholeheartedly recommend them when it comes to amazing tattoos with a great story behind them.`,
      image: michaelReview,
      userImage: null,
    },
    {
      id: 3,
      name: "José Tomás Molina",
      rating: 5,
      quote: `I couldn’t be happier with their work. From the very first moment I contacted them, they gave me a lot of confidence and I felt very comfortable with them. Their level of dedication is incredible—they perfectly captured all the ideas I had for my tattoo, paying attention to even the smallest detail to offer the best possible result. These are the details that make the difference.
They made you feel at all times as if you were among friends, and despite being there all day, it was very enjoyable.`,
      image: joseReview,
      userImage: null,
    },
    {
      id: 4,
      name: "Andrea Martínez",
      rating: 5,
      quote: `I’m at a loss for words to describe how incredible they are. I went from Málaga to Seville to get tattooed by them for two consecutive days, and it was amazing. Super professional, approachable, and with an incredible vibe from the very first minute.  
I got my entire back tattooed, and doing it with them has been the best decision I’ve made. 
They are perfectionists to the max, taking care of every detail.
Thank you from the bottom of my heart for your talent and for treating me so kindly.`,
      image: andreaReview,
      userImage: null,
    },
    {
      id: 5,
      name: "Marta Rivas",
      rating: 5,
      quote: `I got a tattoo almost 20 days ago and I’m already looking for the moment to go back! What a team of professionals, friends, and artists. They are the exact definition of precision, perfection… harmony. Without a doubt, the experience and the way it’s lived—with their timing, its complexity, that on-the-spot communication that makes a design that was already spectacular become even better—doesn’t just make you want to come back, it makes you not want to leave.

I got a design on my back, I spent two days with them, and I was sad to leave! I felt so comfortable and at ease—they are the absolute best, no doubt.`,
      image: martaReview,
      userImage: null,
    },
    {
      id: 6,
      name: "Borja Ruiz",
      rating: 5,
      quote: `Everything went smoothly—an incredible approach to customer care and an amazing willingness to listen to your ideas and give them meaning in a design. I only had to explain my idea a little, and Eli was already designing it in his head and figuring out how everything could fit together.  
A unique piece you’ll never regret.  
An incredible experience before, during, and after the session. I will definitely work with them again.`,
      image: borjaReview,
      userImage: null,
    },
    {
      id: 7,
      name: "Elena Sánchez",
      rating: 5,
      quote: `I flew from Málaga to Barcelona and without a doubt what I experienced with Eli and Nanook made it completely worth it. It’s not just another tattoo, it’s not just another experience. It’s something unlike anything else. Eli perfectly captures your essence in a one-of-a-kind piece in the world, just like each of us, and Nanook gives you that necessary confidence to be fully present and not worry about anything else. This unique duo takes the tattoo world to another level. Thank you for everything, guys.`,
      image: elenaReview,
      userImage: null,
    },

    {
      id: 8,
      name: "Dani Pérez",
      rating: 5,
      quote: `I had spent 10 years wanting to get a tattoo. I saw the way they work and didn’t hesitate to take the leap.

Getting a tattoo with them isn’t just about putting ink on your body. It’s about living an experience in every sense.
Everything is handled with the utmost attention to detail, focusing on the human side so you feel as comfortable as possible, dedicating all the time needed to make the tattoo perfect.`,
      image: daniReview,
      userImage: null,
    },
    {
      id: 9,
      name: "Geraldine Ponte",
      rating: 5,
      quote: `I flew from Mallorca to get tattooed by them and, honestly, it was the best decision I could have made. You can tell the great professionalism they work with. They listen to you carefully and finds the best way to bring your idea to life. Technique, dedication, and talent make the whole process a unique experience. 
I spent almost 12 hours with them and, even though I met them that same day, you can immediately tell they are an incredible team.`,
      image: geraldineReview,
      userImage: null,
    },
    {
      id: 10,
      name: "Roberto Gallardo",
      rating: 5,
      quote: `I fulfilled my dreams.
I needed to find a way to make my project a reality: getting tattooed to tell a story, my story. They quickly identified my feelings, interpreted my vision with clarity, and guided me to a result that exceeded my expectations… suddenly, everything made sense.
Now I am one more member of this wonderful team. I take with me much more than what my skin bears from both of them: I take a part of them, and I know they will be there when I need them.
This duo is unbeatable.`,
      image: robertoReview,
      userImage: null,
    },
  ];

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3.2,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1280px)": {
        slides: { perView: 2.2, spacing: 20 },
      },
    },
  });

  return (
    <>
      {/* Mobile Version Rendering */}
      <MobileSixthSection archives={archives} />

      {/* Desktop Version Rendering */}
      <div className="hidden lg:block w-full">
        <section
          id="section-six"
          className="bg-[#0a0a0a] text-white w-full py-24 px-6 md:px-10 lg:px-16 overflow-hidden"
        >
          <div className="container mx-auto max-w-[1440px]">
            <h2 className="text-white text-[32px] font-semibold leading-[38px] mb-12 text-left font-[var(--font-founders)]">
              Body Archives
            </h2>

            <div ref={sliderRef} className="keen-slider !overflow-visible">
              {archives.map((item) => (
                <div
                  key={item.id}
                  className="keen-slider__slide group relative overflow-hidden rounded-[32px] w-full aspect-[1/1.4] cursor-pointer bg-[#18181A] border border-[#222]"
                >
                  {/* Default Image Background */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Bottom Bar (Initial State) */}
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-700 group-hover:opacity-0 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-[#222]">
                      {item.userImage ? (
                        <Image src={item.userImage} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white/40 text-xs font-bold uppercase">
                          {item.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <span className="text-white text-xl font-medium font-[var(--font-founders)]">
                      {item.name}
                    </span>
                  </div>

                  {/* Hover Reveal (Screenshot Design) */}
                  <div className="absolute inset-0 bg-[#121212] p-8 md:p-10 flex flex-col transform translate-y-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 z-10 border border-[#222]">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-[#222]">
                          {item.userImage ? (
                            <Image src={item.userImage} alt={item.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-white/40 text-sm font-bold uppercase">
                              {item.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="text-[#FFF] text-[20px] font-normal font-[var(--font-founders)] leading-[20px]">{item.name}</span>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFB800">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-[#FFE6D0] text-[16px] leading-[22px] font-normal font-[var(--font-founders)] whitespace-pre-line">
                        {item.quote}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SixthSection;
