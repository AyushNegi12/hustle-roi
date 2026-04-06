import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lexend = Lexend({ subsets: ["latin"], variable: "--font-lexend", weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "HustleROI — Free Side Hustle ROI Calculator 2026",
  description: "Free side hustle ROI calculator. Input your budget and hours, get your exact break-even month, 12-month profit projection, and the complete tool stack. No signup required.",
  keywords: "side hustle calculator, ROI calculator, passive income 2026, make money online, AI side hustle, break even calculator, side hustle tools, faceless youtube, rental arbitrage, AI art agency",
  authors: [{ name: "HustleROI" }],
  creator: "HustleROI",
  metadataBase: new URL("https://thehustleroicalc.co.in"),
  openGraph: {
    title: "HustleROI — Free Side Hustle ROI Calculator",
    description: "Stop guessing. Calculate your exact ROI for any 2026 side hustle in 60 seconds. 100% free.",
    type: "website",
    locale: "en_IN",
    siteName: "HustleROI",
  },
  twitter: {
    card: "summary_large_image",
    title: "HustleROI — Free Side Hustle ROI Calculator",
    description: "Stop guessing. Calculate your exact ROI for any 2026 side hustle in 60 seconds.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable} dark`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6801121731243262"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen" style={{ background: "#0b1326", color: "#dae2fd" }}>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 lg:ml-64 min-h-screen">
            {children}
            <Footer />
          </main>
        </div>
        <MobileNav />
      </body>
    </html>
  );
}
