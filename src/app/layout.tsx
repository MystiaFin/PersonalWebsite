import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap' });

export const metadata: Metadata = {
  title: "MystiaFin",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smootha">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
