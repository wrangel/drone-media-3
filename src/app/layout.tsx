import "./globals.css";
import type { Metadata } from "next";
import { Rubik_Pixels } from "@next/font/google";

const rubikPixels = Rubik_Pixels({
  weight: "400", // only for rubik et al. https://marville001.hashnode.dev/font-optimization-in-nextjs-13
  subsets: ["latin"],
  variable: "--font-rubrik",
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
    <html lang="en" className={rubikPixels.className}>
      <body>{children}</body>
    </html>
  );
}
