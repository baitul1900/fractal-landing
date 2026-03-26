import Image from "next/image";
import artistImage from "../../public/images/home/Artist.png";

const FourthSection = () => {
  return (
    <section id="artist-team" className="w-full h-auto bg-black flex justify-center items-center">
      <Image 
        src={artistImage}
        alt="Team Members"
        className="w-full h-auto block"
        priority
      />
    </section>
  );
};

export default FourthSection;
