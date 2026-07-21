import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "FESORIA — Every world has a festival",
  description:
    "AI-generated festival universes. Enter FESORIA and explore worlds that never existed.",
  metadataBase: new URL("https://fesoria.xyz"),
  openGraph: {
    title: "FESORIA",
    description: "Every world has a festival.",
    url: "https://fesoria.xyz",
    siteName: "FESORIA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FESORIA",
    description: "Every world has a festival.",
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
