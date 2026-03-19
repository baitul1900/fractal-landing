import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
// import Footer from "@/components/layouts/Footer";
import Footer from "@/components/layouts/Footer";
import { ToastProvider } from "@/components/ui/toast";
import SmoothScroll from "@/components/ui/SmoothScroll";

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
  title: "IdeatedLab - Your Trusted IT Solutions Partner",
  description: "Empowering Businesses with Innovative IT Services and Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${foundersGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
        <SmoothScroll />
        <ToastProvider>
          <Navbar />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
