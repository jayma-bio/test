import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/grid-pattern";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, "font-sans")}>
        <GridPattern width={60} height={60} className="-z-10 opacity-75" />
        {children}
      </body>
    </html>
  );
}
