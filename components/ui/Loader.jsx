export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#0F0D14]/95 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-8">
        {/* Enhanced animated container */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 rounded-3xl">
            <div className="animated-border w-full h-full rounded-3xl"></div>
          </div>

          {/* Inner pulsing background */}
          <div className="relative bg-[#0F0D14] rounded-3xl p-10 flex items-center justify-center border border-white/5">
            <div className="flex flex-col items-center gap-4">
              {/* Enhanced spinning loader */}
              <div className="relative">
                <div className="animate-spin rounded-full h-12 w-12 border-3 border-[#8f73e4]/30 border-t-[#e98225] border-r-[#1b63f0]"></div>
                <div className="absolute inset-2 animate-pulse rounded-full bg-gradient-to-r from-[#8f73e4]/20 to-[#e98225]/20"></div>
              </div>

              {/* Animated loading text */}
              <div className="flex items-center gap-1">
                <span className="text-white font-semibold text-xl tracking-wide">
                  Loading
                </span>
                <div className="flex gap-1">
                  <div
                    className="w-1 h-1 bg-[#e98225] rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-[#8f73e4] rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-[#1b63f0] rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating particles */}
          <div className="absolute -top-2 -left-2 w-2 h-2 bg-[#e98225] rounded-full animate-ping opacity-75"></div>
          <div
            className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-[#8f73e4] rounded-full animate-ping opacity-60"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 -right-3 w-1 h-1 bg-[#1b63f0] rounded-full animate-ping opacity-50"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Enhanced brand text with fade animation */}
        <div className="text-center animate-fade-in">
          <p className="text-[#53496d] text-sm font-medium tracking-wide">
            Building tomorrow's intelligence
          </p>
          <div className="mt-2 w-24 h-0.5 bg-gradient-to-r from-[#8f73e4] to-[#e98225] rounded-full mx-auto opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
