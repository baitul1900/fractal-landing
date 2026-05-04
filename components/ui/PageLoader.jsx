"use client";

import { useEffect, useState } from "react";

const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationCycles = 0;
    const totalCycles = 2; // Number of complete drawing cycles before allowing exit

    // Simulate progress while page loads (much faster)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 25;
      });
    }, 300);

    const handleLoad = () => {
      // Wait for at least one full drawing cycle (3s) before showing 100%
      setTimeout(() => {
        setProgress(100);
        // Wait 0.5 seconds after reaching 100% before fade out
        setTimeout(() => {
          setIsVisible(false);
        }, 400);
      }, 3000);
    };

    if (document.readyState === "complete") {
      // Page already loaded, but show animation cycles
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setIsVisible(false);
        }, 400);
      }, 3000);
    } else {
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearInterval(progressInterval);
      };
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      {/* Tattoo Drawing Animation Container */}
      <div className="flex flex-col items-center gap-8 md:gap-12">
        {/* Main Tattoo Drawing SVG */}
        <div className="relative w-32 h-40 md:w-48 md:h-56">
          <svg
            viewBox="0 0 200 250"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="drawGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#FFE6D0" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FFE6D0" stopOpacity="1" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Main geometric tattoo design - Abstract mandala-like pattern */}
            {/* Outer circle */}
            <circle
              cx="100"
              cy="80"
              r="50"
              fill="none"
              stroke="#FFE6D0"
              strokeWidth="2"
              style={{
                strokeDasharray: "314",
                strokeDashoffset: 314,
                animation: "draw 3s ease-in-out infinite",
                filter: "url(#glow)",
              }}
            />

            {/* Inner circle */}
            <circle
              cx="100"
              cy="80"
              r="35"
              fill="none"
              stroke="#FFE6D0"
              strokeWidth="1.5"
              style={{
                strokeDasharray: "220",
                strokeDashoffset: 220,
                animation: "draw 3s ease-in-out infinite 0.3s",
                filter: "url(#glow)",
              }}
            />

            {/* Decorative lines */}
            <line
              x1="100"
              y1="40"
              x2="100"
              y2="15"
              stroke="#FFE6D0"
              strokeWidth="2"
              style={{
                animation: "draw 2s ease-in-out infinite 0.6s",
              }}
            />

            <line
              x1="100"
              y1="145"
              x2="100"
              y2="170"
              stroke="#FFE6D0"
              strokeWidth="2"
              style={{
                animation: "draw 2s ease-in-out infinite 0.6s",
              }}
            />

            {/* Geometric petals */}
            <path
              d="M 100 45 Q 115 60 120 80 Q 115 95 100 110"
              fill="none"
              stroke="#FFE6D0"
              strokeWidth="1.5"
              style={{
                animation: "draw 2s ease-in-out infinite 1s",
              }}
            />

            <path
              d="M 100 45 Q 85 60 80 80 Q 85 95 100 110"
              fill="none"
              stroke="#FFE6D0"
              strokeWidth="1.5"
              style={{
                animation: "draw 2s ease-in-out infinite 1s",
              }}
            />

            {/* Cross design */}
            <g style={{ animation: "fadeIn 1.5s ease-in infinite 1.3s" }}>
              <line
                x1="70"
                y1="80"
                x2="130"
                y2="80"
                stroke="#FFE6D0"
                strokeWidth="1"
                opacity="0.6"
              />
              <line
                x1="100"
                y1="50"
                x2="100"
                y2="110"
                stroke="#FFE6D0"
                strokeWidth="1"
                opacity="0.6"
              />
            </g>

            {/* Bottom ornament */}
            <path
              d="M 80 150 Q 100 160 120 150"
              fill="none"
              stroke="#FFE6D0"
              strokeWidth="1.5"
              style={{
                animation: "draw 2s ease-in-out infinite 1.6s",
              }}
            />

            {/* Dots accent */}
            <circle
              cx="70"
              cy="80"
              r="2"
              fill="#FFE6D0"
              style={{
                animation: "fadeIn 1s ease-in infinite 2s",
              }}
            />
            <circle
              cx="130"
              cy="80"
              r="2"
              fill="#FFE6D0"
              style={{
                animation: "fadeIn 1s ease-in infinite 2s",
              }}
            />
          </svg>

          {/* Glow effect background */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,230,208,0.1) 0%, transparent 70%)",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
        </div>

        {/* Branding */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-[#FFE6D0] text-2xl md:text-3xl font-medium font-[var(--font-founders)] uppercase tracking-[0.2em]">
            FRACTAL
          </h1>
          <p className="text-[#828282] text-xs md:text-sm font-[var(--font-founders)] uppercase tracking-wider">
            Crafting Your Unique Mark
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 md:w-64">
          <div className="h-1 bg-[#2a2a2a] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#FFE6D0] to-[#C99D85] rounded-full transition-all duration-500"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-center text-[#828282] text-xs mt-2 font-[var(--font-founders)]">
            {Math.round(Math.min(progress, 100))}%
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes draw {
          0%, 100% {
            stroke-dashoffset: 314;
          }
          50% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeIn {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
