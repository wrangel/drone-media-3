import "./globals.css";
import type { Metadata } from "next";
import { Rubik_Pixels } from "@next/font/google";

const rubik_pixels = Rubik_Pixels({
  //https://marville001.hashnode.dev/font-optimization-in-nextjs-13
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik_pixels",
});

export const metadata: Metadata = {
  title: "Drone Imaginery",
  description: "Created my Matthias Wettstein",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rubik_pixels.variable} h-full`}>
      <body>{children}</body>
    </html>
  );
}
