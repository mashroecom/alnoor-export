import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
