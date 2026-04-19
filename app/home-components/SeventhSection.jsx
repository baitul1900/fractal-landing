import React, { useState, useEffect } from 'react';

const SeventhSection = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const phrases = ["permanent together.", "amazing today.", "meaningful here."];

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      // Typing speed variation
      let speed = isDeleting ? 40 : 100;

      // Pause when word is complete or fully deleted
      if (!isDeleting && text === fullText) {
        speed = 2500; // Pause at the end before deleting
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        speed = 500; // Pause before typing next word
      }

      setTypingSpeed(speed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <section id="section-seven" className="bg-[#050505] text-white w-full pt-[100px] pb-20 md:pb-6 lg:pb-6 px-6 md:px-10 lg:px-16" style={{ background: '#0a0a0a' }}>
      <div className="container mx-auto max-w-[1440px] flex flex-col justify-center">
        <h2
          className="text-white text-[72px] font-medium leading-[72px] tracking-[-2.276px] mb-2 font-[var(--font-founders)]"
        >
          Lets Create
        </h2>
        <h3
          className="text-[#828282] text-[72px] font-medium leading-[72px] tracking-[-2.276px] min-h-[80px] font-[var(--font-founders)]"
        >
          something {text}
          <span className="w-[4px] md:w-[6px] h-[64px] bg-[#828282] inline-block ml-2 animate-pulse align-middle opacity-80" style={{ transform: 'translateY(-4px)' }}></span>
        </h3>
      </div>
    </section>
  );
};

export default SeventhSection;
