import type { Metadata } from "next";
import { preload } from "react-dom";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Autopilot for Morpho Users - Supply Once, Done.",
  description: "Autopilot allocates to the best-performing Morpho vaults automatically - 24/7.",
  icons: "/icon.svg",
    twitter: {
      card: "summary_large_image",
      site: "Autopilot allocates to the best-performing Morpho vaults automatically - 24/7.",
      images: "https://autopilot-landing-temp.vercel.app/social-card.jpg"
    },
    openGraph: {
      images: {
        url: "https://autopilot-landing-temp.vercel.app/social-card.jpg",
        width: 1607,
        height: 904,
      }
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  preload("/bg-gradient.png", { as: "image", fetchPriority: "high" });
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
