import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const VideoSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[762px] w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full"
        >
          <source src="/images/home/video-bg.mp4" type="video/mp4" />
        </video>

      </div>

      {/* Content Overlay */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 flex flex-col items-center justify-center w-full px-6 text-center mix-blend-difference pointer-events-none"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#FFE6D0] text-[40px] md:text-[80px] lg:text-[116px] font-medium font-[var(--font-founders)] uppercase leading-[1.1] md:leading-[90px] lg:leading-[100px] tracking-[-2px] md:tracking-[-6px] lg:tracking-[-11.6px]"
        >
          Our work
          <br className="hidden md:block" /> is not about ornament.
          <br className="hidden md:block" /> It is about alignment.

        </motion.h2>

        <motion.div

          className="mt-8 md:mt-12"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 70 69" 
            fill="none"
            className="w-[35px] h-auto md:w-[60px] lg:w-[70px]"
          >
            <path d="M0 34.4063L5.61322 28.8996C6.59814 31.0145 8.3548 32.914 10.8192 33.0845H30.5007C31.3939 33.0206 31.8224 32.3618 31.8864 31.524C31.7564 28.9721 32.0612 26.2433 31.8885 23.7107C31.8416 23.0157 31.4217 21.9839 30.5838 21.9839H14.1705L20.1249 16.264C20.2762 18.0633 21.0394 20.3679 23.1543 20.5342C25.4993 20.7175 28.0831 20.3935 30.4538 20.5342C31.1914 20.4297 31.8182 19.9778 31.8864 19.1911C31.7478 16.6393 32.0633 13.9062 31.8864 11.3757C31.8267 10.525 31.3385 9.65951 30.5604 9.28643C29.5733 8.81316 26.7998 8.84727 25.6635 8.95599C25.5995 8.96239 25.5526 9.00076 25.5675 8.90269L34.5107 0L43.4539 8.90269C43.4689 9.00076 43.422 8.96239 43.358 8.95599C42.2452 8.85153 39.6784 8.82168 38.6743 9.20116C37.7384 9.55505 37.2289 10.4504 37.1351 11.4183C37.2694 13.9147 36.9624 16.5881 37.1351 19.0632C37.1969 19.9479 37.7554 20.4212 38.6082 20.5363C40.9724 20.402 43.5243 20.709 45.8672 20.5363C47.9799 20.3807 48.7751 18.0676 48.8966 16.2662L54.8936 21.986H38.4376C37.7938 21.986 37.1884 22.8515 37.1777 23.457V31.7393C37.2502 32.4663 37.7426 33.0056 38.4803 33.0866H58.247C60.398 32.9182 62.0481 31.4238 63.0544 29.6138C63.1631 29.4177 63.2484 29.1512 63.3549 28.9743C63.3784 28.9338 63.3912 28.889 63.4509 28.9018L69.0193 34.4361L63.4509 40.0003C63.3656 40.0174 63.3997 39.9811 63.3784 39.947C63.1887 39.6251 63.0522 39.2691 62.8497 38.9386C61.8648 37.3269 60.3384 36.0521 58.409 35.824C51.9388 35.8773 45.46 35.7323 38.9898 35.8218C38.896 35.8218 38.8086 35.7835 38.7361 35.7856C37.8748 35.809 37.2758 36.2951 37.1777 37.1649V45.4046C37.1756 46.0548 37.7853 46.9182 38.4781 46.9182H54.8914L48.8945 52.638C48.7793 50.8686 47.9906 48.532 45.9077 48.3679C43.5605 48.1846 40.9767 48.5107 38.6061 48.3679C37.7533 48.4638 37.1948 48.9648 37.1329 49.841C36.9603 52.3161 37.2672 54.9895 37.1329 57.4859C37.3013 58.9612 38.137 59.7308 39.5888 59.8949C40.8275 60.0356 42.1066 59.9909 43.3452 59.9376C43.4092 59.9354 43.4689 59.9077 43.4518 60.0015L34.5086 68.9042L25.5654 60.0015C25.5483 59.9098 25.6059 59.9354 25.672 59.9376C26.9788 59.993 28.5543 60.0655 29.8462 59.8416C31.0145 59.6391 31.8033 58.7053 31.8864 57.5285C32.0633 54.998 31.7478 52.265 31.8864 49.7131C31.8203 48.9478 31.2234 48.4766 30.4964 48.37C28.0981 48.5107 25.4844 48.1824 23.1116 48.37C21.048 48.532 20.257 50.8899 20.1249 52.6402L14.1705 46.9203H30.5412C31.3534 46.9203 31.8949 45.9162 31.8885 45.1935C31.7436 42.6481 32.0761 39.9022 31.8864 37.3802C31.816 36.4486 31.3065 35.8154 30.328 35.7877C30.2555 35.7877 30.1681 35.8261 30.0743 35.824C23.6446 35.7302 17.2063 35.8901 10.7766 35.8197C8.33348 36.0073 6.58109 37.9004 5.61322 40.0046L0 34.4915V34.4063Z" fill="#FFE6D0" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Transition Gradients */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </section>
  );
};

export default VideoSection;
