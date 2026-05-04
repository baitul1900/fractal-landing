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
  title: "FRACTAL™ | Contemporary Tattoo Studio | Seville, Spain",
  description: "Discover FRACTAL™, Seville's premier contemporary tattoo studio. Expert tattoo artists specializing in modern, minimalist, and geometric tattoo designs. Book your appointment today.",
  keywords: [
    "tattoo studio Seville",
    "contemporary tattoos Spain",
    "geometric tattoos",
    "minimalist tattoos",
    "tattoo artist Seville",
    "FRACTAL tattoo",
    "tattoo booking Seville",
    "modern tattoo designs",
    "professional tattoo studio",
    "tattoo consultation Seville"
  ],
  authors: [{ name: "FRACTAL™ Tattoo Studio" }],
  creator: "FRACTAL™",
  publisher: "FRACTAL™ Tattoo Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fractal-tattoo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "FRACTAL™ | Contemporary Tattoo Studio | Seville, Spain",
    description: "Seville's premier contemporary tattoo studio. Expert artists creating modern, minimalist, and geometric tattoo designs. Book your consultation today.",
    url: "https://fractal-tattoo.com",
    siteName: "FRACTAL™ Tattoo Studio",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "FRACTAL™ Contemporary Tattoo Studio - Seville, Spain",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FRACTAL™ | Contemporary Tattoo Studio | Seville, Spain",
    description: "Seville's premier contemporary tattoo studio. Expert artists creating modern, minimalist, and geometric tattoo designs.",
    images: ["/images/twitter-image.webp"],
    creator: "@fractaltattoo",
    site: "@fractaltattoo",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },
  category: 'tattoo studio',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

import SmoothScroll from "@/components/ui/SmoothScroll";
import PageLoader from "@/components/ui/PageLoader";
import { Metadata } from 'next';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#FFE6D0" />
        <meta name="msapplication-TileColor" content="#FFE6D0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="FRACTAL™" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              "name": "FRACTAL™",
              "description": "Contemporary tattoo studio in Seville, Spain specializing in modern, minimalist, and geometric tattoo designs",
              "url": "https://fractal-tattoo.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Seville",
                "addressRegion": "Andalusia",
                "addressCountry": "Spain"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "37.3891",
                "longitude": "-5.9845"
              },
              "telephone": "+34-XXX-XXX-XXX",
              "priceRange": "$$",
              "openingHours": "Mo-Sa 10:00-20:00",
              "sameAs": [
                "https://www.instagram.com/fractaltattoo",
                "https://www.facebook.com/fractaltattoo"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${foundersGrotesk.variable} antialiased font-[var(--font-founders)]`}
        suppressHydrationWarning
      >
        <PageLoader />
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
