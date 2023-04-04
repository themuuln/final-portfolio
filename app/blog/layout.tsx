"use client";

import FooterSection from "@/components/footer/FooterSection";
import "../globals.css";
import BlogHeader from "@/components/blog/BlogHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
