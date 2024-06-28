import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/main/NavbarComponent";
import FooterComponent from "@/components/main/FooterComponent";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Divya Shah - Portfolio",
  description: "This is my personal portfolio website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent />
        {children}
        <SpeedInsights />
        <FooterComponent />
      </body>
    </html>
  );
}
