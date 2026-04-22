import React from "react";
import Image from "next/image";
import tattooImg from "../../public/images/home/random-tatto-images.webp";
import MobileSixthSection from "./MobileSixthSection";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// Review Images
import attila from "../../public/images/review-images/attila.webp";
import pedro from "../../public/images/review-images/pedro.webp";
import rania from "../../public/images/review-images/rania.webp";
import gomezReview from "../../public/images/review-images/gomez-review.webp";
import pedroReview from "../../public/images/review-images/pedro-review.webp";
import rainaReview from "../../public/images/review-images/raina-review.webp";
import zicReview from "../../public/images/review-images/zic-review.webp";

const SixthSection = () => {
  const archives = [
    {
      id: 1,
      name: "Attila Guthi",
      rating: 5,
      quote: "Eli's design was perfect for me, only had to ask for 1 modification. He really listened to what I want and took it into consideration that I want the whole sleeve done when making the design. Nanook's precision, linework and shading is world class. He really takes the time to perfectly do his job. I am glad I chose them.",
      service: "Fine line tattoos, Tattoo design, Male tattoos, Tattoos.",
      image: tattooImg,
      userImage: attila,
    },
    {
      id: 2,
      name: "Rania SB",
      rating: 5,
      quote: "No puedo estar más agradecida con el resultado. Han convertido mi espalda en una auténtica obra de arte. El nivel de detalle, la precisión y la delicadeza del trabajo son increíbles. Además, el trato tanto Nanook como Eli fue impecable ,son profesionales, cercanos y atentos en todo momento, haciéndome sentir cómoda durante toda la sesión. Sin duda una experiencia excelente y totalmente recomendable que seguramente volveré a repetir.",
      service: "Fine line tattoos, Tattoo design, Male tattoos, Tattoos.",
      image: rainaReview,
      userImage: rania,
    },
    {
      id: 3,
      name: "JORGE GOMEZ ALONSO",
      rating: 5,
      quote: "Me tatué hace dos semanas con ellos y solo puedo decir que todo increíble y perfecto. Trato, profesionalidad, detalle, implicación, elegancia y un largo etcétera de cosas positivas que me he llevado en esos 3 días maravillosos. Era la primera vez que me tatuaba y sin duda la segunda será con ellos también. Me llevo dos amigos en estos 3 días increíble experiencia e increíble pieza que tengo en mi brazo para siempre.",
      service: "Fine line tattoos",
      image: gomezReview,
      userImage: null,
    },
    {
      id: 4,
      name: "Sergio alarcon selma",
      rating: 5,
      quote: "Desde hace unos años,tenía la necesidad de rendir omenaje en mi piel a una persona muy especial . Me puse en contacto con Eli le expliqué que quería expresar en mi tatuaje, La historia que debía de reflejar en él. El pone su pasión y hace un diseño dándole forma a todo lo que yo le expresé. Llega el momento de Nanook, El pone su Alma, busca una conexión , creando un vínculo a la hora de plasmar ese diseño. Gracias 🫂",
      service: "Tattoo cover-ups & reworkings, Fine line tattoos, Tattoo design",
      image: tattooImg,
      userImage: null,
    },
    {
      id: 5,
      name: "Jose López",
      rating: 5,
      quote: "Contacte con Eli y Nanook por qué buscaba diseños de la temática que ellos hacían, y descubrí que hacerse un tatuaje tiene mucho más de lo que parece. Eli supo transmitir las vivencias de tu vida en un diseño y que se amoldará a la persona, y Nanook supo cobrarle vida en la piel de una forma tan singular.No puedo estar más contento del resultado del tatuaje, y solo puedo estar agradecido por su trabajo. Recomiendo 100% a esta pareja. Volveré sin dudarlo.",
      service: "Fine line tattoos, Tattoo design",
      image: tattooImg,
      userImage: null,
    },
    {
      id: 6,
      name: "Yolanda",
      rating: 5,
      quote: "From the first moment I spoke with Eli, she instilled in me the confidence I needed to entrust her with my project. That connection was key in encouraging me to take the plunge and get this tattoo. As for Nanook, little needs to be said: the result is of exceptional quality. Her professionalism, dedication, and precision are evident in every stroke. Thank you for this experience; I hope to work with you again soon!",
      service: "Fine line tattoos, Tattoo design, Female tattoos, Tattoos",
      image: tattooImg,
      userImage: null,
    },
    {
      id: 7,
      name: "Elena Sánchez Medina",
      rating: 5,
      quote: "Volé desde Málaga hasta Barcelona y sin duda lo que viví con Eli y Nanook hizo que mereciera la pena sin duda. No es un tatuaje más, no es una experiencia más, es algo que no se le parece a nada. Eli capta a la perfección tu esencia en una pieza única en el mundo, como somos cada persona, y Nanook te da esa confianza necesaria para estar en presencia y que no importe nada más. Este dúo único eleva el mundo del tattoo a otro nivel. Gracias por todo chicos🙏❤️✨",
      service: "Fine line tattoos, Tattoo design, Female tattoos, Tattoos",
      image: tattooImg,
      userImage: null,
    },
    {
      id: 8,
      name: "Pedro Acedo",
      rating: 5,
      quote: "para mí , no es solo un tatuaje sino una forma de ver la vida , y gracias a Eli y a Nanook la vida se ve mucho mas colorida , esa confianza que transmiten , la formalidad y el trato. Para mi eso es fundamental , pero la facilidad q tienen para hacerlo todo facil y cómodo no tiene explicación ninguna... Muchas gracias a los dos por lo bien q haceis el trabajo",
      service: "Fine line tattoos, Tattoo design, Female tattoos, Tattoos",
      image: pedroReview,
      userImage: pedro,
    },
    {
      id: 9,
      name: "Vic Zaba",
      rating: 5,
      quote: "Increíble trabajo, de verdad. La precisión en los detalles, el juego de sombras y la combinación de elements hacen que este tatuaje sea una obra de arte. Se nota la dedicación y el talento en cada línea. Más que un tatuaje, es un diseño con alma, con una composición que transmite profundidad y equilibrio. Gracias a Eliezer y a Nanook por hacer algo tan especial y único. ¡Totalmente recomendado!",
      service: "Tattoos, Tattoo design",
      image: zicReview,
      userImage: null,
    },
    {
      id: 10,
      name: "Alberto Campos",
      rating: 5,
      quote: "Mi experiencia desde el primer momento fue inmejorable, aún estando en otra ciudad tuve mucha facilidad para comunicarme. Desde es primer momento pude explicarme con total libertad y mi idea fue entendida a la perfección. Me sentí muy agusto en el estudio, tanto por la atención recibida como por la profesionalidad y la atención a los detalles. El resultado, increíble, superó mis expectativas. Sin lugar a dudas volvería a repetir la experiencia",
      service: "Tattoos, Tattoo design",
      image: tattooImg,
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
                  <div className="absolute inset-0 bg-[#121212] p-8 md:p-10 flex flex-col justify-between transform translate-y-full transition-transform duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 z-10 border border-[#222]">
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
                      <p className="text-[#FFE6D0] text-[16px] leading-[20px] font-normal font-[var(--font-founders)] line-clamp-10">
                        {item.quote}
                      </p>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                      <h4 className="text-white text-[20px] font-medium mb-3 font-[var(--font-founders)]">Service</h4>
                      <p className="text-[#FFF] text-[16px] leading-[20px] font-normal font-[var(--font-founders)]">{item.service}</p>
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
