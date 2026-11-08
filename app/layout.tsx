import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Yatra_One } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const yatra = Yatra_One({
  variable: "--font-yatra",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhumika Israni | Developer Portfolio | NST 2030",
  description:
    "Personal developer portfolio of Bhumika Israni — Student at Newton School of Technology (NST 2030). Exploring web development, Python, and modern software building.",
  keywords: [
    "Bhumika Israni",
    "Portfolio",
    "Newton School of Technology",
    "NST 2030",
    "Web Developer",
    "Frontend",
  ],
  authors: [{ name: "Bhumika Israni" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7EBDD",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${yatra.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[var(--parchment)] text-[var(--text-main)] selection:bg-[#702B32]/20 selection:text-[#4B2027]">
        {children}
      </body>
    </html>
  );
}
