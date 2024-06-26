import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farah (Beta)",
  description:
    "Farah is a virtual assistant that helps you find halal food and travel destinations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "overscroll-none bg-custom-white")}>
        {children}
      </body>
    </html>
  );
}
