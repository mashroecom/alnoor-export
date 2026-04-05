import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, Cairo } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al Noor Export & Food Industries | Frozen Fruits & Vegetables from Egypt",
  description:
    "Al Noor Export & Food Industries - Leading Egyptian company in the production and export of frozen fruits, vegetables, and preserved products. Premium quality from Egypt to the world.",
  keywords:
    "frozen fruits, frozen vegetables, Egypt export, food industries, artichokes, strawberries, mango, broccoli, okra, Egyptian food",
  openGraph: {
    title: "Al Noor Export & Food Industries",
    description: "Premium Frozen Fruits & Vegetables from Egypt",
    url: "https://alnoor-export.com",
    siteName: "Al Noor Export",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${playfair.variable} ${cairo.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
