import Image from "next/image";
import artistImage from "../../public/images/home/photo_fractal-dua.webp";

const FourthSection = () => {
  return (
    <section
      id="artist-team"
      className="w-full h-auto bg-[#ABA59F] flex justify-center items-center  md:pt-[98px] "
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-16 h-full pb-10 md:pb-20 pb-safe grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4 pt-20">
          <h1 className=" text-black text-4xl  font-(--font-founders-grotesk) uppercase leading-0 text-end font-medium">
            Eliezer Costa
          </h1>
          <h1 className="text-black text-4xl  font-(--font-founders-grotesk) uppercase leading-[52px] text-end font-light">
            MANAGER &amp; DESIGNER
          </h1>
          <div className="w-[485px]  md:mt-1.5">
            <p className="text-black text-xl font-normal font-(--font-founders-grotesk) leading-7">
              With a background in graphic design and photography, Eliezer leads
              the creative direction of the project. He shapes the visual
              language, refines the narrative structure, and guides the
              conceptual development behind each piece.
              <br />
              <br />
              His focus lies in communication — understanding people, listening
              carefully, and translating inner processes into coherent symbolic
              compositions. He oversees the brand, the dialogue, and the
              strategic framework that sustains the project.
            </p>
          </div>

          <div>
            <p className="w-[110px] mt-[74.84px] h-4 justify-start text-black text-xl font-normal font-(--font-founders-grotesk) leading-6 underline">
              @ELICOSTART
            </p>
          </div>
        </div>
        <div className="col-span-12 md:col-span-4">
          <Image
            src={artistImage}
            alt="Artist"
            width={400}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="col-span-12 md:col-span-4 self-end pb-10 md:pb-20">
          <h1 className="text-black text-4xl font-(--font-founders-grotesk) uppercase leading-0 text-start font-medium">
            NANOOK
          </h1>
          <h1 className="text-black text-4xl font-(--font-founders-grotesk) uppercase leading-[52px] text-start font-light">
            TATTOO ARTIST
          </h1>
          <div className="md:mt-1.5 text-end">
            <p className="text-black text-xl font-normal font-(--font-founders-grotesk) leading-7">
              With more than a decade of experience, Nanook explored multiple
              styles before refining his own language within the craft. His
              journey through design, drawing, music, and sculpture informs his
              technical sensitivity and artistic precision.
              <br />
              <br />
              He is responsible for refining and perfecting the execution of
              each piece — ensuring that concept and craftsmanship remain
              inseparable.
            </p>
          </div>

          <div className="flex justify-end">
            <p className="mt-[74.84px] text-black text-xl font-normal font-(--font-founders-grotesk) leading-6 underline">
              @NANOOK.TTT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
