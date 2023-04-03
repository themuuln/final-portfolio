"use client";
import FooterSection from "@/components/footer/FooterSection";
import "../globals.css";
import HeaderSection from "@/components/header/HeaderSection";

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
        <FooterSection />
      </body>
    </html>
  );
}
