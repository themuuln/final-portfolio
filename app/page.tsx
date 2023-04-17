"use client";
const HeroSection = require("@/components/hero/HeroSection").default;
const MainSection = require("@/components/main/MainSection").default;
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeroSection />
          <MainSection />
        </>
      )}
    </div>
  );
}
