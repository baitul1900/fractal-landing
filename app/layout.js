import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import { LanguageProvider } from "@/context/LanguageContext";

const foundersGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/founders-grotesk/TestFoundersGrotesk-Regular-BF66175e972ac1c.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/founders-grotesk/TestFoundersGrotesk-Medium-BF66175e9723b7a.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/founders-grotesk/TestFoundersGrotesk-Semibold-BF66175e972c958.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/founders-grotesk/TestFoundersGrotesk-Bold-BF66175e9700615.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-founders",
});


export const metadata = {
  title: "FRACTAL™ | Contemporary Tattoo Concept",
  description: "Fractal is a contemporary tattoo practice based in Seville, Spain.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

import SmoothScroll from "@/components/ui/SmoothScroll";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${foundersGrotesk.variable} antialiased font-[var(--font-founders)]`}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <SmoothScroll>
            <Navbar />
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
