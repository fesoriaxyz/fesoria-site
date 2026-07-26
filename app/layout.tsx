import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "FESORIA — One universe. Infinite worlds.",
  description:
    "Follow The First Signal and The Archive as four connected worlds emerge inside the FESORIA cinematic universe.",
  metadataBase: new URL("https://fesoria.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FESORIA",
    description: "One universe. Infinite worlds.",
    images: ["/worlds/floating-city-ep01.webp"],
    url: "https://fesoria.xyz",
    siteName: "FESORIA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FESORIA",
    description: "One universe. Infinite worlds.",
    images: ["/worlds/floating-city-ep01.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>{children}</body>
    </html>
  );
}
