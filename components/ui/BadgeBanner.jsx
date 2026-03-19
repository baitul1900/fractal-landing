import clsx from "clsx";

const BadgeBanner = ({
  text,
  className = "border-[#867D9E] text-[#0f0d14]",
}) => (
  <div
    className={clsx(
      "inline-flex items-center text-base md:text-xl gap-2 md:px-6 md:py-3 px-3 py-2 bg-transparent rounded-3xl border-2 ",
      className
    )}
  >
    {text}
  </div>
);

export default BadgeBanner;
